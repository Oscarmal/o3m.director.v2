$(function() {
	$('#form-create-perfil').validate({
		ignore: '.ignore, .select2-input',
		rules: {
			perfil: {
				required: true,
				maxlength: 200
			},
			clave_corta: {
				required: true,
				maxlength: 50
			},
			descripcion: {
				maxlength: 64000
			}
		},
		submitHandler: function(form){
			var objData  = formData(form),
				url = 'administracion/perfiles/create_perfil',
				clase = '',
				mensaje= '',
				$btnCreate = $('#btn-create-perfil');

				objData['ids_menu'] = getIdsMenu('ids_menu');

			requestAjaxSend(url, {objData: objData}, function(data) {
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

		}
	});
});