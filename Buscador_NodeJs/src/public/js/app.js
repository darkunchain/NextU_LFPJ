//Inicializador del elemento Slider
$("#rangoPrecio").ionRangeSlider({
  type: "double",
  grid: false,
  min: 0,
  max: 100000,
  from: 1000,
  to: 20000,
  prefix: "$"
})

function setSearch() {
  let busqueda = $('#checkPersonalizada')
  busqueda.on('change', (e) => {
    if (this.customSearch == false) {
      this.customSearch = true
    } else {
      this.customSearch = false
    }
    $('#personalizada').toggleClass('invisible')
  })
}

setSearch()

function buscarpropiedad(id) {
  
  var buscarvalor = document.getElementById(id).value;
  var var1 = document.getElementById('var1'); 
  var var2 = document.getElementById('var2');
  var var3 = document.getElementById('var3');
  var var4 = document.getElementById('var4');
  var var5 = document.getElementById('var5');
  var var6 = document.getElementById('var6'); 
  var todos = document.getElementById('total').innerHTML;
  offid("proptodas");

  console.log(var3)

  var d = document.getElementById("propbusqueda");
  var d1 = document.getElementById("reemplaza");
  var parentDiv = d1.parentNode;
  var sp1 = document.createElement("div");
  sp1.setAttribute("id", "reemplaza");      
  parentDiv.replaceChild(sp1, d1);

  for (var i = 0; i < todos; i++) {
    if (var1[i] == " " + buscarvalor) {
       var var2 = document.getElementById('tip' + i).innerHTML;
      var var3 = document.getElementById('dir' + i).innerHTML;
       var var4 = document.getElementById('tel' + i).innerHTML;
      // var var5 = document.getElementById('zip' + i).innerHTML;
      // var var6 = document.getElementById('pre' + i).innerHTML;
      //console.log('dir' + i,'var2:',var2,'var3:',var3,'var4:',var4,'var5:',var5)
      
      escribir(reemplaza, var1[i],var2,var3,var4,var5,var6);

    }
  }
  
  
  

  
  onid("propbusqueda");    
  console.log('buscarvalor:',buscarvalor);
}


function offid(id) {
  var x = document.getElementById(id);
  x.style.display = "none";
}

function onid(id) {
  var x = document.getElementById(id);
  x.style.display = "block";
}

function mostrartodos() {
  onid("proptodas");
  offid("propbusqueda");
}

function escribir(r,ciu,tip,dir,tel,zip,pre){
  

  var mybody = '<div class="card horizontal">'+
  '<div class="card-image">'+
    '<img src="img/home.jpg">'+
  '</div>'+
  '<div class="card-stacked">'+
    '<div class="card-content">'+
      '<div>'+
        '<b>Direccion: </b><span >'+dir+'</span><p></p>'+
      '</div>'+
      '<div>'+
        '<b>Ciudad: </b> <span >'+ciu+'</span><p></p>'+
      '</div>'+
      '<div>'+
        '<b>Telefono: </b><span >'+tel+'</span><p></p>'+
      '</div>'+
      '<div>'+
        '<b>Código postal: </b><span >'+zip+'</span><p></p>'+
      '</div>'+
      '<div>'+
        '<b>Precio: </b><span>'+pre+'</span><p></p>'+
      '</div>'+
      '<div>'+
        '<b>Tipo: </b><span>'+tip+'</span><p></p>'+
      '</div>'+
    '</div>'+
  '</div>'+
  '<div class="card-action right-align">'+
    '<a href="#">Ver más</a>'+
  '</div>'+
'</div>'+        
'<div hidden id="total-busqueda">'+
'</div>'+
'</div>';

r.insertAdjacentHTML('afterbegin', mybody);


}
