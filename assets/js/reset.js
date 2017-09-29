jQuery(document).ready(function($){ 
    init_form_validate("#form-save"); // Inicializa validación de formulario   
    jQuery("#btn-restablecer-password").click(function(){btn_acept();});
    jQuery("#btn-close").click(function(){btn_cancel();});

    jQuery('#rpt_password').keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            btn_acept();
        }
    });
});

function cancel() {
    location.reload();
}

function btn_acept(){
// Boton de aceptar
    if(jQuery("#form-save").valid()){
        var objData = formData('#form-save');
        jQuery.ajax({
            type: "POST",
            url: "reset/new_pass",
            dataType: 'json',
            data: {objData:objData},
            success: function(data){   
                check_session(data);
                // if(data.success){
                //     // alert(data.msj);
                //     // location.reload();
                //     // console.log(data.modal); 
                //     jQuery("#modal-custom").empty();
                //     jQuery("#modal-custom").append(data.modal);
                //     jQuery('#'+data.id).openModal({dismissible:false});  
                // }else{
                //     alert(data.msj);
                // }
                jQuery("#modal-custom").empty();
                jQuery("#modal-custom").append(data.modal);
                jQuery('#'+data.id).openModal({dismissible:false});
            }
            ,beforeSend: function() {
                jQuery("#btn-restablecer-password").prop('disabled', true).addClass('disabled');
            }
        });
    }
}


function init_form_validate(idForm){
// Reglas para la validación de los campos del formulario    
    var formvalidate = jQuery(idForm).validate({
        rules: {
            old_password: {
              required: true
            }
            ,password: {
              required: true,
            }
            ,rpt_password: {
               required: true
              ,equalTo: "#password"
            }
        }

    });
    //Activa validación onChange
    init_form_validate_onChange('.validate',formvalidate); 
}