
function blink_text() {
    $('.main-titulo').animate({ color: "white" });
    $('.main-titulo').animate({ color: "yellow" });
}
setInterval(blink_text, 1000);

// Boton de inicio - Reinicio
$(".btn-reinicio").click(function(){
    $('#timer').timer('remove');
    $('#text-over').html("");
    i=0;
    puntaje=0;
    movimientos=0;
    $(".panel-score").css("width","25%");
    $("#score-text").html("0");
    $("#movimientos-text").html("0");
    $(this).html("Reiniciar");      
    $('#timer').timer({
		countdown: true,
		duration: '5s',
		format: '%M:%S',
		callback: function() {        
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
var puntaje = 0;
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
    tablero[fila]=[];
    for (var col = 0; col < columnas; col++) {
       tablero[fila][col]= new caramelo(fila,col,null,carameloAleatorio());
    }
   }

   //Rellenar el tablero

   for (var fila = 0; fila < filas; fila++) {
    for (var col = 0; col < columnas; col++) {
      var celda = $("<img class='caramelo' id='caramelo_"+fila+"_"+col+"' r='"+fila+"' c='"+col+
        "'ondrop='_onDrop(event)' ondragover='_onDragOverEnabled(event)'src='"+
        tablero[fila][col].nuevoCaramelo+"' style='height:"+altoCelda+"px'/>");
      celda.attr("ondragstart","_ondragstart(event)");
      $(".col-"+(col+1)).append(celda);
      tablero[fila][col].objeto = celda;
    }
  }



   //Funcion caramelo aleatorio

   function carameloAleatorio() {
    var indice = Math.floor((Math.random()*4));
    return tipoCaramelo[indice];
  }

//nuevo caramelo
  function caramelo(fila,columna,objeto,nuevoCaramelo) {
    return {
    fila: fila, // fila
    columna: columna,  // columna
    nuevoCaramelo:nuevoCaramelo, // imagen
    locked:false, 
    combo:false, 
    objeto:objeto
    }
  }