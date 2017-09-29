<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
require_once('Solicitudes.php');	
class Reset extends IS_Controller {
	
	public function __construct(){	
		parent::__construct();
		$this->in = ($this->input->post('objData'))?$this->input->post('objData'):false;
		$this->modulo = 'reset';
		$this->js_dir = '';	
		// debug($this->session->userdata);	
		//load models
		$this->load->model('Reset_model', 'db_reset');
		$this->load->model('auth/Login_model', 'login');
	}

	public function index(){
		$tplData['titulo'] 				= lang('reset_titulo');
		$tplData['subtitulo'] 			= lang('reset_subtitulo');
		$tplData['lbl_restablecer'] 	= lang('reset_restablecer');
		$tplData['lbl_old_password'] 	= lang('reset_old_password');		
		$tplData['lbl_new_password'] 	= lang('reset_new_password');		
		$tplData['lbl_password'] 		= lang('reset_password');		
		$tplData['lbl_rpt_password'] 	= lang('reset_rpt_password');		
		$tplData['lbl_instruccion'] 	= lang('reset_instruccion');		
		
		$includes['js'][] = array('name' => $this->modulo, 'dirname' => 'js'.$this->js_dir);
		$this->load_view('auth/'.$this->modulo, $tplData, $includes);	
	}

	public function new_pass(){
		$data = $this->in;
		$jsonData = array('success'=>false,'msj'=>'Error: new_pass');
		if($data['old_password']){
			$sqlData = array(
					 'usuario' 		=> $this->session->userdata('usuario')
					,'clave' 		=> md5($data['old_password'])					
					);
			// $userData = $this->login->get_user($dataSQL);
			$userData = $this->login->get_vacaciones_user($sqlData);
			if(!$userData){
				// Busca en usuarios externos
				$userData = $this->login->get_extern_user($sqlData);
			}
			if($userData){		
				## Existe usuario
				$userNewData = array(
					 'id_usuario' 	=> $this->session->userdata('id_usuario')
					,'clave_nueva' 	=> md5($data['password'])
					,'timestamp' 	=> timestamp()
					);
				// Cambiar clave
				if($this->session->userdata('externo')){
					// Usuarios ajenos al sistema de vacaciones
					$changePass = $this->db_reset->set_new_password_local($userNewData);
				}else{
					// Usuario de vacaciones
					$changePass = $this->db_reset->set_new_password_vacaciones($userNewData);
				}
				// Modal
				$dataModal = array(
					 'id' 			=> 'modal-'.rand(1000,9999)
					,'titulo' 		=> '<i class="material-icons">info</i> Nueva clave '
					,'contenido' 	=> 'Su clave de acceso ha sido reestablecida'
    			);
	    		$htmlModal = build_modal_alert($dataModal);
				$jsonData = array('success'=>true, 'msj'=>'OK: new_pass', 'modal'=>$htmlModal['html'], 'id'=>$htmlModal['id']);			
			}else{
				$dataModal = array(
					 'id' 			=> 'modal-'.rand(1000,9999)
					,'titulo' 		=> '<i class="material-icons">error</i> Error! '
					,'contenido' 	=> 'Su clave anterior no existe.'
    			);
	    		$htmlModal = build_modal_alert($dataModal);
				$jsonData = array('success'=>false, 'msj'=>'No Aut: new_pass', 'modal'=>$htmlModal['html'], 'id'=>$htmlModal['id']);
			}
		}
		echo json_encode($jsonData);
	}

		
}