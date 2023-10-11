
const title = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const p = document.querySelector("#result");
const form = document.querySelector('#formulario');

form.addEventListener('submit',sumarInput);

function sumarInput(event){
    event.preventDefault(); //Evita que lo que hace normalmente en este caso lo que hace el submit es resetear la pagina.
    let suma = Number(input1.value) + Number(input2.value);
    console.log(suma);
    p.textContent = p.textContent + suma;
}

btn.addEventListener('click',sumarInput2);

function sumarInput2(){
    let sumaInputs = Number(input1.value) + Number(input2.value);
    p.textContent = p.textContent + sumaInputs;
}