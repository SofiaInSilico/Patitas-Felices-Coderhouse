class Animal {
    constructor(id, nombre, sexo, edad, img) {
        this.id = parseInt(id);
        this.nombre = nombre;
        this.sexo = sexo;
        this.edad = parseInt(edad);
        this.img= img;
    }
}

const enAdopcion = [];


enAdopcion.push(new Animal(1, "César", "Macho", 20, "../images/perro10.jpg"));
enAdopcion.push(new Animal(2, "Mari", "Hembra", 2, "../images/cachorro.jpg"));
enAdopcion.push(new Animal(3, "Usagi", "Macho", 4, "../images/perro3.jpg"));
enAdopcion.push(new Animal(4, "Rocky", "Macho", 5, "../images/perro14.jpg"));
enAdopcion.push(new Animal(5, "Ciro", "Macho", 5, "../images/perro5.jpg"));
enAdopcion.push(new Animal(6, "Tami", "Hembra", 7, "../images/perro13.jpeg"));
enAdopcion.push(new Animal(7, "Pelusa", "Hembra", 15, "../images/perro11.jpeg"));
enAdopcion.push(new Animal(8, "Pepe", "Macho", 28, "../images/perro15.jpg"));
enAdopcion.push(new Animal(9, "Kala", "Hembra", 40, "../images/perro16.jpg"));



let divEnAdop = document.getElementById("perrosAdopcion");

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