<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');
	
    /**
	* imprime un arreglo formateado para debug
	* y detiene la ejecucion del script
	* @return array $array
	*/
	if(!function_exists('debug')){
		function debug($array, $die = true){
			echo '<pre>';
			print_r($array);
			echo '</pre>';
			if($die){
				die();	
			}
		}
	}

	if(!function_exists('timestamp')){
		function timestamp(){
			date_default_timezone_set('America/Mexico_City');
	    	return date('Y-m-d H:i:s');
	    }
	}

	if(!function_exists('LogTxt')){
		function LogTxt($userData=array(), $logPath='logs/'){
		# Función para crear archivo log .txt con movimientos dentro del sistema
			if(isset($_SERVER['HTTP_CLIENT_IP'])){
		        $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
			}elseif(isset($_SERVER['HTTP_X_FORWARDED_FOR'])){
				if($pos=strpos($_SERVER["HTTP_X_FORWARDED_FOR"]," ")){
					$ip_loc 	= substr($_SERVER["HTTP_X_FORWARDED_FOR"],0,$pos);
					$ipaddress 	= substr($_SERVER["HTTP_X_FORWARDED_FOR"],$pos+1);
				}else{
					$ipaddress 	= $_SERVER["HTTP_X_FORWARDED_FOR"];
				}
		    }elseif(isset($_SERVER['HTTP_X_FORWARDED'])){
		        $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
		    }elseif(isset($_SERVER['HTTP_FORWARDED_FOR'])){
		        $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
		    }elseif(isset($_SERVER['HTTP_FORWARDED'])){
		       $ipaddress = $_SERVER['HTTP_FORWARDED'];
		    }elseif(isset($_SERVER['REMOTE_ADDR'])){
		        $ipaddress = $_SERVER['REMOTE_ADDR'];
		    }else{$ipaddress = 'UNKNOWN';}
			$archivo = $logPath."log_".str_replace(' ','-',$userData['empresa']).'_'.date("Ymd").".log";
			$fp = fopen($archivo, "a+");
			$txtData = array(
						'FECHA' 		=> date("d-m-Y H:i:s"),
						'USUARIO' 		=> $userData['usuario'],
						'NOMBRE' 		=> $userData['nombre_completo'],
						'GRUPO' 		=> $userData['rol'],
						'PAIS' 			=> $userData['pais'],
						'ID_EMPRESA'	=> $userData['id_empresa'],
						'EMPRESA'		=> $userData['empresa'],
						'IP_PUBLICA' 	=> $ipaddress,
						'IP_LOCAL' 		=> (isset($ip_loc))?$ip_loc:'',
						'NOMBRE_PC' 	=> $_SERVER['HTTP_HOST'],
						'NAVEGADOR' 	=> $_SERVER['HTTP_USER_AGENT'],
						'URL_ANTERIOR' 	=> (isset($_SERVER['HTTP_REFERER']))?$_SERVER['HTTP_REFERER']:'',
						'URL_ACTUAL' 	=> $_SERVER['PHP_SELF'],
						'URL_PARAMS'	=> (isset($_SERVER['QUERY_STRING']))?$_SERVER['QUERY_STRING']:''
				);
			$log  = implode('|',$txtData);
			$log .= "\r\n";			
			$write = fputs($fp, $log);
			fclose($fp);
		}
	}

	/**
	 * Busca una cadena dentro de otra cadena
	 * @param  [type] $haystack [description]
	 * @param  [type] $needle   [description]
	 * @return [bool]           [description]
	 */
	if(!function_exists('findStringInString')){
		function findStringInString($haystack, $needle){
			if(strpos($haystack, $needle)===false){
				return false;
			}else{
				return true;
			}
		}
	}

	if(!function_exists('format_decimal')){
		function format_decimal($number=0, $separador=''){
			return number_format($number, 3, '.', $separador);
		}
	}

	if(!function_exists('format_currency')){
		function format_currency($number=0, $sign='$'){
			return $sign.' '.number_format($number, 3, '.', ',');
		}
	}

	if(!function_exists('format_date_short')){
		function format_date_short($date=false, $sign='-'){		
			$fdate = strtotime(str_replace('/', '-', $date));
			return date("Y{$sign}m{$sign}d", $fdate);
		}
	}
		
	if(!function_exists('format_date_long')){
		function format_date_long($date=false, $sign='-'){		
			$fdate = strtotime(str_replace('/', '-', $date));
			return date("Y{$sign}m{$sign}d H:i:s", $fdate);
		}
	}	

    if (!function_exists('new_exception')) {
    	function new_exception($msg="", $code=0, $previous=NULL) {
    		$message = $msg ? $msg : lang('general_throw_exception');
    		throw new Exception($message, $code, $previous);
    	}
    }
	
	if(!function_exists('format_date')){
		function format_date($date=false, $sign='/'){
			$fdate = date('Y-m-d', strtotime($date));
			$ndate = new DateTime($fdate);
			return date_format($ndate,"d{$sign}m{$sign}Y");
		}
	}

	if(!function_exists('format_date_hour')){
		function format_date_hour($date=false, $sign='/'){
			$fdate = date('Y-m-d H:i:s', strtotime($date));
			$ndate = new DateTime($fdate);
			return date_format($ndate,"d{$sign}m{$sign}Y H:i:s");
		}
	}

?>