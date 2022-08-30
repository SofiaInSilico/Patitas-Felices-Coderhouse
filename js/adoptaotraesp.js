class Animal {
    constructor(id, nombre, especie, sexo, edad, img) {
        this.id = parseInt(id);
        this.nombre = nombre;
        this.especie = especie;
        this.sexo = sexo;
        this.edad = parseInt(edad);
        this.img= img;
    }
}

const enAdopcion = [];


enAdopcion.push(new Animal(17, "Usagi", "Conejo", "Macho", 4, "../images/conejo1.jpg"));
enAdopcion.push(new Animal(18, "Lili", "Cobaya" , "Hembra", 5, "../images/cobaya.jpg"));
enAdopcion.push(new Animal(19, "Manuelita", "Tortuga" , "Hembra", 70, "../images/tortuga1.jpeg"));
enAdopcion.push(new Animal(20, "Espín", "Erizo" , "Macho", 20, "../images/erizo.jpg"));
enAdopcion.push(new Animal(21, "Vodka", "Ferret" , "Hembra", 15, "../images/ferret.jpg"));

let divEnAdop = document.getElementById("otrasEspAdopcion");

for (const animal of enAdopcion) {
    let divEnAdopcion = document.createElement('div');
    divEnAdopcion.classList.add('col');
    divEnAdopcion.innerHTML =  `<div class="card" style= "width: 35rem;">
                                <img src="${animal.img}" class="card-img-top" style= "height: 25rem;" alt="...">
                                        <div class="card-body">
                                        <h5 class="card-title cardTitle">${animal.nombre}</h5>
                                        <h6 class="card-text">${animal.sexo}</h6>
                                        <h6 class="card-text">${animal.edad} mes(es) de edad.</h6>
                                        <button id='${animal.id}' class = 'botonAdopcion btn btn-outline-dark buttonPosition'>Deseo adoptar</button>
                                        </div>
                                </div>`
                                divEnAdop.append(divEnAdopcion);
}

let botones = document.getElementsByClassName("botonAdopcion");
for (const boton of botones) {
    boton.addEventListener("click", function () {
        console.log(this.id);
        let seleccion = enAdopcion.find(animal => animal.id == this.id);
        boton.onclick= () => {

            //Muestro un mensaje de alerta con sweetAlert
            Swal.fire({
                title: "El animal que estás por adoptar es " + seleccion.nombre + " ¿Quieres guardar los cambios?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Guardar',
                denyButtonText: `No guardar`,
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                  Swal.fire('La operación ha sido realizada con éxito! Te estaremos enviando un formulario de adopción a tu e-mail', '', 'success')
                } else if (result.isDenied) {
                  Swal.fire('Los cambios no fueron guardados', '', 'info')
                }
              })
        }
    })
}