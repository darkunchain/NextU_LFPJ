$(function() {

    $(document).ready(function() {
        
        $.getJSON(notas.json, function(info) {
        
        

        let datos = $("#datos");
        datos.html("");
        info.forEach(dato => {
          datos.append(`
                <div>
                    <b>Direccion: </b><span id="id${dato.id}"></span>${dato.id}</span>
                    <p></p>
                </div>
                <div>
                    <b>Ciudad: </b> <span id="cod${dato.id}"> ${dato.codigo}</span>
                    <p></p>
                </div>
                <div>
                    <b>Telefono: </b><span id="nom${dato.id}"></span>${dato.nombre}</span>
                    <p></p>
                 </div>
                  <div>
                    <b>Código postal: </b><span id="not${dato.id}"></span>${dato.nota}</span>
                    <p></p>
                  </div>`)
        })
    })
});


})