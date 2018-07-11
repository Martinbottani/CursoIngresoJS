function mostrar()
{
//tomo la edad  
	var edad;
	edad = document.getElementById('edad').value;
	/*
	if(edad >= 18)
	{
		alert("Usted es mayor de edad");
	}
	if(edad <= 17 && edad >= 13)
	{
		alert("Usted es adolescente");
	}
	if(edad <= 12)
	{
		alert("Usted es un niño");
	}
	*/
	if(edad < 13)
	{
		alert("Usted es un niño");
	}
	else
	{
		if(edad > 17)
		{
			alert("Usted es mayor");
		}
		else
		{
			alert("Usted es adolescente");
		}
	}

}//FIN DE LA FUNCIÓN