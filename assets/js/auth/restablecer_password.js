$(function() {

	/**
	 * Expresion regular para la validacion de la contraseña
	 * Debe tener al menos
	 * 1 letra mayuscula
	 * 1 letra minuscula
	 * 1 numero
	 * 1 caracter especial
	 * minimo de 8 caracteres
	 * los caracteres especiales son: .$@$!%*?&
	 **/
	var regexpress = (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[.$@$!%*?&])/); //[A-Za-z\d.$@$!%*?&]{8,}/)


	$('#form-restablecer-password').validate({
		rules: {
			password: {
				required: true,
				minlength: 8,
				regex: regexpress
			},
			rpt_password: {
				required: true,
				equalTo: '#password'
			}
		},
        submitHandler: function(form) {
        	var objData  = formData(form),
				$btn = $('#btn-restablecer-password'),
				url = 'login/update_password';

				objData['id_usuario'] = $btn.data('id_usuario');
				objData['id_estacion'] = $btn.data('id_estacion');
				objData[0] = jQuery.md5(objData[0]);
				objData['password'] = jQuery.md5(objData['password']);

			requestAjaxSend(url, {objData: objData}, function(data){
				$btn.removeClass('disabled');
				if(data.success) {
					swal({
						type: 'success',
			          title: loginLang['restablecer_password'],
			          text: loginLang['restablecer_password_txt'],
			          showConfirmButton: true,
			          confirmButtonText: generalLang['aceptar'],
			        }).then(
			            function(acept){
			            	location.href= 'inicio';
			            },
			            function(dismiss) {
			                location.href= 'inicio';
			            }          
			        );
				} else {
					swal({
			          title: loginLang['restablecer_password'],
			          text: loginLang['restablecer_password_txt_error'],
			          showConfirmButton: true,
			          confirmButtonText: generalLang['aceptar'],
			          type: 'error',
			        }).then(
			            function(acept){
			            	
			            },
			            function(dismiss) {
			                
			            }          
			        );
				}
				
			}, function(){
				$btn.addClass('disabled');
			});
        }
	});
});