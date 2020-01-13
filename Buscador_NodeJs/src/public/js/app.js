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

$("#selectciudad").change(function (){
  var vselectciudad = $("#selectciudad").val();
  var vselecttipo = $("#selecttipo").val();
  console.log(vselectciudad,' , ',vselecttipo);
  offid("proptodas");
  onid("propbusqueda");
  document.getElementById("formbuscar").submit();

})

$("#selecttipo").change(function (){
  var vselectciudad = $("#selectciudad").val();
  var vselecttipo = $("#selecttipo").val();
  console.log(vselectciudad,' , ',vselecttipo);
  offid("proptodas");
  onid("propbusqueda");
  document.getElementById("formbuscar").submit();


})

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
