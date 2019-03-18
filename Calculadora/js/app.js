
var pantalla = document.getElementById('display');
var x = 0;
var y = 0;
var num1 = 0;
var num2 = 0;
var oper = 0;
var result = 0;
var largo = 0;



function init(){
    var onc = document.getElementById('on');
    var signo = document.getElementById('sign');
    var suma = document.getElementById('mas');
    var resta = document.getElementById('menos');
    var multiplicacion = document.getElementById('por');
    var division = document.getElementById('dividido');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('1');
    var dos = document.getElementById('2');
    var tres = document.getElementById('3');
    var cuatro = document.getElementById('4');
    var cinco = document.getElementById('5');
    var seis = document.getElementById('6');
    var siete = document.getElementById('7');
    var ocho = document.getElementById('8');
    var nueve = document.getElementById('9');
    var cero = document.getElementById('0');
    var punto = document.getElementById('punto');
    var pantalla = document.getElementById('display');
}


function escribir(digito){
  if (x == 0) {
    var actual = pantalla.innerHTML;
  }else {
    var actual = digito;
  }

  var tamano = pantalla.innerHTML.length;
	var expreg = /^-?\d+(?:,\d+)?$/;
	var er = expreg.test(pantalla.innerHTML);
	var salida = 0;

	if (tamano >= "0" && tamano <= "8" && digito == "sign") {
      actual = parseFloat(actual) * parseFloat(-1);
      salida = actual;
  }else if (tamano >= "8" ) {
    salida = actual;
  }else if (tamano == "1" && actual == "0" && digito =="punto") {
    digito = ".";
    salida = actual + digito;
  }else if (tamano >= "1" && tamano <= "7" && digito == "punto") {
    if (er==false) {
      salida = actual;
    }else {
      digito = ".";
      salida = actual + digito;
    }
  }else if (tamano == "1" && actual == "0") {
    salida = digito;
  }else if (tamano >= "1" && tamano <= "7" && actual != "." && actual != "0") {
    if (x=="0") {
      salida = actual + digito;
    }else {
      salida = digito;
    }
  }

  if (x == "0" && y == "0") {
		pantalla.innerHTML = salida;
		num1 = pantalla.innerHTML;
	}else{
		pantalla.innerHTML = salida;
		num2 = pantalla.innerHTML;
    x = 0;
	}
}

function borrar(digito){
  if (digito != "0") {
    pantalla.innerHTML = "0";
    num1 = 0;
	  num2 = 0;
    x = 0;
    y = 0;
  }
}

function operacion(operador){
  if (x == "0" && y == "0") {
  	result = parseFloat(num1);
  }else {
    oper = operador;
  	if(operador == 'mas'){
  		result = parseFloat(num1) + parseFloat(num2);
  	}else if(operador == 'menos'){
  		result = parseFloat(num1) - parseFloat(num2);
  	}else if(operador == 'por'){
  		result = parseFloat(num1) * parseFloat(num2);
  	}else if(operador == 'dividido'){
      result = parseFloat(num1) / parseFloat(num2);
  	}
    num1 = result;
  }
  tamano = result.toString().length;
  if (tamano >= 7) {
    pantalla.innerHTML = result.toPrecision(4);
  }else {
    pantalla.innerHTML = result
  }

  num1 = pantalla.innerHTML;
  x = 1;
  y = 1;
  oper = operador;
}

function resultado(){
  operacion(oper);
}
