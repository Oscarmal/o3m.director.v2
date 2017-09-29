<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Test extends IS_Rest{
    
	public function __construct(){
		parent::__construct();
		/*
		header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
        header('Access-Control-Allow-Headers: X-Requested-With,Content-Type');
        header ('Content-type: text/html; charset=utf-8');
        header('Content-type: application/json');*/
        // debug('sdfsdfds');
	}

    // public function index(){
    //     debug('index');
    // }

    
    public function index_get($k=false){
        #Nombre de parametros esperados
        $setParams = array('key','name','tel','address');
        #Obtiene parametros de HTTP ó GET
        $parametros = $this->getParams($setParams);
        
        if($parametros){
        	$this->response($parametros,200);
        }else{
            $this->response("ERROR!",404);
        }
	}
    public function index_post(){

    }
    public function index_put(){
    	
    }
    public function index_delete(){
    	
    }

    public function vista_get(){
       echo "GET".'<hr/>';
       debug($this->get()); 
    }
    public function vista_post(){
       echo "POST".'<hr/>';
       debug($this->post()); 
    }

    
}
