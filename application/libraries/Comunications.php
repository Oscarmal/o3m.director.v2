<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Comunications {
/**
* Descripcion:	Conexiones SFTP y más
* Creación:		2017-01-01
* @author 		Oscar Maldonado - O3M
*/

	public $host, $pass, $user, $port, $connected;
	private $sftp;
	
	function __construct(){
		// $this->host = '192.168.228.101';
		// $this->user = 'develop';
		// $this->pass = '12345';
		// $this->port = '22';
		// $this->sftp = $this->sftp_connect();
    }

    public function set_config($config_data) {
    	if (is_array($config_data)) {
	    	$this->host = $config_data['host'];
			$this->user = $config_data['user'];
			$this->pass = $config_data['pass'];
			$this->port = $config_data['port'];
			$this->sftp = $this->sftp_connect();
    	} else {
    		return false;
    	}
    }

	private function sftp_connect(){
	// Conexión al servidor
		$this->sftp = new \phpseclib\Net\SFTP($this->host);
		if (!$this->sftp->login($this->user, $this->pass)) {
		    exit('Login Failed');
		}else{
			$this->connected = true;
			return $this->sftp;
		}
	}

	public function sftp_list(){
	// Muestra listado de archivos en el servidor
		return $this->sftp->rawlist();
	}

	public function sftp_put($fileLocal=false, $fileRemote=false){
	// Sube un archivo al servidor
		if($fileLocal && $fileRemote){
			if($this->sftp->put($fileRemote, $fileLocal))
				return true;
		}else{
			return false;
		}
	}

	public function sftp_get($fileLocal=false, $fileRemote=false){
	// Descarga un archivo del servidor
		if($fileLocal && $fileRemote){
			if($this->sftp->get($fileRemote, $fileLocal))
				return $this->sftp->getSFTPLog();
		}else{
			return false;
		}
	}

	public function sftp_delete($fileRemote=false){
	// Elimina un archivo en el servidor
		if($fileRemote){
			if($this->sftp->delete($fileRemote, true)) #Recursivo
				return true;
		}else{
			return false;
		}
	}

	public function sftp_rename($fileRemote=false, $newFileRemote=false){
	// Renombra un archivo en el servidor
		if($fileRemote){
			if($this->sftp->rename($fileRemote, $newFileRemote))
				return true;
		}else{
			return false;
		}
	}

	public function sftp_touch($fileRemote=false){
	// Crear un archivo en el servidor
		if($fileRemote){
			if($this->sftp->touch($fileRemote))
				return true;
		}else{
			return false;
		}
	}

	public function sftp_chmod($fileRemote=false, $attr='0777'){
	// Asigna privilegios a un archivo en el servidor
		if($fileRemote){
			if($this->sftp->chmod($attr, $fileRemote)) #Recursivo
				return true;
		}else{
			return false;
		}
	}

	public function sftp_chown($fileRemote=false, $uid=false){
	// Asigna owner a un archivo en el servidor
		if($fileRemote){
			if($this->sftp->chown($fileRemote, $uid, true)) #Recursivo
				return true;
		}else{
			return false;
		}
	}

	public function sftp_chgrp($fileRemote=false, $gid=false){
	// Asigna group a un archivo en el servidor
		if($fileRemote){
			if($this->sftp->chgrp($fileRemote, $gid, true)) #Recursivo
				return true;
		}else{
			return false;
		}
	}

	public function sftp_log(){
	// Obtiene el log de eventos realizados en el servidor
		return $this->sftp->getSFTPLog();		
	}
}
?>