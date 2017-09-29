<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class IS_Model extends CI_Model {

	private $vars, $db1,$db2,$db3; #dbmodel
	public $tbl; #dbmodel

	public function __construct(){
		parent::__construct();	
		/*INICIO db.cfg*/
		$this->vars		= new config_vars();
        $this->vars->load_vars('application/cfg/db.cfg');

        // Base 1 - Principal
		$this->db1 						  	= $this->vars->db['db_mysql_db1'];
		// Tablas del sistema
		$this->tbl['log'] 			  		= $this->db1.'.sys_log';
		$this->tbl['sessions']			  	= $this->db1.'.sys_sessions'; 
		$this->tbl['menu']			   	  	= $this->db1.'.sys_menu'; 
		$this->tbl['grupos']			  	= $this->db1.'.sys_grupos';
		$this->tbl['perfiles']			  	= $this->db1.'.sys_perfiles';
		$this->tbl['user_menu']				= $this->db1.'.sys_usuarios_menu';
		// Tablas de trabajo
		
	}

	public function sanitdb($data=array()) {
		if(count($data)){
			$newData = array();
			foreach ($data as $campo => $valor) {
				$newData[$campo] = $this->db->escape($valor);
			}
		}else{
			$newData = $this->db->escape($data);
		}
		return $newData;
	}
}
