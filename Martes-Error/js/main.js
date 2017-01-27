//Calendario para HTML
$("#fecha").datepicker();

$(function(){

  $("#arrastre").draggable();
  $("#canasta").droppable({
    drop: function(event,ui){
      $(this).addClass("ui-state-highlight").find("p").html("Anotaste una canasta");
    }
  });

});


$( function() {
  var state = true;
  $( "#button" ).on( "click", function() {
    if ( state ) {
      $( "#effect" ).animate({
        backgroundColor: "#aa0000",
        color: "#fff",
        width: 500
      }, 1000 );
    } else {
      $( "#effect" ).animate({
        backgroundColor: "#fff",
        color: "#000",
        width: 240
      }, 1000 );
    }
    state = !state;
  });
} );
