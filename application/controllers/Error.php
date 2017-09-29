<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Error extends IS_Controller {
	
	public function __construct(){		
		parent::__construct();		
	}

	public function error400(){
		// BAD REQUEST
		$codigo  = '4<i class="fa fa-frown-o"></i><i class="fa fa-frown-o"></i>';
		$tplData = array('codigo'=>$codigo,'titulo'=>lang('error_400_titulo'), 'mensaje'=>lang('error_400_mensaje'));
		$includes['css'][]  = array('name' => 'error', 'dirname' => 'template/css');
		$this->load_view_unique('errors/error',$tplData,false,$includes);
	}

	public function error403(){
		// FORBIDDEN
		$codigo  = '4<i class="fa fa-frown-o"></i>3';
		$tplData = array('codigo'=>$codigo,'titulo'=>lang('error_403_titulo'), 'mensaje'=>lang('error_403_mensaje'));
		$includes['css'][]  = array('name' => 'error', 'dirname' => 'template/css');
		$this->load_view_unique('errors/error',$tplData,false,$includes);
	}

	public function error404(){
		// NOT FOUND
		$codigo  = '4<i class="fa fa-frown-o"></i>4';
		$tplData = array('codigo'=>$codigo,'titulo'=>lang('error_404_titulo'), 'mensaje'=>lang('error_404_mensaje'));
		$includes['css'][]  = array('name' => 'error', 'dirname' => 'template/css');
		$this->load_view_unique('errors/error',$tplData,false,$includes);
	}

	public function error500(){
		// INTERNAL SERVER ERROR
		$codigo  = '5<i class="fa fa-frown-o"></i><i class="fa fa-frown-o"></i>';
		$tplData = array('codigo'=>$codigo,'titulo'=>lang('error_500_titulo'), 'mensaje'=>lang('error_500_mensaje'));
		$includes['css'][]  = array('name' => 'error', 'dirname' => 'template/css');
		$this->load_view_unique('errors/error',$tplData,false,$includes);
	}

	public function error_ie(){
		// INTERNAL SERVER ERROR
		$codigo  = '<i class="large material-icons">visibility_off</i>';
		$tplData = array('codigo'=>$codigo,'titulo'=>lang('error_ie_titulo'), 'mensaje'=>lang('error_ie_mensaje'));
		$includes['css'][]  = array('name' => 'error', 'dirname' => 'template/css');
		$this->load_view_unique('errors/error',$tplData,false,$includes);
	}	
	
}