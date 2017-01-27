$(document).ready(function(){
  var imagenes=['img/cascadas.jpg','img/jardin.jpg','img/montes.jpg','img/praderas.jpg','img/playa.jpg'];

  $(".imagenFondo").css('background-image','url('+imagenes[Math.floor(Math.random()*5)]+')');

  $("#mandar").click(function(){
    var direccion = $("#dir").val();
    var link = 'https://maps.googleapis.com/maps/api/geocode/json?address='+direccion+'&key=AIzaSyBLNASpik0mzLfFsIqYzdIPI8KQn__6kEM';

    //document.write(link);
    //Método que manda desde el código al navegador
    $.ajax({
      dataType: "json",
      url: link,
      success: recibirDatos
    });

    // envia json como objeto
    function recibirDatos(json){
      var informacion = json;
      var codigoPostal = informacion.results[0].address_components[6].long_name;
      //console.log(informacion.results[0].address_components[6]);
      //$('#respuesta').html(codigoPostal);
      $("#respuesta").append('<div class="offset-m3 col m6 card-panel grey lighten-3"><h6>Tú Código Postal es:'+codigoPostal+'</h6></div>')
    }


  }); //fin funcion mandar

}); //fin document
