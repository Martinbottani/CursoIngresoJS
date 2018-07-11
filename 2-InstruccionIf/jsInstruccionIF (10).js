function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;
	numero = Math.floor((Math.random() * 10) + 1);
	/*
	if(numero >= 9)
	{
		alert("Nota: " + numero + " - EXCELENTE");
	}
	if( numero >= 4 && numero < 9)
	{
		alert("Nota: " + numero + " - APROBÓ");
	}
	if(numero < 4)
	{
		alert("Nota: " + numero + " - Vamos, la proxima se puede");
	}
	*/
	if(numero < 4)
	{
		alert("Nota: " + numero + " - Vamos, la proxima se puede");
	}
	else
	{
		if(numero >= 9)
		{
			alert("Nota: " + numero + " - EXCELENTE");
		}
		else
		{
			alert("Nota: " + numero + " - APROBÓ");
		}
	}

}//FIN DE LA FUNCIÓN