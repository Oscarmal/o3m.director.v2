<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
// ini_set('memory_limit','512M');
class Mail extends PHPMailer{
/**
* Descripcion:	Envia email usando SMTP
* Creación:		2015-08-11
* @author 		Oscar Maldonado - O3M
*/

	public $email_onoff;
	public $email_address, $email_name;
	public $email_bcc_onoff, $email_bcc;
	public $success, $resultado, $data;
	public $body,$tipo,$asunto,$adjuntos,$destinatarios,$destinatariosCc,$destinatariosBcc, $imagenes;
	private $ci;
	function __construct(){
		$this->ci =& get_instance();
        $vars = new config_vars();
        $vars->load_vars();        
        $this->email_onoff		= ($vars->var['email']['email_onoff'])?true:false;
        $this->success 			= false;

        $this->cuenta 			= (!$vars->var['email']['email_cuenta'])?1:$vars->var['email']['email_cuenta'];

        $this->Host                                               = $vars->var['email']['email_'.$this->cuenta.'_host'];
        $this->email_address   	= $vars->var['email']['email_'.$this->cuenta.'_address'];
        $this->Username			= ($vars->var['email']['email_'.$this->cuenta.'_user'])?$vars->var['email']['email_'.$this->cuenta.'_user']:false;
        $this->Password			= ($vars->var['email']['email_'.$this->cuenta.'_pass'])?$vars->var['email']['email_'.$this->cuenta.'_pass']:false;
 
        $this->Port				= ($vars->var['email']['email_'.$this->cuenta.'_port'])?$vars->var['email']['email_'.$this->cuenta.'_port']:false;
        $this->SMTPSecure		= ($vars->var['email']['email_'.$this->cuenta.'_stmp_secure'])?$vars->var['email']['email_'.$this->cuenta.'_stmp_secure']:false;
        $this->SMTPAuth			= ($vars->var['email']['email_'.$this->cuenta.'_stmp_auth'])?$vars->var['email']['email_'.$this->cuenta.'_stmp_auth']:false;
        $this->email_name		= $vars->var['email']['email_name'];
        $this->email_bcc_onoff	= ($vars->var['email']['email_bcc_onoff'])?true:false;
        $this->email_bcc		= $vars->var['email']['email_bcc'];
        $this->email_debug		= (!$vars->var['email']['email_debug'])?0:$vars->var['email']['email_debug'];

    }

	public function send($data=array()){
        $mail = new PHPMailer;
		if($this->email_onoff){
			// Variables recibidas
			$this->body 				= $data['body'];
			$this->tipo 				= ($data['tipo']=='html')?true:false;
			$this->asunto 				= (isset($data['asunto']))?$data['asunto']:$this->email_name;
			$this->adjuntos 			= (isset($data['adjuntos']))?$data['adjuntos']:false;	
			$this->destinatarios 		= (isset($data['destinatarios']))?$data['destinatarios']:false;	
			$this->destinatariosCc  	= (isset($data['destinatariosCC']))?$data['destinatariosCC']:false;
			$this->destinatariosBcc 	= (isset($data['destinatariosBCC']))?$data['destinatariosBCC']:false;
			$this->imagenes 			= (isset($data['imagenes']))?$data['imagenes']:false;

			// Setup
			$mail->isSMTP();	//Establece uso de SMTP
			$mail->SMTPDebug 		= $this->email_debug; //Enable SMTP debugging: 0=>off; 1=>client msg; 2=>server & client msg		
			$mail->Debugoutput 		= 'html';
			$mail->Host 			= $this->Host;
			$mail->Port 			= $this->Port;
			$mail->SMTPSecure 		= $this->SMTPSecure;
			$mail->SMTPAuth 		= $this->SMTPAuth;
			$mail->Username 		= $this->Username;
			$mail->Password 		= $this->Password;
			$mail->email_address	= $this->email_address;
			$mail->email_name 		= $this->email_name;
			$mail->email_bcc_onoff 	= ($this->email_bcc_onoff)?true:false;
			$mail->email_bcc 		= $this->email_bcc;
				//print_debug($mail);		
			//Emisor Data
			$mail->setFrom($this->email_address, $this->email_name);
			//Direccion de respuesta
			$mail->addReplyTo($this->email_address, $this->email_name);
			//Receptor Data
			if(is_array($this->destinatarios)){
				foreach($this->destinatarios as $destinatario){
					$mail->addAddress($destinatario['email'], $destinatario['nombre']);
				}
			}
			// CC

			if(is_array($this->destinatariosCc)){
				foreach($this->destinatariosCc as $destinatarioCc){
					$mail->addCC($destinatarioCc['email'], $destinatarioCc['nombre']);
				}
			}
			// BCC
			if(is_array($this->destinatariosBcc)){
				foreach($this->destinatariosBcc as $destinatarioBcc){
					$mail->addBCC($destinatarioBcc['email'], $destinatarioBcc['nombre']);
				}
			}
			// Copia oculta - Acuses
			if($this->email_bcc_onoff){			
				$mail->addBCC($this->email_bcc, $this->email_bcc);
			}
			//Asunto
			$mail->Subject = $this->asunto;
			// Imagenes			
			if(is_array($this->imagenes)>0){
				foreach($this->imagenes as $imagen){
					$mail->AddEmbeddedImage(trim($imagen['ruta'],'/').'/'.$imagen['file'], $imagen['alias'],$imagen['file'], $imagen['encode'], $imagen['mime']);
				}
			}
			
			$mail->Body = $this->body;
			$mail->IsHTML($this->tipo);

			//Texto plano alternativo al HTML
			$mail->AltBody = 'Su correo no soporta HTML, por favor, contacte a su administrador de correo.';
			//Adjunto
			if(is_array($this->adjuntos)){
				foreach($this->adjuntos as $adjunto){
					$mail->addAttachment($adjunto);
				}
			}
			// dump_var($mail);
			// Envío de correo e imprime mensajes
			if (!$mail->send()) {
			    // $this->resultado = "Error al enviar: " . $this->ErrorInfo;
			    // $this->success = false;
			    // debug($mail->ErrorInfo);
			    $respuesta = array('error' => $mail->ErrorInfo, 'success' => false, 'msj' =>  $mail->ErrorInfo);
			} else {
			    // $this->resultado = "Correo enviado!";
			    // $this->success = true;
			    $respuesta = array('success' => true, 'msj' => lang("msg_succes_send_mail"));
			}
		}else{ 
			// $this->success = true; 
			$respuesta = array('success' => true, 'msj' => lang("msg_succes_send_mail"));
		}
		return $respuesta;
	}
}
?>