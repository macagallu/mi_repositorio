function calcularPresupuesto(personas) {
	return personas * 1500;
	}

function presupuestar() {
	var personas = parseInt(prompt("Establezca numero de personas para el evento"));

	alert("El presupuesto es: " + calcularPresupuesto(personas));			
}