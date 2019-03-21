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

  var busquedavalor = document.getElementById(id).value;
  var var1 = document.getElementById('var1');
  console.log('var1:',var1);
  var datosback = `<%= datos.Ciudad %>`;
  console.log('datos backend:',datosback);
  var des = document.getElementById('ciudad');
  console.log('busquedavalor antes:',busquedavalor);

  for (var i = 0; i < des.length - 1; i++) {
    var st = des[i].text;
    if (st.search(busquedavalor) > -1) {
      var temp = des[i];
      des.addEventListener(temp, des[0]);
    }
  }
  console.log('des',des,'st',st,'busquedavalor',busquedavalor);
}

