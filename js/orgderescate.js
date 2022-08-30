//En ORGANIZACIONES DE RESCATE:
let btnDarEnAdopcion = document.getElementById('darEnAdopcion')
//opción 1
btnDarEnAdopcion.addEventListener('click', respuestaAClick);
function respuestaAClick() {
    console.log('Contáctate al mail: adoptemos@gmail.com')
}

let puestaEnAdopcion = [];
obtenerAnimales(); //pregunta si tengo algo guardado

const botonPuestaEnAdop = document.getElementById('darEnAdopcion');//button
botonPuestaEnAdop.addEventListener('click', agregarAnimal);

function agregarAnimal() {

    let nombreusuario = document.getElementById('nombre').value;
    let emailUsuario = document.getElementById('email').value;
    let nombreAnimal = document.getElementById('aAdoptar').value;
    let especieAnimal = document.getElementById('especie').value;
    let sexoAnimal = document.getElementById('sexo').value;
    let edadAnimal = document.getElementById('edad').value;
    // let mensajeDarEnAdop = document.getElementById('mensaje').value;

    if (nombreusuario != '' && emailUsuario != '' && nombreAnimal != '' && especieAnimal != '' && sexoAnimal != '' && edadAnimal != '') {
        puestaEnAdopcion.push(nombreusuario, emailUsuario, nombreAnimal, especieAnimal, sexoAnimal, edadAnimal);//Incluyo así para probar. Asimismo, de momento, dejo de lado el mensaje

        localStorage.setItem('ListaPuestaEnAdopcion', puestaEnAdopcion);//almacena en local storage
    }
    // Vaciar interfaz-input - FUNCIONAL
    document.getElementById('nombre').value = '';
    document.getElementById('email').value = '';
    document.getElementById('aAdoptar').value = '';
    document.getElementById('especie').value = '';
    document.getElementById('sexo').value = '';
    document.getElementById('edad').value = '';
    document.getElementById('mesaje').value = '';
    obtenerAnimales();
}


function obtenerAnimales() {
    if ('ListaPuestaEnAdopcion' in localStorage) {
        puestaEnAdopcion = localStorage.getItem('ListaPuestaEnAdopcion').split(",");
    let salidaSelect = "<option> Animal ingresado: " + puestaEnAdopcion[puestaEnAdopcion.length - 4] + ", un " + puestaEnAdopcion[puestaEnAdopcion.length - 3] + ", " + puestaEnAdopcion[puestaEnAdopcion.length - 2] + ", de " + puestaEnAdopcion[puestaEnAdopcion.length - 1] + " mes(es) de edad. </option>";
        console.log(salidaSelect);
        document.getElementById('paraDarEnAdop').innerHTML += salidaSelect;
    }
}
