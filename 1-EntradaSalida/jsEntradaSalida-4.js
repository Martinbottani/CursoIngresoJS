/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre; //creo la variable.
	nombre = prompt("ingrese nombre"); //guardo algo en la variable.
	document.getElementById('elNombre').value = nombre; //muestro lo que tiene la variable.
}

