<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Prueba extends IS_Controller {
	
	public function __construct(){		
		parent::__construct();        	

	}

	public function index(){		
		// echo "Inicio; ".date('Y-m-d H:i:s');
		// echo '<hr/>';
		// $this->load->model('Ejemplo_model','logs_model');
		// $logs = $this->logs_model->get_logs();
		// debug($logs);
		$tplData = array('titulo'=>'Pruebas', 'subtitulo'=>'Aquí puedes probar tus controladores','contenido_html_template'=>'Mi contenido de prueba: {contenido_html_template}');
		$this->load_view('tpl/tpl-contenido',$tplData);
	}

	public function ejemplo(){
		echo json_encode(array('hola' => 'hola'));
	}

	public function conecta(){
		// $d = encryptData('admin:1234',true);
		// debug($d.'  |  '.encryptData($d,false));
		$url 	= URLPATH.'api/vista'; 
		$encrypted = $this->encrypt->encode('admin:1234', 'qwerty');
		// debug(hash ( "sha256", 'sfdfsdfsdfsdf' ));
		// $reversa = $this->encrypt->decode($encrypted, $key);
		$rest_auth = $this->vars->cfg['rest_user'].':'.$this->vars->cfg['rest_pass'];
		$params = array ( 
			"primero" => "111111", 
			'segundo' => '22222', 
			'tercero'=>'3333' 
			);
		$credentials 	= $this->curl->http_login($rest_auth);
		$output 		= $this->curl->simple_get($url, $params);
	}

	// public function encriptar(){
	// 	$str = '12345';
	// 	  $key = 'qwerty';
	// 	  $encrypted = $this->encrypt->encode($str, $key);
	// 	  $reversa = $this->encrypt->decode($encrypted, $key);
	// 	  debug($encrypted.'  |  '.$reversa);
		
	// }

	public function email(){
		echo 'Envio de mail: '.date('Y-m-d H:i:s').'<hr/>';
		$destinatarios[] = array(
					 'email'	=> 'armando.cruz@isolution.mx'
					,'nombre'	=> 'Armando Cruz'
				);
		$destinatariosCC[] = array(
					 'email'	=> 'armando.cruz@isolution.mx'
					,'nombre'	=> 'Armando Cruz'
				);
		$destinatariosBCC[] = array(
					 'email'	=> 'armando.cruz@isolution.mx'
					,'nombre'	=> 'Armando Cruz'
				);
		
		$adjuntos[] = false;
		// Template
		$htmlData = array('titulo' => 'Prueba','subtitulo' => date('H:i:s'), 'contenido'=>utf8_decode('Aquí va el contenido. ').date('H:i:s'));
		// $htmlTPL = $this->load_view_unique('mail/test_tpl' , $htmlData, true);
		$htmlTPL = $this->load_view_unique('mail/template' , $htmlData, true);
		// Imagenes embedded
		$url_image = 'assets/images/';		
		$imagenes[] = array(
					 'ruta'		=> $url_image
					,'alias'	=> 'logo'
					,'file' 	=> 'logo.png'
					,'encode' 	=> 'base64'
					,'mime' 	=> 'image/png'
				);
		$imagenes[] = array(
					 'ruta'		=> $url_image
					,'alias'	=> 'banner'
					,'file' 	=> 'banner_azul.png'
					,'encode' 	=> 'base64'
					,'mime' 	=> 'image/png'
				);
		$imagenes[] = array(
					 'ruta'		=> $url_image
					,'alias'	=> 'footer'
					,'file' 	=> 'mail_footer.png'
					,'encode' 	=> 'base64'
					,'mime' 	=> 'image/png'
				);
		
		// Create ArrayData
		$tplData = array(
			 'body' 				=> $htmlTPL
			,'tipo' 				=> 'html' #html | text
			,'destinatarios' 		=> $destinatarios
			// ,'destinatariosCC' 		=> $destinatariosBCC
			// ,'destinatariosBCC' 	=> $destinatariosBCC
			,'asunto' 				=> 'iSolution - Prueba de envio de correo: Sistema - '.date('Y-m-d H:i:s')
			,'imagenes' 			=> $imagenes
			,'adjuntos' 			=> $adjuntos
		);		
		// Send email
		if($resultado = $this->mail->send($tplData)){
			$msj = ($resultado['success'])?"Correo enviado OK: ".date("Y-m-d H:i:s"):$resultado['msj'];
		}else{
			$msj = "ERROR: No se pudo enviar el correo: ".$resultado['msj'];
		}
		echo $msj;
	}

	public function excel(){
		$objPHPExcel = new PHPExcel();
		// Set properties
		$objPHPExcel->getProperties()->setCreator("Oscar Maldonado");
		$objPHPExcel->getProperties()->setLastModifiedBy("Oscar Maldonado");
		$objPHPExcel->getProperties()->setTitle("Office 2007 XLSX Test Document");
		$objPHPExcel->getProperties()->setSubject("Office 2007 XLSX Test Document");
		$objPHPExcel->getProperties()->setDescription("Test document for Office 2007 XLSX, generated using PHP classes.");
		// Add some data
		$objPHPExcel->setActiveSheetIndex(0);
		$objPHPExcel->getActiveSheet()->SetCellValue('A1', 'Hello');
		$objPHPExcel->getActiveSheet()->SetCellValue('B2', 'world!');
		$objPHPExcel->getActiveSheet()->SetCellValue('C1', 'Hello');
		$objPHPExcel->getActiveSheet()->SetCellValue('D2', 'world!');
		// Rename sheet
		$objPHPExcel->getActiveSheet()->setTitle('Simple');				
		// // Save Excel 2007 file
		$objWriter = new PHPExcel_Writer_Excel2007($objPHPExcel);
		// // We'll be outputting an excel file
		header('Content-type: application/vnd.ms-excel');
		header('Content-Disposition: attachment; filename="Prueba.xlsx"');
		// // Write file to the browser
		$objWriter->save('php://output');
	}

	public function pdf(){
		$html = '<html>
		        <body>
		                <p>Mi Primer PDF</p>
		        </body>
		</html>';
		$dompdf = new \Dompdf\Dompdf(); 
		$dompdf->loadHtml($html);
		$dompdf->render();
		$dompdf->stream("sample.pdf", array("Attachment"=>0));
	}
	public function pg(){
		$this->load->model('Ejemplo_model','test_model');
		debug($this->test_model->pgsql_test());
	}

	public function sftp(){
	// Prueba de una conexión SFTP	
		$list = $this->comunications->sftp_list();
		// $get = $this->comunications->sftp_get(date('Ymd-His').'.txt', 'i.php');

		debug($list);
	}
	
	
}