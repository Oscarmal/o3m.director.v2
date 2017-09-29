var ico_error = '<i class="material-icons ico-middle">error_outline</i> ';
var generalLang = {
	sistema: 'Sistema',
	menu: 'Menú',
	aceptar: 'Aceptar',
	cancelar: 'Cancelar',
	current_step: 'Step',
	finish: 'Finalizar',
	cerrar: 'Cerrar',
	si: 'Sí',
	no: 'No',
	siguiente: 'Siguiente',
	atras: 'Atras',
	volver: 'Volver',
	buscar: 'Búscar',
	cargando: 'Cargando...',
	iniciar_sesion: 'Iniciar sesión',
	cerrar_sesion: 'Cerrar sesión',
	salir: 'Salir',
	guardar: 'Guardar',
	guardando: 'Guardando...',
	success: '¡Exito!',
	error: '¡Error!',
	success_edit: '¡Exito editando el registro!',
	error_edit:   '¡Error editando el registro!',
	success_create: '¡Exito guardando el registro!',
	error_create: '¡Error guardando el registro!',
	success_delete: '¡Exito eliminando el registro!',
	error_delete: '¡Error eliminando el registro!',
	cancel_delete: '¡Se ha cancelado la eliminación!',
	are_you_sure: '¿Está seguro?',
	delete_text: '¡Está a punto de eliminar el log de asistencia!',
	delete_row: '¡Está a punto de eliminar el registro!',
	desactivar_estacion: '¡Seguro que quieres DESACTIVAR esta estación!',
	quitar_turno: '¡Seguro que quieres QUITAR el turno!',
	activar_estacion: '¡Seguro que quieres ACTIVAR esta estación!',
	yes_do_it: 'Sí, hazlo',
	error: '¡Error!',
	alerta: '¡Alerta!'
};

var dropzoneLang = {
	dictDefaultMessage: "Arrastra aquí tu archivo para subirlo o de Click para seleccionar uno",
    dictFallbackMessage: "Tu navegador no soporta drag-n-drop para cargar archivos.",
    dictFileTooBig: "Tu archivo es muy grande: ({{filesize}}MiB). Máximo permitido: {{maxFilesize}}MiB.",
    dictInvalidFileType: "Formato de archivo no permitido.",
    dictResponseError: "El servidor respondió: {{statusCode}} code.",
    dictCancelUpload: "Cancelar",
    dictCancelUploadConfirmation: "Estás seguro que quieres cancelar?",
    dictRemoveFile: "Eliminar Archivo",
    dictMaxFilesExceeded: "No puedes cargar más archivos."
};

var sessionLang = {
	title: 'La sesión ha caducado',
	content: 'La sesión ha caducado, por favor, vuelva a iniciar sesión para continuar usando el sistema'
};

var usuariosLang = {
	mail_exist: 'El email ya se encuentra registrado'
};

var formValidateLang = {
	caracter: 		"caracter",
	caracteres: 	"caracteres",
	required: 		ico_error+"Este campo es requerido",  
	minlength: 		ico_error+"Ingrese mínimo %s caracteres", 
	maxlength: 		ico_error+"Ingrese máximo %s caracteres",
	digits:         ico_error+'Por favor introduzca únicamente números. '
};

var loginLang = {
	usuario_required: 	ico_error+"Ingrese su usuario", 
	clave_required: 	ico_error+"Ingrese su clave",
	clave_wrong: 		'Su usuario y/o contraseña son incorrectas',
	recuperar_pass: 	'Recuperar Contraseña',
	ingresa_correo: 	'Por favor ingrese su correo electrónico',
	restablecer_password: 'Restablecer Contraseña',
	restablecer_password_txt: 'Se ha restablecido su Contraseña',
	restablecer_password_txt_error: '¡Ocurrio un error! Por favor intentelo más tarde'
};


// JQUERY VALIDATOR
var validatorLang = {
		required: 		ico_error+'Este campo es requerido',
        remote: 		ico_error+'Por favor arregle este campo.',
        email: 			ico_error+'Por favor introduzca una dirección de correo valida.',
        url: 			ico_error+'Por favor introduzca una URL valida.',
        date: 			ico_error+'Por favor introduzca una fecha valida.',
        dateISO: 		ico_error+"Por favor introduzca una fecha valida (ISO).",
        number: 		ico_error+'Por favor introduzca un número valido',
        digits: 		ico_error+'Por favor introduzca únicamente números. ',
        creditcard: 	ico_error+"Por favor ingrese un núemro de tarjeta de crédito válido.",
        equalTo: 		ico_error+'Por favor introduzca el mismo valor.',
        accept: 		ico_error+"Por favor ingrese un valor con una extensión válida.",
        maxlength: 		ico_error+"Por favor introduzca no más de {0} caracteres.",
        minlength: 		ico_error+"Por favor introduzca por lo menos {0} caracteres.",
        rangelength: 	ico_error+"Por favor ingrese un valor entre {0} y {1} caracteres.",
        range: 			ico_error+"Por favor ingrese un valor entre {0} y {1}.",
        max: 			ico_error+"Por favor ingrese un valor menor o igual a {0}.",
        min: 			ico_error+"Por favor ingrese un valor mayor o igual a {0}.",
        IP4Checker:     ico_error+'Por favor introduzca una Dirección IP valida',
        MACaddress:     ico_error+'Por favor introduzca una Dirección MAC valida',
        image:          ico_error+'Por favor seleccione un archivo de imágen (jpg, png, gif)',
        greaterThan:    ico_error+'Por favor seleccione una valor mayor al valor de {0}.',
        hourGreaterThan: ico_error+'Por favor seleccione una valor mayor al valor de {0}.',
        txt: ico_error+'Por favor seleccione un archivo txt',
        xls: ico_error+'Por favor seleccione un archivo excel'
};
// 

// Calendario
var calendariosLang = {
		delete_title: 		'Eliminar Calendario',
		delete_text: 		"¿Realmente desea eliminar el calendario '%s'?",
		delete_date_title: 	'Eliminar Fecha',
		delete_date_text: 	"¿Realmente desea eliminar la fecha '%s' del calendario?",
		error_duplicate: 	'La fecha ya existe en el calendario.'
};

// Biométrico
var biometricoLang = {
		limpieza_log_success: 		'El log se ha limpiado correctamente',
		limpieza_log_error: 		'Ocurrio un error al limpiar el log ',
		save_user_success: 			'Los usuarios se guardaron en la base de datos',
		save_user_error: 			'Ocurrio un error al guardar los usuarios',
		save_log_success: 			'El log de asistencia se guardo en la base de datos',
		save_log_error: 			'Ocurrio un error al guardar el log',
		insert_user_success: 		'El usuario se inserto correctamente',
		insert_user_error: 			'Ocurrio un error al guardar el usuario',
		update_user_success: 		'Usuario actualizado correctamente',
		update_user_error: 			'Ocurrio un error al actualizar el usuario',
		delete_user_success: 		'Usuario eliminado correctamente',
		delete_user_error: 			'Ocurrio un error al eliminar el usuario',
		insert_user_success_disp: 	'Usuarios guardados en el dispositivo',
		insert_user_error_disp: 	'Error al guardar Usuarios en el dispositivo',
		ip_local_exits: 'La dirección IP ya se encuentra registrada',

		insert_success: 'El registro se guardo correctamente',
		insert_error: 	'Ocurrió un errror al guardar el registro',
		update_success: 	'Datos actualizados correctamente',
		update_error: 	'Ocurrió un error al actualizar los datos',
		delete_success: 	'Registro eliminado correctamente',
		delete_error: 	'Ocurrió un error al eliminar el registro',
		campos_vacios: 'Por favor llene todos los campos',
		name_exits: 'El nombre ya existe, intenta con otro por favor',
		activa_success: 'La estación se ha activado correctamente',
		error: 'Ocurrió un error al realizar la operación',
		archivo_success: 'El archivo se subió correctamente',
		archivo_error: 'Error al subir el archivo',
		inactiva_success: 'La estación se ha desactivado correctamente',
		desactivar_dispositivo: '¡Seguro que quieres DESACTIVAR este dispositivo!',
		activar_dispositivo: '¡Seguro que quieres ACTIVAR este dispositivo!',
};

 var xhrStatusLang = {
 	error500: 'Error 500',
 	error404: 'Error 404',
 	error500Msg: '¡Error procesando la petición!. Por favor intentelo más tarde',
 	error404Msg: '¡No encontrado!',
 	errorDefault: '¡Hubo un error!'
 }

var carga_archivoLang = {
	justificar_retardo: 'Ingrese una justificación del retardo',
	justificar_falta: 'Ingrese una justificación de la falta',
	_required: 		'Este campo es requerido',
	finalizar: 'Una vez finalizado ya no se podran aplicar cambios',
	concepto: 'Concepto',
	concepto_required: 'Ingrese una justificación',
	falta: 'Falta',
	no: '<span class="green-text">NO</span>',
	si: '<span class="red-text">SI</span>'
}