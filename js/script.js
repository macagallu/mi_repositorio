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

var reservas = JSON.parse(localStorage.getItem("Reservas"));
if (reservas==null) {
	reservas=[];
}

function presupuestar() {
	var nombreCompleto = document.getElementById("nombreApellido").value;
	var telefono = document.getElementById("telefono").value;
	var email = document.getElementById("email").value;
	var fecha = document.getElementById("fecha").value;
	var horario = document.getElementById("horario").value;
	var personas = document.getElementById("personas").value;


	var nuevaReserva = new Reserva(nombreCompleto, telefono, email, fecha, horario, personas);
	
	reservas.push(nuevaReserva);
	console.log(reservas);

	console.log("El presupuesto es: " + nuevaReserva.calcularPresupuesto());
	localStorage.setItem("Reservas", JSON.stringify(reservas));

}

var reservasTitle = document.getElementsByClassName("reservasTitle");
console.log(reservasTitle[0].innerHTML);


