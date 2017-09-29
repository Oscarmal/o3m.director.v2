var ico_error = '<i class="material-icons ico-middle">error_outline</i> ';
jQuery.extend(jQuery.validator.messages, {
    required: ico_error+'Este campo es requerido',
    remote: ico_error+'Por favor arregle este campo.',
    email: ico_error+'Por favor introduzca una dirección de correo valida.',
    url: ico_error+'Por favor introduzca una URL valida.',
    date: ico_error+'Por favor introduzca una fecha valida.',
    dateISO: ico_error+"Por favor introduzca una fecha valida (ISO).",
    number: ico_error+'Por favor introduzca un número valido',
    digits: ico_error+'Por favor introduzca únicamente números. ',
    creditcard: ico_error+"Please enter a valid credit card number.",
    equalTo: ico_error+'Por favor introduzca el mismo valor.',
    accept: ico_error+"Please enter a value with a valid extension.",
    maxlength: jQuery.validator.format(ico_error+"Por favor introduzca no más de {0} caracteres."),
    minlength: jQuery.validator.format(ico_error+"Por favor introduzca por lo menos {0} caracteres."),
    rangelength: jQuery.validator.format(ico_error+"Please enter a value between {0} and {1} characters long."),
    range: jQuery.validator.format(ico_error+"Please enter a value between {0} and {1}."),
    max: jQuery.validator.format(ico_error+"Ingrese un valor menor o igual a {0}."),
    min: jQuery.validator.format(ico_error+"Ingrese un valor mayor o igual que {0}."),
    extension :  jQuery.validator.format(ico_error+"Por favor introduza un archivo con extension valida")
});

jQuery.validator.setDefaults({
    errorElement : 'div',
    errorPlacement: function(error, element) {
      var placement = $(element).data('error');
      if (placement) {
        $(placement).append(error)
      } else {
        error.insertAfter(element);
      }
    }
});

jQuery.validator.addMethod(
    "regex", //nombre del metodo
    function(value, element, regexp) {
        if (regexp.constructor != RegExp)
            regexp = new RegExp(regexp);
        else if (regexp.global)
            regexp.lastIndex = 0;
        return this.optional(element) || regexp.test(value);
    },
    "La contraseña debe de tener al menos una letra mayuscula, una minuscula, un número y un caracter especial." //Mensaje
);

//Se agrega metodo para validar IP V4
jQuery.validator.addMethod(
    'IP4Checker',
    function(value) {
        if(value) {
            var split = value.split('.');
            if (split.length != 4) 
                return false;
                    
            for (var i=0; i<split.length; i++) {
                var s = split[i];
                if (s.length==0 || isNaN(s) || s<0 || s>255)
                    return false;
            }
        }
        return true;
    }, 
    validatorLang['IP4Checker']
);

jQuery.validator.addMethod(
    'MACaddress',
    function(value, element) {
        var regexp = /^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/;
        return this.optional(element) || regexp.test(value);
    },
    validatorLang['MACaddress']
);

jQuery.validator.addMethod(
    'image',
    function(value, element) {
        var regexp = /\.(jpg|png|gif)$/i;
        return this.optional(element) || regexp.test(value);
    },
    validatorLang['image']
);

jQuery.validator.addMethod(
    'txt',
    function(value, element) {
        var regexp = /\.(txt)$/i;
        return this.optional(element) || regexp.test(value);
    },
    validatorLang['txt']
);

jQuery.validator.addMethod(
    'xls',
    function(value, element) {
        var regexp = /\.(xls|xlsx)$/i;
        return this.optional(element) || regexp.test(value);
    },
    validatorLang['xls']
);

jQuery.validator.addMethod(
    "dateGreaterEqualThan", 
    function(value, element, params) {
        if(value != '') {
            if (!/Invalid|NaN/.test(new Date(value)) && value != '') {
                return new Date(value) >= new Date($(params).val());
            }
            return isNaN(value) && isNaN($(params).val()) || (Number(value) > Number($(params).val())); 
        }
        return true;

    },
    validatorLang['greaterThan']
);

jQuery.validator.addMethod(
    "hourGreaterThan", 
    function(value, element, params) {
        if(value != '') {
            var hora1 = value.split(':');
            var hora2 = $(params).val().split(':');

             // Obtener horas y minutos (hora 1) 
            var hh1 = parseInt(hora1[0],10); 
            var mm1 = parseInt(hora1[1],10); 

            // Obtener horas y minutos (hora 2) 
            var hh2 = parseInt(hora2[0],10); 
            var mm2 = parseInt(hora2[1],10); 

            // Comparar 
            if (hh1<hh2 || (hh1==hh2 && mm1<mm2))
                //la hora es menor
                return false; 
            else if (hh1>hh2 || (hh1==hh2 && mm1>mm2)) 
                //la hora es mayor
                return true; 
            else  
                //la hora es igual
                return false; 
        }
        return true;
    },
    'nananan'
);

jQuery.validator.addMethod(
    "hourSmallerThan", 
    function(value, element, params) {
        if(value != '') {
            var hora1 = value.split(':');
            var hora2 = $(params).val().split(':');

             // Obtener horas y minutos (hora 1) 
            var hh1 = parseInt(hora1[0],10); 
            var mm1 = parseInt(hora1[1],10); 

            // Obtener horas y minutos (hora 2) 
            var hh2 = parseInt(hora2[0],10); 
            var mm2 = parseInt(hora2[1],10); 

            // Comparar 
            if (hh1<hh2 || (hh1==hh2 && mm1<mm2))
                //la hora es menor
                return true; 
            else if (hh1>hh2 || (hh1==hh2 && mm1>mm2)) 
                //la hora es mayor
                return false; 
            else  
                //la hora es igual
                return false; 
        }
        return true;
    },
    'nananan'
);

