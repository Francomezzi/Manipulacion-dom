
const title = document.querySelector('h1');
const parrafo = document.querySelector('p');
const parrafo1 = document.querySelector('.parrafo1');
const parrafox = document.querySelector('#parrafox');
const input = document.querySelector('input');

const parrafo12 = document.getElementsByClassName('.parrafo1');
const parrafox2 = document.getElementById('#parrafox');

console.log(title.id);
console.log(parrafo);

console.log({
    title,
    parrafo,
    parrafo1,
    parrafox,
    input
})

title.innerHTML = "LOCURA MIX <br> Domingo 16"; //Cambia el contenido HTML o lo agrega de no tener nada.
parrafo.innerText = "Alla le estan rapeando"; //Cambia el texto del objeto no el html.
console.log(title.getAttribute('pantalla')); //Trae el valor de el atributo que estamos buscando.
title.setAttribute('class','rojo'); //Modifica el valor de un atributo o lo crea si no lo tiene.
console.log(title.getAttribute('class'));

title.classList.add('grande'); //Agrega clases sin eliminar las otras.
title.classList.remove('rojo'); //Elimina clase que queramos.
title.classList.contains('rojo') //Devuelve un booleano y pregunta si tiene esa clase.
title.classList.toggle('rojo'); //Dependiendo de si tiene o no la clase la pone o la saca.

input.value = "2000";

const img = document.createElement('img');
img.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/7/72/Gato_beb%C3%A9.jpg');
console.log(img);

parrafox.append(img);

img.width = "400";
img.height = "400";
parrafox.display = "flex";
parrafox.flexDirection = "row";
