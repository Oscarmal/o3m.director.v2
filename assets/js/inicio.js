jQuery(document).ready(function(){  
    // Iniciar calendario
    init_calendar();
    jQuery("#btn-close").click(function(){btn_cancel();});

    jQuery("#form-question").validate({
        ignore : '.ignore'
        ,errorClass: 'error error-answer'
        ,submitHandler: function(form) { 
            var url = path() + "inicio/save_cuestionario";
                data = jQuery("#form-question").serializeObject();
            requestAjaxSend(url, data, function(response) {
                if (response.success) {
                    $("#cuestionario").closeModal();
                } else {
                    swal(response.title, response.msg, response.type);
                    $("#save-question").prop('disabled', true).addClass('disabled');
                }
            }, function(beforeSend) {
                $("#save-question").prop('disabled', true).addClass('disabled');
            });
        }
    });
});

function cancel() {
    location.reload();
}

function init_calendar(){    
    // var arrayFechasBloqueadas = ["2017-08-05","2017-08-15","2017-08-25"];
    var arrayFechasBloqueadas = false;
    /* initialize the external events
    -----------------------------------------------------------------*/
    jQuery('#external-events .fc-event').each(function() {
      // store data so the calendar knows to render an event upon drop
      jQuery(this).data('event', {
        title: $.trim(jQuery(this).text()) // use the element's text as the event title
        ,stick: true // maintain when user navigates (see docs on the renderEvent method)
        // ,id: jQuery(this).attr('id')
        // ,color: '#00bcd4'
        ,color: jQuery(this).css("background-color")
        
      });
      // make the event draggable using jQuery UI
      jQuery(this).draggable({
        zIndex: 999
        ,revert: true      // will cause the event to go back to its
        ,revertDuration: 0  //  original position after the drag
      });

    });

    /* initialize the calendar
    -----------------------------------------------------------------*/
    jQuery('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        }
        ,lang: 'es'
        ,defaultView: 'month'
        ,displayEventTime: false
        // ,defaultDate: '2017-08-01'
        ,editable: false
        ,droppable: true // this allows things to be dropped onto the calendar
        ,dropAccept: '.drag-event' //Solo acepta elementos con esta clase para hacer Drag&Drop
        ,eventLimit: true // allow "more" link when too many events
        ,events: getEvents() // Fechas de eventos guardados en base de datos
        ,eventDrop: function(event, delta, revertFunc) { // Al mover un evento a otra fecha (necesita editable:true)            
            alert("'"+event.title + "' ha sido movido a " + event.start.format());
            if (!confirm("¿Está seguro de aplicar este cambio?")) {
                revertFunc();
            }
        }
        ,drop: function(date, jsEvent, ui, resourceId) {
            // if(date.isBefore(moment()) && jQuery(this).data('id') != 3) {
            //     swal({
            //         title: '¡Alerta!', 
            //         text: '¡El evento está en una fecha pasada!', 
            //         type: 'warning',
            //         // onclose: function() {
            //         //     $('#calendar').fullCalendar('removeEvents');
            //         // }
            //     });
            // } else {
               // alert("Nuevo evento en: " + date.format());
               // console.log(jQuery(this).data('id'));
            var tipo        = jQuery(this).data('id'),
                lectura_TC  = jQuery("#lectura_TC").val();
            var open_modal  = tipo == '1' && lectura_TC == '0' ? true : false; 
            // show_cuestionario(open_modal)
            $.when(open_modal_evento(tipo, date)).then(function(response){
                if (open_modal) {
                    $("#cuestionario").openModal({
                        dismissible: false
                    });
                    $("#presentacion").openModal({dismissible: false});
                }
            });
            // }
        }        
        ,eventClick: function(calEvent, jsEvent, view) {
            // alert('Evento: ' + "'"+calEvent.title+"'" + " de ["+calEvent.start.format('YYYY-MM-DD HH:mm')+"] a ["+calEvent.end.format('YYYY-MM-DD HH:mm')+"]");
            modal_detalle(calEvent.id);
            // alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
            // alert('View: ' + view.name);

            // var m = $.fullCalendar.moment(calEvent.start.format());
            // alert(m.format('yyyy-mm-dd'));

            // alert("The current date of the calendar is " + calEvent.start.format('YYYY-MM-DD'));

        }
        ,dayRender: function(date, cell){
        // Bloquea fechas especificas            
            if (jQuery.inArray( date.format('YYYY-MM-DD'), arrayFechasBloqueadas )>0){
                // alert(date.format('YYYY-MM-DD') + " | " + jQuery.inArray( date.format('YYYY-MM-DD'), arrayFechasBloqueadas ));
                jQuery(cell).addClass('fc-state-disabled');
            }
        }
        // ,eventRender: function(event, element){
        //     var calendarDate = $('#calendar').fullCalendar('getDate'),
        //         id_event    = event;
        //     console.log('fecha', calendarDate, 'id_event', id_event);
        // }
        // ,viewRender: function(view){
        // // Bloquea fechas máximas
        //     if (view.start > maxDate){
        //         $('#calendar').fullCalendar('gotoDate', maxDate);
        //     }
        // }
        ,eventConstraint: {
        // Bloquear fechas anteriores
            start: '2017-08-01', //moment().format('YYYY-MM-DD'),
            end: '2100-01-01'
        }
        ,businessHours: {
        // Bloquear horario especifico y días especificos de la semana
            // start: moment().format('HH:mm'), // Current Hour/Minute 24H format
            // end: '17:00', 
            // dow: [0,1,2,3,4,5,6] // Day of week. If you don't set it, Sat/Sun are gray too
        }

    });
}

/**
 * Abrimos el modal para capturar el evento
 */
function open_modal_evento(tipo, date) {
    var deferred = $.Deferred();
    
    var uri;
    switch(tipo) {
        case 1:
            uri = 'solicitudes/modal_eventos_calendario';
            break;
        case 2:
            uri = 'solicitudes/modal_eventos_calendario';
            break;
        case 3:
            uri = 'solicitudes/modal_eventos_calendario';
            break;
        default:
            uri = 'solicitudes/modal_eventos_calendario';
    }
    requestAjaxSend(uri, {objData:'{"tipo":"'+tipo+'", "fecha":"'+date.format('YYYY-MM-DD')+'"}'}, function(response) {
        if(response.success){
            jQuery("#modal-custom").empty();
            jQuery("#modal-custom").append(response.modal);
            jQuery('#'+response.id).openModal({dismissible:false});  
            deferred.resolve('eureka complete presentacion');
        }
    });
    // buildModal(uri,'{"tipo":"'+tipo+'", "fecha":"'+date.format('YYYY-MM-DD')+'"}');
    return deferred.promise();
}

function getEvents(){
// Obtiene eventos de calendario
    var events;
    jQuery.ajax({
        type: "POST",
        url: "solicitudes/calendar_events",
        dataType: 'json',
        async: false,
        success: function(data){    
            check_session(data);  
            events = data;
        }
    });
    return events;
}


function modal_detalle(id_solicitud){
// Autrizaciones
    var uri = 'autorizaciones/modal_autorizaciones';
    buildModal(uri,'{"id_solicitud":"'+id_solicitud+'", "detalle":1}');
    press_escape();
}

function press_escape(){
// Tecla ESCAPE
    jQuery(document).keyup(function(e) {
         if (e.keyCode == 27) { 
            location.reload();
        }
    });
}