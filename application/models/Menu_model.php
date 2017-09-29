<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Menu_model extends IS_Model {

	public function get_menu($ids_menu = false) {
		$tbl    = $this->tbl;
		$filter = $ids_menu? "AND id_menu IN ($ids_menu)" : '';
		$sql    = "SELECT * FROM $tbl[menu]
				   WHERE activo = 1 $filter
				   ORDER BY id_padre ASC, orden ASC";
		$sql    = $this->db->query($sql);
		if($sql->num_rows() >= 1) {
			return $sql->result_array();
		} else {
			return false;
		}
	}
}

/* End of file menu_model.php */
/* Location: ./application/models/menu_model.php */