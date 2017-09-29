<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Correos extends IS_Controller {

	public function __construct() {
		parent::__construct();
		$this->template_mail  = 'mail/';
		$this->url_image = 'assets/img/';
		
	}

	public function send_email_recuperar_password($usuario, $token) {
		$usuario['estacion'] = isset($usuario['estacion']) ? "la estación $usuario[estacion]" : $this->vars->cfg['app_title'];
		
		$destinatarios[] = array(
			'email'	 => $usuario['mail'],
			'nombre' => $usuario['nombre_completo']
		);
		
		//Construccion del HTML del correo
		$htmlTPL = $this->load_view_unique($this->template_mail.'recuperar_password' , array(
			'base_url'           => base_url(),
			'titulo'             => utf8_decode(lang('mail_recuperar_password')),
			'estimado'           => utf8_decode(lang('mail_estimado')),
			'nombre'             => utf8_decode($usuario['nombre_completo']),
			'msg'                => utf8_decode(str_replace('%estacion%', $usuario['estacion'], lang('mail_recuperar_password_msg'))),
			'instruccion'        => utf8_decode(lang('mail_recuperar_password_instruccion')),
			'recuperar_password' => utf8_decode(lang('auth_recuperar_password')),
			'token'              => $token,
			'anio'               => date('Y'),
			'no_responder'       => utf8_decode(lang('mail_no_responder')),
			'asistencias'   => utf8_decode(lang('mail_asistencias')),
			'administrador' => utf8_decode(lang('mail_administrador'))
		), true);
	
		// Construccion del correo para su envio
		$tplData = array(
			 'body' 				=> $htmlTPL
			,'tipo' 				=> 'html'
			,'destinatarios' 		=> $destinatarios
			,'asunto' 				=> utf8_decode(lang('auth_recuperar_password'))
		);	

		// Send email
		$resultado = $this->mail->send($tplData);
		return $resultado['success']? true : false;
	}

	public function send_email_usuario_registrado($usuario) {
		$usuario['estacion'] = isset($usuario['estacion']) ? "la estación $usuario[estacion]" : $this->vars->cfg['app_title'];
		$destinatarios[] = array(
			'email'	 => $usuario['mail'],
			'nombre' => $usuario['nombre_completo']
		);
		
		//Contenido HTML
		$htmlData = array(
			'base_url'           => base_url(),
			'url_image'     	=> base_url('assets/img/'),
			'estimado'           => utf8_decode(lang('mail_estimado')),
			'nombre'             => utf8_decode($usuario['nombre_completo']),
			'msg'                => utf8_decode(str_replace('%estacion%', $usuario['estacion'], lang('mail_usuario_registrado_msg'))),
			'lbl_usuario'        => utf8_decode(lang('usuarios_usuario')),
			'lbl_clave'        	 => utf8_decode(lang('usuarios_clave')),
			'anio'               => date('Y'),
			'no_responder'       => utf8_decode(lang('mail_no_responder')),
			'usuario'            => $usuario['usuario'],
			'estacion'           => $usuario['clave'],
			'asistencias'   => utf8_decode(lang('mail_asistencias')),
			'administrador' => utf8_decode(lang('mail_administrador'))
		);
		
		$htmlTPL = $this->load_view_unique($this->template_mail.'usuario_registrado' , $htmlData, true);
	
		// Create ArrayData
		$tplData = array(
			 'body' 				=> $htmlTPL
			,'tipo' 				=> 'html'
			,'destinatarios' 		=> $destinatarios
			,'asunto' 				=> utf8_decode(str_replace('%estacion%', $usuario['estacion'], lang('mail_registro_usuario')))
		);	

		// Send email
		$resultado = $this->mail->send($tplData);
		return $resultado['success']? true : false;
	}

	/** 
	 * Funcion para enviar el archivo generado del CRON
	 * Esta función se ejecutara de acuerdo a la configuración del CRON
	 * @param Array $data datos para el envío del correo [destinatarios(Para, CC, CCO), asunto, mensaje]
	 * @return Boolean true encaso de éxito, si no, false.
	 */
	public function send_email_layout($data) {
		//Contenido HTML
		$htmlData = array(
			'base_url'           => base_url(),
			'estimado'           => utf8_decode(lang('mail_estimado')),
			'nombre'             => utf8_decode(lang('cron_usuario')),
			'msg'                => utf8_decode(lang('cron_msg')),
			'anio'               => date('Y'),
			'aon'                => utf8_decode('AON Flex - Nómina'),
			'no_responder'       => utf8_decode(lang('mail_no_responder')),
			'flex'				 => utf8_decode(lang('flex')),
			'nomina'			 => utf8_decode(lang('nomina'))
		);
		$htmlTPL = $this->load_view_unique($this->template_mail.'cron_layout' , $htmlData, true);
	
		// Create ArrayData
		$asunto = preg_replace('/%1%/', $data['file_name'], lang('cron_asunto'));
		$tplData = array(
			 'body' 				=> $htmlTPL
			,'tipo' 				=> 'html'
			,'asunto' 				=> utf8_decode($asunto)
			,'adjuntos' 			=> array($data['file_path'])
		); 

		if (isset($data['para'])) {
			$tplData['destinatarios'] = $data['para'];
		}

		if (isset($data['cc'])) {
			$tplData['destinatariosCC'] = $data['cc'];
		}

		if (isset($data['cco'])) {
			$tplData['destinatariosBCC'] = $data['cco'];
		}

		// Send email
		$resultado = $this->mail->send($tplData);
		if($resultado['success']){
			return true;
		}else{
			return false;
		}
	}

	/**
	 * Envío de correo para la notificacion de solicitud creada
	 **/
	public function send_mail_solicitud($data) {
		$htmlData = array(
			'url_image'     => base_url('assets/img/')
			,'contenido'		=> $data['message']
			,'titulo' 		=> utf8_decode($data['titulo'])
			,'base_url' 		=> base_url()
		);
		$htmlTPL = $this->load_view_unique($this->template_mail.$data['view'] , $htmlData, true);
	
		// Create ArrayData
		$tplData = array(
			 'body' 				=> $htmlTPL
			,'tipo' 				=> 'html'
			,'asunto' 				=> utf8_decode($data['asunto'])
		); 

		if (isset($data['para'])) {
			$tplData['destinatarios'] = $data['para'];
		}

		if (isset($data['cc'])) {
			$tplData['destinatariosCC'] = $data['cc'];
		}

		if (isset($data['cco'])) {
			$tplData['destinatariosBCC'] = $data['cco'];
		}

		// Send email
		$resultado = $this->mail->send($tplData);
		if($resultado['success']){
			return true;
		}else{
			return false;
		}
	}

}

/* End of file Correos.php */
/* Location: ./application/controllers/Correos.php */