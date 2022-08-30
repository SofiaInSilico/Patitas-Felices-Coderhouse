//En CONTACTOS (ACÁ SE HA OPTIMIZADO, PARA EL DESAFÍO COMPLEMENTARIO)
class Contacto {
    constructor(id, nombre, email, edad, motivo, mensaje) {
        this.id = parseInt(id);
        this.nombre = nombre;
        this.email = email;
        this.edad = edad;
        this.motivo = motivo;
        this.mensaje = mensaje;
    }
    adulto(){
        return (this.edad >= 18) == true?  "Elegible para adoptar" : "No es elegible para adoptar"
    }
}


const contactantes = [];
const espacioContactantes = document.getElementById('espContactantes');

// contactantes.push(new Contacto(1, "Elliot Moss", "elli.m@gmail.com", "Interés en adoptar", "Hola, buenas! Estoy interesado en adoptar un perrito adulto..."));
// contactantes.push(new Contacto(2, "Gabriela Mistral", "gabi_lite@hotmail.com", "Dar en adopción", "Estimad@s, la organización a la que represento ha encontrado a un pequeño gatito, deseamos ponerle en adopción..."));

function contactantes1(contactantes) {
    espacioContactantes.innerHTML = "";
    for (const individuo of contactantes) {
        let divContacto = document.createElement('div');
        divContacto.innerHTML = `<h4>Contactante: ${individuo.nombre} </h4> 
                                    <h5> E-mail del contactante: ${individuo.email}</h5>
                                    <h5> Edad del contactante: ${individuo.edad}</h5>
                                    <h5> Motivo de contacto: ${individuo.motivo}</h5>
                                    <h5>Mensaje: ${individuo.mensaje}</h5>
                                    <h5> Estado: ${individuo.adulto()}</h5>
                                    <h4><button id = "${individuo.id}" class="botonAdopcion">Confirmar</button></h4><hr>`;
        espacioContactantes.append(divContacto);
    }
}

if ('ListaContactantes' in localStorage) {
    const guardados = JSON.parse(localStorage.getItem('ListaContactantes')); 
    console.log(guardados);
    for (const generico of guardados) {
    contactantes.push(new Contacto(generico.id, generico.nombre, generico.email, generico.edad, generico.motivo, generico.mensaje));
    }
    console.log(contactantes);
    contactantes1(contactantes);
}
// DE OBJETO A JSON, PARA GUARDARLO EN STORAGE, LUEGO DEVOLVERLO A JSON Y A OBJETO:
// aplicar event change
let formularioContacto = document.getElementById('contactoForm');
formularioContacto.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    console.log(e.target.id);
    const inputs = formularioContacto.children;
    console.log(inputs);
    contactantes.push(new Contacto(contactantes.length + 1, inputs[3].value, inputs[6].value, inputs[9].value, inputs[12].value, (inputs[16]?.value || "No se ha registrado mensaje")));
    console.log(contactantes);
    localStorage.setItem('ListaContactantes', JSON.stringify(contactantes));
    contactantes1(contactantes);
}

// Falta desestructuración y spread