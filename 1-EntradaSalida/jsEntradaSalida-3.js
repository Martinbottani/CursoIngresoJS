/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombre;
	nombre = document.getElementById('elNombre').value; //si no le pones el "value" no devuelve lo que queres.
	alert(nombre);
}


