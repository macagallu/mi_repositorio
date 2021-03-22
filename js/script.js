function Reserva (nombreCompleto, telefono, email, fechaEvento, horario, personas, almuerzo, cena, evento) {
	this.nombreCompleto = nombreCompleto;
	this.telefono = telefono;
	this.email = email;
	this.fechaEvento = fechaEvento;
	this.horario = horario;
	this.personas = personas;
	this.almuerzo = almuerzo;
	this.cena = cena;
	this.evento = evento;
	this.calcularPresupuesto = function() {
		return this.personas * 1500;
	}
}


var validador = null;

var reservas = JSON.parse(localStorage.getItem("Reservas"));

if (reservas==null) {
	reservas=[];
}



function presupuestar() {
	if (validador.form() == false) {
		$("#formularioIncompleto").fadeIn();
		return;
	}

	else {
		$("#formularioIncompleto").fadeOut();
	}


	var nombreCompleto = $("#nombreApellido").val();
	var telefono = $("#telefono").val();
	var email = $("#email").val();
	var fecha = $("#fecha").val();
	var horario = $("#horario").val();
	var personas = $("#personas").val();
	var almuerzo = $("#almuerzo").prop("checked");
	var cena = $("#cena").prop("checked");
	var evento = $("#evento").prop("checked");

	var nuevaReserva = new Reserva(nombreCompleto, telefono, email, fecha, horario, personas, almuerzo, cena, evento);
	
	reservas.push(nuevaReserva);
	console.log(reservas);

	var tipo_reserva = null;

	if (evento == true) {
		$("#alertPresupuesto").fadeIn();
		$("#resultadoPresupuesto").html (nuevaReserva.calcularPresupuesto());
		tipo_reserva = "evento";
	}
	else {
		$("#alertPresupuesto").fadeOut();
	}

	if (almuerzo == true) {
		tipo_reserva = "almuerzo";
	}

	else {
		tipo_reserva = "cena";
	}

	localStorage.setItem("Reservas", JSON.stringify(reservas));
	
	var data = {
	    service_id: 'service_sbpq47n',
	    template_id: 'template_x27pn1g',
	    user_id: 'user_gegWI41IrRdiIX6vX5PS3',
	    template_params: {
	        from_name: 'Cherie Restaurant',
	        to_name: nombreCompleto,
	        tipo_reserva: tipo_reserva,
	        fecha: fecha,
	        horario: horario,
	        personas: personas,
	        telefono: telefono,
	        email: email
	    }
	};
 
	$.ajax('https://api.emailjs.com/api/v1.0/email/send', {
	    type: 'POST',
	    data: JSON.stringify(data),
	    contentType: 'application/json'
	}).done(function() {
	    $('#myModal').modal('show');
	}).fail(function(error) {
	    alert("Un error inesperado sucedio.. Intentalo mas tarde." + JSON.stringify(error));
	});
}


	function actualizarFecha() {
		var fechaActual = new Date ();
		var weekdays = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
		var diaActual = fechaActual.getDay(); 

		var horaActual = fechaActual.getHours();
		var minutoActual = fechaActual.getMinutes();

		if (minutoActual < 10){
			minutoActual = "0" + minutoActual
		};


		var estamosAbiertos = " | Estamos abiertos! |";

		if (diaActual == 1 || diaActual == 2 || horaActual <11 || horaActual >=22) {
			estamosAbiertos = " | En este momento estamos cerrados! |"
		};

		$("#horarios").html ("| Hoy es " + weekdays [diaActual] + " - " + horaActual + ":" + minutoActual + "hs. " + estamosAbiertos);
	};



$(document).ready(function() {

	actualizarFecha();

	document.getElementById("botonReserve").onclick=presupuestar;

	$("#exampleModal").modal();

	validador = $("#formulario").validate({
		errorClass: "is-invalid",
		validClass: "is-valid",

		rules: {
			Nombre: {
				required: true,
				minlength: 2
			},
			email: {
				required: true,
				email: true
			},
			telefono: {
				required: true,
				minlength: 8
			},
			date: "required",
			personas: {
				required: true,
				minlength: 1,
				min: 1
			}
		},
		messages: {
			Nombre: {
				required: "Ingresa tu Nombre y Apellido.",
				minlength: "Ingresa un nombre de 2 letras o más."
			},
			email: {
				required: "Ingresa un email de contacto.",
				email: "Ingresa un email valido. (ejemplo@tuemail.com)"
			},
			telefono: {
				required: "Ingresa un telefono valido.",
				minlength: "Ingresa un numero de telefono de 8 numeros o mas."
			},
			date: "Ingresa la fecha estimada del evento.",
			personas: {
				required: "Ingresa el numero de personas.",
				min: "Ingresa un numero mayor a 1"
			}
		}
	});
});
