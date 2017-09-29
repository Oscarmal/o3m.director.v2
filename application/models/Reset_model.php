<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Reset_model extends IS_Model {

	public function set_new_password_local($data=array()) {
		$tbl    = $this->tbl;
		if($data && is_array($data)){
			$this->db->where('id_usuario_externo', $data['id_usuario']);
			$this->db->update($tbl['usuarios_externos'], array('clave'=>$data['clave_nueva'], 'timestamp_edit'=>$data['timestamp'])); 
		}
		return true;
	}

	public function set_new_password_vacaciones($data=array()) {
		$tbl    = $this->tbl;
		if($data && is_array($data)){
		 
		}
		return true;
	}

}

/* End of file reset_model.php */
/* Location: ./application/models/reset_model.php */