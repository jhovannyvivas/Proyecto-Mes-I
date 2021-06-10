var pregunta1 = document.getElementById('pregunta1');
var pregunta2 = document.getElementById('pregunta2');
var ptoCarreño = document.getElementById('ptocarreño');
var ptoInirida = document.getElementById('ptoInirida');
var leticia = document.getElementById('leticia');
var español = document.getElementById('español');
var colombiano = document.getElementById('colombiano');
var venezolano = document.getElementById('venezolano');
var correcto = document.getElementById('correcto');
var incorrecto = document.getElementById('incorrecto');
var correcto2 = document.getElementById('correcto2');
var incorrecto2 = document.getElementById('incorrecto2');

var puntaje=0;



ptoCarreño.addEventListener("click", function(e){

    e.preventDefault();
    ptoCarreño.style.background = 'red';
    incorrecto.style.display = 'block';
    setTimeout(function(){
        pregunta1.style.display = 'none';
        pregunta2.style.display = 'block';
    }, 1000);
}
)

ptoInirida.addEventListener("click", function(e){

    e.preventDefault();
    ptoInirida.style.background = 'red';
    incorrecto.style.display = 'block';
    setTimeout(function(){
        pregunta1.style.display = 'none';
        pregunta2.style.display = 'block';
    }, 1000);
}
)
leticia.addEventListener("click", function(e){

    e.preventDefault();
    leticia.style.background = 'gren';
    correcto.style.display = 'block';
    setTimeout(function(){
        pregunta1.style.display = 'none';
        pregunta2.style.display = 'block';
    }, 1000);
    puntaje++;
}
)

venezolano.addEventListener("click", function(e){

    e.preventDefault();
    venezolano.style.background = 'green';
    correcto2.style.display = 'block';
    puntaje++;
    setTimeout(function(){
        document.write('<h1> Tu puntaje es  '+ puntaje + '</h1>');
    }, 1000);
}
)

español.addEventListener("click", function(e){

    e.preventDefault();
    español.style.background = 'red';
    incorrecto2.style.display = 'block';
    setTimeout(function(){
        document.write('<h1> tu puntaje es  ' + puntaje + ' </h1>');
    }, 1000);
}
)
colombiano.addEventListener("click", function(e){

    e.preventDefault();
    colombiano.style.background = 'gren';
    correcto.style.display = 'block';
    setTimeout(function(){
        document.write('<h1> tu puntaje es  ' + puntaje +'</h1>');
    }, 1000);
}
)