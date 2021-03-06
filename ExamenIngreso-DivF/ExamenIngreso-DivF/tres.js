function mostrar()
{
	let Nombre;
	let ObraSocial;
	let edad;
	let temperaturaCorporal;
	let sexo;
	let precio;
	let seguir;
	let contadorObraSocialMayor;
	let contadorMujerPami;
	let MinimaEdad;
	let tempCorpMasjove;
	let nombreMujerJoven;
	let contPasajeros;
	let ViajePrecio;
	let contadorPami;
	let valorViajeDescuento;
	let flagDescuento;
	
	precio =600;
	contadorObraSocialMayor = 0;
	contadorMujerPami = 0;
	MinimaEdad = 0;
	tempCorpMasjove = 0;
	nombreMujerJoven = 0;
	contPasajeros = 0;
	ViajePrecio = 0;
	contadorPami = 0;
	valorViajeDescuento = 0;
	flagDescuento = 0;



	do{
		
		Nombre=prompt("Nombre:");
		
		ObraSocial = prompt("Ingrese obra social")
		while(ObraSocial!="PAMI"&&obraSocial!="OSDE"&&obraSocial!="OTRAS")
		{
			ObraSocial=prompt("Error. Ingrese su obra social (PAMI / OSDE / otras):");
		}
		edad=parseInt(prompt("ingrese su edad: "));
		while(isNaN(edad)||edad<18){
			edad=parseInt(prompt("Error. Ingrese una edad válida:"));
		}
		temperaturaCorporal=parseFloat(prompt("Ingrese su temperatura corporal"));
		while(isNaN(temperaturaCorporal)||temperaturaCorporal < 33 && temperaturaCorporal <0)
		{
			temperaturaCorporal=prompt("Error,ingrese una temperatura coporal valida");
		}
		temperatura=parseFloat(prompt("Temperatura:"));
		while(isNaN(temperatura)||temperatura<34||temperatura>40){
			temperatura=parseFloat(prompt("Error. Ingrese una temperatura válida:"));
		}	
		sexo=(prompt("Ingrese su sexo : 1)Femenino y 2)Masculino"));
		while(sexo !='Femenino' && sexo !='Masculino')
		{
			sexo = prompt("Ingrese un sexo valido.");
		}	

		//enunciado a) La cantidad de personas con OSDE de mas de 60 años.
		if(obraSocial == "OSDE" && edad >60)
		{
			contadorObraSocialMayor++;
		}
		if(obraSocial == "PAMI")
		{
			contadorMujerPami++;
		}
		// enunciado B el nombre y temperatura de la mujer de pami  mas joven.
		if(obraSocial == "PAMI" && sexo =="Femenino")
		{
			if(contadorMujerPami||MinimaEdad < edad)
			{
				MinimaEdad = edad;
				tempCorpMasjove = temperaturaCorporal;
				nombreMujerJoven = nombre;
				contadorMujerPami = 1;
			}

		}
		contPasajeros++;
		seguir=(prompt("Desea continuar agregando datos de  pasajeros?"));
	}while(seguir=="s");
	
	//enunciado C cuanto sale el viaje total sin descuento.
	ViajePrecio = contPasajeros * precio;

	//enunciado D si hay mas del 50% de los pasajeros que pertenecen a PAMI, el precio final tiene un descuento del 25%

	if(contpami*100 && contPasajeros >50)
	{
		valorViajeDescuento = ViajePrecio * 0.75;
		flagDescuento = 1;
	}








	if(contadorObraSocialMayor > 0) //informar y hacer solo si corresponde
	{
		document.write("Las personas mayores de 60 años y con OSDE son " + contadorObraSocialMayor + "<br>");
	}
	else
	{
		document.write("No ingresaron personas mayores a 60 años y con OSDE" + "<br>");	
	}

	if(!contadorMujerPami)
	{
		document.write("Mujer con PAMI mas joven" + nombreMujerJoven + "<br>");
	}
	else
	{
		document.write("No ingresaron mujeres que tengan PAMI");
	}
	document.write("El viaje total sin descuento sale : " + ViajePrecio + "<br>");

	if(flagDesc)
	{
		document.write("El viaje con descuento sale: "+valorViajeDesc.toFixed(2));
	}
}



/*

Enunciado:
Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, de cada persona debemos optener los siguientes datos:
Nombre,
Obra Social ("PAMI", "OSDE" o "otras"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con OSDE de mas de 60 años.
b) el nombre y temperatura de la mujer de pami  mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% de los pasajeros que pertenecen a PAMI, el precio final tiene un descuento del 25%, que solo mostramos si corresponde.

*/