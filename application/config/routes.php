<?php defined('BASEPATH') OR exit('No direct script access allowed');
/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	https://codeigniter.com/user_guide/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
|	$route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes in the
| controller and method URI segments.
|
| Examples:	my-controller/index	-> my_controller/index
|		my-controller/my-method	-> my_controller/my_method
*/
$route['default_controller'] 	= 'login/index';
$route['404_override'] 			= 'error/error404';
$route['error-ie'] 				= 'error/error_ie';
$route['translate_uri_dashes'] 	= FALSE;


//******************************
//**         Auth 			  **
//******************************
$route['login'] 				= 'login/index';
$route['auth'] 					= 'login/auth';
$route['logout'] 				= 'login/logout';
$route['recuperar-password']    = 'login/recuperar_password_view';

//******************************
//**         Inicio			  **
//******************************
$route['inicio'] 				= 'inicio/index';

//******************************
//**         Solicitudes	  **
//******************************
$route['solicitudes'] 			= 'solicitudes/index';
$route['mis-solicitudes'] 		= 'solicitudes/index';
$route['calendar-events'] 		= 'solicitudes/calendar_events';
$route['evento-aceptar'] 		= 'solicitudes/evento_aceptar';

//******************************
//**      Autorizaciones	  **
//******************************
$route['autorizaciones'] 			= 'autorizaciones/index';

//******************************
//**      Reportes	  		  **
//******************************
$route['reportes-result'] 			= 'reportes/result';

//******************************
//**      Administracion      **
//******************************
//Administracion/usuarios
$route['usuarios']              = 'administracion/usuarios/index';
$route['nuevo-usuario']         = 'administracion/usuarios/create_user_view';
$route['editar-usuario']        = 'administracion/usuarios/edit_usuario_view';
//Administracion/perfiles
$route['perfiles']              = 'administracion/perfiles/index';
$route['editar-perfil']         = 'administracion/perfiles/edit_perfil_view';
$route['nuevo-perfil']          = 'administracion/perfiles/create_perfil_view';


//******************************
//**         APIREST          **
//******************************
/*Multi-Params*/
$p_any = array();
$p_val = array();
$i = 1;
foreach($this->uri->uri_to_assoc() as $key => $value){
	$p_any[] = '(:any)/(:any)';
	$p_val[] = '$'. $i++ .'/$'. $i++ ;
}
$any = implode('/', $p_any);
$val = implode('/', $p_val);
/*Fin Multi-Params*/

$route['api/testing'] 			= 'rest/test/index';
$route['api/testing/'.$any] 	= 'rest/test/index/'.$val;

$route['api/vista'] 			= 'rest/test/vista';
$route['api/vista/'.$any] 		= 'rest/test/vista/'.$val;