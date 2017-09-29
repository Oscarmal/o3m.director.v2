<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require_once APPPATH.'controllers/Correos.php';
class Usuarios extends Correos {

	public function __construct()
	{
		parent::__construct();
		$this->template = 'administracion/usuarios/';
		$this->js_dir   = 'js/administracion/usuarios';

		//Modelos
		$this->load->model('paises_model', 'db_paises');
		$this->load->model('perfiles_model', 'db_perfiles');
		$this->load->model('roles_model', 'db_roles');
		$this->load->model('usuarios_model', 'db_usuarios');
		$this->load->model('usuarios_perfiles_model', 'db_usuarios_perfiles');
		$this->load->model('personales_model', 'db_personales');
		// $this->load->model('empresas_model', 'db_empresas');
		// $this->load->model('sucursales_model', 'db_sucursales');
	}

	public function index() {
		//Labels de la vista
		$data_view['titulo']            = lang('usuarios_titulo'); 
		$data_view['subtitulo']         = lang('usuarios_lista_usuarios');
		$data_view['lbl_nuevo_usuario'] = lang('usuarios_subtitulo_create_user');

		//Datos de la vista
		$usuarios = $this->db_usuarios_perfiles->get_usuarios();
		$data_view['data_table'] = $this->build_table_usuarios($usuarios);
		
		$includes['js'][] = array('name' => 'usuarios', 'dirname' => $this->js_dir);
		$this->load_view($this->template.'usuarios_view', $data_view, $includes);
	}

	public function build_table_usuarios($usuarios = array()){
		$table = lang('general_no_records');
		if(is_array($usuarios) && count($usuarios)) {
			$titulos = array(
				'ID',
				lang('usuarios_nombre'),
				lang('usuarios_perfil'),
				lang('usuarios_rol'),
				// lang('usuarios_mail'),
				// lang('usuarios_telefono'),
				lang('general_acciones')
			);
			$registros = array();
			foreach ($usuarios as $u) {
				$acciones   = $this->build_acciones_usuario($u);
				$registros[] = array(
					$u['id_usuario'],
					$u['nombre_completo'],
					$u['perfil'],
					$u['rol'],
					// $u['mail'],
					// $u['telefono'],
					$acciones
				);
			}
			$arr_tabla = array(
				'titulos'   => $titulos,
				'registros' => $registros
			);
			$table = data_table($arr_tabla);
		}
		return $table;
	}

	public function create_user_view() {
		//Labels de la vista
		$data_view['titulo']            = lang('usuarios_titulo'); 
		$data_view['subtitulo']         = lang('usuarios_subtitulo_create_user'); 
		$data_view['general_required']  = lang('general_required');
		$data_view['usuarios_nombre']   = lang('usuarios_nombre');
		$data_view['usuarios_paterno']  = lang('usuarios_paterno');
		$data_view['usuarios_materno']  = lang('usuarios_materno');
		$data_view['usuarios_telefono'] = lang('usuarios_telefono');
		$data_view['usuarios_mail']     = lang('usuarios_mail');
		$data_view['usuarios_pais']     = lang('general_pais');
		$data_view['usuarios_empresa']  = lang('usuarios_empresa');
		$data_view['usuarios_sucursal'] = lang('usuarios_sucursal');
		$data_view['usuarios_perfil']   = lang('usuarios_perfil');
		$data_view['usuarios_rol']      = lang('usuarios_rol');
		$data_view['lbl_save']          = lang('general_save');
		$data_view['lbl_volver']        = lang('general_return');
		$data_view['expiracion_password'] = lang('usuarios_expiracion_password');

		//Datos de la vista
		$id_pais = $this->session->userdata('id_pais');
		$data_view['select_paises']     = dropdown(array(
			'data'      => $this->db_paises->get_paises_empresas_config($id_pais),
			'value'     => 'id_pais',
			'text'      => 'pais',
			'name'      => 'id_pais',
			'leyenda'   => lang('general_slct_1_option'),
			'event'     => 'loadEmpresas(this.value)',
			'class' 	=> 'validate required'
		));

		$data_view['select_empresas']     = dropdown(array());
		$data_view['select_sucursales']   = dropdown(array());

		$data_view['select_perfiles']     = dropdown(array(
			'data'      => $this->db_perfiles->get_perfiles(),
			'value'     => 'id_perfil',
			'text'      => 'perfil',
			'name'      => 'id_perfil',
			'leyenda'   => lang('general_slct_1_option'),
			'class' 	=> 'validate required'
		));

		$data_view['select_roles']        = dropdown(array(
			'data'      => $this->db_roles->get_roles(),
			'value'     => 'id_rol',
			'text'      => 'rol',
			'name'      => 'id_rol',
			'leyenda'   => lang('general_slct_1_option'),
			'class' 	=> 'validate required'
		));

		$includes['js'][] = array('name' => 'create_user', 'dirname' => $this->js_dir);
		$this->load_view($this->template.'create_user_view', $data_view, $includes);
	}

	public function create_user() {
		$objData  = $this->input->post('objData');
		$fecha_expiracion = fecha_expiracion_password( $objData['expiracion_password'] );
		
		//Se guardan los personales
		$sql_personales = array(
			'nombre'            => $objData['nombre'],
			'paterno'           => $objData['paterno'],
			'materno'           => $objData['materno'],
			'telefono'          => $objData['telefono'],
			'mail'              => $objData['mail'],
			'id_usuario_create' => $this->session->userdata('id_usuario')
		);
		$id_personal = $this->db_personales->create_personal($sql_personales);

		//Se guardan los datos de usuario
		$token = $this->generate_token($objData['mail']);
		$sql_usuario = array(
			'usuario'           => $objData['mail'],
			'id_personal'       => $id_personal,
			'clave'             => md5($objData['mail']),
			'token'             => $token,
			'id_usuario_create' => $this->session->userdata('id_usuario'),
			'fecha_caducidad' 	=> $fecha_expiracion,
			'dias_caducidad'	=> $objData['expiracion_password']
		);
		$id_usuario = $this->db_usuarios->create_usuario($sql_usuario);

		//Se guardan los datos de usuario-perfil
		$sql_usuarios_perfiles = array(
			'id_personal' 		=> $id_personal,
			'id_usuario'  		=> $id_usuario,
			'id_perfil'   		=> $objData['id_perfil'],
			'id_rol'      		=> $objData['id_rol'],
			'id_pais'     		=> $objData['id_pais'],
			'id_empresa'  		=> $objData['id_empresa'],
			'id_sucursal' 		=> $objData['id_sucursal'],
			'id_usuario_create' => $this->session->userdata('id_usuario'),
		);
		$id_usuarios_perfiles = $this->db_usuarios_perfiles->create_usuario_perfil($sql_usuarios_perfiles);

		$datos_correo = array(
			'mail'            => $objData['mail'],
			'nombre_completo' => $objData['nombre'].' '.$objData['paterno'].' '.$objData['materno']
		);

		$mail_register = $this->send_email_usuario_registrado($datos_correo);
		$mail_password = $this->send_email_recuperar_password($datos_correo, $token);

		if($id_personal && $id_usuario && $id_usuarios_perfiles) {
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

	public function edit_usuario_view() {
		$id_usuario = $this->input->post('id');
		$sql_data   = array(
			'id_usuario' => $id_usuario
		);
		$usuario    = $this->db_usuarios_perfiles->get_usuarios($sql_data);
		$usuario    = $usuario[0];

		//Labels de la vista
		$data_view['titulo']           		= lang('usuarios_titulo'); 
		$data_view['subtitulo']         	= lang('usuarios_subtitulo_edit_user');
		$data_view['expiracion_password'] 	= lang('usuarios_expiracion_password');
		$data_view['general_required']  	= lang('general_required');
		$data_view['usuarios_nombre']   = lang('usuarios_nombre');
		$data_view['usuarios_paterno']  = lang('usuarios_paterno');
		$data_view['usuarios_materno']  = lang('usuarios_materno');
		$data_view['usuarios_telefono'] = lang('usuarios_telefono');
		$data_view['usuarios_mail']     = lang('usuarios_mail');
		$data_view['usuarios_pais']     = lang('general_pais');
		$data_view['usuarios_empresa']  = lang('usuarios_empresa');
		$data_view['usuarios_sucursal'] = lang('usuarios_sucursal');
		$data_view['usuarios_perfil']   = lang('usuarios_perfil');
		$data_view['usuarios_rol']      = lang('usuarios_rol');
		$data_view['lbl_save']          = lang('general_save');
		$data_view['lbl_volver']        = lang('general_return');

		//Datos de la vista
		$data_view['id_usuario']  		= $usuario['id_usuario'];
		$data_view['id_personal'] 		= $usuario['id_personal'];
		$data_view['nombre']     		= $usuario['nombre'];
		$data_view['paterno']    		= $usuario['paterno'];
		$data_view['materno']    		= $usuario['materno'];
		$data_view['telefono']   		= $usuario['telefono'];
		$data_view['mail']       		= $usuario['mail'];
		$data_view['dias_caducidad'] 	= $usuario['dias_caducidad'];

		$id_pais = $this->session->userdata('id_pais');
		$data_view['select_paises']     = dropdown(array(
			'data'      => $this->db_paises->get_paises($id_pais),
			'value'     => 'id_pais',
			'text'      => 'pais',
			'name'      => 'id_pais',
			'leyenda'   => lang('general_slct_1_option'),
			'event'     => 'loadEmpresas(this.value)',
			'selected'  => $usuario['id_pais']
		));

		$data_view['select_empresas']     = dropdown(array(
			'data'      => $this->db_empresas->get_empresas(false, $id_pais),
			'value'     => 'id_empresa',
			'text'      => 'empresa',
			'name'      => 'id_empresa',
			'leyenda'   => lang('general_slct_1_option'),
			'event'     => 'loadEmpresas(this.value)',
			'selected'  => $usuario['id_empresa']
		));

		$data_view['select_sucursales']   = dropdown(array(
			'data'      => $this->db_sucursales->get_sucursales(false, $usuario['id_empresa']),
			'value'     => 'id_sucursal',
			'text'      => 'sucursal',
			'name'      => 'id_sucursal',
			'leyenda'   => lang('general_slct_1_option'),
			'event'     => 'loadEmpresas(this.value)',
			'selected'  => $usuario['id_sucursal']
		));

		$data_view['select_perfiles']     = dropdown(array(
			'data'      => $this->db_perfiles->get_perfiles(),
			'value'     => 'id_perfil',
			'text'      => 'perfil',
			'name'      => 'id_perfil',
			'leyenda'   => lang('general_slct_1_option'),
			'selected'  => $usuario['id_perfil']
 		));

		$data_view['select_roles']        = dropdown(array(
			'data'      => $this->db_roles->get_roles(),
			'value'     => 'id_rol',
			'text'      => 'rol',
			'name'      => 'id_rol',
			'leyenda'   => lang('general_slct_1_option'),
			'selected'  => $usuario['id_rol']
		));
		$includes['js'][] = array('name' => 'edit_user', 'dirname' => $this->js_dir);
		$this->load_view($this->template.'edit_user_view', $data_view, $includes);
	}

	public function edit_user() {
		$objData = $this->input->post('objData');
		$fecha_expiracion = fecha_expiracion_password( $objData['expiracion_password'] );

		//actualizar personales
		$sql_personales = array(
			'nombre'            => $objData['nombre'],
			'paterno'           => $objData['paterno'],
			'materno'           => $objData['materno'],
			'telefono'          => $objData['telefono'],
			'edit_id_usuario'   => $this->session->userdata('id_usuario')
		);
		$updated_personal = $this->db_personales->update_personal($sql_personales, $objData['id_usuario']);

		//actualizar perfiles
		$sql_usuarios_perfiles = array(
			'id_perfil'   		=> $objData['id_perfil'],
			'id_rol'      		=> $objData['id_rol'],
			'id_pais'     		=> $objData['id_pais'],
			'id_empresa'  		=> $objData['id_empresa'],
			'id_sucursal' 		=> $objData['id_sucursal'],
			'edit_id_usuario' => $this->session->userdata('id_usuario'),
		);
		$updated_usuario = $this->db_usuarios_perfiles->update_usuario_perfil($sql_usuarios_perfiles, $objData['id_personal']);

		$sql_usuario = array(
			'fecha_caducidad' 	=> $fecha_expiracion, 
			'dias_caducidad'	=> $objData['expiracion_password']
		);
		$updated_usuario_data = $this->db_usuarios->update_usuario( $sql_usuario, $objData['id_usuario'] );

		if($updated_personal && $updated_usuario && $updated_usuario_data) {
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

	/**
	 * Valida que el mail sea unico
	 * @return [json] [description]
	 */
	public function validate_mail() {
		$mail   = $this->input->post('mail');
		$unique = $this->db_usuarios->unique_mail($mail);

		if(count($unique)){
			$resp = array(
				"success" => false,
				"data"    => $unique
			);
		} else {
			$resp = array(
				"success"=> true 
			);
		}
		echo json_encode($resp);
	}

	private function build_acciones_usuario($u = array()) {
		$acciones = '<div class="btn-group">';

		$acciones .= '
		<button class="btn-flat btn-small waves-effect" onclick="editUsuario('.$u['id_usuario'].')">
			<i class="material-icons">create</i>
		</button>';

		$acciones .= '</div>';

		return $acciones;
	}

}

/* End of file usuarios.php */
/* Location: ./application/controllers/administracion/usuarios.php */