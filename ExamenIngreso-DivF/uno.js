
function mostrar()
{
	let tipo;
	let precio;
	let cantidadUnidades;
	let categoria;
	let fabricante;
	let i;
	let acumuladorAlcohol = 0;
	let acumuladorIac = 0;
	let acumuladorQUAT = 0;
	let contadorAlcohol = 0;
	let contadorIAC = 0; 
	let contadorQUAT = 0;
	let promedioAlcohol = 0;
	let promedioIAC = 0;
	let promedioQUAT = 0;
	let acumuladorBactericiada = 0;
	let acumuladorDesinfectante = 0;
	let acumuladorDetergente = 0;
	let acumuladorMenor200 = 0;
	let precioCaro = 0;
	let categoriaCaro;
	let fabricanteCaro;


	for(i = 0 ; i<5 ; i++)
	{
		tipo = prompt("Ingresa el tipo de producto que desea : 1)ALCOHOL , 2)IAC ,3)QUAT");
		while(tipo !="ALCOHOL" && tipo!= "IAC" && tipo!= "QUAT")
		{
			tipo = prompt("Error.Reingresa el tipo de producto que desea : 1)ALCOHOL , 2)IAC ,3)QUAT");
		}
		precio = parseInt(prompt("Ingrese el precio"));
		while(precio < 100 || precio >300 || isNaN(precio) == true)
		{
			precio = parseInt(prompt("Error.Reingrese el precio"));
		}
		cantidadUnidades = parseInt(prompt("Ingrese la canitdad de unidades"));
		while(cantidadUnidades <= 0 || cantidadUnidades>1000 || isNaN(cantidadUnidades)==true)
		{ 
			cantidadUnidades = parseInt(prompt("Reingrese la canitdad de unidades"));
		}

		categoria = prompt("Ingrese la categoria que desea : 1)desinfectante , 2)bactericiada , 3)detergente :");
		while(categoria !="desinfectante" && categoria!= "bactericiada" && categoria!= "detergente")
		{
			categoria = prompt("Error.Reingresa la categoria de producto que desea : 1)desinfectante , 2)bactericiada ,3)detergente");
		}
		fabricante = prompt("ingrese el fabricante que desea ");

		switch(tipo)	
		{
			case "ALCOHOL":
			acumuladorAlcohol = acumuladorAlcohol + cantidadUnidades;
			contadorAlcohol++;
			break;

			case "IAC":
			acumuladorIac = acumuladorIac + cantidadUnidades;
			contadorIAC++;
			break;
		
			case "QUAT":
			acumuladorQUAT = acumuladorQUAT + cantidadUnidades;
			contadorQUAT++;
			break;
		}

		switch(categoria)
		{
			case "desinfectante":
			acumuladorDesinfectante = acumuladorDesinfectante + cantidadUnidades;
			break;

			case "bactericiada":
			acumuladorBactericiada = acumuladorBactericiada + cantidadUnidades;
			break;

			case "detergente":
			acumuladorDetergente = acumuladorDetergente + cantidadUnidades;
			if(precio < 201)
			{
				acumuladorMenor200 = acumuladorMenor200 + cantidadUnidades;
			}
			break;
		}

		if(precio>precioCaro)
		{
			fabricanteCaro = fabricante;
			categoriaCaro = categoria;
		}
	}



	

	//a) El promedio de cantidad por tipo de producto
	promedioAlcohol = acumuladorAlcohol / contadorAlcohol;
	if(acumuladorAlcohol != 0)
	{
		document.write("El promedio de la cantidad de los alcoholes fue : " +promedioAlcohol);
	}

	promedioIAC = acumuladorIac / contadorIAC;
	if(acumuladorIac != 0)
	{
		document.write("El promedio de la cantidad de los IAC fue : " + promedioIAC);
	}
	
	promedioQUAT = acumuladorQUAT / contadorQUAT;
	if(acumuladorQUAT != 0)
	{
		document.write("El promedio de la cantidad de los QUAT fue : " + promedioQUAT);
	}

	//b) La categoria con mas cantidad de unidades en total de la compra
	if(acumuladorDesinfectante > acumuladorBactericiada)
	{
		if(acumuladorDesinfectante > acumuladorDetergente)
		{
			document.write("El producto con mas cantidad de unidades es desinfectante <br>");

		}
		else
		{
			document.write("El producto con mas cantidad de unidades es detergente <br>");
		}
	}	
	else
	{
		if(acumuladorBactericiada > acumuladorDetergente)
		{
			document.write("El prod ucto con mas cantidad de unidades es bactericida <br>");
		}
		
		
	}

	// c) Cuántas unidades de detergente con precios menos a 200 (inclusive) se compraron en total
	if(acumuladorMenor200 != 0)
	{
		document.write("Las unidades de detergente que costaron menos a 200pesos fueron :  " + acumuladorMenor200 +"<br>");
	}
	
	// d) el fabricante y Categoria del más caro de los productos

	document.write("El fabricante mas caro es " + fabricanteCaro +"y la categoria mas cara es " + categoriaCaro + "<br>");
}
