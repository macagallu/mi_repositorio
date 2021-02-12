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

var reservas = JSON.parse(localStorage.getItem("Reservas"));
if (reservas==null) {
	reservas=[];
}


function validarCampo(control) {
	var valor = $(control).val();

	if (valor == "" || valor == null) {
		$(control).removeClass("is-valid");
		$(control).addClass("is-invalid");
		return false;
	}
	else {
		$(control).removeClass("is-invalid");
		$(control).addClass("is-valid");
		return true;
	}
}

function validarFormulario() {
	var formularioValido = true;

	$(".campo").each(function(){
		var campoValido = validarCampo(this);

		if (campoValido == false) {
			formularioValido = false;
		}
	})

	return formularioValido;

}

function presupuestar() {
	if (validarFormulario() == false) {
		$("#formularioIncompleto").removeClass("d-none");
		return;
	}

	else {
		$("#formularioIncompleto").addClass("d-none");
	}


	var nombreCompleto = document.getElementById("nombreApellido").value;
	var telefono = document.getElementById("telefono").value;
	var email = document.getElementById("email").value;
	var fecha = document.getElementById("fecha").value;
	var horario = document.getElementById("horario").value;
	var personas = document.getElementById("personas").value;
	var almuerzo = document.getElementById("almuerzo").checked;
	var cena = document.getElementById("cena").checked;
	var evento = document.getElementById("evento").checked;

	var nuevaReserva = new Reserva(nombreCompleto, telefono, email, fecha, horario, personas, almuerzo, cena, evento);
	
	reservas.push(nuevaReserva);
	console.log(reservas);

	if (evento == true) {
		$("#alertPresupuesto").removeClass("d-none");
		$("#resultadoPresupuesto").html (nuevaReserva.calcularPresupuesto());
	}
	else {
		$("#alertPresupuesto").addClass("d-none");
	}

	localStorage.setItem("Reservas", JSON.stringify(reservas));
	
}
$(document).ready(function() {
	document.getElementById("botonReserve").onclick=presupuestar;
	$(".campo").blur(function(){
		validarCampo(this);
	});

});

