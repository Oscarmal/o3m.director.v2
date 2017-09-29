$(function() {
	$('#form-edit-perfil').validate({
		// ignore: '.ignore, .select2-input',
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
				$btnEdit = $('#btn-edit-perfil'),
				url = 'administracion/perfiles/edit_perfil',
				clase = '',
				mensaje= '';

				objData['id_perfil'] = $btnEdit.data('id_perfil');
				objData['ids_menu'] = getIdsMenu('ids_menu');
			requestAjaxSend(url, {objData: objData}, function(data){
				$btnEdit.prop('disabled', false);
				$btnEdit.removeClass('disabled');
				if(data.success) {
					clase   = 'green';
					mensaje = generalLang['success_edit'];
				} else {
					clase   = 'red';
					mensaje = generalLang['error_edit'];
				}
				buildToast(mensaje, clase);
			}, function() {
				$btnEdit.prop('disabled', true);
				$btnEdit.addClass('disabled');
			});

		}
	});
});