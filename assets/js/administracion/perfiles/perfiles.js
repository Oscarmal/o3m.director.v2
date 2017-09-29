
$(function() {
	$('#table-perfiles tbody').on('click', 'button.delete-perfil', function(event) {
		event.preventDefault();
		deletePerfil($(this));
	});
});

var editPerfil = function(id_perfil) {
	var url = 'editar-perfil';
	send_post(id_perfil, url, false, false);
}

var deletePerfil = function(button) { 
	var url = 'administracion/perfiles/delete_perfil',
		id_perfil = button.data('id_perfil');
	swal({
		title: generalLang['are_you_sure'],
		text: generalLang['delete_text'],
		type: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: generalLang['yes_do_it'],
		cancelButtonText: generalLang['cancelar']
	}).then(function(){
		requestAjaxSend(url, {id_perfil: id_perfil}, function(data) {
			if(data.success) {
				$('#table-perfiles').DataTable()
		        .row( button.parents('tr') )
		        .remove()
		        .draw();
				clase   = 'success';
				mensaje = generalLang['success_delete'];
			} else {
				clase   = 'error';
				mensaje = generalLang['error_delete'];
			}
			swal(
				mensaje,
			    '',
			    clase
			)
		});
	});
}


