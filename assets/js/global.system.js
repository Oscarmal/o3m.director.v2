var regexpresspassword = (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[.$@$!%*?&])/);
if(detectIE()){
    // window.location.replace("error-ie");
} 
jQuery(document).ready(function(){  
    // Jquery.validate genelar params
    jQuery.validator.setDefaults({ 
        //Activa validación para chosen
        ignore: ":hidden:not(.chosen-select)"
        // Mensaje de validación para chosen
        ,errorElement : 'div'
        ,errorPlacement: function(error, element) {
            // Chosen
            if(String(element.attr('class')).indexOf('chosen-select')>-1){
                error.insertAfter("#"+element.attr('id')+"_chosen");
            }else{
                // Mensaje para Radiobutton
                switch(String(element.attr('type'))) {
                    case 'radio':
                        error.insertAfter("."+element.attr('name')+"_error");
                        jQuery("#"+element.attr('name')+"-error").css('margin-left','-6rem');
                    break;
                    case 'checkbox':
                        error.insertAfter("."+element.attr('name')+"_error");
                        // jQuery("#"+element.attr('name')+"-error").css({'margin-left':'3rem', 'margin-top': '1rem'});
                    break;
                    default:
                        // Para el resto de los Inputs
                        error.insertAfter(element);
                    break; 
                }
                
                
                // if(String(element.attr('type'))=='radio' || String(element.attr('type')) == 'checkbox'){
                //     error.insertAfter("."+element.attr('name')+"_error");
                //     // jQuery("#"+element.attr('name')+"-error").css('margin-top','2rem');
                //     jQuery("#"+element.attr('name')+"-error").css('margin-left','-6rem'); //con prefix
                // }else{
                // }
            }

            
        }
    }); 
});

function init_form_validate_onChange(identificador, idForm){
// Ejecuta jQuery Validate al cambiar el valor de un campo
    jQuery(idForm).find('.validate').each(function(){
        jQuery(this).change(function() {
            console.log('valida');
            return jQuery(this).valid();
                    // return function() {
                        // init_form_validate(idForm); //Inicializa validador
                        // $mainElement.valid(); // Verifica validación
            // }
        });
    });
    // jQuery(identificador).each(function() { 
    //     // $sibling = // find a sibling to $this.
    //     // $mainElement = jQuery(this); // memorize $(this)
    //     jQuery(this).change(function($mainElement) {
    //         return jQuery(this).valid();
    //         // return function() {
    //             // init_form_validate(idForm); //Inicializa validador
    //             // $mainElement.valid(); // Verifica validación
    //         // }
    //     });//($mainElement))
    // });
}


function debug(arra){
    alert(dump_var(arra));
}

function dump_var(arr,level) {
    // Explota un array y regres su estructura
    // Uso: alert(dump_var(array));
    var dumped_text = "";
    if(!level) level = 0;   
    //The padding given at the beginning of the line.
    var level_padding = "";
    for(var j=0;j<level+1;j++) level_padding += "    "; 
    if(typeof(arr) == 'object') { //Array/Hashes/Objects 
        for(var item in arr) {
            var value = arr[item];          
            if(typeof(value) == 'object') { //If it is an array,
                dumped_text += level_padding + "'" + item + "' ...\n";
                dumped_text += dump_var(value,level+1);
            } else {
                dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
            }
        }
    } else { //Stings/Chars/Numbers etc.
        dumped_text = "===>"+arr+"<===("+typeof(arr)+")";
    }
    return dumped_text;
} 

function formData(selector, template){
    /**
    * Descripcion:  Crea un objeto recuperando los valores ingresados en los campos INPUT
    * Comentario:   Los elementos html deben estar dentro de un mismo <div> y tiene que 
    *               tener el atributo:data-campo="[nombre_campo]"
    * Ejemplo:      <div id="formulario"><input id="id_orden" type="hidden" data-campo="id_orden" value="{id_orden}" /></div>
    *               <script> var objData = formData('#formulario'); </script>
    * @author:      Oscar Maldonado - O3M
    */
    var data = template ? template : {}; // Valores predeterminados - Opcional
    var c, f, r, v, m, $e, $elements = jQuery(selector).find("input, select, textarea");
    for (var i = 0; i < $elements.length; i++){
        $e = jQuery($elements[i]);
        // alert($elements[i]['id']);  
        f = $e.data("campo");
        r = $e.attr("required") ? true: false;  
        // validación de que exista un elemento

        if (!f) continue;  

        // Recolección datos por tipo de elemento
        v = undefined;
        switch ($e[0].nodeName.toUpperCase()){
            case "LABEL":
                v = $e.text();
                break;
            case "INPUT":
                var type = $e.attr("type").toUpperCase();
                if (type == "TEXT" || type == "HIDDEN" || type == "PASSWORD"){
                    v = jQuery.trim($e.val());
                }
                else if (type == "CHECKBOX"){
                    v = $e.prop("checked");
                }
                else if (type == "RADIO"){
                    if ($e.prop("checked")){
                        v = $e.val();
                        // alert($e.prop("id"));
                    }
                }
                else if ($e.datepicker){
                    v = $e.datepicker("getDate");
                }
                else{
                    v = jQuery.trim($e.val());
                }
                break;
            case "TEXTAREA":
            default:
                v = jQuery.trim($e.val());
        }  

        // Guarda el valor en el objeto
        if (r && (v == undefined || v == "")){

            m = $e.data("mensaje");
            if (m)
                alert(m);
            else
                alert("Es necesario especificar un valor para el campo \"" + f + "\".");
            $e.focus();
            return null;
        }
        else if (v != undefined){
                data[i] = v;  
                data[f] = v;
        }
               
                
    }// next  
    return data;
}


/**
 * @author Ruben Bautista Castillo <ruben.bautista@isolution.mx>
 * requestSend
 *Función que devuelve una repuesta de la peticion solicitada por GET, POST
 * @param request {object} Objeto de petición
 * @param response {object} Objeto de respuesta HTTP     
 * @example
 * @param callback recide el data
 * @param pathUrl recide el controller o URL
 * @param type recide POST, GET
 * @param dataquery recibe los parametros que seran enviados por get o post
 * @returns {json} Obtiene la respuesta de la peticion solicitada
 * GET / HTTP 1.1 POST / HTT 1.1
 * @modificado Armando Cruz
 * EJEMPLO: 
    requestAjaxSend('prueba/ejemplo', {id:1}, function(data){
        console.log(data); 
    }, false, false, false, false,  'GET', 'html');
 */
      
 function requestAjaxSend(pathUrl, data, success, beforeSend, error, complete, done, type, dataType, async){ 
    var dataType = dataType? dataType : 'json',
        type     = type? type : 'POST',
        beforeSend = beforeSend? beforeSend : function(){}, 
        error    = error? error : function(){},
        complete = complete? complete : function(xhr) {
            check_status_xhr(xhr.status);
        },
        done     = done? done : function(){},
        async    = (typeof async !== 'undefined')? async : true;
    return jQuery.ajax({
        async:async,
        type:type,
        url: pathUrl,
        data: data,
        dataType: dataType, 
        beforeSend: function(b) {
            beforeSend(b);
        },                         
        success : function(data) {
            check_session(data);
            success(data);
        },
        error: function(e) {
            error(e);
        },
        complete: function(c) { 
            complete(c);
        },
        done: function() {
            done();
        }
    });
}

/**
 * Verifica la sesion del usuario
 * @param  {json} data respuesta de una llamada ajax
 * @return {void}      
 */
function check_session(data){
    if(data.session_destroy){
        swal({
          title: sessionLang['title'],
          text: sessionLang['content'],
          timer: 5000,
          showConfirmButton: true,
          confirmButtonText: generalLang['aceptar']
        }).then(
            function(acept){
                location.href= 'inicio';
            },
            function(dismiss) {
                location.href= 'inicio';
            }           
        );
    }
}
 
function send_post(data, url, target, debug){
/**
*    // Envío de valores vía POST a una URL
*    // var objData = 'simple';
*    // var objData = new Array;    objData.push('arrelgo1'); objData.push('arrelgo2');
*    // var objData = {id: 1, name: 'oscar', value: 'valores'};
*/
    if(data && url){
        var elements, keys = false;
        var n  = Math.floor((Math.random() * 100) + 1); //1 al 100
        target = (!target)?'_self':target;
        // Crea formulario
        var form = document.createElement("form");        
        form.setAttribute("id", "frm-"+n);
        form.setAttribute("method", "post");
        form.setAttribute("action", url);
        form.setAttribute("target", target);
        // Contruccion de inputs
        if(data.constructor === String || data.constructor === Number){
            // Simple: un solo dato - String
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");      
            hiddenField.setAttribute("id", "id");
            hiddenField.setAttribute("name", "id");
            hiddenField.setAttribute("value", data);
            form.appendChild(hiddenField);
        }
        else if(data.constructor === Array){
            // Array: arreglo simple - ['1','2','n']
            elements = data.length;
            var hiddenField = new Array;
            for(var i=0; i<elements; i++){
                hiddenField[i] = document.createElement("input");
                hiddenField[i].setAttribute("type", "hidden");      
                hiddenField[i].setAttribute("id", "input-"+i);

                if (data[i].constructor === Object) {
                    hiddenField[i].setAttribute("name", data[i].name);
                    hiddenField[i].setAttribute("value", data[i].value);
                } else {
                    hiddenField[i].setAttribute("name", "input-"+i);
                    hiddenField[i].setAttribute("value", data[i]);
                }
                form.appendChild(hiddenField[i]);
            }
        }
        else if(data.constructor === Object){
            // Object: arreglo asociativo - {id: 1, name: 'oscar', value: 'valores'}
            elements = Object.keys(data).length; 
            keys = Object.keys(data);
            var hiddenField = new Array;
            for(var i=0; i<elements; i++){
                hiddenField[i] = document.createElement("input");
                hiddenField[i].setAttribute("type", "hidden");      
                hiddenField[i].setAttribute("id", keys[i]);
                hiddenField[i].setAttribute("name", keys[i]);
                hiddenField[i].setAttribute("value", data[keys[i]]);
                form.appendChild(hiddenField[i]);                
            }
        }
        document.body.appendChild(form); //Muestra formulario en el documento
        if(debug){
            return false;
        }else{
            form.submit();  //Envía datos a URL  
        }
    }else{
        return false;
    }
}
/**
 * Redirecciona a la url recibida
 * @param  {txt} uri recibida
 * @return {void}      
 */
function redirect(url){
    url = (url)?url:''; 
    location.href=url;
}


/**
 * Valida formulario usando jquery.validate
 * @param  {idObj} ID del DOM HTML
 * @param  {rules} Objeto JSON con relgas de validación
 * @param  {messages} Objeto JSON con mensajes para cada regla
 * @return {void}      
 */
function frmValidate(idObj,rules,messages){      
    // Mensajes
    var messages_default = {
        required:       validatorLang['required'],
        remote:         validatorLang['remote'],
        email:          validatorLang['email'],
        url:            validatorLang['url'],
        date:           validatorLang['date'],
        dateISO:        validatorLang['dateISO'],
        number:         validatorLang['number'],
        digits:         validatorLang['digits'],
        creditcard:     validatorLang['creditcard'],
        equalTo:        validatorLang['equalTo'],
        accept:         validatorLang['accept'],
        maxlength:      validatorLang['maxlength'],
        minlength:      validatorLang['minlength'],
        rangelength:    validatorLang['rangelength'],
        range:          validatorLang['range'],
        max:            validatorLang['max'],
        min:            validatorLang['min']
    };
    jQuery.extend(jQuery.validator.messages,messages_default);
    if(!messages) messages = messages_default;
    // Selects
    // jQuery.validator.setDefaults({ ignore: ":hidden:not(select)" });
    // Inicializa
    jQuery(idObj).validate({
        ignore: '.ignore, .select2-input',
        rules: rules,
        messages: messages,
        errorElement : 'div',
        errorPlacement: function(error, element) {
          var placement = $(element).data('error');
          if (placement) {
            $(placement).append(error)
          } else {
            error.insertAfter(element);
          }
        }
     }); 
}

// MODALES
function buildModal(uri, data){
    if(uri){
        jQuery.ajax({
            type: "POST",
            url: uri,
            dataType: 'json',
            data: {objData:data},
            success: function(data){
                if(data.success){
                    jQuery("#modal-custom").empty();
                    jQuery("#modal-custom").append(data.modal);
                    jQuery('#'+data.id).openModal({dismissible:false});  
                }
            }
        });
    }
}

function buildModalFull(uri, data){
    if(uri){
        jQuery.ajax({
            type: "POST",
            url: uri,
            dataType: 'json',
            data: {objData:data},
            success: function(data){
                if(data.success){
                    jQuery("#modal-custom").empty();
                    jQuery("#modal-custom").append(data.modal);
                    jQuery('#'+data.id).openModal({dismissible:true}); 
                }
            }
        });
    }
}

function buildModalTimeout(uri, timeout){
    if(uri){
        timeout = (!timeout)?2000:timeout;
        jQuery.ajax({
            type: "POST",
            url: uri,
            dataType: 'json',
            data: {},
            success: function(data){
                if(data.success){
                    jQuery("#modal-custom").empty();
                    jQuery("#modal-custom").append(data.modal);
                    jQuery('#'+data.id).openModal();
                    setTimeout(function(){ jQuery('#'+data.id).closeModal(); }, timeout);
                    setTimeout(function(){ jQuery("#modal-custom").empty();}, timeout+1000);
                }
            }
        });
    }
}
// Fin MODALES

/**
 * Contruye una notificación toast
 * @param  {string} mensaje mensaje de la notificacion
 * @param  {sring} clase   clase de la notifiacion
 * @param  {int} tiempo  tiempo en mili segundos de duracion
 * @return {void}         
 */
function buildToast(mensaje, clase, tiempo, completeCallBack) {
    mensaje  = mensaje? mensaje : 'Toast';
    tiempo   = tiempo? tiempo : 5000;
    callback = completeCallBack? completeCallBack : function(){};
    clase   = clase? clase : 'green';
    Materialize.toast(mensaje, tiempo, clase, callback);
}


function buildSweetAlert(titulo, mensaje, clase) {
    swal(
        titulo, 
        mensaje,
        clase
    );
}

var loadEmpresas = function(id_pais) {
    var url = 'empresas/get_empresas';
    requestAjaxSend(url, {id_pais: id_pais}, function(data){
        $('#load-empresas').html(data);
        $('#id_empresa').material_select();
    }, function(){
        $('#load-empresas').html('<div class="progress"><div class="indeterminate"></div></div>');
    });
}

var loadSucursales = function(id_empresa) {
    var url = 'sucursales/get_sucursales';
    requestAjaxSend(url, {id_empresa: id_empresa}, function(data){
        $('#load-sucursales').html(data);
        $('#id_sucursal').material_select();
    }, function(){
        $('#load-sucursales').html('<div class="progress"><div class="indeterminate"></div></div>');
    });
}


/**
 * Carga de selects 
 * @param  {strin} url    [URL del servidor]
 * @param  {int} id     [id del elemento]
 * @param  {String} load   [#id del elemento donde se carga]
 * @param  {String} select [id del select cargado]
 * @return {Void}       
 * var url = 'entidades/get_entidades',
        load = 'load-entidades',
        select = 'id_entidad';
    loadItemSelect(url, id_pais, load, select);
 */
var loadItemSelect = function(url, id, load, select) {
    console.log('#'+select); 
    requestAjaxSend(url, {id: id}, function(data){
        $('#'+load).html(data);
        $('#'+select).material_select();
    }, function(){
        $('#'+load).html('<div class="progress"><div class="indeterminate"></div></div>');
    });
}

/**
 * Carga de selects dependientes
 * @param  {strin} url    [URL del servidor]
 * @param  {object} data     [variables en objeto]
 * @param  {String} load   [#id del elemento donde se carga]
 * @param  {String} select [id del select cargado]
 * @return {Void}       
 * var  url = 'entidades/get_entidades',
        data = {id_opcion: 1, id_cliente: 1},
        load = 'load-entidades',
        select = 'id_entidad';
    loadItemSelect(url, data, load, select);
 */
var loadFormSelect = function(url, data, load, idselect) {
    requestAjaxSend(url, data, function(select){
        $('#'+load).html(select);
        $('#'+idselect).material_select();
    }, function(){
        $('#'+load).html('<div class="progress"><div class="indeterminate"></div></div>');
    }, false, false, false, false, 'html');
}

/**
 * funcion para resetear los select dependientes cargados de un formulario
 * @param {object} data identificador del select para resetear
 * @example valor del objeto data
 * data = [{0:'select.sede'},{0:select#tipo_empleado}]
 */
var reset_select_dependientes = function (data){
    $(data).each( function(key, obj){
        $(obj[0]+ ' option').each( function(index, option){
            if (index > 0) {
                $(this).remove();
            }
        });
        $(obj[0]).prop('selectedIndex', 0); //Sets the first option as selected
        $(obj[0]).material_select();
    });
}

var getIdsMenu = function(name) {
    var ids_menus = [];
    jQuery('input[name='+name+']:checked').each(function(){
        ids_menus.push(jQuery(this).val());
    });
    return ids_menus;
}

function detectIE() {
// Detección de iExplorer
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }
    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }
    // var edge = ua.indexOf('Edge/');
    // if (edge > 0) {
    //    // IE 12 => return version number
    //    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    // }
    // other browser
    return false;
}

function selects_requeridos(formulario){
    var items_vacios = 0;
    var padre = (formulario) ? '#'+formulario+' ' : '';

    jQuery(padre+" .requerido").each(function(){
        if(jQuery(this).prop('tagName')=='SELECT'){
            var attr = $(this).attr('multiple');
            if(typeof attr !== typeof undefined && attr !== false){
                if(!jQuery.trim(jQuery("[name='"+jQuery(this).attr('name')+"'] option")).length>0){
                    items_vacios++; 
                    ids = jQuery(this).attr('name')+'|'+ids;
                }
                if(!jQuery.trim(jQuery("[name='"+jQuery(this).attr('name')+"'] option:selected")).length>0){
                    items_vacios++; 
                    ids = jQuery(this).attr('name')+'|'+ids;
                }
            }else{
                var select  = jQuery("select[name='"+jQuery(this).attr('name')+"'] option:selected");
                var select_empty = jQuery("select[name='"+jQuery(this).attr('name')+"']");
                var select_focus = jQuery("select[name='"+jQuery(this).attr('name')+"']").closest('div');
                var name = jQuery(this).attr('name');
                
                var msg = '<div id="'+name+'-error" class="error-select"> '+formValidateLang.required+'</div>';
                if(!select.val()){
                
                    select_focus.focus();
                    $('#'+name+'-error').remove();
                    select_focus.append(msg);
                    select_empty.change(function() {
                      $('#'+name+'-error').remove();
                    });
                    items_vacios++
                } 
            }
    
        }
    });
    return items_vacios;
}


function values_enteros(formulario){
    var padre = (formulario) ? '#'+formulario+' ' : '';
    var enteros = true;
    
    jQuery(padre+" .digit").each(function(){
        var name = $(this).attr('name');
        var msg = '<div id="'+name+'-error-input" class="error-select"> '+formValidateLang.digits+'</div>';
        if(isInt(jQuery(this).val())){
        }else{
            var name = $(this).attr('name');
            var item = $(this).closest('div');
            $('#'+name+'-error-input').remove();
            item.append(msg);
            $(this).focus(function(event) {
                $('#'+name+'-error-input').remove();
            });
            enteros = false;
        }
    });
    return enteros;
}


/**
 * Comprueba si un valor es de tipo entero
 * @return {Boolean}   [devuelve true si es entero, false si no lo es]
 */
function isInt(x) {
   var y = parseInt(x, 10);
   return !isNaN(y) && x == y && x.toString() == y.toString();
}

function initDataTable(element) {
    var element = element ? element : '.datatable';
   $(element).DataTable({
        fnInitComplete: function(a, t) {
                var l = jQuery(this).parents(".dataTables_wrapper").eq(0);
                l.find(".dataTables_length").addClass("input-field"), l.find(".dataTables_length label select").prependTo(l.find(".dataTables_length")), l.find(".dataTables_length select").material_select(), l.find(".dataTables_filter").addClass("input-field"), l.find(".dataTables_filter").addClass("without-search-bar"), l.find(".dataTables_filter label input").prependTo(l.find(".dataTables_filter"))
            },
        "language": {
            url: 'http://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json'
        },
        "searching":  true,
        "scrollX":    true,
        "responsive": true,
        "details":    true,
        "dom": "<'row no-gutter'\t<'col s12 m2'l>\t<'col s12 offset-m6 m4'f>><''tr><'row no-gutter'\t<'col s12 m4'i>\t<'col s12 m8'p>>",
        "iDisplayLength": 10,
        "bFilter": false,
        "aaSorting" : [[0, "asc"]]
        // }
    });
}

function check_status_xhr(status) {
    var title = '¡Error!';
    var text = xhrStatusLang.errorDefault;
    var type = 'error';
    var showMessage = false;
    switch(status) {
        case 500:
            title = xhrStatusLang.error500;
            text = xhrStatusLang.error500Msg;
            showMessage = true;
            type = 'error';
            break;
    }
    if(showMessage) {
        swal({
          title: title,
          text: text,
          showConfirmButton: true,
          confirmButtonText: generalLang['aceptar'],
          type: type,
          allowOutsideClick: false
        }).then(
            function(a) {

            },
            function(d) {
                
            }           
        );
    }
}

/**
 * jQuery serializeObject
 * @copyright 2014, David G. Hong <davidhong.code@gmail.com>
 * @link https://github.com/hongymagic/jQuery.serializeObject
 * @license MIT
 * @version 2.0.3
 */
(function ( $ ) {
    $.fn.serializeObject = function() {
        "use strict";
        var a = {},
            b = function(b, c) {
                var d = a[c.name];
                ("undefined" != typeof(d) && d !== null) ? ($.isArray(d) ? d.push(c.value) : a[c.name] = [d, c.value]) : a[c.name] = c.value;
            };

        return $.each(this.serializeArray(), b), a;
    };
}(jQuery));


function formatDate(date, format, utc) {
// Formateo de fechas para plugins de jQuery usando momentum.js
// Ejemplo: console.log(formatDate(date, 'yyyy-mm-dd HH:ii:ss tt', false));

    // var MMMM = ["\x00", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    // var MMM = ["\x01", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    // var dddd = ["\x02", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // var ddd = ["\x03", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    var MMMM = ["\x00", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    var MMM = ["\x01", "Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    var dddd = ["\x02", "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    var ddd = ["\x03", "Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];

    function ii(i, len) {
        var s = i + "";
        len = len || 2;
        while (s.length < len) s = "0" + s;
        return s;
    }

    var y = utc ? date.getUTCFullYear() : date.getFullYear();
    format = format.replace(/(^|[^\\])yyyy+/g, "$1" + y);
    format = format.replace(/(^|[^\\])yy/g, "$1" + y.toString().substr(2, 2));
    format = format.replace(/(^|[^\\])y/g, "$1" + y);

    var M = (utc ? date.getUTCMonth() : date.getMonth()) + 1;
    format = format.replace(/(^|[^\\])mmmm+/g, "$1" + MMMM[0]);
    format = format.replace(/(^|[^\\])mmm/g, "$1" + MMM[0]);
    format = format.replace(/(^|[^\\])mm/g, "$1" + ii(M));
    format = format.replace(/(^|[^\\])m/g, "$1" + M);

    var d = utc ? date.getUTCDate() : date.getDate();
    format = format.replace(/(^|[^\\])dddd+/g, "$1" + dddd[0]);
    format = format.replace(/(^|[^\\])ddd/g, "$1" + ddd[0]);
    format = format.replace(/(^|[^\\])dd/g, "$1" + ii(d));
    format = format.replace(/(^|[^\\])d/g, "$1" + d);

    var H = utc ? date.getUTCHours() : date.getHours();
    format = format.replace(/(^|[^\\])HH+/g, "$1" + ii(H));
    format = format.replace(/(^|[^\\])H/g, "$1" + H);

    var h = H > 12 ? H - 12 : H == 0 ? 12 : H;
    format = format.replace(/(^|[^\\])hh+/g, "$1" + ii(h));
    format = format.replace(/(^|[^\\])h/g, "$1" + h);

    var m = utc ? date.getUTCMinutes() : date.getMinutes();
    format = format.replace(/(^|[^\\])ii+/g, "$1" + ii(m));
    format = format.replace(/(^|[^\\])i/g, "$1" + m);

    var s = utc ? date.getUTCSeconds() : date.getSeconds();
    format = format.replace(/(^|[^\\])ss+/g, "$1" + ii(s));
    format = format.replace(/(^|[^\\])s/g, "$1" + s);

    var f = utc ? date.getUTCMilliseconds() : date.getMilliseconds();
    format = format.replace(/(^|[^\\])fff+/g, "$1" + ii(f, 3));
    f = Math.round(f / 10);
    format = format.replace(/(^|[^\\])ff/g, "$1" + ii(f));
    f = Math.round(f / 10);
    format = format.replace(/(^|[^\\])f/g, "$1" + f);

    var T = H < 12 ? "AM" : "PM";
    format = format.replace(/(^|[^\\])TT+/g, "$1" + T);
    // format = format.replace(/(^|[^\\])T/g, "$1" + T.charAt(0));

    var t = T.toLowerCase();
    format = format.replace(/(^|[^\\])tt+/g, "$1" + t);
    // format = format.replace(/(^|[^\\])t/g, "$1" + t.charAt(0));

    var tz = -date.getTimezoneOffset();
    var K = utc || !tz ? "Z" : tz > 0 ? "+" : "-";
    if (!utc) {
        tz = Math.abs(tz);
        var tzHrs = Math.floor(tz / 60);
        var tzMin = tz % 60;
        K += ii(tzHrs) + ":" + ii(tzMin);
    }
    format = format.replace(/(^|[^\\])K/g, "$1" + K);

    var day = (utc ? date.getUTCDay() : date.getDay()) + 1;
    format = format.replace(new RegExp(dddd[0], "g"), dddd[day]);
    format = format.replace(new RegExp(ddd[0], "g"), ddd[day]);

    format = format.replace(new RegExp(MMMM[0], "g"), MMMM[M]);
    format = format.replace(new RegExp(MMM[0], "g"), MMM[M]);

    format = format.replace(/\\(.)/g, "$1");

    return format;
};