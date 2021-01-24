function Cliente (nombreCompleto, telefono, email, fechaEvento) {
	this.nombreCompleto = nombreCompleto;
	this.telefono = telefono;
	this.email = email;
	this.fechaEvento = fechaEvento;
}

var nombreCompleto = prompt("Ingrese su nombre completo");
var telefono = prompt("Ingrese un telefono de contacto");
var email = prompt("Ingrese su email");
var fechaEvento = prompt("Ingrese la fecha estimada del evento");
	alert("Para estimar el presupuesto de tu evento, dirigite a la seccion RESERVAS, en el boton OTROS.");

var nuevoCliente = new Cliente(nombreCompleto, telefono, email, fechaEvento);

console.log(nuevoCliente);

function calcularPresupuesto(personas) {
	return personas * 1500;
	}

function presupuestar() {
	var personas = parseInt(prompt("Establezca numero de personas para el evento"));

	alert("El presupuesto es: " + calcularPresupuesto(personas));			
}


