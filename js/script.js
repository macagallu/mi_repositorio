function Reserva (nombreCompleto, telefono, email, fechaEvento, horario, personas) {
	this.nombreCompleto = nombreCompleto;
	this.telefono = telefono;
	this.email = email;
	this.fechaEvento = fechaEvento;
	this.horario = horario;
	this.personas = personas;
	this.calcularPresupuesto = function() {
		return this.personas * 1500;
	}
}

var reservas = [];


function presupuestar() {
	var nombreCompleto = prompt("Ingrese su nombre completo");
	var telefono = prompt("Ingrese un telefono de contacto");
	var email = prompt("Ingrese su email");
	var fechaEvento = prompt("Ingrese la fecha estimada del evento");
	var horario = prompt("Ingrese horario estimado");
	var personas = parseInt(prompt("Establezca numero de personas para el evento"));

	var nuevaReserva = new Reserva(nombreCompleto, telefono, email, fechaEvento, horario, personas);
	
	reservas.push(nuevaReserva);
		console.log(reservas);
		
	console.log(nuevaReserva);
		alert("El presupuesto es: " + nuevaReserva.calcularPresupuesto());

	
}


