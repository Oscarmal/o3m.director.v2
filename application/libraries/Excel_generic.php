<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');
require_once(APPPATH.'third_party/PHPExcel/PHPExcel.php');
require_once(APPPATH.'third_party/PHPExcel/PHPExcel/IOFactory.php');

class Excel_generic extends PHPExcel{
	
	public function __construct(){
		parent::__construct();
	}
	
	public function generate_xlsx($params = array(), $save = false){
		$title   = (array_key_exists('title',$params)) ? $params['title'] : 'IS_XLSX';
		$name    = (array_key_exists('name',$params)) ? $params['name'] : 'IS_XLSX';
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
			$objDrawing->setPath('./assets/img/logo.png');
			$objDrawing->setHeight(36);
			$objDrawing->setWorksheet($objPHPExcel->getActiveSheet());
			
			$countHeaders = count($params['headers']);
			
			for($letra = 'A', $i = 1; $i < $countHeaders; $i++, ++$letra) {
			}
			$column = $letra.'3';
			
			$objPHPExcel->getActiveSheet()->getStyle('A1')->getFont()->setName('Candara');
			$objPHPExcel->getActiveSheet()->getStyle('A1')->getFont()->setSize(22);
			$objPHPExcel->getActiveSheet()->getStyle('A1')->getFont()->setBold(true);
			$objPHPExcel->getActiveSheet()->getStyle('A1')->getFont()->setUnderline(PHPExcel_Style_Font::UNDERLINE_SINGLE);

			$objPHPExcel->getActiveSheet()->setCellValue('C1', $title);
			$fecha_creacion = lang('general_fecha_creacion').' '.date('d/m/Y');
			$objPHPExcel->getActiveSheet()->setCellValue('D1', $fecha_creacion);
	        $objPHPExcel->setActiveSheetIndex(0);
	        
	      	$objPHPExcel->getActiveSheet()->fromArray($params['headers'], null, 'A3');
	      	$objPHPExcel->getActiveSheet()->getStyle("A3:$column")->applyFromArray($this->defaultStyle_headers());
	      	
	      	foreach(range('A',$column) as $columnID) {
			    $objPHPExcel->getActiveSheet()->getColumnDimension($columnID)->setAutoSize(true);
			}
	      	
	      	$items = $objPHPExcel->getActiveSheet()->fromArray($params['items'], null, 'A4'); 
			$objPHPExcel->setActiveSheetIndex(0);
				
			if($save){
				$pathfile  = 'assets/docs/'.$name.'.xlsx';
				$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');
				$objWriter->save(str_replace('.php', '.xlsx', __FILE__));
				rename(APPPATH.'libraries/excel.xlsx', $pathfile);
				return $pathfile;
			}else{
				header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
				header('Content-Disposition: attachment;filename="'.$name.'.xlsx"');
				ob_end_clean();
				$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');
				$objWriter->save('php://output');
				exit;
			}
			
		}else{
			redirect('error/error500');
		}
	}

	private function defaultStyle_headers(){
		$styleHeaders = array(
		'alignment' => array(
					'horizontal' => PHPExcel_Style_Alignment::VERTICAL_CENTER,
		),
        'fill' => array(
            'type' => PHPExcel_Style_Fill::FILL_SOLID,
            'color' => array('rgb' => '000000'),
        ),
		'font'  => array(
		        'bold'  => true,
		        'color' => array('rgb' => 'FFFFFF'),
		        'name'  => 'Verdana'
		        )
		);
		return $styleHeaders;
	}

	/**
	 * Función para la descarga de archivos de Excel
	 */
	public function download_file($data, $info=array()){ 
		$title 			= isset($info['title']) 	? $info['title'] 			: 'Excel';
		$subject 		= isset($info['subject']) 	? $info['subject'] 			: '';
		$description	= isset($info['description']) ? $info['description'] 	: '';
		$filename 		= isset($info['filename']) 	? $info['filename'] 		: 'archivo';
		$extencion 		= isset($info['extencion']) ? $info['extencion'] 		: 'xlsx';
		$excel_v 		= $extencion == 'xls' 		? 'Excel5'					: 'Excel2007';
		$content_type 	= isset($info['content_type']) ? $info['content_type']  : 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';


		$objPHPExcel= new PHPExcel();

		// Set document properties
		$objPHPExcel->getProperties()->setCreator("IS Intelligent Solution - Flextime PAE")
									 ->setLastModifiedBy("")
									 ->setTitle($title)
									 ->setSubject($subject)
									 ->setDescription($description);


		//ACTIVAMOS LA HOJA1
		$objPHPExcel->setActiveSheetIndex(0);
		//INSERTAMOS LOS DATOS EN LAS CELDAS
		$objPHPExcel->getActiveSheet()->fromArray($data, null, 'A1');
		if (isset($info['autoSize'])) {
			foreach ($info['autoSize'] as $cell) {
				$objPHPExcel->getActiveSheet()->getColumnDimension($cell)->setAutoSize(true);
			}
		}

		//RENOMBREAMOS LA HOJA1
		$sheet_name = lang('modal_hoja')."1";
		$objPHPExcel->getActiveSheet()->setTitle($sheet_name);

		//DAMOS FORMATO A LA FILA1
		if (isset($info['font'])) {
			$objPHPExcel->getActiveSheet()->getStyle($info['font']['cells'])->applyFromArray($info['font']);
		}


		// Redirect output to a client’s web browser (Excel2007)
		header("Content-Type: $content_type");
		header("Content-Disposition: attachment;filename='$filename.$extencion'");
		header("Cache-Control: max-age=0");
		// If you're serving to IE 9, then the following may be needed
		header('Cache-Control: max-age=1');

		// // If you're serving to IE over SSL, then the following may be needed
		// header ('Expires: Mon, 26 Jul 1997 05:00:00 GMT'); // Date in the past
		// header ('Last-Modified: '.gmdate('D, d M Y H:i:s').' GMT'); // always modified
		// header ('Cache-Control: cache, must-revalidate'); // HTTP/1.1
		// header ('Pragma: public'); // HTTP/1.0

		$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, $excel_v);
		$objWriter->save('php://output');
		exit;
	}
}