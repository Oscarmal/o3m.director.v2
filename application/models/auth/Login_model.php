<?php 
class Login_model extends IS_Model {

	public function get_user($data=array()){
		$tbl = $this->tbl;
		$data 		= $this->sanitdb($data);
	    $usuario 	= (isset($data['usuario']))?" AND a.usuario = $data[usuario]":'';
	    $clave 		= (isset($data['clave']))?"  AND a.clave = $data[clave]":'';
	   $sql = "SELECT 
				 a.id_usuario
				,a.usuario
				,a.id_grupo as id_rol
				,d.grupo as rol
				,a.activo
				,a.login
				,b.id_personal
				,b.nombre
				,b.paterno
				,b.materno
				,CONCAT(b.nombre,' ',IFNULL(b.paterno,''),' ',IFNULL(b.materno,'')) as nombre_completo
				,b.puesto
				,b.sucursal_nomina
				,b.empleado_num
				,b.id_nomina
				,b.email as mail
				,c.nombre as empresa
				,c.id_empresa as id_empresa
				,c.id_nomina as id_empresa_nomina
			    ,b.sucursal_nomina as sucursal
				,c.pais		
				,'1' as id_pais	
				,'1' as id_sucursal	
				,prf.id_perfil
				,prf.perfil
				,prf.id_menu AS user_menu
				,depto.id_line_local_depto
				,depto.id_line
				,depto.line
				,depto.id_localidad
				,depto.localidad
				,depto.id_departamento
				,depto.departamento
				,a.lectura_TC
				,a.timestamp_tc
				,SUM.url
				FROM $tbl[usuarios] a
				LEFT JOIN $tbl[user_menu] AS SUM ON a.id_grupo = SUM.id_grupo
				LEFT JOIN $tbl[perfiles] AS prf ON prf.id_perfil = SUM.id_perfil
				LEFT JOIN $tbl[personales] b ON b.id_personal = a.id_personal
				LEFT JOIN $tbl[empresas] c ON b.id_empresa=c.id_empresa
				LEFT JOIN $tbl[grupos] d ON a.id_grupo=d.id_grupo
				LEFT JOIN $tbl[line_local_depto] depto ON depto.empleado_num=b.empleado_num
				WHERE 1 AND a.activo=1 and b.activo=1 $usuario $clave
				GROUP BY a.id_personal
				LIMIT 1;";
		// debug($sql);
	    $sql    = $this->db->query($sql);
	    if($sql->num_rows() >= 1) {
			return $sql->result_array();
		} else {
			return false;
		}
	}

	public function get_vacaciones_user($data) {
		$tbl = $this->tbl;

	    isset($data['usuario'])	? $this->db->where('usuario', $data['usuario']): FALSE;
	    isset($data['clave'])	? $this->db->where('clave', $data['clave']): FALSE;
		$result = $this->db->select('VU.*, IF(TL.id_lectura IS NULL, 0, 1) AS lectura_TC, TL.timestamp AS timestamp_tc,
				,SP.id_menu AS user_menu, SUM.url')
			->from("$tbl[vw_usuarios] AS VU")
			->join("$tbl[user_menu] AS SUM", "VU.id_rol = SUM.id_grupo", "INNER")
			->join("$tbl[perfiles] AS SP", "SP.id_perfil = SUM.id_perfil", "INNER")
			->join("$tbl[lecturas] AS TL", "VU.empleado_num = TL.empleado_num AND TL.activo = 1", "LEFT")
			->where('VU.activo', 1)
			->get();

			// debug($this->db->last_query());
		if ($result->num_rows()) {
			return  $result->result_array();
		}

		return FALSE;
	}

	public function get_extern_user($data=array()){
		$tbl = $this->tbl;
		$data 		= $this->sanitdb($data);
	    $usuario 	= (isset($data['usuario']))?" AND a.usuario = $data[usuario]":'';
	    $clave 		= (isset($data['clave']))?"  AND a.clave = $data[clave]":'';
	   $sql = "SELECT
	   			 a.id_usuario_externo
	   			,a.id_usuario_externo as id_usuario
	   			,a.empleado_num as id_personal
				,a.nombre
				,a.paterno
				,a.materno
				/*,CONCAT(a.nombre,' ',IFNULL(a.paterno,''),' ',IFNULL(a.materno,'')) as nombre_completo*/
				,a.nombre_completo
				,a.empleado_num
				,a.email AS mail
				,a.usuario
				,a.activo
				,a.timestamp
				,a.id_pais
				,a.id_empresa
				,a.id_empresa_nomina
				,a.user_menu
				,prf.id_menu AS user_menu
				,SUM.url
				,IF(TL.id_lectura IS NULL, 0, 1) AS lectura_TC
				,TL.timestamp AS timestamp_tc
				,SUM.id_grupo AS id_rol
				,1 as externo
				FROM $tbl[usuarios_externos] a
				LEFT JOIN $tbl[user_menu] AS SUM ON a.id_grupo = SUM.id_grupo
				LEFT JOIN $tbl[perfiles] AS prf ON prf.id_perfil = SUM.id_perfil
				LEFT JOIN $tbl[lecturas] AS TL ON a.empleado_num = TL.empleado_num AND TL.activo = 1
				WHERE 1 AND a.activo=1 $usuario $clave
				GROUP BY a.id_usuario_externo
				LIMIT 1;";
		// debug($sql);
	    $sql    = $this->db->query($sql);
	    if($sql->num_rows() >= 1) {
			return $sql->result_array();
		} else {
			return false;
		}
	}
	
}
?>