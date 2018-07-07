
function mostrar()
{
	/*
	var base;
	var altura;
	var superficie;
	var perimetro;

	base = prompt("Dame la base: ");
	altura = prompt("Dame la altura: ");

	base = parseInt(base);
	altura = parseInt(altura);

	superficie = base * altura / 2;
	perimetro = base * 3;

	alert("La superficie es: " + superficie + " y el perimetro es: " + perimetro);

	 Enunciado nuevo: se ingresan 3 numeros, se muestra:
	1 la suma de los tres
	2 el promedio de los 3
	3 la resta de los 3
	con un alert */
	var numeroUno;
	var numeroDos;
	var numeroTres;
	var suma;
	var promedio;
	var resta;

	numeroUno = prompt("Dame la nota 1: ");
	numeroDos = prompt("Dame la nota 2:");
	numeroTres = prompt("Dame la notra 3:");
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	numeroTres = parseInt(numeroTres);
	suma = numeroUno + numeroDos + numeroTres;
	promedio = (numeroUno + numeroDos + numeroTres) / 3;
	resta = numeroUno - numeroDos - numeroTres;

	alert("la suma es: " + suma + ", el promedio es: " + promedio + " y la resta es: " + resta);

}
