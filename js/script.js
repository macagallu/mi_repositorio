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

	if (evento == true) {
		$("#alertPresupuesto").fadeIn();
		$("#resultadoPresupuesto").html (nuevaReserva.calcularPresupuesto());
	}
	else {
		$("#alertPresupuesto").fadeOut();
	}

	localStorage.setItem("Reservas", JSON.stringify(reservas));
	
}
$(document).ready(function() {
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
