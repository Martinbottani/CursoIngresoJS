function mostrar()
{
//tomo la edad  
	var edad;
	var estadoCivil;

	edad = document.getElementById('edad').value;
	estadoCivil = document.getElementById('estadoCivil').value;
	/*
	if(edad < 17 && estadoCivil != "Soltero")
	{
		
	}
	else if(edad > 17 && estadoCivil == "Soltero")
	{
		alert("Usted es soltero y no menor");
	}*/

	if(!(edad < 17 && estadoCivil != "Soltero"))
	{
		if(edad > 17 && estadoCivil == "Soltero")
		{
		alert("Usted es soltero y no menor");
		}
	}

}//FIN DE LA FUNCIÓN