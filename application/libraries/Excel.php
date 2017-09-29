<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');
require_once(APPPATH.'third_party/PHPExcel/PHPExcel.php');
require_once(APPPATH.'third_party/PHPExcel/PHPExcel/IOFactory.php');

class Excel extends PHPExcel{
	
	public function __construct(){
		parent::__construct();

		//$this->load->model('pae/empleadospae_model');

		
  //   	//--------------
  //   	$CI->load->model('users_model'); 
	}

	


	public function read_excel1($array_params= array()){

		date_default_timezone_set('America/Mexico_City');

		//carga de modelos para lectura de archivos
		$CI =& get_instance();
		$CI->load->model('pae/empleadospae_model');
		$CI->load->model('administracion/periodos/periodos_model');
		$CI->load->model('general/general_model');
		$CI->load->model('temporal/layouttemp_model');
		$CI->load->model('operaciones/layout_model');
		

		
		$CI->load->library('funciones');

		// verificar el rango de fechas
		// y los usuarios
		//fecha inicio y fecha fin

		$CI->layouttemp_model->clearTabletemp_layout();
		$CI->layouttemp_model->clearResumen();
		$empleado = array_key_exists('empleados',$array_params)?$array_params['empleados']:false;


		//print_r($empleado);

		// print_r($empleado);
		// exit;

		//obtemos el catalogo de incidencias
		$cat_incidencias = $CI->general_model->getCalIncidencias();
		
		//obtenemos informacion de incidencias
		$lista_incidencia = array();
		foreach ($cat_incidencias as $key => $incidencia) :
				$lista_incidencia[$incidencia['clave_corta']] = $incidencia['id_incidencia'];
		endforeach;
		$objPHPExcel = PHPExcel_IOFactory::load($array_params['file']);
		//Asigno la hoja de calculo activa
		$objPHPExcel->setActiveSheetIndex(0);
		//Obtengo el numero de filas del archivo
		$numRows = $objPHPExcel->setActiveSheetIndex(0)->getHighestRow();
		$vuelta=1;
		$conetnido = 0;
		$cont=0;
		//$rowx = 8;
		$array_data = array();
		$array_fin_data = array();
		//obtenemos el numero de filas
		$numRows = $objPHPExcel->setActiveSheetIndex(0)->getHighestRow();
		
		//obtnemos la ultima columna
		$highestColumm = $objPHPExcel->setActiveSheetIndex(0)->getHighestColumn(); 
		$letter_base = ord('C');

		$data_user = $array_params['params'];

		//sacamos del archivo el dia inicial de caputra de datos
		$dia_inicio = $objPHPExcel->getActiveSheet()->getCell('C5')->getCalculatedValue();
		//sacamos del archivo el dia final de caputra de datos
		$dia_fin    = $objPHPExcel->getActiveSheet()->getCell($highestColumm.'5')->getCalculatedValue();

		$letter = intval($letter_base)+count($data_user)+2;
		$letter = intval($letter);
		$letter = (string)(chr($letter).'7');
		$val = $objPHPExcel->getActiveSheet()->getCell($letter)->getCalculatedValue();
		if(strlen($val)> 0){
			//$tipo = 'horas';
			$tipo = 1;
			
		}else{
			//$tipo = 'asistencia';
			$tipo = 2;
		}
		if($tipo == 1){
		$letter2 = intval($letter_base)+count($data_user)-1;
		$letter2 = intval($letter2);
		$letter2 = (string)(chr($letter2).'5');
			$dia_fin    = $objPHPExcel->getActiveSheet()->getCell($letter2)->getCalculatedValue();

		}else{
			$dia_fin    = $objPHPExcel->getActiveSheet()->getCell($highestColumm.'5')->getCalculatedValue();
			
			
		}
		//datos empresa
		$datos_empresa_archivo = array();
		$datos_empresa_archivo['empresa_archivo'] = $objPHPExcel->getActiveSheet()->getCell('A1')->getCalculatedValue();
		$datos_empresa_archivo['periodo_archivo'] = $objPHPExcel->getActiveSheet()->getCell('A2')->getCalculatedValue();
		$datos_empresa_archivo['fecha_archivo'] = $objPHPExcel->getActiveSheet()->getCell('A3')->getCalculatedValue();
		//echo $fecha_archivo   = $objPHPExcel->getActiveSheet()->getCell('A3')->getCalculatedValue();
		//trabajamos con la fecha actual y obtenmos el año en curso
		$actual           = date('Y-m-d');
		$cadena_fecha_actual = explode('-', $actual);
		$ano = $cadena_fecha_actual[0];

		//obtnemos el mes del archivo y lo pasamos a numero
		$mes = $objPHPExcel->getActiveSheet()->getCell('C4')->getCalculatedValue();
		$mes_num = $CI->funciones->getMesNum(strtolower($mes));


		//sacamos los rangos de fecha para obtener la informacion del periodo que corresponde
		$fecha_inicio = $ano.'-'.$mes_num.'-'.$dia_inicio;
		//$fecha_inicio = $dia_inicio.'/'.$mes_num.'/'.$ano;
		$fecha_fin    = $ano.'-'.$mes_num.'-'.$dia_fin;
		//obtemos la informacion del periodo

		$inicio_time = strtotime($fecha_inicio);
		$fecha_inicio = date('Y-m-d',$inicio_time);

		$fin_time    = strtotime($fecha_fin);
		$fecha_fin   = date('Y-m-d',$fin_time);
		//obtenemos periodos
		//$periodo_info = $CI->periodos_model->getPeriodo(false,$fecha_inicio,$fecha_fin,$limit =false);
		$periodo_info = $CI->periodos_model->getPeriodo2(array(
							'id_periodo' =>$array_params['id_periodo']
			));

		//el periodo no existe terminamos proceso
		if(count($periodo_info)<0){
			return false;
		}

		//informacion del periodo

		$fecha_ini_periodo = isset($periodo_info[0]['fecha_inicio'])?$periodo_info[0]['fecha_inicio']:false;
		$fecha_fin_periodo = isset($periodo_info[0]['fecha_fin'])?$periodo_info[0]['fecha_fin']:false;

		//otenemos rango se fecha para sacar informacion 
		$lista_fecha = $CI->funciones->lista_fechas($fecha_ini_periodo,$fecha_fin_periodo);

		// print_r($lista_fechas);
		// exit;
		if($tipo == 1){
			$total_registros = intval(count($lista_fecha['dias_text']))+1;
		}else{
			$total_registros = intval(count($lista_fecha['dias_text']));
		}
		
		
		//datos para registros de dia por dia
		$total_domingos = 0;
		$total_sabados  = 0;
		$array_temporal = array();


		$array_usuario = array();
		$array_usuario1 = array();
		$array_finalx = array();

		$data_error = false;


		//obtemos el total de filas,iniciamos en indice 8 donde esta la data
		$contador = 0;
		$bandera_registro = $total_registros-1;
		for ($indice = 8; $indice <= $numRows; $indice++){
			
			//array que contiene la lista de dias con la primera letra
			$var_letras = $lista_fecha['dias_text'];

			//recorremos la lista de dias
			$emp = $CI->empleadospae_model->getEmpleado($objPHPExcel->getActiveSheet()->getCell($this->num_2_letter(1).$indice)->getCalculatedValue());


			for ($row=0; $row <$total_registros; $row++) { 
				
				//valor de columna segun la captura
				$valor = $objPHPExcel->getActiveSheet()->getCell($this->num_2_letter($row+5).$indice, 'A')->getCalculatedValue();
				

				

				array_push($array_temporal, $valor);
				//fecha de registro

				$fecha    = $ano.'-'.$mes_num.'-'.$lista_fecha['dias_num'][$row];
				$fecha_time = strtotime($fecha);
				$fecha_inicio = date('Y-m-d',$fecha_time);
				if($tipo == 2){

					$array_usuario['dia'] = $data_user[$row];
						$valor = strtoupper($valor);
					if($lista_incidencia[$valor] == ''){
						$array_usuario['valido'] = "falso";
						$array_usuario['id_tipo_incidencia'] = null;	
						//$data_error = true;

					}else{
						$array_usuario['valido'] = null;
						$array_usuario['id_tipo_incidencia'] = $lista_incidencia[$valor];
					}
					
					
				}
				$array_usuario['fecha']              = $fecha_inicio;

				if($tipo == 1){
					// $tipox = gettype($valor);
					//   if($tipox == 'double'){
						$array_usuario['cantidad'] = $valor;
						$array_usuario['id_tipo_incidencia'] = 2;	

						
					  //}
					
				}
				if(count($lista_fecha['dias_num'][$row]) == 0 and $tipo == 1){
					$array_usuario['fecha']              = null;
					$array_usuario['id_tipo_incidencia'] = 8;

				}
				//$array_usuario['id_layout']          = 0;
				$array_usuario['valor']          	 = $valor;

				if($tipo == 1){
					if($valor == null){
							// $array_usuario['valor']   = 0;
							$array_usuario['cantidad'] = 0;
						}
				}
				$array_usuario['valido_tipo']        = gettype($valor);
				$array_usuario['tipo_archivo']       = $tipo;

				if($row == $bandera_registro){
					$array_usuario['bandera'] =1 ;
				}else{
					$array_usuario['bandera'] = null ;
				}
				$array_usuario['sueldo_diario']      = isset($emp[0]['id_sueldo_diario'])?$emp[0]['id_sueldo_diario']:0;
				
				$id_empleado_archivo = $objPHPExcel->getActiveSheet()->getCell($this->num_2_letter(1).$indice)->getCalculatedValue();

				$array_usuario['nombre_empleado']        = $objPHPExcel->getActiveSheet()->getCell($this->num_2_letter(4).$indice)->getCalculatedValue();

				if(intval($empleado[$contador]['id_empleado']) == intval($id_empleado_archivo)){
					$array_usuario['id_empleado']        = $objPHPExcel->getActiveSheet()->getCell($this->num_2_letter(1).$indice)->getCalculatedValue();
					$array_usuario['id_empleado_real']   = $objPHPExcel->getActiveSheet()->getCell($this->num_2_letter(3).$indice)->getCalculatedValue();
					$array_usuario['id_empleado_valido'] = 1;
				}else{
					$array_usuario['id_empleado'] = $id_empleado_archivo;
					$array_usuario['id_empleado_real'] = $objPHPExcel->getActiveSheet()->getCell($this->num_2_letter(3).$indice)->getCalculatedValue();
					$array_usuario['id_empleado_valido'] = 0;
					$data_error = true;


				}
				//$array_usuario['id_empleado']        = $objPHPExcel->getActiveSheet()->getCell($this->num_2_letter(1).$indice)->getCalculatedValue();
				$array_usuario1[]					 =  $array_usuario;

				$array_usuario = array();

				

			}

			$contador++;

			$array_data['laborales']	   =implode(',',$array_temporal);
			$array_data['total_domingos']  = $total_domingos;
			$array_data['total_sabados']   = $total_sabados;
			$array_data['empleado_id_x']  	   =  $objPHPExcel->getActiveSheet()->getCell($this->num_2_letter(1).$indice)->getCalculatedValue();
			$array_data['empleado_sueldo_diario'] = isset($emp[0]['id_sueldo_diario'])?$emp[0]['id_sueldo_diario']:0;
			$array_data['puesto'] = isset($emp[0]['position'])?$emp[0]['position']:'';
			$array_data['total_domingos_monetario'] = round(($array_data['empleado_sueldo_diario']*2)*$array_data['total_domingos']);
			$array_data['prima_dominical'] = round(($array_data['empleado_sueldo_diario']*.25)*$array_data['total_domingos']);
			$array_data['ccl']  = ($array_data['empleado_sueldo_diario']*$array_data['total_sabados'])*1.4;
			$array_data['P018'] = $array_data['ccl']+$array_data['total_domingos_monetario'];
			
			$array_fin_data[] = $array_data;
			
			$array_data = array();
			$total_domingos = 0;
			$total_sabados = 0;
			$array_temporal = array();
		}
			
			$rand = strtotime("now");
			$archivo['nombre_archivo']  	=$array_params['nombre_archivo'];
			$archivo['id_usuario']      	=$array_params['id_usuario'];
			$archivo['id_empresa']	   		=isset($periodo_info[0]['id_empresa'])?$periodo_info[0]['id_empresa']:'';
			$archivo['id_periodo']	   		=isset($periodo_info[0]['id_periodo'])?$periodo_info[0]['id_periodo']:'';
			$archivo['id_pais']	   		    =isset($periodo_info[0]['id_pais'])?$periodo_info[0]['id_pais']:'';

			$archivo['id_estatus']      	=1;
			$archivo['id_tipo_layout']      =$tipo;
			$archivo['token']      			=$rand;

			$archivo['id_sucursal']			=($array_params['id_sucursal'])?$array_params['id_sucursal']:null;

			$id_resumen = $CI->layouttemp_model->insertarResumen($archivo);

			foreach ($array_usuario1 as $key => $value) {
				$array_usuario1[$key]['id_layout_resumen'] = $id_resumen;
				$array_usuario1[$key]['token'] = $rand;
				
			}
			
			$CI->layouttemp_model->InsertarLayoutTemp($array_usuario1);
			

			$data_response['data_archivo'] = $CI->layouttemp_model->verDetalle();


			$data_response['archivo']		= $archivo;
			$data_response['id_resumen']	= $id_resumen;
			$data_response['data_error']	= $data_error;
			$data_response['tipo_archivo']	= $tipo;
			$data_response['empresa_info']	= $datos_empresa_archivo;
			$data_response['token']			= $rand;

			return $data_response;

	}


	public function generaLayoutHorasExtraNomina($data_arrray = array()){
		$data   			= (array_key_exists('data',$params)) ? $params['data'] : false;
		$headers 			= (array_key_exists('headers',$params)) ? $params['headers'] : false;
		$lang   			= (array_key_exists('lang',$params)) ? $params['lang'] : false;

		//cramo objeto
		$objPHPExcel = new PHPExcel();

		//definimos propiedades
		$objPHPExcel->getProperties()->setCreator("IS Intelligent Solution")
									->setLastModifiedBy("IS Intelligent Solution")
									->setKeywords("office 2007 openxml");
		//Construccion de las fechas para el usuario
			foreach($headers as $row => $value) {
					$row1 = "1";
					$objPHPExcel->getActiveSheet()->setCellValue($this->num_2_letter($row+4).$row1, $value);
					
					$objPHPExcel->getActiveSheet()->getColumnDimension($this->num_2_letter($row+4))->setWidth(15);

        	}

        if($save){
				$pathfile  = 'assets/docs/'.$title.'.xlsx';
				$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');
				$objWriter->save(str_replace('.php', '.xlsx', __FILE__));
				rename(APPPATH.'libraries/excel.xlsx', $pathfile);
				return $pathfile;
			}else{
				header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
				header('Content-Disposition: attachment;filename="'.$title.'.xlsx"');
				ob_end_clean();
				$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');
				$objWriter->save('php://output');
				exit;
		}
    			


	}
	public function generarLayout($params = array(), $save = false,$version = '2007'){




	 	// DATOS GENERALES
		$title   			= (array_key_exists('title',$params)) ? $params['title'] : 'IS_XLSX';
		$headers 			= (array_key_exists('headers',$params)) ? $params['headers'] : false;
		$items   			= (array_key_exists('items',$params)) ? $params['items'] : false;

		$fechas 			= (array_key_exists('fechas',$params)) ? $params['fechas'] : false;
		$dias  				= (array_key_exists('dias',$params)) ? $params['dias'] : false;
		$empleados  		= (array_key_exists('empleados',$params)) ? $params['empleados'] : false;
		$contenido  		= (array_key_exists('contenido',$params)) ? $params['contenido'] : false;
		$tpl        		= (array_key_exists('tpl'      ,$params)) ? $params['tpl']      : false;
		$titulo_mes		 	= (array_key_exists('titulo_mes',$params)) ? $params['titulo_mes']      : false;

		$titulos  			= (array_key_exists('titulos',$params)) ? $params['titulos']      : false;
		$tipo_incidencia  	= (array_key_exists('tipo_incidencia',$params)) ? $params['tipo_incidencia'] : false;
		$periodo  	        = (array_key_exists('periodo',$params)) ? $params['periodo'] : false;


		$header_mes_texto  	= (array_key_exists('header_mes_texto',$params)) ? $params['header_mes_texto'] : false;


		$nombre_empresa  	= (array_key_exists('nombre_empresa',$params)) ? $params['nombre_empresa'] : false;
		$nombre_sucursal  	= (array_key_exists('nombre_sucursal',$params)) ? $params['nombre_sucursal'] : false;

		$catalogo_incidencias = (array_key_exists('catalogo_incidencias',$params)) ? $params['catalogo_incidencias'] : false;
		
		//cramo objeto
		$objPHPExcel = new PHPExcel();

		//definimos propiedades
		$objPHPExcel->getProperties()->setCreator("IS Intelligent Solution")
									->setLastModifiedBy("IS Intelligent Solution")
									->setKeywords("office 2007 openxml");



		//Verifica que exitan estos datos basicos

		// print_r($empleados);
		// exit;

		if($params){
			

			//Construccion de las fechas para el usuario
			foreach($fechas as $row => $value) {
					$row1 = "5";
					$objPHPExcel->getActiveSheet()->setCellValue($this->num_2_letter($row+4).$row1, $value);
					
					$objPHPExcel->getActiveSheet()->getColumnDimension($this->num_2_letter($row+4))->setWidth(15);

        	}
        	//Construccion de las dias en texto 
        	foreach($dias as $row => $value) {
					$row1 = "6";
					
            		$objPHPExcel->getActiveSheet()->setCellValue($this->num_2_letter($row+4).$row1, $value);


        	}
        	//agrega esta columna en caso de ser horas estra
			// if($tipo_incidencia == 1):
			// 		$row1 = "7";
			// 		$objPHPExcel->getActiveSheet()->setCellValue($this->num_2_letter(count($dias)+4).$row1,'Tiempo Adicional');			 

			// 		$objPHPExcel->getActiveSheet()->getColumnDimension($this->num_2_letter(count($dias)+4))->setWidth(10);	       			
		 //    endif;

		    



        	foreach($contenido as $row => $value) {
					$row1 = "7";
					
            		$objPHPExcel->getActiveSheet()->setCellValue($this->num_2_letter($row+1).$row1, $value);
        	}


			$rowx = 7;
			$rowy = 8;
			// inserta el numero de empleado en la exel

			// print_r($empleados);
			// exit;
        	foreach ($empleados as $indice => $empleado) :

							
			        			for ($row=0; $row<count($fechas) ; $row++) { 	
			        				if($tipo_incidencia != 1):
			        				$objPHPExcel->getActiveSheet()->setCellValue($this->num_2_letter($row+4).$rowy, 'A');
			        				endif;		
			        				// $objPHPExcel->getActiveSheet()->getColumnDimension($this->num_2_letter($row+4))->setWidth(30);	

			        			}
		        			
		        			// echo $rowy."--";
		        			// echo "---";
		        			$objPHPExcel->getActiveSheet()->setCellValue('D'.$rowy, $empleado['fullname']);
		        			
						$rowx++;
						$rowy++;
      //   			endforeach;
        		$objPHPExcel->getActiveSheet()->setCellValue('C'.$rowx, $empleado['numero_empleado']);
        		$objPHPExcel->getActiveSheet()->setCellValue('B'.$rowx, $empleado['id_llave']);
        		$objPHPExcel->getActiveSheet()->setCellValue('A'.$rowx, $empleado['id_empleado']);
        	endforeach;
        	

        	//formatos de celdas

        	$ultima_letra = $objPHPExcel->setActiveSheetIndex(0)->getHighestColumn();
        	
        	$rang = 'A5:'.$ultima_letra.'5';
			$objPHPExcel->getActiveSheet()->getStyle($rang)->applyFromArray($this->defaultStyle_headers());
			$objPHPExcel->getActiveSheet()
    		->getStyle($rang)
    		->applyFromArray(
		        array(
		            'fill' => array(
		                'type' => PHPExcel_Style_Fill::FILL_SOLID,
		                'color' => array('rgb' => '2F75B5')
		            )
		        )
    		);
    		$rang = 'A6:'.$ultima_letra.'6';
    		$objPHPExcel->getActiveSheet()->getStyle($rang)->applyFromArray($this->defaultStyle_headers());
        	$objPHPExcel->getActiveSheet()
    		->getStyle($rang)
    		->applyFromArray(
		        array(
		            'fill' => array(
		                'type' => PHPExcel_Style_Fill::FILL_SOLID,
		                'color' => array('rgb' => '2F75B5')
		            )
		        )
    		);
			
			$cont = 1;
        	$rang = 'A7:'.$ultima_letra.'7';
        	$objPHPExcel->getActiveSheet()->getStyle($rang)->applyFromArray($this->defaultStyle_headers());
        	foreach (range('A', $objPHPExcel->getActiveSheet()->getHighestDataColumn()) as $col) {
        		
				$objPHPExcel
        		->getActiveSheet()
        		->getColumnDimension($col)
        		->setAutoSize(true);
    
				
			}

			$objPHPExcel->getActiveSheet()
    		->getStyle($rang)
    		->applyFromArray(
		        array(
		            'fill' => array(
		                'type' => PHPExcel_Style_Fill::FILL_SOLID,
		                'color' => array('rgb' => '1F4E78')
		            )
		        )
    		);



			
    		$objPHPExcel->getActiveSheet()->calculateColumnWidths();
			foreach(range('A', $objPHPExcel->getActiveSheet()->getHighestDataColumn()) as $col) {
    			$objPHPExcel->getActiveSheet()->getColumnDimension($col)->setAutoSize(false);

			}
    		
    		
    		for ($row=0; $row<count($fechas) ; $row++) { 	
			        				// echo $this->num_2_letter($row+4)."--";
			        				$objPHPExcel->getActiveSheet()->getColumnDimension($this->num_2_letter($row+5))->setWidth(4);	

			        			}
			if($tipo_incidencia == 1):
					$row1 = "7";
					$objPHPExcel->getActiveSheet()->setCellValue($this->num_2_letter(count($dias)+4).$row1,'Tiempo Adicional');			 
					$objPHPExcel->getActiveSheet()->getColumnDimension($this->num_2_letter(count($dias)+4))->setWidth(25);	       			
					$objPHPExcel->getActiveSheet()->getStyle($this->num_2_letter(count($dias)+4).$row1)->applyFromArray($this->defaultStyle_headers());

		    endif;

    		 // print_r($catalogo_incidencias);

			//si es asistencia agregar matricula
		    if($tipo_incidencia == 2):

					$row1 = 2;
					$rowx = 3;
					//$objPHPExcel->getActiveSheet()->setCellValue($this->num_2_letter(count($fechas)+7).$row1,'Catalogo Incidencias');			        

					//cabezera
					$rango1= $this->num_2_letter(count($fechas)+7)."1:".$this->num_2_letter(count($fechas)+8).'1';

			 		$objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow((count($fechas)+6), 1, 'Incidencias permitidas');
			 		$objPHPExcel->getActiveSheet()->mergeCells($rango1);	
			 		$objPHPExcel->getActiveSheet()->getStyle($rango1)->applyFromArray($this->defaultStyle_headers());


					$objPHPExcel->getActiveSheet()->setCellValue($this->num_2_letter(count($fechas)+7).$row1,'Clave');

					$objPHPExcel->getActiveSheet()->setCellValue($this->num_2_letter(count($fechas)+8).$row1,'Valor');
					
					$objPHPExcel->getActiveSheet()->getColumnDimension($this->num_2_letter(count($fechas)+8))->setWidth(20);
					$rango= $this->num_2_letter(count($fechas)+7).$row1.":".$this->num_2_letter(count($fechas)+8).$row1;
					$objPHPExcel->getActiveSheet()->getStyle($rango)->applyFromArray($this->defaultStyle_headers());
					
					foreach ($catalogo_incidencias as $key => $value) :

							$objPHPExcel->getActiveSheet()->setCellValue($this->num_2_letter(count($fechas)+7).$rowx, $value['clave_corta']);
							$objPHPExcel->getActiveSheet()->setCellValue($this->num_2_letter(count($fechas)+8).$rowx, $value['incidencia']);

						$rowx++;
					endforeach;

		    endif;
		    

			 //Creacccion de headers y union de celdas

			 $rang = 'C4:'.$ultima_letra.'4';
			 $objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow(2, 4,$header_mes_texto);
			 $objPHPExcel->getActiveSheet()->mergeCells($rang);

			 $rang = 'A1:B1';
			 
			$objPHPExcel->getActiveSheet()->getColumnDimension('B')->setWidth(18);

			 $objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow(0, 1,'Empresa: '.$nombre_empresa.' Sucursal:'.$nombre_sucursal);
			 $objPHPExcel->getActiveSheet()->mergeCells($rang);
			 $objPHPExcel->getActiveSheet()->getColumnDimension('A')->setWidth(40);
			 $objPHPExcel->getActiveSheet()->getStyle($rang)->applyFromArray($this->defaultStyle_headers1());

			 $rang1 = 'A2:B2';
			 $objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow(0, 2,'Periodo: '.$periodo[0]['id_periodo']);
			 $objPHPExcel->getActiveSheet()->mergeCells($rang1);
			 $objPHPExcel->getActiveSheet()->getStyle($rang1)->applyFromArray($this->defaultStyle_headers1());
			 
			 $objPHPExcel->getActiveSheet()->getStyle($rang)->applyFromArray($this->defaultStyle_headers1());

			 $rang = 'A3:B3';
			 $objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow(0, 3, $titulos[2]);
			 $objPHPExcel->getActiveSheet()->mergeCells($rang);
			 $objPHPExcel->getActiveSheet()->getStyle($rang)->applyFromArray($this->defaultStyle_headers1());

			 $rang = 'A4:B4';
			 $objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow(0, 4, "TIEMPO EXTRA POR ROTACIÓN DE TURNO Y NORMAL");
			 $objPHPExcel->getActiveSheet()->mergeCells($rang);
			 $objPHPExcel->getActiveSheet()->getStyle($rang)->applyFromArray($this->defaultStyle_headers1());

			 $objPHPExcel->getDefaultStyle()
    		->getAlignment()
    		->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
			//metodo para procesar el archivo
        	if($save){
				$pathfile  = 'assets/docs/'.$title.'.xlsx';
				$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');
				$objWriter->save(str_replace('.php', '.xlsx', __FILE__));
				rename(APPPATH.'libraries/excel.xlsx', $pathfile);
				return $pathfile;
			}else{
				header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
				header('Content-Disposition: attachment;filename="'.$title.'.xlsx"');
				ob_end_clean();
				$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');
				$objWriter->save('php://output');
				exit;
			}
    			

		}



	}

	



	public function prueba(){

	
		$objPHPExcel = new PHPExcel();
			$objPHPExcel->getProperties()->setCreator("IS Intelligent Solution")
									->setLastModifiedBy("IS Intelligent Solution")
									->setKeywords("office 2007 openxml");
		// Agregar Informacion
		$objPHPExcel->setActiveSheetIndex(0)
		->setCellValue('A1', 'Valor 1')
		->setCellValue('B1', 'Valor 2')
		->setCellValue('C1', 'Total')
		->setCellValue('A2', '10')
		->setCellValue('C2', '=sum(A2:B2)');

		// Renombrar Hoja
		$objPHPExcel->getActiveSheet()->setTitle('Tecnologia Simple');

		// Establecer la hoja activa, para que cuando se abra el documento se muestre primero.
		$objPHPExcel->setActiveSheetIndex(0);

		// Se modifican los encabezados del HTTP para indicar que se envia un archivo de Excel.
		header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
		header('Content-Disposition: attachment;filename="pruebaReal.xlsx"');
		header('Cache-Control: max-age=0');
		$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');
		$objWriter->save('php://output');
		exit;
	}

	private function defaultStyle_headers(){
		$styleHeaders = array(
								'alignment' => array(
											'horizontal' => PHPExcel_Style_Alignment::VERTICAL_CENTER,
								),
						        'fill' => array(
						            'type' => PHPExcel_Style_Fill::FILL_SOLID,
						            'color' => array('rgb' => 'ef5350'),
						        ),
								'font'  => array(
								        'bold'  => true,
								        'color' => array('rgb' => 'FFFFFF'),
								        'name'  => 'Calibri',
								        'size'  =>11
								        )
								);
		return $styleHeaders;
	}
	private function defaultStyle_headers1(){
		$styleHeaders = array(
								'alignment' => array(
											'horizontal' => PHPExcel_Style_Alignment::VERTICAL_JUSTIFY
								),
						        'fill' => array(
						            'type' => PHPExcel_Style_Fill::FILL_SOLID,
						            'color' => array('rgb' => 'FFFFFF'),
						            
						        ),
								'font'  => array(
								        'bold'  => true,
								        'name'  => 'Calibri',
								        'size'  =>11
								        )
								);
		return $styleHeaders;
	}
	public function generate_xlsx($params = array(), $save = false){
		$title   = (array_key_exists('title',$params)) ? $params['title'] : 'IS_XLSX';
		$headers = (array_key_exists('headers',$params)) ? $params['headers'] : false;
		$items   = (array_key_exists('items',$params)) ? $params['items'] : false;
		if($headers && $items){
			$objPHPExcel = new PHPExcel();
			$objPHPExcel->getProperties()->setCreator("IS Intelligent Solution")
									->setLastModifiedBy("IS Intelligent Solution")
									->setTitle($title)
									->setSubject($title)
									->setDescription($title)
									->setKeywords("office 2007 openxml");

			$objDrawing = new PHPExcel_Worksheet_Drawing();
			$objDrawing->setName('Logo');
			$objDrawing->setDescription('Logo');
			$objDrawing->setPath('./assets/images/logo_grupo_pae.png');
			$objDrawing->setHeight(36);
			$objDrawing->setWorksheet($objPHPExcel->getActiveSheet());
			
			$countHeaders = count($params['headers'])+64;
			$column       = chr($countHeaders).'3';

			$objPHPExcel->getActiveSheet()->getStyle('A1')->getFont()->setName('Candara');
			$objPHPExcel->getActiveSheet()->getStyle('A1')->getFont()->setSize(22);
			$objPHPExcel->getActiveSheet()->getStyle('A1')->getFont()->setBold(true);
			$objPHPExcel->getActiveSheet()->getStyle('A1')->getFont()->setUnderline(PHPExcel_Style_Font::UNDERLINE_SINGLE);
			$objPHPExcel->getActiveSheet()->getStyle("A1:".chr($countHeaders).'1')->applyFromArray($this->defaultStyle_headers());
			$objPHPExcel->getActiveSheet()->setCellValue('C1', $title);
	        $objPHPExcel->setActiveSheetIndex(0);
	        
	      	$objPHPExcel->getActiveSheet()->fromArray($params['headers'], null, 'A3');
	      	$objPHPExcel->getActiveSheet()->getStyle("A3:$column")->applyFromArray($this->defaultStyle_headers());
	      	
	      	foreach(range('A',$column) as $columnID) {
			    $objPHPExcel->getActiveSheet()->getColumnDimension($columnID)->setAutoSize(true);
			}
	      	
	      	$items = $objPHPExcel->getActiveSheet()->fromArray($params['items'], null, 'A4'); 
			$objPHPExcel->setActiveSheetIndex(0);
				
			if($save){
				$pathfile  = 'assets/docs/'.$title.'.xlsx';
				$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');
				$objWriter->save(str_replace('.php', '.xlsx', __FILE__));
				rename(APPPATH.'libraries/excel.xlsx', $pathfile);
				return $pathfile;
			}else{
				header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
				header('Content-Disposition: attachment;filename="'.$title.'.xlsx"');
				ob_end_clean();
				$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');
				$objWriter->save('php://output');
				exit;
			}
			
		}else{
			redirect('override_404');
		}
	}
	private function defaultStyle_aviso(){
		$defaultStyle_aviso = array(
									'alignment' => array(
												'horizontal' => PHPExcel_Style_Alignment::VERTICAL_CENTER,
									),
							        'fill' => array(
							            'type' => PHPExcel_Style_Fill::FILL_SOLID,
							            'color' => array('rgb' => 'FF6666'),
							        ),
									'font'  => array(
									        'bold'  => false,
									        'color' => array('rgb' => 'FFFFFF'),
									        'name'  => 'Verdana'
									        ),
									'borders' => array(
											'style' => PHPExcel_Style_Border::BORDER_THIN
										)
								);
		return $defaultStyle_aviso;
	}


	


	public function read_excel($array_params= array()){
		date_default_timezone_set('America/Mexico_City');
		$objPHPExcel = PHPExcel_IOFactory::load($array_params['file']);
		//Asigno la hoja de calculo activa
		$objPHPExcel->setActiveSheetIndex(0);
		//Obtengo el numero de filas del archivo
		$numRows = $objPHPExcel->setActiveSheetIndex(0)->getHighestRow();
		$vuelta=1;
		$conetnido = 0;
		$cont=0;
		for ($indice = 1; $indice <= $numRows; $indice++){
			$i=0;
			$error = false;
			if($conetnido>0){
				if($cont>0){
					//Se retorna si el nombre de las columnas no son validas en el archivo para hacer el insert
					return array('validate_columnas' => $cont);
				}
				foreach ($array_params['params'] as $key => $value){
					$letra = $array_params['range_ini'];
					foreach ($value as $params => $val) {
						$tipo       = ($value['tipo'])? $value['tipo'] : false;
						$requerido = ($value['requerido'])? $value['requerido'] : false;
					}
					$ab = $letra+$i;
					if($tipo=='int'){
						$numero = $objPHPExcel->getActiveSheet()->getCell(chr($ab).$vuelta)->getCalculatedValue();
						if(is_numeric($numero)){
							$dataexcel[$value['name']] =  $numero;
						}else{
							$dataexcel[$value['name']] =  $numero;
							$error = true;
						}
					}elseif($tipo=='date'){
						$fecha=date("d-m-Y", PHPExcel_Shared_Date::ExcelToPHP($objPHPExcel->getActiveSheet()->getCell(chr($ab).$vuelta)->getCalculatedValue()));
		         		$date = date("d-m-Y",strtotime($fecha.' + 1day'));
		         		$newdate = str_replace('-', '/', $date);
						$dataexcel[$value['name']] =  $newdate;
					}
					else{
						$dataexcel[$value['name']] =  $objPHPExcel->getActiveSheet()->getCell(chr($ab).$vuelta)->getCalculatedValue();	
					}
					$i++;
				}
				
				if(!$error){
					$array_success[]= $dataexcel;
				}else{
					$array_error[]= $dataexcel;
				}
			}else{
				//Realiza la primer vuelta y valida el nombre de las columnas con el array de params
				foreach ($array_params['params'] as $key => $columns) {
					$letra = $array_params['range_ini'];
					$ab = $letra+$i;
					$columna= $objPHPExcel->getActiveSheet()->getCell(chr($ab).$vuelta)->getCalculatedValue();
					if($columna!=$columns['name']){
						$cont++;
					}
					$i++;
				}
			}
			$vuelta++;
			$conetnido++;
			/*dump_var($columna);*/
		}
		return array(
			'success' 			=> $array_success,
			'error' 			=> $array_error,
			'validate_columnas' => $cont);
	}



	// public function read_excel($array_params= array()){
	// 	date_default_timezone_set('America/Mexico_City');
	// 	$objPHPExcel = PHPExcel_IOFactory::load($array_params['file']);
	// 	//Asigno la hoja de calculo activa
	// 	$objPHPExcel->setActiveSheetIndex(0);
	// 	//Obtengo el numero de filas del archivo
	// 	$numRows = $objPHPExcel->setActiveSheetIndex(0)->getHighestRow();
	// 	$vuelta=1;
	// 	$conetnido = 0;
	// 	$cont=0;
	// 	for ($indice = 1; $indice <= $numRows; $indice++){
	// 		$i=0;
	// 		$error = false;
	// 		if($conetnido>0){
	// 			if($cont>0){
	// 				//Se retorna si el nombre de las columnas no son validas en el archivo para hacer el insert
	// 				return array('validate_columnas' => $cont);
	// 			}
	// 			foreach ($array_params['params'] as $key => $value){
	// 				$letra = $array_params['range_ini'];
	// 				foreach ($value as $params => $val) {
	// 					$tipo       = ($value['tipo'])? $value['tipo'] : false;
	// 					$requerido = ($value['requerido'])? $value['requerido'] : false;
	// 				}
	// 				$ab = $letra+$i;
	// 				if($tipo=='int'){
	// 					$numero = $objPHPExcel->getActiveSheet()->getCell(chr($ab).$vuelta)->getCalculatedValue();
	// 					if(is_numeric($numero)){
	// 						$dataexcel[$value['name']] =  $numero;
	// 					}else{
	// 						$dataexcel[$value['name']] =  $numero;
	// 						$error = true;
	// 					}
	// 				}elseif($tipo=='date'){
	// 					$fecha=date("d-m-Y", PHPExcel_Shared_Date::ExcelToPHP($objPHPExcel->getActiveSheet()->getCell(chr($ab).$vuelta)->getCalculatedValue()));
	// 	         		$date = date("d-m-Y",strtotime($fecha.' + 1day'));
	// 	         		$newdate = str_replace('-', '/', $date);
	// 					$dataexcel[$value['name']] =  $newdate;
	// 				}
	// 				else{
	// 					$dataexcel[$value['name']] =  $objPHPExcel->getActiveSheet()->getCell(chr($ab).$vuelta)->getCalculatedValue();	
	// 				}
	// 				$i++;
	// 			}
	// 			if(!$error){
	// 				$array_success[]= $dataexcel;
	// 			}else{
	// 				$array_error[]= $dataexcel;
	// 			}
	// 		}else{
	// 			//Realiza la primer vuelta y valida el nombre de las columnas con el array de params
	// 			foreach ($array_params['params'] as $key => $columns) {
	// 				$letra = $array_params['range_ini'];
	// 				$ab = $letra+$i;
	// 				$columna= $objPHPExcel->getActiveSheet()->getCell(chr($ab).$vuelta)->getCalculatedValue();
	// 				if($columna!=$columns['name']){
	// 					$cont++;
	// 				}
	// 				$i++;
	// 			}
	// 		}
	// 		$vuelta++;
	// 		$conetnido++;
	// 		/*dump_var($columna);*/
	// 	}
	// 	return array(
	// 		'success' 			=> $array_success,
	// 		'error' 			=> $array_error,
	// 		'validate_columnas' => $cont);
	// }



















	public function generate_xlsx_tpl($params = array(), /*$tpl = '' ,*/ $save = false, $version = '2007'){
                               $title          = (array_key_exists('title'    ,$params)) ? $params['title']    : 'IS_XLSX';                             
                               $items          = (array_key_exists('items'    ,$params)) ? $params['items']    : false;
                               $baseRow        = (array_key_exists('baseRow'  ,$params)) ? $params['baseRow']  : 1;
                               $tpl            = (array_key_exists('tpl'      ,$params)) ? $params['tpl']      : false;
                               $specific       = (array_key_exists('specific' ,$params)) ? $params['specific'] : false;
                               
                               
                               // debug($tpl);
                               if($items && $tpl){
                                               $counter     = 1;
                                               $ext         = $this->set_extVersionExcel($version);
                                               $objReader   = PHPExcel_IOFactory::createReader('Excel'.$version);
                                               $objPHPExcel = $objReader->load("assets/docs/".$tpl .$ext);                                 
                                               $objPHPExcel->setActiveSheetIndex(0);

                                               if(is_array($specific)){
                                                               foreach ($specific as $key => $value) {
                                                                              $objPHPExcel->getActiveSheet()->setCellValue($value['cell'], $value['value']);
                                                               }
                                               }
                                               foreach($items as $r => $dataRow) {
                                                               $row = $baseRow + $r;
                                                               $objPHPExcel->getActiveSheet()->insertNewRowBefore($row,1);
                                                                              // debug($row);
                                                               foreach ($dataRow as $key => $item) {
                                                                              $objPHPExcel->getActiveSheet()->setCellValue($this->num_2_letter($counter).$row, $item);
                                                                              $counter++;
                                                               }
                                                               $counter = 1;
                                               }

                                               

                                               $objPHPExcel->getActiveSheet()->removeRow($baseRow-1,1);
                                               if($save){
                                                               $pathfile  = 'assets/docs/'.$title.'.xlsx';
                                                               $objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');
                                                               $objWriter->save(str_replace('.php', '.xlsx', __FILE__));
                                                               rename(APPPATH.'libraries/excel.xlsx', $pathfile);
                                                               return $pathfile;
                                                               return true;
                                               }else{
                                                               $pathfile  = 'assets/docs/'.$title.'.xlsx';
                                                               header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
                                                               header('Content-Disposition: attachment;filename='.$title .$ext);
                                                               ob_end_clean();
                                                               $objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel'.$version);
                                                               $objWriter->save('php://output');
                                                               if(file_exists($pathfile)){
                                                                              unlink($pathfile);
                                                               }
                                                               exit;
                                               }
                               }else{
                                               redirect('override_404');
                               }
                }


    public function set_extVersionExcel($version){
       switch ($version) {
           case '2007':
               $ext = '.xlsx';
               break;
           
           default:
               $ext = '.xls';
               break;
       }
       return $ext;
    }
    public function num_2_letter($Col){
                    if ($Col < 27)
                        return chr($Col + 64);
                    $Col--;
                    return $this->num_2_letter($Col / 26) . $this->num_2_letter(($Col % 26)+1 );
    }
    public function generate_xlsx_sin_tpl($params = array(), $save = false){
		$title   = (array_key_exists('title',$params)) ? $params['title'] : 'IS_XLSX';
		$headers = (array_key_exists('headers',$params)) ? $params['headers'] : false;
		$items   = (array_key_exists('items',$params)) ? $params['items'] : false;
		if($headers && $items){
			$objPHPExcel = new PHPExcel();
			$objPHPExcel->getProperties()->setCreator("IS Intelligent Solution")
									->setLastModifiedBy("IS Intelligent Solution")
									->setKeywords("office 2007 openxml");
			
			$countHeaders = count($params['headers'])+64;
			$column       = chr($countHeaders).'1';
	      	$objPHPExcel->getActiveSheet()->fromArray($params['headers'], null, 'A1');
	      	$objPHPExcel->getActiveSheet()->getStyle("A1:$column")->applyFromArray($this->defaultStyle_headers());
	      	
	      	foreach(range('A',$column) as $columnID) {
			    $objPHPExcel->getActiveSheet()->getColumnDimension($columnID)->setAutoSize(true);
			}
	      	
	      	$items = $objPHPExcel->getActiveSheet()->fromArray($params['items'], null, 'A2'); 
			$objPHPExcel->setActiveSheetIndex(0);
				
			if($save){
				$pathfile  = 'assets/docs/'.$title.'.xlsx';
				$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');
				$objWriter->save(str_replace('.php', '.xlsx', __FILE__));
				rename(APPPATH.'libraries/excel.xlsx', $pathfile);
				return $pathfile;
			}else{
				header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
				header('Content-Disposition: attachment;filename="'.$title.'.xlsx"');
				ob_end_clean();
				$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');
				$objWriter->save('php://output');
				exit;
			}
			
		}else{
			redirect('override_404');
		}
	}
}