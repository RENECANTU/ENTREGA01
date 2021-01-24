// Este codigo ha sido generado por el modulo psexport 20180802-mac de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// Este es un ejemplo de suma de dos n�meros y mostrar el resultado
function suma() {
	var numero01, numero02, resultado;
	// Se desplegar� en pantalla un mensaje al usuario solicitando 
	// el n�mero 1, de igual manera se solicitar� el n�mero 2
	numero01 = Number(prompt("Ingresar el primer numero: ",));
	numero02 = Number(prompt("Ingresar el segundo numero: ",));
	// Ahora se calcula la suma y se guarda el resultado en la
	// variable resultado
	resultado = numero01+numero02;
	// Por �ltimo desplegar el resultado almacenado en pantalla
	alert("El resultado de la suma es: "+resultado);
}

function signo() {
	var numero01;
	// Se desplegará en pantalla un mensaje al usuario solicitando
	// un número, se deberá ingresar positivos o negativos
	numero01 = Number(prompt("Ingresar un número (puede ser positivo o negativo): ",));
	// Se compara el numero01 contra cero
	// SI es mayor o igual a 0 
	// ENTONCES se imprimirá que es POSITIVO
	// En caso contrario se imprimirá que es NEGATIVO
	if (numero01>=0) {
		alert("= El número ingresado es POSITIVO =");
	} else {
		alert("= El número ingresado es NEGATIVO =");
	}
}


function calculadora() {
	var numero01, numero02, opcion_num, resultado;
	// Ingresar la opción a realizar
	document.write("Posibles operaciones a realizar :",'<BR/>');
	document.write("1: Sumar",'<BR/>');
	document.write("2: Restar",'<BR/>');
	document.write("3: Multiplicar",'<BR/>');
	document.write("4: Dividir",'<BR/>');
	// De acuerdo a la elección se compara contra cada una de las
	// opciones para realizarla y terminar el programa
	document.write("¿Que operación deseas realizar? :",'<BR/>');
	opcion_num = prompt();
	// Operación: Suma
	if (opcion_num==1) {
		document.write("Ingresar el primer valor",'<BR/>');
		numero01 = Number(prompt());
		document.write("Ingresar el segundo valor",'<BR/>');
		numero02 = Number(prompt());
		resultado = numero01+numero02;
		document.write("La suma de ",numero01,"+",numero02,"=",resultado,'<BR/>');
	} else {
		// Operación: Resta
		if (opcion_num==2) {
			document.write("Ingresar el primer valor",'<BR/>');
			numero01 = Number(prompt());
			document.write("Ingresar el segundo valor",'<BR/>');
			numero02 = Number(prompt());
			resultado = numero01-numero02;
			document.write("La resta de ",numero01,"-",numero02,"=",resultado,'<BR/>');
		} else {
			// Operación: Multiplicación
			if (opcion_num==3) {
				document.write("Ingresar el primer valor",'<BR/>');
				numero01 = Number(prompt());
				document.write("Ingresar el segundo valor",'<BR/>');
				numero02 = Number(prompt());
				resultado = numero01*numero02;
				document.write("La multiplicación de ",numero01,"x",numero02,"=",resultado,'<BR/>');
			} else {
				// Operación: División
				if (opcion_num==4) {
					document.write("Ingresar el primer valor",'<BR/>');
					numero01 = Number(prompt());
					document.write("Ingresar el segundo valor",'<BR/>');
					numero02 = Number(prompt());
					resultado = numero01/numero02;
					document.write("La división de ",numero01,"/",numero02,"=",resultado,'<BR/>');
				}
			}
		}
	}
}


function salariosemanal() {
	var base, horas, salario;
	// Se desplegará en pantalla un mensaje al usuario solicitando
	// ingresar por teclado el número de horas trabajadas por semana
	// e ingresar por teclado el salario base por hora
	document.write("Ingresar el número de horas trabajadas en la semana ...",'<BR/>');
	horas = Number(prompt());
	document.write("Ingresar el salario base por hora ...",'<BR/>');
	base = Number(prompt());
	// Calcular el salario con los datos ingresados
	salario = horas*base;
	// Desplegar el salario semanal
	document.write("El salario semanal será de: ",salario,"pesos",'<BR/>');
	horas = Number(prompt());
}