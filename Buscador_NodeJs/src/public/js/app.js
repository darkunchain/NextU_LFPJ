//Inicializador del elemento Slider
$("#rangoPrecio").ionRangeSlider({
  type: "double",
  grid: false,
  min: 0,
  max: 100000,
  from: 1000,
  to: 20000,
  prefix: "$"
});

function setSearch() {
  let busqueda = $("#checkPersonalizada");
  busqueda.on("change", e => {
    if (this.customSearch == false) {
      this.customSearch = true;
    } else {
      this.customSearch = false;
    }
    $("#personalizada").toggleClass("invisible");
  });
}
setSearch();



$(function() {

/////////////////////////  Document Ready function /////////////////////////
  $(document).ready(function() {
    $.ajax({
      global: true,
      url: "/datos",
      success: function(datos) {        
        let proptodas = $("#proptodas");
        proptodas.html("");
        datos.forEach(dato => {
          proptodas.append(`
            <div hidden class="card horizontal">
              <div class="card-image">
                <img src="img/home.jpg">
              </div>
              <div class="card-stacked">
                <div class="card-content" id="card-content">
                  <div>
                    <b>Direccion: </b><span id="dir${dato.id}"></span>${dato.Direccion}</span>
                    <p></p>
                  </div>
                  <div>
                    <b>Ciudad: </b> <span id="ciu${dato.id}"> ${dato.Ciudad}</span>
                    <p></p>
                  </div>
                  <div>
                    <b>Telefono: </b><span id="tel${dato.id}"></span>${dato.Telefono}</span>
                    <p></p>
                  </div>
                  <div>
                    <b>Código postal: </b><span id="zip${dato.id}"></span>${dato.Codigo_Postal}</span>
                    <p></p>
                  </div>
                  <div>
                    <b>Precio: </b><span id="pre${dato.id}"></span>${dato.Precio}</span>
                    <p></p>
                  </div>
                  <div>
                    <b>Tipo: </b><span id="tip${dato.id}"> ${dato.Tipo}</span>
                    <p></p>
                  </div>
                </div>
              </div>
              <div class="card-action right-align">
                <a href="#">Ver más</a>
              </div>
              </div>
              <div hidden id="total">
              </div>`
          );
        });
      }
    });
  });
/////////////////////////  Document Ready function /////////////////////////

/////////////////////////  on change Form function /////////////////////////
$('#formbuscar').on('change', (event) =>  {
  event.preventDefault();
  let selectciudad = $('#selectciudad');
  let selecttipo = $('#selecttipo');
  let selectvalor = $('#rangoPrecio');
  
  $.ajax({
    global: false,
    method: 'POST',
    url: "/busqueda",
    data: {
      selectciudad: selectciudad.val(),
      selecttipo: selecttipo.val(),
      selectvalor: selectvalor.val()
    },
    success: function(response) {
      console.log("post response: ", response);        
    },
    error: function (err) {
      console.log(err);
    }
  });


  $.ajax({
    global: false,
    url: "/busqueda",
    success: function(busqueda) {
      console.log("data cargada", busqueda);
      let propbusqueda = $("#propbusqueda");
      propbusqueda.html("");
      busqueda.forEach(dato => {
        propbusqueda.append(`
          <div hidden class="card horizontal">
            <div class="card-image">
              <img src="img/home.jpg">
            </div>
            <div class="card-stacked">
              <div class="card-content" id="card-content">
                <div>
                  <b>Direccion: </b><span id="dir${dato.id}"></span>${dato.Direccion}</span>
                  <p></p>
                </div>
                <div>
                  <b>Ciudad: </b> <span id="ciu${dato.id}"> ${dato.Ciudad}</span>
                  <p></p>
                </div>
                <div>
                  <b>Telefono: </b><span id="tel${dato.id}"></span>${dato.Telefono}</span>
                  <p></p>
                </div>
                <div>
                  <b>Código postal: </b><span id="zip${dato.id}"></span>${dato.Codigo_Postal}</span>
                  <p></p>
                </div>
                <div>
                  <b>Precio: </b><span id="pre${dato.id}"></span>${dato.Precio}</span>
                  <p></p>
                </div>
                <div>
                  <b>Tipo: </b><span id="tip${dato.id}"> ${dato.Tipo}</span>
                  <p></p>
                </div>
              </div>
            </div>
            <div class="card-action right-align">
              <a href="#">Ver más</a>
            </div>
            </div>
            <div hidden id="total">
            </div>`
        );
      });
    },    
  });

  offid("proptodas");
  onid("propbusqueda");

});
/////////////////////////  on change Form function /////////////////////////


}); /////// End Main funtion



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


