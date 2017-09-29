<?php if (!defined( 'BASEPATH')) exit('No direct script access allowed'); 
class Check_session {

	private $sites_availables;
	private $ci;

	public function __construct(){
		$this->ci =& get_instance();
	}	

	public function check_authorized_sites(){
	/**
	* Validación de sessión y acceso a controladores sin session
	*/
		$uri_string = $this->query_uri_string();
		$this->sites_availables[] = $this->sites_availables;			
		if($this->ci->session->userdata('logged_in') || $this->ci->uri->segment(1)=='api' ){
		// Si la sesión existe, agrega URI a lista de controladores permitidos para cargar
			array_push($this->sites_availables, $uri_string);
		}
		// Controladores permitidos sin sessión de usuario
		$this->sites_availables[] = 'error';
		$this->sites_availables[] = 'error-ie';		
		/*Login*/
		$this->sites_availables[] = 'login';
		$this->sites_availables[] = 'login/recuperar_password';
		$this->sites_availables[] = 'login/update_password';
		$this->sites_availables[] = 'recuperar-password';
		$this->sites_availables[] = 'auth';
		$this->sites_availables[] = 'login/modal';
		/*Recuperación de contraseña*/
		$this->sites_availables[] = 'forgot_password';
		$this->sites_availables[] = 'password-reset';
		$this->sites_availables[] = 'password-save';

		if(($uri_string === '' || $uri_string === 'login') && $this->ci->session->userdata('logged_in')){ 
		// Valida que exista la sesion y bloquea login
			redirect(base_url('inicio'));
		}

		if(in_array($uri_string, $this->sites_availables)){
		// Verifica los controladores permitidos para cargar
			return false;
		}

		if($uri_string != ''){ #Si no es LOGIN			
			if($this->ci->session->userdata('logged_in')){ 
				#Si existe session reenvía a inicio
				redirect(base_url('inicio'));
			}else{
				$this->check_session_ajax();
				#Si no existe sesión reenvía a login
				$this->ci->session->sess_destroy();
				redirect(base_url());
			}
		}
	}

	private function query_uri_string(){
	// Retorna el nombre del controlador al que se accesa vía URI
		$new_uri     = "";
		$uri_string  = $this->ci->uri->uri_string();		
		$uri_string  = explode('/', $uri_string);
		foreach($uri_string as $value){
			if(!is_numeric($value)){
				$new_uri .= $value.'/';
			}
		}
		return trim($new_uri, '/');
	}

	/**
	 * Funcion que verifica si la peticion se hace por ajax, en caso de ser por ajax
	 * y no estar loggeado, se manda un array con session_destroy el cual es tratado
	 * en el javascript
	 * 
	 * @return [type] [description]
	 */
	private function check_session_ajax() {
		$ajax      = $this->ci->input->is_ajax_request()? true : false;
		$is_logged = $this->ci->session->userdata('logged_in')? true : false;
		
		if(!$is_logged) {
			if($ajax) {
				echo json_encode( array('session_destroy' => true) );
				exit;
			} else {
				redirect(base_url());
			}
		}
	}
	
}