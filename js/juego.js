var contadorR = 0;
var respuesta = 0;
var respuestaCorrecta = "Lunafreya";
var intentosRestantes = 4;

function contadorRestantes() {
  intentosRestantes--;
  document.getElementById("intentos");
}

function contadorIntentos() {
  contadorRestantes();
  contadorR++;
  respuesta = document.getElementById("respOb").value;
  if (respuesta == this.respuestaCorrecta) {
    var html = "";
    document.getElementById("envRes").disabled = "true";
    document.getElementById("respOb").disabled = "true";
    html += `<h5>¡Felicitaciones, has adivinado! <br>...<br> ¡La próxima será mas difícil!</h5>`;
    document.getElementById("pista").innerHTML = html;
  } else {
    this.darPistas();
  }
}

function darPistas() {
  var html = "";
  if (this.contadorR === 1) {
    html += `<h5 style="color:red">Te quedan 3 intentos</h5>`;
    document.getElementById("pista").innerHTML = html;
  } else if (this.contadorR === 2) {
    html += `<h5 style="color:red">Te quedan 2 intentos</h5> <h5> Mmmm... Veo que estás teniendo problemas.<br><br> No te preocupes! Te ayudaré</h5> <h5 style="color:red">Primer pista:</h5><h5>Pertenece a la realeza del reino de Tenebrae</h5>`;
    document.getElementById("pista").innerHTML = html;
  } else if (this.contadorR === 3) {
    html += `<h5 style="color:red">Te queda 1 intento </h5> <h5> No quiero que te pongas nervioso pero...<br> No puedes fallar!</h5><h5 style="color:red">Segunda pista:</h5><h5>Es mujer</h5>`;
    document.getElementById("pista").innerHTML = html;
  } else if (this.contadorR <= 4) {
    document.getElementById("envRes").disabled = "true";
    document.getElementById("respOb").disabled = "true";
    html += `<h5> ¡Lo siento, has perdido!<br>¡Por favor vuelve pronto, estaré esperandote!</h5>`;
    document.getElementById("pista").innerHTML = html;
  }
}

/*Mostras texto arriba de imagenes */
$(document).ready(function () {
  $("#alternar-respuesta").on("click", function (e) {
    $(".text-h").toggle("slow");
    e.preventDefault();
  });
});
