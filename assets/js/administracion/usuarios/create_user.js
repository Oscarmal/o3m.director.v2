$(function() {
	$('#telefono').mask('0000000000');
	$('#expiracion_password').mask('000');

	$('#form-create-usuario').validate({
		ignore: '.ignore, .select2-input',
		rules: {
			nombre: {
				required: true,
				maxlength: 50
			},
			paterno: {
				required: true,
				maxlength: 50
			},
			materno: {
				maxlength: 50
			},
			telefono: {
				maxlength: 10,
				digits: true
			},
			mail: {
				required: true,
				email: true
			},
			expiracion_password: {
				digits: true,
				maxlength: 3,
				minlength: 1,
				min: 0
			},
			id_pais: 'required',
			id_empresa: 'required',
			id_sucursal: 'required',
			id_perfil: 'required',
			id_rol: 'required'
		},
		submitHandler: function(form) {
			var objData = formData(form),
				$btnCreate = $('#btn-create-usuario'),
				url = 'administracion/usuarios/create_user',
				urlValida = 'administracion/usuarios/validate_mail';
			requestAjaxSend(urlValida, {mail: objData['mail']}, function(data){
				//Si el mail es unico
				if(data.success) {
					requestAjaxSend(url, {objData: objData}, function(data){
						$btnCreate.prop('disabled', false);
						$btnCreate.removeClass('disabled');
						if(data.success) {
							form.reset();
							clase   = 'green';
							mensaje = generalLang['success_create'];
						} else {
							clase   = 'red';
							mensaje = generalLang['error_create'];
						}
						buildToast(mensaje, clase);
					}, function(){
						$btnCreate.prop('disabled', true);
						$btnCreate.addClass('disabled');
					});
				} else {
					buildToast(usuariosLang['mail_exist'], 'red');
				}
			});
		}
	});
});