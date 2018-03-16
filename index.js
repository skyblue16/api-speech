
var sr = new webkitSpeechRecognition();
sr.continuos= true;// define si el reoconocimiento de voz es constante o corto, es true.
sr.interimResults = true; //
sr.lang = 'es';

var mos = document.getElementById('mostrar');

//metodos
function hola(params) {
    mos.innerHTML('<p>que hay</p>')
}

sr.start();
sr.onresult = function(e) {
    console.log(e);
    // for (let i = e.resultIndex; i < e.results.length; ++i) {
    //        if (e.results[i].isFinal) {
    //         var valor =    e.results[i][0].transcript
    //       if (valor == "inicia") {
    //            hola();
    //     }
    //       }else{
    //           console.log('nose que pasa');
    //       }  
    //     }
        
    }


