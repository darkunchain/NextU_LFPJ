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

$("#selectciudad").change(function (event){
  event.preventDefault();

  $.ajax({
    global: false,
    type: 'POST',
    url: '/',
    dataType: 'html',
    data: {
      vselectciudad: $("#selectciudad").val(),
      vselecttipo: $("#selecttipo").val()
    },
    success: function () {
      console.log('data cargada');
    }
  });
  escribe($("#selectciudad").val(),"var1");
  escribe($("#selecttipo").val(),"var2");
  offid("proptodas");
  onid("propbusqueda");
})
  

$("#selecttipo").change(function (event){
  event.preventDefault();

  $.ajax({
    global: false,
    type: 'POST',
    url: '/',
    dataType: 'html',
    data: {
      vselectciudad: $("#selectciudad").val(),
      vselecttipo: $("#selecttipo").val()
    },
    success: function () {
      console.log('data cargada');
    }
  });
  $('#var1').val($("#selectciudad").val());
  $('#var2').val($("#selecttipo").val());
  console.log($('#var1').val());
  //escribe($("#selectciudad").val(),"var1");
  //escribe($("#selecttipo").val(),"var2");
  offid("proptodas");
  onid("propbusqueda");
})
  
  

function escribe(x,id){
  var s = document.getElementById(id);
  console.log(s,x,id);
  s.value = x;
  
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

function escribir(r, ciu, tip, dir, tel, zip, pre) {


  var mybody = '<div class="card horizontal">' +
    '<div class="card-image">' +
    '<img src="img/home.jpg">' +
    '</div>' +
    '<div class="card-stacked">' +
    '<div class="card-content">' +
    '<div>' +
    '<b>Direccion: </b><span >' + dir + '</span><p></p>' +
    '</div>' +
    '<div>' +
    '<b>Ciudad: </b> <span >' + ciu + '</span><p></p>' +
    '</div>' +
    '<div>' +
    '<b>Telefono: </b><span >' + tel + '</span><p></p>' +
    '</div>' +
    '<div>' +
    '<b>Código postal: </b><span >' + zip + '</span><p></p>' +
    '</div>' +
    '<div>' +
    '<b>Precio: </b><span>' + pre + '</span><p></p>' +
    '</div>' +
    '<div>' +
    '<b>Tipo: </b><span>' + tip + '</span><p></p>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<div class="card-action right-align">' +
    '<a href="#">Ver más</a>' +
    '</div>' +
    '</div>' +
    '<div hidden id="total-busqueda">' +
    '</div>' +
    '</div>';

  r.insertAdjacentHTML('afterbegin', mybody);


}
