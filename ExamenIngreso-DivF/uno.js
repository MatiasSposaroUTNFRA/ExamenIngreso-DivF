function mostrar()
{
	let tipoProducto;
	let precio;
	let cantidadUnidades;
	let categoria;
	let fabircante;
	let contadorProductos;
	let nombreProducto;
	let promedioAlcohol;
	let acumuladorAlcohol;
	let contadorAlcohol;
	let contadorIac;
	let promedioIac;
	let acumuladorIac;
	let contadorQuat;
	let promediaQuat;
	let acumuladorQuat;
	let acumuladordesinfectante;
	let acumuladorbacteriada;
	let acumuladordetergente;
	let contadorDesinfectante;
	let contadorBacteriada;
	let contadorDetergente;
	let acumuladorDetergenteMenor;
	let precioMasCaro;
	let fabricanteMasCaro;
	let categoriaMasCaro;



	acumuladorAlcohol = 0;
	contadorProductos = 0;
	contadorAlcohol = 0;
	contadorIac = 0;
	acumuladorIac = 0;
	contadorQuat = 0;
	promediaQuat = 0;
	acumuladorQuat = 0;
	acumuladordesinfectante = 0;
	acumuladorbacteriada = 0;
	acumuladordetergente = 0;
	contadorDesinfectante = 0;
	contadorBacteriada = 0;
	contadorDetergente = 0;
	acumuladorDetergenteMenor = 0;
	precioMasCaro = 0;
	fabricanteMasCaro = 0;
	categoriaMasCaro = 0;


	
	while(contadorProductos < 5)
	{
		nombreProducto = prompt("Ingrese el nombre del producto");
		tipoProducto = prompt("Ingrese el tipo de producto: ALCOHOL, IAC o QUAT.");
		while(isNaN(tipoProducto) == false || tipoProducto != "ALCOHOL" && tipoProducto != "IAC" && tipoProducto != "QUAT")
		{
			tipoProducto = prompt ("Reingrese un producto valido.");
		}

		precio = prompt("Ingrese el precio: ");
		precio = parseInt(precio);
		while(isNaN(precio) == true || precio < 100 || precio > 300)
		{
			precio = prompt ("Reingrese un precio valido");
			precio = parseInt(precio);
		}

		cantidadUnidades = prompt("Ingrese una cantidad de unidades");
		cantidadUnidades = parseInt(cantidadUnidades);
		while(isNaN(cantidadUnidades) == true || cantidadUnidades < 0 || cantidadUnidades > 1000)
		{
			cantidadUnidades = prompt ("Reingrese una cantidad de unidades validas");
			cantidadUnidades = parseInt(cantidadUnidades);
		}

		categoria = prompt("Ingrese la categoria: desinfectante, bacteriada o detergente");
		while(isNaN(categoria) == false || categoria != "desinfectante" && categoria != "bacteriada" && categoria != "detergente")
		{
			categoria = prompt ("Reingrese un producto valido.");
		}
	
		fabircante = prompt("Ingrese el fabricante que desea.");
	
		switch(tipoProducto)
		{
			case "ALCOHOL":	
				acumuladorAlcohol = acumuladorAlcohol + cantidadUnidades;
				contadorAlcohol++;
				break;
				
			case "IAC":	
				acumuladorIac = acumuladorIac + cantidadUnidades;		
				contadorIac++;
				break;			
			
			case "QUAT":
				contadorQuat++;
				acumuladorQuat = acumuladorQuat + cantidadUnidades;
				break;	
		}

		switch(categoria)
		{
			case "desinfectante":
				acumuladordesinfectante = acumuladordesinfectante + cantidadUnidades;
				contadorDesinfectante++;
				break;

			case "bacteriada":
				acumuladorbacteriada = acumuladorbacteriada + cantidadUnidades;	
				contadorBacteriada++;			
				break;
			
			case "detergente":
				acumuladordetergente = acumuladordetergente + cantidadUnidades;
				contadorDetergente++;
				if(precio <201)
				{
					acumuladorDetergenteMenor = acumuladorDetergenteMenor + cantidadUnidades;
				}
				break;	
		
			
		
			}
			if(contadorProductos == 0 || precio > precioMasCaro)
			{
				precioMasCaro = precioIngresado;
				fabricanteMasCaro = fabircante;
				categoriaMasCaro = categoria;
			}
			contadorProductos++;
	
	}	

		
		promedioAlcohol = acumuladorAlcohol / contadorAlcohol;
		document.write("El promedio de cantidad de alcohol es: " + promedioAlcohol + "<br>");
		
		promedioIac = acumuladorIac / contadorIac;
		document.write("El promedio de cantidad de iac es: " + promedioIac + "<br>");


		
		promediaQuat = acumuladorQuat / contadorQuat;
		document.write("El promedio de cantidad de quat es: " + promedioQuat + "<br>");



		if(acumuladordesinfectante > acumuladorbacteriada && acumuladordesinfectante > acumuladordetergente)
	{
		document.write ("El tipo de inflamable con más cantidad de unidades es desinfectante" + "<br>");
	}

	if(acumuladorbacteriada > acumuladordesinfectante && acumuladorbacteriada > acumuladordetergente)
	{
		document.write ("El tipo de inflamable con más cantidad de unidades es: bacteriada" + "<br>");
	}

	if(acumuladordetergente > acumuladorbacteriada && acumuladordetergente > acumuladordesinfectante)
	{
		document.write ("El tipo de inflamable con más cantidad de unidades es: detergente" + "<br>");
	}

	document.write("La cantidad de unidades de detergente con precios menores a 200 es: " + acumuladorDetergenteMenor + "<br>");

	document.write("El fabricante mas caro es " + fabricanteMasCaro + " y la categoria mas cara es " + categoriaMasCaro + "<br>");

}
