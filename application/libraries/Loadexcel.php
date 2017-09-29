<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
require_once(APPPATH.'third_party/PHPExcel/PHPExcel.php');
/**
* Se crea una libreria de excel
*/
class Loadexcel extends PHPExcel { 
	public $str_compare;
	private $roles_validation;

	function __construct() {
		parent::__construct();
		$this->roles_validation = array( 
			'TITLES' => array(
				'PLAN EMPRESARIAL',				'ESTATUS DEL PLAN',
				'CLAVE CORPORATIVO', 			'ID_EMPRESA', 
				'ACRONIMO_EMPRESA', 			'EMPRESA',
				'ACRONIMO_SEDE', 				'SEDE', 
				'PERSON_ID', 					'NÚMERO DE EMPLEADO',
				'APELLIDO PATERNO',				'APELLIDO MATERNO', 
				'NOMBRES', 						'FECHA DE INGRESO',
				'SUELDO BASE',  				'PRODUCT_ID', 
				'PRODUCTO',  					'ID_OPCION',
				'OPCION',  						'FORMA DE PAGO', 
				'FORMA DE PAGO SUBRROGADO',  	'COSTO_BENEFICIO (IVA y RPF)',
				'DERECHO (IVA y RPF)', 			'MONTO_ADICIONAL',
				'MONTO_NUEVO_DIFERIDO',			'PRIMA_TOTAL',
				'IVA', 							'FECHA_INI_DESC',
				'NIVEL', 						'CC', 
				'DESCRIPCION_CC', 				'TIPO EMPLEADO', 
				'TIPO CONTRATO',				'PORCENTAJE', 
				'PORTAFOLIO', 					'RECARGO_PAGO_FRACCIONADO',	
				'COSTO_EMPLEADO',				'FECHA MOVIMIENTO', 				
				'CAMPO 4',						'CAMPO 5', 
				'CAMPO 6',						'CAMPO 7'
			)
			,'REQUIRED' 	=> array('A', 'C', 'D', 'H', 'I', 'J', 'K', 'M', 'O', 'P', 'R', 'T', 'V', 'Z', 'AC', 'AF', 'AG', 'AK')
			,'REQUIRED_MONTOS' => array('V', 'Z', 'AK')
			,'FORMAT' 		=> array(
				'FORMAT_GENERAL' 			=> array('A', 'B', 'C', 'E', 'F', 'G', 'H', 'K', 'L', 'M', 'Q', 'S', 'T', 'U', 'AC', 'AD', 'AE', 'AF', 'AG', 'AM', 'AN', 'AO', 'AP') 
				,'FORMAT_NUMBER' 			=> array('D', 'I', 'J', 'P', 'R') //NUMEROS ENTEROS MAYORES A 0(CERO)
				,'FORMAT_DATE_YYYYMMDD2' 	=> array('N', 'AB', 'AL') 
				,'FORMAT_NUMBER_00' 		=> array('O', 'V', 'W', 'X', 'Y', 'Z', 'AA', 'AH', 'AI', 'AJ', 'AK') //NUMEROS DECIMALE MAYORES A 0(CERO)
			)
			// ,'RANGE_COLS' => 'A1:Z' // ** RANGO DE LAS COLUMNA A CONSIDERAR PARA LA EXTRACCIÓN DE DATOS [EL NUMERO DEL FILAS ES CALCULABLE]**
		);
	}

	/**
	 * se crea un metodo para la validacion y la lectura de la carga del layout
	 * @param $data array datos del layout para la lectura
	 * @param $roles_validation array estructura para la validación del layout, 
	 *			si el parametro es FALSE, toma la validacion definida por default.
	 * @return $sheetData Array datos del layout en un arreglo bidimencional
	 */
	public function read_layout( $data = array(), $roles_validation = FALSE) {
		try {
			$roles_validation = ($roles_validation ? $roles_validation : $this->roles_validation);
			$inputFileType 	= PHPExcel_IOFactory::identify($data['path_file']);

			if (isset($roles_validation['FORMAT'])) {
				$roles = $roles_validation['FORMAT'];
			}

			$objReader = PHPExcel_IOFactory::createReader($inputFileType);
			$objectPhpExcel = $objReader->load( $data['path_file'] );
			$objectPhpExcel->setActiveSheetIndex(0); 
			//OBTENEMOS LOS FORMATOS PARA LA ASIGNACION A LAS COLUMNAS
			$FORMAT_GENERAL 		= PHPExcel_Style_NumberFormat::FORMAT_GENERAL;
			$FORMAT_NUMBER  		= PHPExcel_Style_NumberFormat::FORMAT_NUMBER;
			$FORMAT_DATE_YYYYMMDD2 	= PHPExcel_Style_NumberFormat::FORMAT_DATE_YYYYMMDD2;
			$FORMAT_NUMBER_00 		= PHPExcel_Style_NumberFormat::FORMAT_NUMBER_00;
			$maxRow = $objectPhpExcel->getActiveSheet()->getHighestRow();

			//SE AGREGA EL FORMATO DE FECHA PARA LAS COLUMAS OBTENIDAS
			if (isset($roles['FORMAT_DATE_YYYYMMDD2'])) {
				foreach ($roles['FORMAT_DATE_YYYYMMDD2'] as $format => $col) {
					$objectPhpExcel->getActiveSheet()
						->getStyle("{$col}2:{$col}{$maxRow}")
					    ->getNumberFormat()
					    ->setFormatCode($FORMAT_DATE_YYYYMMDD2);
				}
			}

			if (isset($roles_validation['RANGE_COLS'])) {
				$sheetData = $objectPhpExcel->getActiveSheet()->rangeToArray($roles_validation['RANGE_COLS'] . $maxRow, NULL, TRUE, TRUE, TRUE);
			} else {
				$sheetData = $objectPhpExcel->getActiveSheet()->toArray(NULL, TRUE, TRUE, TRUE);
			}

			//VALIDACIÓN DE LOS NOMBRES DE LAS COLUMNAS
			if (isset($roles_validation['TITLES'])) {
				self::validation_title($roles_validation['TITLES'], $sheetData[1]);
			}

			//DESCARTAMOS LOS TITULOS PARA LAS SIGUIENTES VALIDACIONES
			unset($sheetData[1]);

			//VALIDACIÓN DE CAMPOS QUE PERTENESCAN AL MISMO GRUPO CORPORATIVO|EMPRESA
			if (isset($data['COL_MACH'])) {
				$this->str_compare = $data['MATCH_DATA'];
				self::validation_match_data($sheetData, $data['COL_MACH']);
				//Si la vigencia es por grupo corporativo,
				//se valida que las empresas del layout pertnezcan a ese grupo
				if($data['COL_MACH'] == 'C') {
					self::validation_empresas_grupo($sheetData, $data);
				}
				
			}

			//VALIDACIÓN DE LOS CAMPOS REQUERIDOS
			if (isset($roles_validation['REQUIRED'])) {
				self::validation_data_required($sheetData, $roles_validation['REQUIRED']);
			}

			//VALIDACION DE CAMPOS NUMERICOS MAYORES A 0 (ID'S)
			// if(isset($roles['FORMAT_NUMBER'])) {
			// 	self::validation_data_numeric($sheetData, $roles['FORMAT_NUMBER'], TRUE);
			// }
			
			//VALIDACION DE CAMPOS NUMERICOS MAYORES A 0 (MONTOS)
			if (isset($roles_validation['REQUIRED_MONTOS'])) {
				self::validation_data_numeric($sheetData, $roles_validation['REQUIRED_MONTOS'], TRUE);
			}

			//VALIDACION DE CAMPOS TIPO FECHA
			if (isset($roles['FORMAT_DATE_YYYYMMDD2'])) {
				self::validation_data_date($sheetData, $roles['FORMAT_DATE_YYYYMMDD2']);
			}

			$response = $sheetData;	

		} catch (Exception  $e) {
			$response['success'] 	= FALSE;
			$response['error'] 		= TRUE;
			$response['msg'] 		= $e->getMessage();
		}

		return $response;
	}

	/**
	 * Función para realizar la validación de los títulos del layout
	 * @param $titles array nombre de los títulos del layout
	 * @param $titles_comparation array nombre de los títulos a comparar
	 * @return boolean TRUE en caso de ser igual, si no, FALSE
	 */
	protected function validation_title($titles, $titles_comparation) {
		$diff_title = array_diff($titles, $titles_comparation);
		if (count($diff_title) OR count($titles) != count($titles_comparation)) {
			$message_exception = lang('layout_diff_titles')."<br>".str_replace('%titles%', implode(', ', $diff_title), lang('layout_titles_no_accep'));
			throw new Exception($message_exception);
		}
		
		unset($diff_title);
		return TRUE;
	}

	/**
	 * Función para realizar la validación de datos que pertenescan a un solo grupo corporativo o a una sola empresa
	 * @param $data array datos a validar
	 * @param $col_name string nombre de la columa a realizar la busqueda de la comparación
	 * @return boolean TRUE en caso de ser igual, si no, FALSE
	 */
	protected function validation_match_data($data, $col_name) {
		$datos = array_column($data, $col_name);
		$datos = array_unique($datos);

		$no_match = array_filter($datos, "self::data_no_match");
		if (count($no_match)) {
			$message_exception = lang('layout_cell_error_match_'.$col_name);
			throw new Exception($message_exception);
		}

		unset($datos, $no_match);
		return TRUE;
	}

	/**
	 * Función para validar que las empresas pertenecen al grupo corporativo seleccionado
	 * @param  [array] $data                 datos a validar
	 * @param  int $id_grupo_corporativo id del grupo corporativo
	 * @return boolean                       
	 */
	protected function validation_empresas_grupo($data, $data_vigencia) {
		$data = array_column($data, 'D');
		$data = array_unique($data);

		$empresas_grupo = $data_vigencia['empresas_grupo']? array_unique(array_column($data_vigencia['empresas_grupo'], 'id_aon_flex')) : array();
		$no_match = array_diff($data, $empresas_grupo);
		
		if(count($no_match)) {
			throw new Exception(lang('layout_empresas_grupos_diff'));
		}

		unset($data, $no_match);
		return TRUE;
	}
	
	/**
	 * Función para realizar la validación de los campos requeridos del layout
	 * @param $data array datos a validar
	 * @param $cols_name_required array nombre de las columans a validar
	 * @return boolean TRUE en caso de ser igual, si no, FALSE
	 */
	protected function validation_data_required($data, $cols_name_required) {
		foreach ($cols_name_required as $col_name) {
			$datos = array_column($data, $col_name);
			$datos = array_unique($datos, SORT_REGULAR);
			$campos_vacios = array_filter($datos, "self::data_empty");
			if (count($campos_vacios)) {
				$message_exception = str_replace('%col_name%', $col_name, lang('layout_cell_required'));
				throw new Exception($message_exception);
			}
			unset($datos, $campos_vacios);
		}
		
		return TRUE;
	}

	/**
	 * Función para realizar la validación de los campos numericos del layout
	 * @param $data array datos a validar
	 * @param $cols_number array nombre de las columans a validar
	 * @param $only_positive_numbers boolean TRUE or FALSE para la validación de solo numeros mayores o igual a 0 (Cero)
	 * @return boolean TRUE en caso de ser igual, si no, FALSE
	 */
	protected function validation_data_numeric($data, $cols_number, $only_positive_numbers = FALSE) {
		foreach ($cols_number as $col_name) {
			$datos = array_column($data, $col_name);
			$datos = array_unique($datos);

			$no_numericos = array_filter($datos, "self::data_no_numeric");
			if (count($no_numericos)) {
				$message_exception = str_replace('%col_name%', $col_name, lang('layout_cell_numeric'));
				throw new Exception($message_exception);
			}

			//VALIDACIÓN SOLO NUMEROS ENTEROS POSITIVOS
			if($only_positive_numbers) {
				$numeros_negativos = array_filter($datos, "self::data_negative_number");
				if (count($numeros_negativos)) {
					$message_exception = str_replace('%col_name%', $col_name, lang('layout_cell_numeric_negative'));
					throw new Exception($message_exception);
				}
				unset($numeros_negativos);
			}
			unset($datos, $no_numericos);
		}

		return TRUE;
	}

	/**
	 * Función para realizar la validación de los campos tipo fecha del layout
	 * @param $data array datos a validar
	 * @param $cols_date array nombre de las columans a validar
	 * @return boolean TRUE en caso de ser igual, si no, FALSE
	 */
	protected function validation_data_date($data, $cols_date) {
		foreach ($cols_date as $col_name) {
			$datos = array_column($data, $col_name);
			$datos = array_unique($datos);

			$no_fechas = array_filter($datos, "self::data_no_date");
			if (count($no_fechas)) {
				$message_exception = str_replace('%col_name%', $col_name, lang('layout_cell_date'));
				throw new Exception($message_exception);
			}
			unset($datos, $no_fechas);
		}

		return TRUE;
	}

	/**
	 * Función para verificar si el valor(parametro) está vacío
	 * @param $data dato a validar
	 * @return boolean TRUE si está vacío, si no, FALSE
	 */
	protected function data_empty($data) {
		return (trim($data) == '');
	}

	/**
	 * Functión para verificar si los valores son diferentes
	 * @param $data dato a comparar
	 * @return boolean TRUE si es diferente, si no, FALSE
	 */
	protected function data_no_match($data) {
		$data = trim($data);
		return ($data!=$this->str_compare);
	}

	/**
	 * Función para verificar si el valor(parametro) es un número
	 * @param $data dato a validar
	 * @return boolean TRUE si es número, si no, FALSE
	 */
	protected function data_no_numeric($data) {
		return !is_numeric($data);
	}

	/**
	 * Función para verificar si el valor(parametro) es un número negativo
	 * @param $number número a validar
	 * @return boolean TRUE si es menor a 0(cero), si no, FALSE
	 */
	protected function data_negative_number($number) {
		return ($number<0);
	}

	/**
	 * Función para verificar si el valor(parametro) no es una fecha
	 * @param $data dato a validar
	 * @return boolean TRUE si no es fecha, si no, FALSE
	 */
	protected function data_no_date($data) {
		$data = str_replace(array(' ', '/'), '-', $data);
		$separator_date = substr_count( $data, '-');
		if ($separator_date != 2 OR strlen($data) != 10) {
			return TRUE;
		}

		list($anio, $mes, $dia) = explode('-', $data);
		return !checkdate($mes, $dia, $anio);
	}
}