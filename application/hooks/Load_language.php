<?php if (!defined( 'BASEPATH')) exit('No direct script access allowed'); 
class Load_language {
    function initialize() {
        $ci =& get_instance();
        $vars = new config_vars();
		$vars->load_vars(APPPATH.'cfg/codeigniter.cfg');
		$lang_default = ($vars->cfg['language'])?$vars->cfg['language']:'es_mx';
        $ci->load->helper('language');
        $site_lang = $ci->session->userdata('site_lang');
        $lang_files = array(
        				 'db'
						,'error'
                        ,'auth'
                        ,'menu'
                        ,'general'
                        ,'inicio'
                        ,'login'
                        ,'usuarios'
                        ,'mail'
                        ,'api'
                        ,'perfiles'
                        ,'admin'
                    // -- Bussines
					);
        $language = ($site_lang)?$site_lang:$lang_default;
    	foreach($lang_files as $file){        		
    		$ci->lang->load($file, $language);
    	}
    }
}
