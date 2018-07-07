
function mostrar()
{
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

}
