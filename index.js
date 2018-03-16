
var sr = new webkitSpeechRecognition();
sr.continuos= true;// define si el reoconocimiento de voz es constante o corto, es true.
sr.interimResults = true; //
sr.lang = 'es';

var mos = document.getElementById('mostrar')

//metodos

sr.start();
sr.onresult = function(e) {
    for (let i = e.resultIndex; i < e.results.length; ++i) {
           if (e.results[i].isFinal) {
            var valor =    e.results[i][0].transcript
          if (valor == "inicia") {
            return {
                hola(){
                   mos.innerHTML('<p>hola, felicidades te Escuche</p>')
                }
            }
          }   
        }
        
    }
}

