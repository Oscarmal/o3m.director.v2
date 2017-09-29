<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class IS_Controller extends CI_Controller {
 	
    public function __construct(){
        parent::__construct();
        // Archivos de configuración
        $this->vars = new config_vars();
        $this->vars->load_vars();
        // Modelos
        $this->load->model('menu_model', 'db_menu');
        // Logs
        if($this->vars->cfg['log_onoff'] && $this->session->userdata('logged_in')) {
            LogTxt($this->session->get_userdata(), LOCALPATH.$this->vars->cfg['log_path']);
        }
    }

    /**
    * unifica las vistas header & footer con las vistas parseadas
    * de la seccion seleccionada
    * @param string $view
    * @param array $data
    * @param array $data_includes
    * @param string $ext
    * @return void
    */
    public function load_view($view=false, $data = array(), $data_includes = array(), $folder = 'dashboard', $ext = '.html'){
        $ext        = ($ext!='.html')? '' : $ext;        
        // Header
        $base_url               = base_url();
        $parse['base_url']      = $base_url;
        $parse['APPTITLE']      = utf8_decode($this->vars->cfg['site_title']);
        $parse['URLPATH']       = URLPATH;
        $parse['TEMPLATEPATH']  = $base_url.'assets/template/';
        $parse['IMG_PATH']      = $base_url.'assets/img/';
        $parse['anio']          = date('Y');

        $includes_header        =(isset($data_includes['header']))?$data_includes['header']:$data_includes;
        $includes_footer        =(isset($data_includes['footer']))?$data_includes['footer']:false;

        // INCLUDES HEADER Y WIDGETS
        // SE CARGAN EL CORE Y LOS PLUGINS DEL SISTEMA ADEMAS DE LOS JS Y CSS EXTRAS
        $dataheader['includes_header'] = $this->load_view_unique($folder.'/includes-header', $parse, true, $includes_header);
        $dataheader['includes_widgets'] = $this->load_view_unique($folder.'/includes-widgets' , $parse, true);
        //FIN HEADER Y WIDGETS

        //CONSTRUCCION DEL MENU
        $menu                           = $this->user_menu($this->session->userdata('user_menu'));
        $parse['MENU_DESKTOP']          = $menu['MENU_DESKTOP'];
        $parse['MENU_MOBILE']           = $menu['MENU_MOBILE'];
        $parse['MENU_MOBILE_SUBMENUS']  = $menu['MENU_MOBILE_SUBMENUS'];
        // debug($parse['MENU_MOBILE_SUBMENUS']);
        $parse['nombre_completo']       = $this->session->userdata('nombre_completo');
        $parse['reset_password']        = ($this->session->userdata('externo'))?'<li><a href="'.$base_url.'reset"> Reset Password </a></li>':'';
        // Estructura de la pagina
        $dataheader['page_header']       = $this->load_view_unique($folder.'/page-header', $parse, true);
        // $dataheader['page_content']      = $this->load_view_unique($folder.'/page-content', $parse, true);
        $dataheader['page_footer']       = $this->load_view_unique($folder.'/page-footer',$parse, true);        
        //SE CARGA EL CONTENIDO DE LA PAGINA
        if($view){
            $dataContent['content']     = $this->load_view_unique($view, $data, true);
            $dataContent['title']       = $data['titulo'];
            $dataContent['subtitle']    = isset($data['subtitulo'])? $data['subtitulo'] : '';
            $dataheader['page_content'] = $this->load_view_unique($folder.'/page-content', $dataContent, true);
            // $dataheader['page_content'] = $this->load_view_unique($view, $data, true);
        }else{
            $dataheader['page_content'] = false;
        }
        // FOOTER
        $dataheader['includes_footer'] = $this->load_view_unique($folder.'/includes-footer', $parse, true, $includes_footer);
        // Output
        $this->parser->parse($folder.'/dashboard'.$ext , $dataheader);
    }

    /**
    * Carga una vista unica sin integrar el header 
    * ni el footer, puede servir para la carga de 
    * paginas de error
    * @param string $view
    * @param array $data
    * @param boolean $autoload
    * @param array $data_includes
    * @param string $ext
    * @return void
    */
    public function load_view_unique($view, $data = array(), $autoload = false ,$data_includes = array() ,$ext = '.html'){
        $base_url              = base_url();
        $data['base_url']      = $base_url;
        $data['APPTITLE']      = utf8_decode($this->vars->cfg['site_title']);
        $data['URLPATH']       = URLPATH;
        $data['TEMPLATEPATH']  = $base_url.'assets/template/';
        $data['IMG_PATH']      = $base_url.'assets/img/';
        $ext      = ($ext!='.html') ? '': $ext;
        $includes = $this->load_scripts($data_includes);
        $data['data_js']  = (!empty($includes['js'])) ? $includes['js']  : '';
        $data['data_css'] = (!empty($includes['css']))? $includes['css'] : '';
        $data['base_url'] = base_url();
        $data['site_title'] = $this->vars->cfg['site_title'];  
        //debug($view.$ext);     
        return $this->parser->parse($view.$ext, $data, $autoload);
    }

    public function load_view_individual($view=false, $data = array(), $data_includes = array(), $folder = 'dashboard', $ext = '.html'){
        $ext        = ($ext!='.html')? '' : $ext;        
        // Header
        $parse['base_url']      = base_url();
        $parse['APPTITLE']      = utf8_decode($this->vars->cfg['site_title']);
        $parse['URLPATH']       = URLPATH;
        $parse['TEMPLATEPATH']  = URLPATH.'assets/template/';
        $parse['IMG_PATH']      = URLPATH.'assets/img/';
        $parse['anio']          = date('Y');

        $includes_header        =(isset($data_includes['header']))?$data_includes['header']:$data_includes;
        $includes_footer        =(isset($data_includes['footer']))?$data_includes['footer']:false;

        // INCLUDES HEADER Y WIDGETS
        // SE CARGAN EL CORE Y LOS PLUGINS DEL SISTEMA ADEMAS DE LOS JS Y CSS EXTRAS
        $dataheader['includes_header'] = $this->load_view_unique($folder.'/includes-header', $parse, true, $includes_header);
        $dataheader['includes_widgets'] = $this->load_view_unique($folder.'/includes-widgets' , $parse, true);
        //FIN HEADER Y WIDGETS

        // Estructura de la pagina
        $dataheader['page_header'] = '';
        $dataheader['page_footer'] = '';
        $dataheader['menu_inicio'] = '';

        // //SE CARGA EL CONTENIDO DE LA PAGINA
        if($view){
            $dataContent = array_merge($data, $parse);
            $dataheader['page_content']     = $this->load_view_unique($view, $dataContent, true);
        }else{
            $dataheader['page_content'] = false;
        }

        // FOOTER
        $dataheader['includes_footer'] = $this->load_view_unique($folder.'/includes-footer', $parse, true,$includes_footer);
        // Output
        $this->parser->parse($folder.'/tpl-individual'.$ext , $dataheader);
    }

    /**
     * Configuración para la construccioón del menú de acuerdo al perfil del usuario
     * @param  string $ids_menu [description]
     * @return [type]            [description]
     */
    public function user_menu($ids_menu = false) {
        $data_menu            = $this->db_menu->get_menu($ids_menu);
        $this->menu->id       = 'id_menu';
        $this->menu->padre    = 'id_padre';
        $this->menu->link     = 'link';
        $this->menu->tipo     = 'tipo';
        $this->menu->texto    = 'texto';
        $this->menu->base_url = URLPATH;      
        $this->menu->lang     = $this->lang->language;
        $menu['MENU_DESKTOP'] = $this->menu->draw_menu_desktop($data_menu);
        $menu['MENU_MOBILE']  = $this->menu->draw_menu_mobile($data_menu);
        $menu['MENU_MOBILE_SUBMENUS']  = $this->menu->draw_menu_mobile_submenus($data_menu);               
        return $menu;
    }
    /**
    * Carga archivos js & css en el header
    * @param array $data
    * @return array
    */
    public function load_scripts($data){
        if(!is_array($data)){
            $data_load['js']  = '';
            $data_load['css'] = '';
            return $data_load;
        }
        $files_js          = '';
        $files_css         = '';
        $url_js            = base_url().'assets';
        $url_css           = base_url().'assets';        
        if(!empty($data)){
            if (array_key_exists('js', $data)) { 
                foreach ($data['js'] as $key => $value) {
                    $js_name  = ($value['name']!='') ? $value['name'] : '';
                    $js_dir   = ($value['dirname']!='') ? $value['dirname'].'/' : '';
                    $files_js.= "<script type='text/javascript' src='".$url_js.'/'.$js_dir.$js_name.".js'></script>";
                }
            }
            if (array_key_exists('css', $data)) {
                foreach ($data['css'] as $key => $value) {
                    $css_name  = ($value['name']!='') ? $value['name'] : '';
                    $css_dir   = ($value['dirname']!='') ? $value['dirname'].'/' : '';
                    $files_css.= '<link rel="stylesheet" href="'.$url_css.'/'.$css_dir.$css_name.'.css" type="text/css" />';
                }
            }           
        }
        $data_load['js']  = $files_js;
        $data_load['css'] = $files_css;
        return $data_load;
    }

    /**
    * Genera un token 
    * @param int $length
    * @param bool $encrypt
    * @param string $key
    * @return string
    */
    public function generate_token($length = 30, $encrypt = true , $key = ''){
        $key_encrypt = ($key) ? $key : '';

        $settings = array(
                            'upercase' => true ,
                            'lowercase' => true ,
                            'int' => true, 
                            'symbol' => true
                        );

        $token =  ($encrypt) ? $this->encrypt_encode($this->random_string($length, $settings, $key_encrypt)) : $this->random_string($length,$settings, $key_encrypt);
        
        return $token;
    }

    /**
    * Devuelve la cadena encryptada
    * @param string $string
    * @param bool $key
    * @return string
    */
    public function encrypt_encode($string = '', $key = false){
        if($key){
            return base64_encode( $this->encrypt->encode($string, $key) );
        }else{
            return base64_encode( $this->encrypt->encode($string) );
        }
        
    }

    /**
    * Genera un string con caracteres aleatorios dependiendo de la configuraciion 
    * @param int $length
    * @param array $settings
    * @param string $key
    * @return string
    */
    public function random_string($length = 10, $settings = array(),  $key = ''){
        if(empty($settings)){
            return false;
        }
        $characters  = '';
        $characters .= ($key!='') ? $key : '';
        $characters .= (array_key_exists('upercase', $settings))  ?  ($settings['upercase'])  ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '' : '';
        $characters .= (array_key_exists('lowercase', $settings)) ?  ($settings['lowercase']) ? 'abcdefghijklmnopqrstuvwxyz' : '' : '';
        $characters .= (array_key_exists('int', $settings))       ?  ($settings['int'])       ? '1234567890'                 : '' : '';
        $characters .= (array_key_exists('symbol', $settings))    ?  ($settings['symbol'])    ? '|@#~$%()=^*+[]{}-_'  : '' : '';
        
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }


    #####
    # REST API Functions
    #####
    public function getHttp($namesVars=array()){
    // Obtiene parametros recibidos en el header HTTP: $_SERVER (APIREST)
    	if($_SERVER && $namesVars){
            foreach ($namesVars as $p ) {
                $http_var = 'HTTP_'.strtoupper($p);
                $params[$p] = (array_key_exists($http_var,$_SERVER))?$_SERVER[$http_var]:NULL;
                if($params[$p]===NULL) unset($params[$p]);
            }
        }
        return $params;
    }

    public function getParams($namesVars=array()){    
    // Obtiene parametros recibidos distinguiendo entre HTTP, GET o POST
    	#Obtiene parametros de header HTTP
        $getHttp 	= $this->getHttp($namesVars);
        #Obtiene parametros de POST ó GET
        $getGetPost = ($this->get())?$this->get():$this->post();
        #Encuentra parametros y los regresa
        return (!$getGetPost)?$getHttp:$getGetPost;
    }

    public function curl_peticion($method = null,$url = null,$params = array()){

        //autentificamos
        //echo $url     = URLPATH.$url; 

        
        $rest_auth = $this->vars->cfg['rest_user'].':'.$this->vars->cfg['rest_pass'];

        $credentials    = $this->curl->http_login($rest_auth);


        switch ($method){
            case 'post':
                $output         = $this->curl->simple_post($url, $params);
                break;
            case 'get':

                $output         = $this->curl->simple_get($url, $params);
                break;
            case 'put':
                $output         = $this->curl->simple_post($url, $params);
                break;
            case 'delete':
                $output         = $this->curl->simple_post($url, $params);
                break;

        }
        return json_decode($output,true);
    }
    
    #####
    # REST API Fin
    #####
   
}
?>