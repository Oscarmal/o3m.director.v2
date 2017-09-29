$(function() {
	$('#btn-volver-estacion-usuarios').on('click', function(event) {
		event.preventDefault();
		var url = path()+'usuarios_estacion';
		var id_estacion = $(this).data('id_estacion');
		send_post({
			id_estacion: id_estacion
		}, url);
	});

	$('#form-edit-usuario').validate({
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
			email: {
				required: true,
				email: true
			},
			telefono: {
				digits: true,
				minlength: 8
			}
		},
		submitHandler: function(form) {
			var objData = formData(form),
				$btnEdit = $('#btn-edit-usuario'),
				url = 'administracion/usuarios_estacion/edit_user';

			objData['id_usuario']  = $btnEdit.data('id_usuario');
			objData['id_personal'] = $btnEdit.data('id_personal');

			requestAjaxSend(url, {objData: objData}, function(data){
				$btnEdit.prop('disabled', false).removeClass('disabled');
				
				if(data.success) {
					clase   = 'green';
					mensaje = generalLang['success_edit'];
				} else {
					clase   = 'red';
					mensaje = generalLang['error_edit'];
				}
				buildToast(mensaje, clase);
			}, function(){
				$btnEdit.prop('disabled', true).addClass('disabled');
			});
		}
	});
});