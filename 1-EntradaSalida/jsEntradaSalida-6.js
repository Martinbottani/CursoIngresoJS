/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	var numeroDos;
	/*
	numeroUno = parseInt(document.getElementById('numeroUno').value);
	numeroDos = parseInt(document.getElementById('numeroDos').value);
	var resultado = numeroUno + numeroDos;
	alert("la suma es " + resultado); */ //ESTO ESTA MAL.

	numeroUno = document.getElementById('numeroUno').value;
	numeroUno = parseInt(numeroUno);
	numeroDos = document.getElementById('numeroDos').value;
	numeroDos = parseInt(numeroDos);
	var resultado;
	resultado = numeroUno + numeroDos;
	alert("el resultado de la suma es " + resultado);
}

