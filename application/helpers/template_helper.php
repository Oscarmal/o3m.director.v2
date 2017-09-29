<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

    if(!function_exists('dropdown')){
        function dropdown($params){
            $data       = (isset($params['data']))?$params['data']:'';
            $name       = (isset($params['name']))?$params['name']:'';
            $id         = (isset($params['id']))?$params['id'] : $name;
            $event      = (isset($params['event']))?$params['event']:'';
            $selected   = (isset($params['selected']))?explode(',',$params['selected']):'';
            $value      = (isset($params['value']))?$params['value']:false;
            $text       = (isset($params['text']))?$params['text']:'';
            $class      = (isset($params['class']))?$params['class']:'';
            $disabled   = (isset($params['disabled']))?$params['disabled']:'';
            $readonly   = (isset($params['readonly']))?'readonly':'';
            $input_disabled  = (isset($params['input_disabled']) AND $params['input_disabled'])?'disabled':'';
            $requerido  = (isset($params['requerido']))?'data-required="true"':'';
            $multiple   = (isset($params['multiple']))?'multiple':'';
            $title      = (isset($params['title']))?$params['title']:'';
            $class      = (isset($params['class']))?$params['class']:'';  
            // if ($selected) {
            //     $selected = array_filter($selected);
            // }

            $leyenda    = (array_key_exists('leyenda' ,$params))?$params['leyenda']: '-----';
            //debug($params);
            $select = '';
            if(is_array($data)){    
                foreach ($data as $key => $values) {
                    $option_selected='';
                    if($selected){  
                            $option_selected = (in_array($values[$value],$selected))?'selected':'';
                            $select.='<option value="'.$values[$value].'" '.$option_selected.'>'.($values[$text]).'</option>';            
                    }else{
                        $select.='<option value="'.$values[$value].'"'.$option_selected.'>'.($values[$text]).'</option>';    
                    }       
                }
                $disabled = $multiple? 'disabled' : '';
                $opc='<select name="'.$name.'" id="'.$id.'" '.$multiple.' class="chosen-select '.$class.'" onchange="'.$event.'" data-campo="'.$name.'" '.$requerido.' title="'.$title.'" '.$input_disabled.' '.$readonly.'>
                        <option value="" '.$disabled.' selected>'.$leyenda.'</option>
                        '.$select.'
                      </select>';
            }else{
                $opc='<select name="'.$name.'" id="'.$id.'" '.$multiple.' class="'.$class.'" onchange="'.$event.'" '.$readonly.'>
                        <option value="" disabled selected>Sin contenido</option>
                      </select>';
            }
            return $opc;
        }        
    }   

    if(!function_exists('dropdown_chosen')){
        function dropdown_chosen($params){
            $data       = (isset($params['data']))?$params['data']:'';
            $name       = (isset($params['name']))?$params['name']:'';
            $id         = (isset($params['id']))?$params['id'] : $name;
            $event      = (isset($params['event']))?'onchange="'.$params['event'].'"':'';
            $selected   = (isset($params['selected']))?explode(',',$params['selected']):'';
            $value      = (isset($params['value']))?$params['value']:false;
            $text       = (isset($params['text']))?$params['text']:'';
            $class      = (isset($params['class']))?$params['class']:'';
            $disabled   = (isset($params['disabled']))?$params['disabled']:'';
            $requerido  = (isset($params['requerido']))?'data-required="true"':'';
            $multiple   = (isset($params['multiple']))?'multiple':'';
            $title      = (isset($params['title']))?$params['title']:'';
            $class      = (isset($params['class']))?$params['class']:'';  
            $atribute   = (isset($params['atribute']))?$params['atribute']:array();
            $leyenda    = (array_key_exists('leyenda' ,$params))?$params['leyenda']: '-----';

            // $str_atribute = '';
            // foreach ($atribute as $key => $attr) {
            //     $str_atribute.=" data-$key='$attr'";
            // }

            //debug($params);
            $select = '';
            if(is_array($data)){    
                foreach ($data as $key => $values) {
                    $str_atribute = '';
                    foreach ($atribute as $index => $attr) {
                        $str_atribute.=" data-$index='$values[$attr]'";
                    }

                    $option_selected='';
                    if($selected){ 
                            $option_selected = (in_array($values[$value],$selected))?'selected':'';
                            $select.='<option value="'.$values[$value].'" '.$option_selected.' '.$str_atribute.'>'.($values[$text]).'</option>';            
                    }else{
                        $select.='<option value="'.$values[$value].'"'.$option_selected.'  '.$str_atribute.'>'.($values[$text]).'</option>';     
                    } 
                }
                $opc='<select name="'.$name.'" id="'.$id.'" data-campo="'.$id.'" '.$multiple.' data-placeholder="Seleccione las empresas" class="chosen-select '.$class.'" '.$event.'  tabindex="4">
                        <option value="" disabled selected>'.$leyenda.'</option>'.$select.'
                      </select>';
            }else{
                $opc='<select name="'.$name.'" id="'.$id.'" data-placeholder="Seleccione las empresas"  class="chosen '.$class.'" onchange="'.$event.'">
                        <option value="" disabled selected>Sin contenido</option>
                      </select>';
            }
            return $opc;
        }        
    }   

    if(!function_exists('incCss')){
        function incCss($filename){
            $cadena = '<link href="'.URLPATH.$filename.'" rel="stylesheet" type="text/css">';
            return $cadena;
        }
    }
    if(!function_exists('incJs')){
        function incJs($filename){
            $cadena = '<script type="text/javascript" src="'.URLPATH.$filename.'"></script>';
            return $cadena;
        }
    }

    //Construye una tabla datatable
    //custom_registros es para enviarle los registros ya consteruidos
    if(!function_exists('data_table')){
        function data_table($data = array()){
            $html_result    = '';
            $titulos        = (is_array($data['titulos']))?$data['titulos']:false;
            $registros      = (is_array($data['registros']))?$data['registros']:false;
            $custom_registros = isset($data['custom_registros'])?$data['custom_registros']:false;
            $id             = isset($data['id'])? 'id="'.$data['id'].'"' : '';
            $tbody          = '';
            $thead          = '';
            $tfoot          = '';
            if($titulos){
                $th = '';
                foreach($titulos as $titulo){$th .= '<th style="text-align:center;">'.$titulo.'</th>';}
                $thead = '<thead><tr>'.$th.'</tr></thead>';
                $tfoot = '<tfoot><tr>'.$th.'</tr></tfoot>';
            }
            
            if($custom_registros) {
                $tbody = $custom_registros;
            }
            elseif($registros){
                $tbody = '<tbody>';
                foreach($registros as $registro){
                    $tbody .= '<tr>';
                    foreach ($registro as $campo){
                        if(is_numeric($campo) && $campo > 0 && $campo == round($campo, 0)){
                            $tbody .= '<td style="text-align:center" >'.$campo.'</td>';
                        }else{
                              $tbody .= '<td style="text-align:center" >'.$campo.'</td>';
                        }
                       
                    }
                    $tbody .= '</tr>';
                }
                $tbody .= '</tbody>';
            }
            $html_result .= '<table class="bordered datatable" '.$id.'>';
            $html_result .= $thead;
            $html_result .= $tbody;
            $html_result .='</table>';
            return $html_result;
        }
    }

    // MODALES
    if(!function_exists('build_modal_confirm')){
    	// Con botones SI, NO, CANCELAR
        function build_modal_confirm($data=array()){
            $btnYes     = (isset($data['si']))?$data['si']:false;
            $btnNo      = (isset($data['no']))?$data['no']:false;
            $btnCancel  = (isset($data['cancelar']))?$data['cancelar']:false;
            $msj        = (isset($data['msj']))?$data['msj']:false;
            $botones = '<a href="'.$btnYes.'" class="modal-action modal-close waves-effect waves-green btn-flat ">'.lang('modal_yes').'</a>
                <a href="'.$btnNo.'" class="modal-action modal-close waves-effect waves-red btn-flat ">'.lang('modal_no').'</a>
                <a href="'.$btnCancel.'" class="modal-action modal-close waves-effect waves-red btn-flat ">'.lang('modal_cancel').'</a>';

        	$id			= (isset($data['id']))?$data['id']:'modal1';
        	$title 		= (isset($data['titulo']))?$data['titulo']:false;
        	$content 	= (isset($data['contenido']))?$data['contenido']:false;
        	
            $footer     = isset($data['footer'])? '' : $botones;


           

            $modal = '
        <div id="'.$id.'" class="modal modal-fixed-footer">
            <div class="modal-content">
                <h4>'.$title.'</h4>
                <p>'.$content.'</p>
            </div>
            <div class="modal-footer">
                '.$msj.$footer.'
            </div>
        </div>';
        	$modal .= incJs('assets/js/modal.js');
        	$result = array('html'=>$modal, 'id'=>$id);
        	return $result;
        }
    }

    if(!function_exists('build_modal_acept')){
        // Con botones ACEPTAR, CANCELAR
        function build_modal_acept($data=array()){
            $btnAcept   = (isset($data['acept']))?$data['acept']:false;
            $btnCancel  = (isset($data['cancel']))?$data['cancel']:false;
            $btnClose   = (isset($data['close']))?$data['close']:false;
            $msj        = (isset($data['msj']))?$data['msj']:false;
            $botones = '';
            $botones.= ($btnAcept)?'<button class="btn waves-effect waves-light green darken-4" type="button" id="btn-acept" name="btn-acept">
                '.lang('modal_save').'
                <i class="material-icons right">done</i>
            </button>':'';
            $botones.= ($btnCancel)?'<button class="btn waves-effect waves-light red darken-4" type="button" id="btn-cancel" name="btn-cancel">
                '.lang('modal_cancel').'
                <i class="material-icons right">replay</i>
            </button>':'';
            $botones.= ($btnClose)?'<button class="btn waves-effect waves-light" type="button" id="btn-close" name="btn-close">
                '.lang('modal_close').'
                <i class="material-icons right">input</i>
            </button>':'';

            $id         = (isset($data['id']))?$data['id']:'modal1';
            $title      = (isset($data['titulo']))?$data['titulo']:false;
            $content    = (isset($data['contenido']))?$data['contenido']:false;            
            $footer     = isset($data['footer'])? '' : $botones;
            $modal = '
        <div id="'.$id.'" class="modal-full modal-fixed-footer">
            <div class="modal-content">
                <h4>'.$title.'</h4>
                <p>'.$content.'</p>
            </div>
            <div class="modal-footer">
                '.$msj.$footer.'
            </div>
        </div>';
            // $modal .= incJs('assets/js/modal.js');
            $result = array('html'=>$modal, 'id'=>$id);
            return $result;
        }
    }

    if(!function_exists('build_modal_alert')){
    	// Solo con botón CERRAR
        function build_modal_alert($data=array()){
        	$id			= (isset($data['id']))?$data['id']:'modal1';
        	$title 		= (isset($data['titulo']))?$data['titulo']:false;
        	$content 	= (isset($data['contenido']))?$data['contenido']:false;
        	$btnClose 	= (isset($data['cerrar']))?$data['cerrar']:'#';
            $modal = '
        <div id="'.$id.'" class="modal ">
            <div class="modal-content">
                <h4>'.$title.'</h4>
                <p>'.$content.'</p>
            </div>
            <div class="modal-footer">
                <button class="btn waves-effect waves-light" type="button" id="btn-close" name="btn-close" onclick="location.reload();">
                    '.lang('modal_close').'
                    <i class="material-icons right">input</i>
                </button>
            </div>
        </div>';
        	// $modal .= incJs('assets/js/modal.js');
        	$result = array('html'=>$modal, 'id'=>$id);
        	return $result;
        }
    }
    // Fin MODALES

    // Icono Acciones 
    if(!function_exists('build_actions_icons')){
        function build_actions_icons($data=array()){
        /* i.e.:
            $data = array(
                 'tipo'     => 'horizontal'                 // 'vertical'
                ,'iconos'   => array(
                         array(                             // first icono to appear
                                 'color'    => 'red'        // classname
                                ,'icono'    => '<i class="material-icons">view_module</i>' // icon font
                                ,'accion'   => ''           // javascript function
                                ,'tooltip'  => 'My Actions' // text to view
                            )
                        ,array(
                                 'color'    => 'green'
                                ,'icono'    => '<i class="material-icons">play_arrow</i>'
                                ,'accion'   => 'jsFunction1()'
                                ,'tooltip'  => 'Icon 2'
                            )
                        ,array(
                                 'color'    => 'blue'
                                ,'icono'    => '<i class="material-icons">mode_edit</i>'
                                ,'accion'   => 'jsFunction2()'
                                ,'tooltip'  => 'Icon 3'
                            )                            
                    )
            );
        */
            $tipo           = (isset($data['tipo']))?$data['tipo']:'horizontal';
            $iconos         = (isset($data['iconos']))?$data['iconos']:false; 
            $others         = '';        
            $i              = 0;
            if($iconos){
                foreach ($iconos as $icono) {
                    $tooltipped     = '';
                    $attr_tooltip   = '';
                    $clase  = isset($icono['clase']) ? $icono['clase'] : '';
                    $onclick= isset($icono['accion']) ? $icono['accion'] : '';
                    $data_element = '';
                    if(isset($icono['data'])) {
                        if(is_array($icono['data'])) {
                            foreach ($icono['data'] as $key => $value) {
                                $data_element .= " data-$key = \"$value\"";
                            }
                        }
                    }
                    if(++$i == 1){
                        if($icono['tooltip']){
                            $tooltipped     = 'tooltipped';
                            $attr_tooltip   = 'data-tooltip="'.$icono['tooltip'].'" data-position="top" data-delay="50"';
                        }
                        $first = '<a '.$data_element.' class="btn-floating '.$tooltipped.' '.$clase.' " onclick="'.$onclick.'" '.$attr_tooltip.'>'.$icono['icono'].'</a>';
                        continue;
                    }
                    if($icono){
                        if($icono['tooltip']){
                            $tooltipped     = 'tooltipped';
                            $attr_tooltip   = 'data-tooltip="'.$icono['tooltip'].'" data-position="top" data-delay="50"';
                        }
                        $others .= '<li><a '.$data_element.' class="btn-floating '.$tooltipped.' '.$clase.'" onclick="'.$onclick.'" '.$attr_tooltip.'>'.$icono['icono'].'</a></li>';
                    }
                }
            }
            $html = '<div class="fixed-action-btn '.$tipo.' custom-'.$tipo.' ">
                        '.$first.'
                        <div>
                            <ul>
                                '.$others.'                              
                            </ul>
                        </div>
                    </div>';
            return $html;
        }
    }

    if (!function_exists('fecha_expiracion_password')) {
        /**
         * funcion para calcular la fecha de expiración de la contraseña del usuario
         * @var $userData Datos del usuario: dias de cadicidad de la contraseña del usuario
         * @return date('Y-m-d') si se ha espesificado los dias de caducidad, sino, false
         */
        function fecha_expiracion_password( $total_dias ){
            if ($total_dias) {
                //sumar los dias a la fecha actual para la expiracion de contraseña
                $fecha_actual = date_create(date('Y-m-d'));
                date_add($fecha_actual, date_interval_create_from_date_string( $total_dias.' days'));
                $fecha_expiracion = date_format($fecha_actual, 'Y-m-d');

                return $fecha_expiracion;

            }else{
                return null;
            }
        }
    }
    // 

    if (!function_exists('array_to_tree')) {
        /**
         * funcion para cambiar un arreglo bidimensional a un arreglo gerárquico
         * @param array $data arreglo bidimensional a recorrer
         * @return array $tree árbol gerárquico del arreglo recibido
         */
        function array_to_tree( $data ) {
            if (is_array($data)) {
                $tree = array(); 
                foreach($data as $row) {
                    fn_tree($tree, $row);
                }
                return $tree;
            } else {
                return false;
            }

        }
    }

    if (!function_exists('fn_tree')) {
        /**
         * función que agrega datos al árbol gerarquico
         * @param array $tree árbol gerarquico. parametro por Referencia
         * @param array $row datos a insertar en el árbol gerarquico. parametro por Referencia
         */
        function fn_tree( &$tree, &$row ) {
            foreach($row as $key => $data) {
                if(key_exists($data, $tree)) { 
                    unset($row[$key]);
                    fn_tree( $tree[$data], $row );
                }else {
                    if (count($row)>1) {
                        $tree[$data] = array();
                        fn_tree( $tree, $row );
                    }else {
                        $tree[$data] = 0;
                    }
                    unset($row[$key]);
                }
            }
        }
    }

    if (!function_exists('build_table_multiple')) {
        /**
         * función que agrega datos al árbol gerarquico
         * @param array $tree árbol gerarquico. parametro por Referencia
         * @param array $row datos a insertar en el árbol gerarquico. parametro por Referencia
         */
        function build_table_multiple($data = array()) {
            //$data= array('registros' => $registros, 'name' => 'horarios', 'label' => 'nombre, 'value' => 'id_horario');
            $table_check = "";
            if(!empty($data['registros']) ){
                $name = $data['name']."[]";
                $table_check = '<input width="20%" type="text" id="tfBuscar" class="buscador" onkeyup="buscar()" placeholder="Buscar..." />';
                $table_check .= '<p><input type="checkbox" id="check_all" /><label for="check_all"><b>Selecciona  Todo</b></label></p>';
                $table_check .= '<div style="height:250px;overflow-y: scroll;"><div ><table id="tabla" class="striped" >';
                $tr_i=0;
                $td=3;
                for ($i=0;$i<count($data['registros']);$i++) {
                   if (isset($data['label'])) { 
                        if(is_array($data['label'])){
                            $nombre = $data['registros'][$i][$data['label'][0]]." ".
                                      $data['registros'][$i][$data['label'][1]]." ".
                                      $data['registros'][$i][$data['label'][2]].
                                      " (".$data['registros'][$i]['id_usuario_nomina'].")";
                        }else{
                            $nombre = $data['registros'][$i][$data['label']];
                        }
                    }

                    if (isset($data['label_empresa'])) {
                         if(is_array($data['label_empresa'])){
                            $nombre = $data['registros'][$i][$data['label_empresa'][0]]." (".
                                      $data['registros'][$i][$data['label_empresa'][1]].")";
                         }
                    }
                   

                    if($i == $tr_i){
                        $table_check .='<tr style="padding:4px;background:#fff;">';
                    }
                    if($i<$td){
                        $table_check .= '<td class="empresa">'.
                            '<input type="checkbox" id="'.$data['registros'][$i][$data['value']].'" name="'.$name.'" class="select" value="'.$data['registros'][$i][$data['value']].'" >'.
                            '<label for="'.$data['registros'][$i][$data['value']].'">'.$nombre.'</label>'.
                        '</td>';
                    }else{
                        $table_check .= '<td class="empresa">'.
                            '<input type="checkbox" id="'.$data['registros'][$i][$data['value']].'" name="'.$name.'" class="select" value="'.$data['registros'][$i][$data['value']].'" >'.
                            '<label for="'.$data['registros'][$i][$data['value']].'">'.$nombre.'</label>'.
                        '</td>';
                        $table_check .='</tr>';
                        $tr_i=$i+1;
                        $td = $td+4;
                    }
                }
                $table_check .= ' </tr><tr class="resultados"><th><span class="resultados"></span></th></tr></table></div></div>';
            }else{
            $table_check .= '<div style="height: auto;"><table><tr><td><p>No Hay Registros</p></td></tr></table></div>';
            }
            return $table_check;
        }
    }

    if (!function_exists('build_table_multiple_edit')) {
        /**
         * función que agrega datos al árbol gerarquico
         * @param array $tree árbol gerarquico. parametro por Referencia
         * @param array $row datos a insertar en el árbol gerarquico. parametro por Referencia
         */
        function build_table_multiple_edit($data = array()) {
            //$data= array('registros' => $registros, 'name' => 'horarios', 'label' => 'nombre, 'value' => 'id_horario');
            $table_check = "";
            if(!empty($data['registros']) ){
                $name = $data['name']."[]";
                $table_check = '<input width="20%" type="text" id="tfBuscar_edit" class="buscador" onkeyup="buscar()" placeholder="Buscar..." />';
                $table_check .= '<p><input type="checkbox" id="check_all_edit" /><label for="check_all_edit"><b>Selecciona  Todo</b></label></p>';
                $table_check .= '<div style="height:250px;overflow-y: scroll;"><div ><table id="tabla" class="striped" >';
                $tr_i=0;
                $td=3;
                for ($i=0;$i<count($data['registros']);$i++) {
                   if (isset($data['label'])) { 
                        if(is_array($data['label'])){
                            $nombre = $data['registros'][$i][$data['label'][0]]." ".
                                      $data['registros'][$i][$data['label'][1]]." ".
                                      $data['registros'][$i][$data['label'][2]].
                                      " (".$data['registros'][$i]['id_usuario_nomina'].")";
                        }else{
                            $nombre = $data['registros'][$i][$data['label']];
                        }
                    }

                    if (isset($data['label_empresa'])) {
                         if(is_array($data['label_empresa'])){
                            $nombre = $data['registros'][$i][$data['label_empresa'][0]]." (".
                                      $data['registros'][$i][$data['label_empresa'][1]].")";
                         }
                    }
                   

                    if($i == $tr_i){
                        $table_check .='<tr style="padding:4px;background:#fff;">';
                    }
                    if($i<$td){
                        $table_check .= '<td class="empresa_edit">'.
                            '<input type="checkbox" id="'.$data['registros'][$i][$data['value']].'e" name="'.$name.'" class="select_edit" value="'.$data['registros'][$i][$data['value']].'" >'.
                            '<label for="'.$data['registros'][$i][$data['value']].'e">'.$nombre.'</label>'.
                        '</td>';
                    }else{
                        $table_check .= '<td class="empresa_edit">'.
                            '<input type="checkbox" id="'.$data['registros'][$i][$data['value']].'e" name="'.$name.'" class="select" value="'.$data['registros'][$i][$data['value']].'" >'.
                            '<label for="'.$data['registros'][$i][$data['value']].'e">'.$nombre.'</label>'.
                        '</td>';
                        $table_check .='</tr>';
                        $tr_i=$i+1;
                        $td = $td+4;
                    }
                }
                $table_check .= ' </tr><tr class="resultados_edit"><th><span class="resultados_edit"></span></th></tr></table></div></div>';
            }else{
            $table_check .= '<div style="height: auto;"><table><tr><td><p>No Hay Registros</p></td></tr></table></div>';
            }
            return $table_check;
        }
    }

    /**
     * Devuelve los nombres del dia de la semana
     */
    if(!function_exists('week_days_name')) {
        function week_days_name($data) {
            if(gettype($data) == 'string')
                $data = explode(',', $data);
            
            $dias = array();
            $ci =& get_instance();
            // debug($ci);
            if(is_array($data)) {
                foreach ($data as $key => $value) {
                    if($value == 1) {
                        //Domingo
                        $dias[] = $ci->lang->language['dia_0'];
                    } 
                    elseif ($value == 2) {
                        //Lunes
                       $dias[] = $ci->lang->language['dia_1'];
                    } 
                    elseif ($value == 3) {
                        //Martes
                       $dias[] = $ci->lang->language['dia_2'];
                    }
                    elseif ($value == 4) {
                        //Miercoles
                       $dias[] = $ci->lang->language['dia_3'];
                    } 
                    elseif ($value == 5) {
                        //Jueves
                       $dias[] = $ci->lang->language['dia_4'];
                    } 
                    elseif ($value == 6) {
                        //Viernes
                       $dias[] = $ci->lang->language['dia_5'];
                    } 
                    elseif ($value == 7) {
                        //sabado
                       $dias[] = $ci->lang->language['dia_6'];
                    }
                }
            }
            return implode(', ', $dias);
        }
    }

    if(!function_exists('custom_registros')) {
        /**
         * crea los renglones de la tabla y aqui se agregan clases o data al elemento tr
         * @param  [type] $data [description]
         * @return [type]            [description]
         */
        function custom_registros($data) {
            $registros = false;
            if(isset($data['registros'])) {
                if(is_array($data['registros'])) {
                    $registros = $data['registros'];
                }
            }

            $tbody = '<tbody>';
            if($registros) {
                $data_tr = false;
                if(isset($data['data'])) {
                    if(is_array($data['data'])) {
                        $data_tr = $data['data'];
                    }
                }

                $class = isset($data['class'])? $data['class'] : '';
                foreach($registros as $registro) {
                    $data_element = '';
                    if($data_tr) {
                        foreach ($data_tr as $key => $value) {
                            if(isset($registro[$value])) {
                                $data_element .= " data-$value = \"$registro[$value]\"";
                            }
                        }
                    }
                    $tbody .= "<tr class=\"$class\" $data_element >";
                    foreach ($registro as $campo){
                        if(is_numeric($campo) && $campo > 0 && $campo == round($campo, 0)){
                            $tbody .= '<td style="text-align:center" >'.$campo.'</td>';
                        }else{
                              $tbody .= '<td style="text-align:center" >'.$campo.'</td>';
                        }
                    }
                    $tbody .= '</tr>';
                }
            }
            $tbody .= '</tbody>';
            return $tbody;
        }
    }