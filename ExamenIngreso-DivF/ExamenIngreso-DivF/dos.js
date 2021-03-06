function mostrar()
{
  let nombre;
  let situacionLaboral;
  let cantidadMaterias;
  let sexo;
  let Nota;
  let Edad;
  let respuesta;

  respuesta = "si";


  while(respuesta == "si")
   {
    nombreAlumno = prompt("Ingrese su nombre");
		while(isNaN(nombreAlumno)==false)
		{
			nombreAlumno = prompt("Reingrese un nombre valido");
		}

  	    situacionLaboral = prompt("Ingrese situacion laboral: buscando, trabajando o solo estudiando ");
		while(isNaN(situacionLaboral)==false || situacionLaboral!="buscando" && situacionLaboral!="trabajando" && situacionLaboral!="estudiando")
		{
			situacionLaboral = prompt("Reingrese situacion laboral");
		}

		cantidadMaterias = prompt("Ingrese cantidad de materias");
		while(isNaN(cantidadMaterias)==true || cantidadMaterias<0 && cantidadMaterias>8)
		{
			cantidadMaterias = prompt("Reingrese cantidad de materias");
	
		}

		sexo = prompt("Ingrese su sexo:");
		while(isNaN(sexo) == false || sexo != "femenino" && sexo != "masculino" && sexo != "no binario")
		{
			sexo = prompt("Ingrese un sexo valido");
		}

		edad = prompt("Ingrese su edad:");
		edad = parseInt(edad);
		while(isNaN(edad) == true)
		{
			edad = prompt("Ingrese un edad valida");
			edad = parseInt(edad);
		}

		nota = prompt("Ingrese su nota:");
		nota = parseInt(nota);
		while(isNaN(nota) == true || nota < 0 && nota > 10)
		{
			nota = prompt("Ingrese un nota valida");
			nota = parseInt(nota);
		}

  //enunciado A
  



  
}



/*

Enunciado:

Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
nombre
situcación laboral ("buscando" , "trabajando" o "solo estudiante")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no de los que tarbajan o estan buscando
b) El nombre del mas viejo de los alumnos que solo sea estudiantes
c) El promedio de nota por situacion laboral
d) La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo

/*