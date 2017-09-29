<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
require_once('Solicitudes.php');
class Inicio extends IS_Controller {
	
	public function __construct(){	
		parent::__construct();
		$this->in = ($this->input->post('objData'))?$this->input->post('objData'):false;
		$this->modulo = 'inicio';
		$this->js_dir = '';	
		// debug($this->session->userdata);	
		//load models
		$this->load->model('Cuestionarios_model', 'db_cuestionario');
	}

	public function index(){
		$tplData['titulo'] 				= lang('inicio_titulo');
		$tplData['subtitulo'] 			= lang('inicio_subtitulo');
		$tplData['bienvenido'] 			= lang('inicio_bienvenido');
		$tplData['descripcion'] 		= lang('inicio_descripcion');
		$tplData['manual_descripcion'] 	= lang('inicio_manual_descripcion');
		$tplData['lbl_solicitar'] 		= lang('inicio_lbl_solicitar');
		$tplData['txt_top'] 			= lang('inicio_txt_top');

		$tplData['lbl_eventos'] 		= lang('general_eventos');		
		$tplData['lbl_homeoffice'] 		= lang('general_homeoffice');
		$tplData['lbl_flextime'] 		= lang('general_flextime');
		$tplData['lbl_compressed'] 		= lang('general_compressed');
		$tplData['lectura_TC'] 			= $this->session->userdata('lectura_TC');

		$tplData['download'] 			= lang('general_descargar');
		$tplData['link_manual_usuario'] = 'assets/docs/Manual_de_Usuario.pdf';
		$tplData['all_questions'] 	= self::build_question();
		
		
		$includes['js'][] = array('name' => $this->modulo, 'dirname' => 'js'.$this->js_dir);
		$this->load_view($this->modulo, $tplData, $includes);	
	}

	private function build_question() {
		$questions = $this->db_cuestionario->get_cuestionarios();
		$data_view = array();
		foreach ($questions as $key => $question) {
			$data_view['pregunta'.$question['id_cuestionario']] = $question['pregunta'];
		}

		$autoevaluacion = $this->load_view_unique('cuestionario/autoevaluacion', $data_view, true, false);
		$check_list = $this->load_view_unique('cuestionario/check_list', $data_view, true, false);

		return $autoevaluacion.$check_list;
	}

	public function save_cuestionario() {
		try {
			$id_preguntas = $this->input->post('pregunta');
			$sql_data=array();

			//OBTENEMOS LA RESPUESTA DE CADA PREGUNTA
			foreach($id_preguntas as $id) {
				$sql_data[] = array(
					'id_pregunta' 	=> $id
					,'id_usuario'	=> $this->session->userdata('id_usuario')
					,'id_respuesta' => $this->input->post('respuesta'.$id)
				);
			}

			$save = $this->db_cuestionario->insert_answer($sql_data);
			$save OR new_exception();

			$sql_data = array(
				'id_usuario' 		=> $this->session->userdata('id_usuario')
				,'empleado_num' 	=> $this->session->userdata('empleado_num')
			);
			$insert = $this->db_cuestionario->insert_lectura_cuestionario($sql_data);
			$insert OR new_exception();

			$this->session->set_userdata('lectura_TC', 1);
			$response = array(
				'success' => TRUE
			);
		} catch (Exception $e) {
			$response = array(
				'success' 	=> FALSE
				,'title' 	=> lang('general_error')
				,'msg' 		=> $e->getMessage()
				,'type' 	=> 'error'
			);
		}

		echo json_encode($response);
	}
	
}