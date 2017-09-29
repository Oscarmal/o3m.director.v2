<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
require_once APPPATH.'controllers/Correos.php';
class Login extends Correos {
	
	private $folder;
	public $in;
	public function __construct(){		
		parent::__construct();
		$this->folder = 'auth/';
		$this->load->model($this->folder.'login_model','login');
		$this->load->model('usuarios_perfiles_model', 'db_usuarios_perfiles');
		$this->in = ($this->input->post('objData'))?$this->input->post('objData'):false;
	}

	public function index(){
		$tplData['username'] 			= lang('auth_username');
		$tplData['password'] 			= lang('auth_password');
		$tplData['recordar_password'] 	= lang('auth_recordar_password');
		$tplData['recuperar_password'] 	= lang('auth_recuperar_password');
		$tplData['registro'] 			= lang('auth_registro');
		$tplData['login'] 				= lang('auth_login');
		$includes['header']['css'][]  = array('name' => 'login', 'dirname' => 'template/css');
		$includes['header']['js'][]  = array('name' => 'login', 'dirname' => 'js/'.$this->folder);
		$includes['header']['js'][]  = array('name' => 'jquery.md5', 'dirname' => 'vendor/md5/');
		$this->load_view_individual($this->folder.'login',$tplData, $includes);
	}
	
	public function auth(){
		// Validación de credenciales de usuario
		$json = ($this->in['json'])?$this->in['json']:false;
		
		$dataSQL = array('usuario'=>$this->in['usuario'],'clave'=>$this->in['clave']);
		// $userData = $this->login->get_user($dataSQL);
		$userData = $this->login->get_vacaciones_user($dataSQL);
		if(!$userData){
			// Busca en usuarios externos
			$userData = $this->login->get_extern_user($dataSQL);
		}
		if($userData){		
			// Autenticado
			$this->setSession($userData[0]); #Setea variable de sesión
			$jsonData = array('success'=>true,'uri'=>$userData[0]['url']);
		}else{
			// Sin autorización
			$jsonData = array(
			'success' => false, 
			'titulo_alerta'=>lang('general_error'), 
			'msg' => lang('clave_wrong'), 
			'tipo_alerta' => 'error' );
		}
		if($json){
			echo json_encode($jsonData);
		}else{
			return false;
		}
	}

	/**
	 * Funcion para la validación de la expiración del usuario
	 * @param var $userData array Datos del usuario
	 * @return true, si no ha expirado la contraseña, sino, array datos del error
	 */
	public function expiracion_contrasena( $userData ){
		$return = true;
		if (!empty($userData['fecha_caducidad'])) {
			$fecha_actual = strtotime(date('Y-m-d'));
			$fecha_caducidad_pass = strtotime($userData['fecha_caducidad']);
			
			if( $fecha_caducidad_pass <= $fecha_actual ){
				$actualizar_password = $this->proceso_recuperar_password($userData['mail']);
				if( $actualizar_password['success']){
					$return = array(
								'success' => false, 
								'titulo_alerta'=>lang('general_alerta'), 
								'msg' => lang('password_caducado'), 
								'tipo_alerta' => 'warning' 
								);
				}else{
					$return = array(
						'success' => false, 
						'titulo_alerta'=>lang('general_error'), 
						'msg' => lang('clave_wrong'), 
						'tipo_alerta' => 'error' );
				}
			} 
		}
		return $return;
	}

	/**
	 * Función para el registro de los intentos fallidos del usuario
	 * @param var $userData datos del usuario que esta intentando acceder al sistema
	 * @return array datos del error del inicio de session.
	 */
	public function registro_intentos_fallidos( $userData ){
		$intentos_fallidos = ($userData['intentos_fallidos']+1);
		//sumar +1 en el campo de intento fallido
		$sql_data = array(
    		'intentos_fallidos' => $intentos_fallidos
		);
		//se registra el intento fallido del inicio de session del usuario
		$updated  = $this->db_usuarios->update_usuario($sql_data, $userData['id_usuario']);

		if($updated and $intentos_fallidos >= 5) {
			if ($intentos_fallidos == 5) {
				$this->proceso_recuperar_password($userData['mail']);
			}
			$jsonData = array(
					'success' => false, 
					'titulo_alerta'=>lang('general_error'), 
					'msg' => lang('total_intentos_excedido'), 
					'tipo_alerta' => 'error' 
				);
		} else {
			$jsonData = array(
			'success' => false, 
			'titulo_alerta'=>lang('general_error'), 
			'msg' => lang('clave_wrong'), 
			'tipo_alerta' => 'error' );
		}
		return $jsonData;
	}

	public function auth_in($auth=false){
		if($auth){
			redirect(base_url('inicio'));			
		}else{			
			$this->logout();
		}			
	}

	private function setSession($userData=array()){
    // Establece los datos de la sesión de usuario
		// debug($userData);
        $this->session->set_userdata(array(
                            'id_usuario'        => (isset($userData['id_usuario']))?$userData['id_usuario']:'',
                            'id_usuario_externo'=> (isset($userData['id_usuario_externo']))?$userData['id_usuario_externo']:'',
                            'id_personal'       => (isset($userData['id_personal']))?$userData['id_personal']:'',
                            'usuario'           => (isset($userData['usuario']))?$userData['usuario']:'',
                            'nombre_completo'   => (isset($userData['nombre_completo']))?$userData['nombre_completo']:'',
							'empleado_num'		=> (isset($userData['empleado_num']))?$userData['empleado_num']:'',
							'puesto' 			=> (isset($userData['puesto']))?$userData['puesto']:'',
							'sucursal_nomina' 	=> (isset($userData['sucursal_nomina']))?$userData['sucursal_nomina']:'',
							'id_nomina' 		=> (isset($userData['id_nomina']))?$userData['id_nomina']:'',
							'id_empresa'		=> (isset($userData['id_empresa']))?$userData['id_empresa']:'',
							'id_empresa_nomina'	=> (isset($userData['id_empresa_nomina']))?$userData['id_empresa_nomina']:'',
                            'email'             => (isset($userData['mail']))?$userData['mail']:'',
                            // 'idioma'            => 'es_mx',
                            'id_pais'           => (isset($userData['id_pais']))?$userData['id_pais']:'',
                            'pais'              => (isset($userData['pais']))?$userData['pais']:'',
                            'id_empresa'        => (isset($userData['id_empresa']))?$userData['id_empresa']:'',
                            'empresa'           => (isset($userData['empresa']))?$userData['empresa']:'',
                            'id_sucursal'       => (isset($userData['id_sucursal']))?$userData['id_sucursal']:'',
                            'sucursal'          => (isset($userData['sucursal']))?$userData['sucursal']:'',
                            'id_rol'            => (isset($userData['id_rol']))?$userData['id_rol']:'',
                            'rol'               => (isset($userData['rol']))?$userData['rol']:'',
                            'activo'            => (isset($userData['activo']))?$userData['activo']:'',
                            'logged_in'         => date('Y-m-d H:i:s'),
                            'user_menu'         => (isset($userData['user_menu']))?$userData['user_menu']:'',
							'id_line_local_depto'=> (isset($userData['id_line_local_depto']))?$userData['id_line_local_depto']:'',
							'id_line' 			=> (isset($userData['id_line']))?$userData['id_line']:'',
							'line' 				=> (isset($userData['line']))?$userData['line']:'',
							'id_localidad' 		=> (isset($userData['id_localidad']))?$userData['id_localidad']:'',
							'localidad' 		=> (isset($userData['localidad']))?$userData['localidad']:'',
							'id_departamento' 	=> (isset($userData['id_departamento']))?$userData['id_departamento']:'',
							'departamento' 		=> (isset($userData['departamento']))?$userData['departamento']:'',
							'lectura_TC' 		=> (isset($userData['lectura_TC']))?$userData['lectura_TC']:'',
							'timestamp_tc' 		=> (isset($userData['timestamp_tc']))?$userData['timestamp_tc']:'',
							'default_url' 		=> (isset($userData['url']))?$userData['url']:''
							,'externo' 		=> (isset($userData['externo']))?$userData['externo']:'0'
                    ));        
    }

    public function logout(){
        $this->session->sess_destroy();
        redirect(base_url());
    }

    public function modal($data=array()){
    	$dataModal = array(
					 'id' 			=> 'modal123'
					,'titulo' 		=> 'Error!'
					,'contenido' 	=> 'Ud. no tiene permiso para accesar'
					,'cerrar'		=> '#'
    			);
    	$htmlModal = build_modal_alert($dataModal);
    	$jsonData = array('success'=>true,'modal'=>$htmlModal['html'], 'id'=>$htmlModal['id']);
    	echo json_encode($jsonData);
    }

    public function recuperar_password() {
    	$email    = $this->input->post('email');
    	$resp = $this->proceso_recuperar_password($email);

    	echo json_encode($resp);
    }

    public function proceso_recuperar_password( $email ) {    	
    	$sql_data  = array(
    		'mail' => $email
    	);
    	$personal  = $this->db_personales->get_personales($sql_data);
    
    	if ($personal) {
    		$personal  = $personal[0];
    		$sql_data = array(
    			'id_personal' => $personal['id_personal']
    		);
    		$datos_usuario = $this->db_usuarios_perfiles->get_usuarios($sql_data);
    		$datos_usuario = $datos_usuario[0];
    		
    		$token    = $this->generate_token();
    		$sql_data = array(
    			'token' => $token
    		);
    		$updated = $this->db_usuarios->update_usuario($sql_data, $datos_usuario['id_usuario']);

    		$enviado = $this->send_email_recuperar_password($datos_usuario, $token);
    		if($enviado) {
    			$resp = array(
	    			'success' => true,
	    			'msg'     => lang('login_send_email')
	    		);
    		} else {
    			$resp = array(
	    			'success' => false,
	    			'msg'     => lang('login_no_send_email')
	    		);
    		}
    	} else {
    		$resp = array(
    			'success' => false,
    			'msg'     => lang('login_unregister_email')
    		);
    	}
    	return $resp;
    }

    public function recuperar_password_view() {
    	$token = $this->input->get('token')? $this->input->get('token') : false;
		if($token){
			$sql_data = array(
				'token' => $token
			);
			$token    = $this->db_usuarios->get_usuarios($sql_data);
			if($token) {
				//Labels de la vista
				$data['lbl_restablecer']  = lang('login_restablcer');
				$data['lbl_password']     = lang('login_password');
				$data['lbl_rpt_password'] = lang('login_rpt_password');
				$data['lbl_instruccion']  = lang('login_instruccion');

				//Datos de la vista
				$data['id_usuario'] = md5($token[0]['id_usuario']);

				$includes['js'][] = array('name' => 'es_mx', 'dirname' => 'js/language');
				$includes['js'][] = array('name' => 'global.system', 'dirname' => 'js');
				$includes['js'][] = array('name' => 'restablecer_password', 'dirname' => 'js/auth');
				$includes['js'][] = array('name' => 'jquery.validate.min', 'dirname' => 'vendor/jquery-validation');
				$includes['js'][] = array('name' => 'es_MX', 'dirname' => 'vendor/jquery-validation');
				//sweet alert
				$includes['js'][] = array('name' => 'es6-promise.auto.min', 'dirname' => 'vendor/es6-promise');
				$includes['js'][] = array('name' => 'sweetalert2.min', 'dirname' => 'vendor/sweetalert2');
				$includes['css'][] = array('name' => 'sweetalert2.min', 'dirname' => 'vendor/sweetalert2');
				$includes['js'][]  = array('name' => 'jquery.md5', 'dirname' => 'vendor/md5/');
				$this->load_view_unique($this->folder.'recuperar_password_view', $data, false, $includes);
			} else {
				redirect('inicio');
			}
		} else {
			redirect('inicio');
		}
    }

    public function update_password() {
    	$obj_data = $this->input->post('objData');
    	$sql_data = array('id_usuario' => $obj_data['id_usuario']);
		$userData = $this->db_usuarios->get_usuarios($sql_data, true);
		$success = false;
		if($userData){
	    	$sql_data = array(
	    		'clave' => $obj_data['password'],
	    		'token' => '',
	    		'fecha_caducidad' => fecha_expiracion_password($userData[0]['dias_caducidad']),
	    		'timestamp_edit'  => timestamp(),
	    		'id_usuario_edit' => $userData[0]['id_usuario'],
	    		'intentos_fallidos' => 0
	    	);
	    	$success = $this->db_usuarios->update_usuario($sql_data, $userData[0]['id_usuario'])? true : false;
		}
		echo json_encode(array(
			'success' => $success
		));
    }
}