<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Perfiles extends IS_Controller {

	public function __construct() {
		parent::__construct();
		$this->template = 'administracion/perfiles/';
		$this->js_dir   = 'js/administracion/perfiles';

		//Modelos
		$this->load->model('perfiles_model', 'db_perfiles');
		$this->load->model('menu_model', 'db_menu');
	}

	public function index() {
		//Labels de la vista
		$data_view['titulo']    = lang('perfiles_titulo'); 
		$data_view['subtitulo'] = lang('perfiles_lista');

		//Datos de la vista
		$perfiles  = $this->db_perfiles->get_perfiles();
		
		$data_view['tabla'] = $this->build_table_perfiles($perfiles);
		$data_view['label'] = lang('perfiles_create');
		$data_view['link']  = 'nuevo-perfil';

		$includes['js'][] = array('name' => 'perfiles', 'dirname' => $this->js_dir);
		$this->load_view('tpl/tpl-listado-tabla', $data_view, $includes);
	}

	private function build_table_perfiles($perfiles = array()) {
		$table = lang('general_no_records');
		if(is_array($perfiles) && count($perfiles)) {
			$titulos  = array(
				'ID',
				lang('perfiles_perfil'),
				lang('perfiles_clave_corta'),
				lang('perfiles_descripcion'),
				lang('general_fecha_creacion'),
				lang('general_acciones')
			);
			$registros = array();
			foreach ($perfiles as $p) {
				$acciones    = $this->build_acciones_perfil($p);
				$registros[] = array(
					$p['id_perfil'],
					$p['perfil'],
					$p['clave_corta'],
					$p['descripcion'],
					date("d-m-Y H:i", strtotime($p['timestamp'])),
					$acciones
				);
			}
			$arr_tabla = array(
				'titulos'   => $titulos,
				'registros' => $registros,
				'id'        => 'table-perfiles'
			);
			$table = data_table($arr_tabla);
		}
		return $table;
	}

	private function build_acciones_perfil($perfil = array()) {
		$acciones = '<div class="btn-group">';

		$acciones .= '<button class="btn-flat btn-small waves-effect" onclick="editPerfil('.$perfil['id_perfil'].')">
				<i class="material-icons">create</i>
			</button>';

		$acciones .= '<button class="btn-flat btn-small waves-effect delete-perfil" data-id_perfil="'.$perfil['id_perfil'].'">
				<i class="material-icons">delete</i>
			</button>';

		$acciones .= '</div>';

		return $acciones;
	}

	public function edit_perfil_view() {
		$id_perfil = $this->input->post('id');
		$perfil    = $this->db_perfiles->get_perfiles($id_perfil);
		$perfil    = $perfil[0];

		//Labels de la vista
		$data_view['titulo']            = lang('perfiles_titulo'); 
		$data_view['subtitulo']         = lang('perfiles_edit');
		$data_view['lbl_required']      = lang('general_required');
		$data_view['lbl_perfil']        = lang('perfiles_perfil');
		$data_view['lbl_clave_corta']   = lang('perfiles_clave_corta');
		$data_view['lbl_descripcion']   = lang('perfiles_descripcion');
		$data_view['lbl_save']          = lang('general_save');
		$data_view['lbl_volver']        = lang('general_return');

		//Datos de la vista
		$data_view['id_perfil']   = $perfil['id_perfil'];
		$data_view['perfil']      = $perfil['perfil'];
		$data_view['clave_corta'] = $perfil['clave_corta'];
		$data_view['descripcion'] = $perfil['descripcion'];
		$data_view['menu_list']   = $this->build_list_menu($perfil['id_menu']);
		$includes['js'][] = array('name' => 'edit_perfil', 'dirname' => $this->js_dir);
		$this->load_view($this->template.'edit_perfil_view', $data_view, $includes);
	}

	public function edit_perfil() {
		$objData  = $this->input->post('objData');
		$sql_data = array(
			'perfil'          => $objData['perfil'],
			'clave_corta'     => $objData['clave_corta'],
			'descripcion'     => $objData['descripcion'],
			'edit_id_usuario' => $this->session->userdata('id_usuario'),
			'id_menu'         => implode(',', $objData['ids_menu'])
		);
		$updated = $this->db_perfiles->update_perfil($sql_data, $objData['id_perfil']);
		if($updated) {
			$resp = array(
				'success' => true
				);
		} else {
			$resp = array(
				'success' => false
				);
		}
		echo json_encode($resp);
	}

	public function create_perfil_view() {
		//Labels de la vista
		$data_view['titulo']            = lang('perfiles_titulo'); 
		$data_view['subtitulo']         = lang('perfiles_create');
		$data_view['lbl_required']      = lang('general_required');
		$data_view['lbl_perfil']        = lang('perfiles_perfil');
		$data_view['lbl_clave_corta']   = lang('perfiles_clave_corta');
		$data_view['lbl_descripcion']   = lang('perfiles_descripcion');
		$data_view['lbl_save']          = lang('general_save');
		$data_view['lbl_volver']        = lang('general_return');

		//Datos de la vista
		$data_view['menu_list'] = $this->build_list_menu();

		$includes['js'][] = array('name' => 'create_perfil', 'dirname' => $this->js_dir);
		$this->load_view($this->template.'create_perfil_view', $data_view, $includes);
	}

	/**
	 * Construye una lista con los menus disponibles
	 * @return [type] [description]
	 */
	public function build_list_menu($ids_menu = false) {
		$ids_menu  = explode(',', $ids_menu);
		$data_menu = $this->db_menu->get_menu();
		$html      = $this->draw_list_menu($data_menu, 0, $ids_menu);
		// debug($html);
		return $html;
	}

	/**
	 * Construye el html de los menus disponibles
	 * @param  array   $array    [description]
	 * @param  integer $parent   [description]
	 * @param  [type]  $ids_menu [description]
	 * @return [type]            [description]
	 */
	public function draw_list_menu($array = array(), $parent = 0, $ids_menu = array()) {
		$lang = $this->lang->language;
		$menu = '';
		$submenuIN = '';
		$submenuOUT = '';
		$checked = '';
		$disabled = '';
		$menus_default = array();

		foreach ($array as $element) {
			if($element['texto'] == 'menu_inicio') {
				$menus_default[] = $element['id_menu'];
			}
		}
		foreach ($array as $element) {
			if($element['id_padre'] == $parent) {
				$txt = array_key_exists($element['texto'], $lang)? $lang[$element['texto']] : $element['texto'];
				switch (strtoupper($element['tipo'])) {
					case 'SIMPLE':
						$submenuIN  = ''; 
						$submenuOUT = '';
						break;
					case 'PADRE':
						$submenuIN  .= '<ul class="collection">';
						$submenuOUT .= '</ul>';
						break;

					case 'HIJO':
						$submenuIN  = ''; 
						$submenuOUT = '';
						break;
				}
				if(in_array($element['id_menu'], $menus_default)) {
					$checked  = 'checked="checked"';
					$disabled = 'disabled="disabled"';
				}
				if(in_array($element['id_menu'], $ids_menu)) {
					$checked  = 'checked="checked"';
				}

				$menu .= '<li class="collection-item">';
				$menu .= '<input type="checkbox" class="filled-in" name="ids_menu" value="'.$element['id_menu'].'" id="'.$element['id_menu'].'" '.$checked.' '.$disabled.'>';
				$menu .= '<label for="'.$element['id_menu'].'">'.$txt.'</label>';
				$menu .= $submenuIN;
				$menu .= $this->draw_list_menu($array, $element['id_menu'], $ids_menu);
				$menu .= $submenuOUT;
				$menu .= '</li>';

				$submenuIN  = ''; 
				$submenuOUT = '';
				$checked  = '';
				$disabled = '';
			}
		}
		return $menu;
	}



	public function create_perfil() {
		$objData  = $this->input->post('objData');

		$sql_data = array(
			'perfil'       => mb_strtoupper($objData['perfil'], 'UTF-8'),
			'clave_corta'  => mb_strtoupper($objData['clave_corta'], 'UTF-8'),
			'descripcion'  => mb_strtoupper($objData['descripcion'], 'UTF-8'),
			'id_usuario'   => $this->session->userdata('id_usuario'),
			'id_menu'      => implode(',', $objData['ids_menu'])
		);

		$created = $this->db_perfiles->create_perfil($sql_data);
		if($created) {
			$resp = array(
				'success'   => true,
				'id_perfil' => $created
				);
		} else {
			$resp = array(
				'success' => false
				);
		}
		echo json_encode($resp);
	}


	/**
	 * Eliminacion logica del perfil
	 * @return [type] [description]
	 */
	public function delete_perfil() {
		$id_perfil = $this->input->post('id_perfil');
		$objData  = $this->input->post('objData');
		$sql_data = array(
			'activo' => 0
		);
		$updated = $this->db_perfiles->update_perfil($sql_data, $id_perfil);
		if($updated) {
			$resp = array(
				'success' => true
				);
		} else {
			$resp = array(
				'success' => false
				);
		}
		echo json_encode($resp);
	}

	public function get_perfiles() {
		$perfiles = $this->db_perfiles->get_perfiles();
		echo json_encode($perfiles);
	}

}

/* End of file perfiles.php */
/* Location: ./application/controllers/administracion/perfiles.php */