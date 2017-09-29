jQuery(document).ready(function($) {
	$('#btn-create-usuario').on('click', function(event) {
		event.preventDefault();
		var id_estacion = $(this).data('id_estacion');
		var url = path()+'nuevo-usuario';
		send_post({
			id_estacion: id_estacion
		}, url, false, false);
	});
});

var editUsuario = function(id_usuario) {
	var url = 'editar-usuario';
	var id_estacion = $('#btn-create-usuario').data('id_estacion');
	send_post({
		id_estacion: id_estacion,
		id_usuario: id_usuario
	}, url, false, false);
}