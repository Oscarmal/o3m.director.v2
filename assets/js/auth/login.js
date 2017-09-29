jQuery(document).ready(function(){	
	setTimeout(function(){jQuery('#usuario').focus();}, 500);
	jQuery( "#btnSubmit" ).click(function() {			
		auth();
	});
	jQuery('#usuario').keypress(function(event){
	    var keycode = (event.keyCode ? event.keyCode : event.which);
	    if(keycode == '13'){
	        auth();
	    }
	});
	jQuery('#clave').keypress(function(event){
	    var keycode = (event.keyCode ? event.keyCode : event.which);
	    if(keycode == '13'){
	       auth();
	    }
	});
	frmRules('#frmLogin');
});


 var recuperar_password = function() {
	var url = 'login/recuperar_password';
	swal({
		title: loginLang['recuperar_pass'],
		text: loginLang['ingresa_correo'],
		input: 'email',
		showCancelButton: true,
		confirmButtonText: generalLang['aceptar'],
		cancelButtonText: generalLang['cancelar'],
		showLoaderOnConfirm: true,
		preConfirm: function (email) {
			return new Promise(function (resolve, reject) { 
				requestAjaxSend(url, {email: email}, function(data){
					if(data.success) {
						resolve(data.msg);
					} else {
						reject(data.msg);
					}
				});
			})
		},
		allowOutsideClick: false
	}).then(function (msg) {
		swal({
			type: 'success',
			title: loginLang['recuperar_pass'],
			html: msg
		})
	}, function(){},
	function(){})
}

function frmRules(idObj){	
	var maxmin = {
				 usuario: 	{ min:4, max:16}
				,clave: 	{ min:8, max:16}
	}
 	var reglas 	= {
	            usuario: {
	                required: true,
	                minlength: maxmin.usuario.min
	            }
	            ,clave: {
	                required: true,
	                // minlength: maxmin.clave.min
	            }
	        };
 	var msj 	= {
	            usuario:{
	                required: loginLang['usuario_required'],
	                minlength: formValidateLang['minlength'].replace('%s', maxmin.usuario.min)
	            }
	            ,clave: {
	                required: loginLang['clave_required'],
	                minlength: formValidateLang['minlength'].replace('%s', maxmin.clave.min)
	            }
	        };
	frmValidate(idObj,reglas,msj);
}


function auth(){
	if(jQuery('#frmLogin').valid()){
		// jQuery("#btnSubmit").addClass('disabled');
		var user     = jQuery('#usuario').val();
		var pwd      = jQuery.md5(jQuery('#clave').val());
		var objData = {json: 1, usuario: user, clave: pwd};
		jQuery.ajax({
			type: "POST",
			url: "auth",
			dataType: 'json',
			data: {objData:objData},
			success: function(data) {
				if(data.success){
					redirect(data.uri);
				}else{
					swal(
						data.titulo_alerta,
						data.msg,
						data.tipo_alerta
					);
				}
				jQuery("#btnSubmit").removeClass('disabled');
			}
		});
	}
}
