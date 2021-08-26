
function blink_text() {
  $('.main-titulo').animate({ color: "white" });
  $('.main-titulo').animate({ color: "yellow" });
}
setInterval(blink_text, 1000);

// Boton de inicio - Reinicio
$(".btn-reinicio").click(function () {
  $('#timer').timer('remove');
  $('#text-over').html("");
  i = 0;
  score = 0;
  movimientos = 0;
  $(".panel-score").css("width", "25%");
  $("#score-text").html("0");
  $("#movimientos-text").html("0");
  $(this).html("Reiniciar");
  $('#timer').timer({
    countdown: true,
    duration: '120s',
    format: '%M:%S',
    callback: function () {
      $('#text-over').html("<h1 class='text-over'>Se acabo el tiempo !!!</h1>");
      //alert('Acabó el tiempo!');
      $('#timer').timer('stop');
    }
  });
});



//variables del tablero
var filas = 7;
var columnas = 7;
var tablero = [];
var figuras = 0;
var score = 0;
var movimientos = 0;

// Tipo de caramelos
var tipoCaramelo = [];
tipoCaramelo[0] = "image/1.png";
tipoCaramelo[1] = "image/2.png";
tipoCaramelo[2] = "image/3.png";
tipoCaramelo[3] = "image/4.png";

// Coordenadas iniciales:
var ancho = $('.panel-tablero').width();
var alto = $('.panel-tablero').height();
var anchoCelda = ancho / 7;
var altoCelda = alto / 7;
var margenAncho = anchoCelda / 7;
var margenAlto = altoCelda / 7;


// preparando el tablero
for (var fila = 0; fila < filas; fila++) {
  tablero[fila] = [];
  for (var col = 0; col < columnas; col++) {
    tablero[fila][col] = new caramelo(fila, col, null, carameloAleatorio());
  }
}

//Rellenar el tablero

for (var fila = 0; fila < filas; fila++) {
  for (var col = 0; col < columnas; col++) {
    var celda = $("<img class='caramelo' id='caramelo_" + fila + "_" + col + "' fila='" + fila + "' columna='" + col +
      "'ondrop='soltar(event)' ondragover='arrastrarSobre(event)'src='" +
      tablero[fila][col].nuevoCaramelo + "' style='height:" + altoCelda + "px'/>");
    celda.attr("ondragstart", "arrastrar(event)");
    $(".col-" + (col + 1)).append(celda);
    tablero[fila][col].objeto = celda;
  }
}



//Funcion caramelo aleatorio

function carameloAleatorio() {
  var indice = Math.floor((Math.random() * 4));
  return tipoCaramelo[indice];
}

//nuevo caramelo
function caramelo(fila, columna, objeto, nuevoCaramelo) {
  return {
    fila: fila, // fila
    columna: columna,  // columna
    nuevoCaramelo: nuevoCaramelo, // imagen
    locked: false,
    combo: false,
    objeto: objeto
  }
}



function arrastrar(dulce) {
  dulce.dataTransfer.setData("text/plain", dulce.target.id);
}

// Arrastrar un dulce sobre otro
function arrastrarSobre(dulce) {
  dulce.preventDefault();
}

// Soltar un dulce
function soltar(dulce) {
  //compatibilidad para mozilla firefox
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
  if (isFirefox) {
    console.log("firefox compatibility");
    dulce.preventDefault();
  }

  // obtener origen del dulce
  var origen = dulce.dataTransfer.getData("text");
  var orFila = origen.split("_")[1];
  var orCol = origen.split("_")[2];

  // obtener destino del dulce
  var destino = dulce.target.id;
  var destFila = destino.split("_")[1];
  var destCol = destino.split("_")[2];

  // Movimiento no permitido
  var x = Math.abs(parseInt(orFila) - parseInt(destFila));
  var y = Math.abs(parseInt(orCol) - parseInt(destCol));
  if (x > 1 || y > 1) {
    alert("Movimiento no valido");
    return;
  }
  else {
    var tmp = tablero[orFila][orCol].origen;
    tablero[orFila][orCol].origen = tablero[destFila][destCol].origen;
    tablero[orFila][orCol].objeto.attr("src", tablero[orFila][orCol].origen);
    tablero[destFila][destCol].origen = tmp;
    tablero[destFila][destCol].objeto.attr("src", tablero[destFila][destCol].origen);
    
    // sumar un movimiento a mi cantidad
    movimientos += 1;
    $("#movimientos-text").html(movimientos);

    //buscar combinaciones
    comboOk();

  }


}





// buscar combinaciones horizontales y verticales
function comboOk() {

  // busqueda horizontal
  
  for (var fila = 0; fila < filas; fila++) {
    var celdaAnterior = null;
    var numDulces = 0;
    var inicioDulces = null;
    var finDulces = null;

    for (var col = 0; col < columnas; col++) {
      console.log('locked: ',tablero[fila][col].locked, 'combo: ',tablero[fila][col].combo)
      // saltear candys locked o que estan en combo.    
      if (tablero[fila][col].locked || tablero[fila][col].combo) {
        inicioDulces = null;
        finDulces = null;
        celdaAnterior = null;
        numDulces = 1;
        continue;
      }

      // primer objeto del combo
      if (celdaAnterior == null) {
        celdaAnterior = tablero[fila][col].origen;
        inicioDulces = col;
        numDulces = 1;
        finDulces = null;
        continue;
      }
      else {
        // segundo o posterior objeto del combo
        var celdaActual = tablero[fila][col].origen;
        if (!(celdaAnterior == celdaActual)) {
          celdaAnterior = tablero[fila][col].origen;
          inicioDulces = col;
          finDulces = null;
          numDulces = 1;
          continue;
        }
        else {
          // incrementar combo
          numDulces += 1;
          if (numDulces == 3) {
            validFigures += 1;
            score += 10;
            $("#score-text").html(score);
            finDulces = col;
            console.log("Combo de columna " + inicioDulces + " a columna " + finDulces);
            for (var ci = inicioDulces; ci <= finDulces; ci++) {

              tablero[fila][ci].combo = true;
              tablero[fila][ci].origen = null;
            }
            celdaAnterior = null;
            inicioDulces = null;
            finDulces = null;
            numDulces = 1;
            continue;
          }
        }
      }

    }
  }

  // busqueda vertical


  for (var col = 0; col < columnas; col++) {
    var celdaAnterior = null;
    var numDulces = 0;
    var inicioDulces = null;
    var finDulces = null;

    for (var fila = 0; fila < filas; fila++) {

      if (tablero[fila][col].locked || tablero[fila][col].combo) {
        inicioDulces = null;
        finDulces = null;
        celdaAnterior = null;
        numDulces = 1;
        continue;
      }

      if (celdaAnterior == null) {
        celdaAnterior = tablero[fila][col].origen;
        inicioDulces = fila;
        numDulces = 1;
        finDulces = null;
        continue;
      }
      else {
        var celdaActual = tablero[fila][col].origen;
        if (!(celdaAnterior == celdaActual)) {
          celdaAnterior = tablero[fila][col].origen;
          inicioDulces = fila;
          finDulces = null;
          numDulces = 1;
          continue;
        }
        else {
          numDulces += 1;
          if (numDulces == 3) {
            validFigures += 1;
            score += 10;
            $("#score-text").html(score);
            finDulces = fila;
            console.log("Combo de fila " + inicioDulces + " a fila " + finDulces);
            for (var ci = inicioDulces; ci <= finDulces; ci++) {

              tablero[ci][col].combo = true;
              tablero[ci][col].origen = null;
            }
            celdaAnterior = null;
            inicioDulces = null;
            finDulces = null;
            numDulces = 1;
            continue;
          }
        }
      }

    }
  }


  // destruir combos

  var isCombo = false;
  for (var fila = 0; fila < filas; fila++)
    for (var col = 0; col < columnas; col++)
      if (tablero[fila][col].combo) {
        console.log("Combo disponible");
        isCombo = true;
        // ACÁ FALTA LA ANIMACIÓN NADA MÁS, Y ESTARIA BIEN
        reponer() // aca funciona bien 
      }

  if (isCombo)  // Acá no entra nunca, el metodo lo termina llamando al final del reponer
    desaparecerCombos();
  else
    console.log("No más combos automáticos");



}










//desaparecer candys borrados
function desaparecerCombos() {
  for (var fila = 0; fila < filas; fila++) {
    for (var col = 0; col < cols; col++) {
      if (tablero[fila][col].combo)  // celda vacia
      {
        tablero[fila][col].objeto.animate({
          opacity: 0
        }, slow);
      }
    }
  }

  // ACÁ ES DONDE DEBERIA IR EL REPONER() PERO NO ES LLAMADO NUNCA
  //   $("[style*='opacity: 0']").promise().done(function() {
  //       reponer();
  //  });     

}



function reponer() {
  // mover celdas vacias hacia arriba
  for (var fila = 0; fila < filas; fila++) {
    for (var col = 0; col < cols; col++) {
      if (tablero[fila][col].combo)  // celda vacia
      {
        tablero[fila][col].objeto.attr("src", "");
        // deshabilitar cerlda del combo               
        tablero[fila][col].combo = false;

        for (var orFila = fila; orFila >= 0; orFila--) {
          if (orFila == 0) break;
          if (tablero[orFila - 1][col].locked) break;
          var tmp = tablero[orFila][col].origen;
          tablero[orFila][col].origen = tablero[orFila - 1][col].origen;
          tablero[orFila - 1][col].origen = tmp;
        }
      }
    }
  }

  // reordenando y reponiendo celdas
  for (var fila = 0; fila < filas; fila++) {
    for (var col = 0; col < cols; col++) {
      tablero[fila][col].objeto.attr("src", tablero[fila][col].origen);
      tablero[fila][col].objeto.css("opacity", "1"); // acá podria meter animate
      tablero[fila][col].combo = false;
      if (tablero[fila][col].origen == null)
        tablero[fila][col].respawn = true;
      if (tablero[fila][col].respawn == true) {
        tablero[fila][col].objeto.off("ondragover");
        tablero[fila][col].objeto.off("ondrop");
        tablero[fila][col].objeto.off("ondragstart");
        tablero[fila][col].respawn = false; // repuesto!
        console.log("Reponiendo fila " + fila + " , columna " + col);
        tablero[fila][col].origen = carameloAleatorio();
        tablero[fila][col].locked = false;
        tablero[fila][col].objeto.attr("src", tablero[fila][col].origen);
        tablero[fila][col].objeto.attr("ondragstart", "_ondragstart(event)");
        tablero[fila][col].objeto.attr("ondrop", "_onDrop(event)");
        tablero[fila][col].objeto.attr("ondragover", "_onDragOverEnabled(event)");
      }
    }
  }



  console.log("celdas repuestas");

  // revisar si hay combos pendientes despues de reordenar
  destruirCombos();

}


// destruirCombos() es el metodo que elimina las fichas repetidas
// reponer() , es el que repondrá las fichas faltantes

// tengo que ejecutar el reponer() cuando:
//     se carga por 1er vez el tablero (1 ó + veces, hasta asegurarme que no quedaron repetidos)
//     cuando hago un movimiento y logro un match de 3,  (1 ó + veces, hasta asegurarme que no quedaron repetidos)
// en este ultimo caso deberia saltar algun cartelito con animación que diga COMBO ! en la pantalla

