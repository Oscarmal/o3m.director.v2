<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Usuarios_perfiles_model extends IS_Model {

	public function create_usuario_perfil($data) {
		$tbl    = $this->tbl;
		if($data && is_array($data)){
			return $this->db->insert($tbl['usuarios_perfiles'],$data)? $this->db->insert_id() : false;
		}
		return null;
	}

	public function update_usuario_perfil($data, $id_usuario) {
		$tbl = $this->tbl;
		$this->db->set("edit_timestamp","now()", false);
		$this->db->where('id_usuario', $id_usuario);
		return $this->db->update($tbl['usuarios_perfiles'], $data)? true : false;
	}

	public function get_usuarios($data = array()) {
		$usuario  = isset($data['id_usuario'])? "AND up.id_usuario = $data[id_usuario]" : '';
		$personal = isset($data['id_personal'])? "AND up.id_personal = $data[id_personal]" : '';
		$tbl = $this->tbl;
		$sql = "SELECT 
				up.id_usuario,
				CONCAT_WS(' ', p.nombre, p.paterno, p.materno) AS nombre_completo,
				p.id_personal,
				p.nombre,
				p.materno,
				p.paterno,
				per.id_perfil,
				per.perfil,
				-- p.mail,
				-- p.telefono,
				r.id_rol,
				r.rol,
				e.id_empresa,
				-- e.empresa,
				s.id_sucursal,
				s.sucursal,
				pa.id_pais,
				pa.pais,
				u.clave
				FROM $tbl[usuarios_perfiles] AS up
				INNER JOIN $tbl[usuarios] AS u ON up.id_usuario = u.id_usuario
				LEFT JOIN $tbl[personales] AS p ON p.id_personal = up.id_personal
				LEFT JOIN $tbl[perfiles] AS per ON per.id_perfil = up.id_perfil
				LEFT JOIN $tbl[roles] AS r ON r.id_rol = up.id_rol
				LEFT JOIN $tbl[empresas] AS e ON e.id_empresa = up.id_empresa
				LEFT JOIN $tbl[sucursales] AS s ON s.id_sucursal = up.id_sucursal
				LEFT JOIN $tbl[paises] AS pa ON pa.id_pais = up.id_pais
				WHERE up.activo = 1 $usuario $personal";
		$sql    = $this->db->query($sql);
		if($sql->num_rows() >= 1) {
			return $sql->result_array();
		} else {
			return false;
		}
	}

	public function get_usuarios_perfiles($data = array()) {
		$id_estacion  = isset($data['id_estacion'])? "AND up.id_estacion = $data[id_estacion]" : '';
		$tbl = $this->tbl;
		$sql = "SELECT *
				FROM $tbl[usuarios_perfiles] AS up
				WHERE up.activo = 1 $id_estacion";
		$sql    = $this->db->query($sql);
		if($sql->num_rows() >= 1) {
			return $sql->result_array();
		} else {
			return false;
		}
	}

	public function get_usuarios_perfiles_no_sync($data = array()) {
		$id_estacion  = isset($data['id_estacion'])? "AND up.id_estacion = $data[id_estacion]" : '';
		$tbl = $this->tbl;
		$sql = "SELECT *
				FROM $tbl[usuarios_perfiles] AS up
				WHERE up.activo = 1 AND (up.sync=0 OR up.sync IS NULL) $id_estacion";
		$sql    = $this->db->query($sql);
		if($sql->num_rows() >= 1) {
			return $sql->result_array();
		} else {
			return false;
		}
	}

	public function update_usuarios_perfiles_sync($data) {
		$tbl = $this->tbl;
		$this->db->where("id_estacion",$data['id_estacion'], false);
		return $this->db->update($tbl['usuarios_perfiles'], $data)? true : false;
	}

	public function get_usuarios_estacion($data = array()) {
		$usuario  = isset($data['id_usuario'])? "AND up.id_usuario = $data[id_usuario]" : '';
		$personal = isset($data['id_personal'])? "AND up.id_personal = $data[id_personal]" : '';
		$tbl = $this->tbl;
		$sql = "SELECT 
				up.id_usuario,
				CONCAT_WS(' ', p.nombre, p.paterno, p.materno) AS nombre_completo,
				p.id_personal,
				p.nombre,
				p.materno,
				p.paterno,
				per.id_perfil,
				per.perfil,
				p.mail,
				p.telefono,
				r.id_rol,
				r.rol,
				u.dias_caducidad,
				u.clave,
				u.usuario
				FROM $tbl[usuarios_perfiles] AS up
				INNER JOIN $tbl[usuarios] AS u ON up.id_usuario = u.id_usuario
				LEFT JOIN $tbl[personales] AS p ON p.id_personal = up.id_personal
				LEFT JOIN $tbl[perfiles] AS per ON per.id_perfil = up.id_perfil
				LEFT JOIN $tbl[roles] AS r ON r.id_rol = up.id_rol
				JOIN $tbl[tbl_estaciones_usuarios] AS eu ON up.id_usuario = eu.id_usuario
				WHERE up.activo = 1 $usuario $personal
				AND eu.id_estacion =".$data['id_estacion'];
		$sql    = $this->db->query($sql);
		if($sql->num_rows() >= 1) {
			return $sql->result_array();
		} else {
			return false;
		}
	}

}

/* End of file usuarios_perfiles_model.php */
/* Location: ./application/models/usuarios_perfiles_model.php */