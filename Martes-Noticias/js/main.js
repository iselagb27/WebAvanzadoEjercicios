/*
if(jQuery)
{
  alert("Si tenemos jQuery");
}
*/

/*
//Sentencias similares
//document.getElementById('cuadrado').onclick...
//Hace referencia a la clase circulo
$(".circulo").click(function(){
    alert("Soy el circulo");
});

//Hace referencia a una ID de html
$("#cuadrado").click(function(){
  alert("Soy un cuadrado");
})
*/

/*
//Hace referencia a cualquier etiqueta html
$("div").click(function () {
  alert("Soy un div");
})

$("p").click(function () {
  alert("Soy un párrafo");
})
*/

/*
$(".circulo").click(function(){
    $("p").html("Texto reemplazado");
})
*/
/*
$(".circulo").click(function(){
    alert($("iframe").attr("src"));
    alert($("iframe").attr("src","http://www.unam.mx"));
});
*/


var contador=0;
$(".circulo").click(function(){
    contador++;
    if (contador == 1)
      $("iframe").attr("src","http://www.jornada.unam.mx/ultimas");
    else
      $("iframe").attr("src","http://dgb.unam.mx");
});

/*
$("button").click(function(){
  $(".circulo").css({
    'width': '300px',
    'height' : '300px'
  });
});
*/
/*
$("button").click(function(){
  $(".circulo").addClass("circulo2");
});
*/
/*
$("button").click(function(){
  $(".circulo").fadeOut(2000);
});
*/

$(".circulo").dblclick(function(){
    $(this).animate({
      width: "300px",
      height: "300px"
    },2000)
})
