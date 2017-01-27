function generador(){
  var tiro = Math.round(Math.random()*2);
  var ppt;
  if (tiro == 0){
    ppt="piedra";
  }
  else if (tiro == 1){
    ppt="papel";
  }
  else if (tiro ==2){
    ppt="tijeras";
  }
  else
    ppt="error";
  return ppt;
}

function aveces(){
  var proba = Math.roud(Math.random()*1);
  var pog;
  if (proba == 1){
    alert("Ganaste, eres el mejor");
  }
  else
    alert("Perdiste, te gané");
}

var texto=promp(¿Qué eliges: piedra, papel o tijeras?);

if (texto == generador()){
  alert("Empate, eres bueno");
}
else if (texto != generdor())
  aveces();
