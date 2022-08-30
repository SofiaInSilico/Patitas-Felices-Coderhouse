let tipoDeUsuario = prompt("¿Estás interesad@ en poner en adopción a una mascota? Responde con un Sí o un No");

if (tipoDeUsuario == "Sí" || tipoDeUsuario == "SÍ" || tipoDeUsuario == "sí" || tipoDeUsuario == "Si" || tipoDeUsuario == "SI" || tipoDeUsuario == "si") {
    const nuevosIngresos = [];
    let   cantidad = 1;
    do{
       let nombre = prompt("Ingresar el nombre del animal");
       let especie = prompt("Ingresar la especie del animal (Perro, Gato, Hámster, Conejo, etc.)");
       let sexo = prompt("Ingresar el sexo del animal (escribir Femenino o Masculino)");
       let edad = prompt("Ingresar la edad, en meses, del animal");
       let datosDelAnimal = "Especie: " + especie + ", Sexo: "  + sexo + ", Nombre: " + nombre + ", Edad: " + edad + " mes(es).";
       nuevosIngresos.push(datosDelAnimal.toUpperCase());
       console.log(nuevosIngresos.length);
    }while(nuevosIngresos.length != cantidad)
    alert('Estos son los datos del animal que has ingresado: \n' + '\n' + nuevosIngresos.join("\n") + '\n' + "\nMuchas gracias por tu aporte, lo estaremos evaluando; ante cualquier duda, contánctanos a adoptemos@gmail.com");
    alert("Si deseas ingresar a otro animal, o si deseas revisar a los animales que ya se encuentran en adopción, te sugerimos refrescar la página y responder al pop-up  de forma correspondiente")

}else if (tipoDeUsuario == "NO" || tipoDeUsuario == "no" || tipoDeUsuario == "No"){
    let condiciones = prompt("Genial, un adoptante! Antes de proceder, dinos ¿Quieres filtrar por condiciones (1), deseas que te mostremos toda la lista de los animales en adopción publicados en nuestra página (2)? Responde 1 O 2, respectivamente.");

        if (condiciones == 1) {
            let tipoDeFiltro = prompt("De acuerdo a qué dato deseas filtrar?:  \n \n 1.- Edad  \n 2.- Sexo  \n 3.- Especie  \n \n Responde ingresando el número correspondiente a la opción en la que estés interesad@");
            
            if (tipoDeFiltro == 1) {
                let numeroMin = prompt("Ingresa la edad mínima, en meses");
                let numeroMax = prompt("Ingresa la edad máxima, en meses");
                const edadDelAnimal = enAdopcion.filter (animal => animal.edad > numeroMin && animal.edad < numeroMax)
                alert("Muy bien! estos son los resultados del filtro aplicado, de mayor a menor edad:")
                for (const animales of edadDelAnimal) {
                    alert( "Te presentamos a " + animales.nombre + "; un " + animales.especie + ", de sexo "  + animales.sexo + ", que tiene " + animales.edad + " mes(es) de edad.")
                }
                alert("Si estás interesad@ en alguno de ellos, por favor envíanos tu información, y la del bichito que deseas adoptar, al e-mail adoptemos@gmail.com, y nos pondremos en contacto contigo!")
                alert("Si deseas ver otras opciones, o poner a un animal en adopción, te sugerimos refrescar la página y responder al pop-up de acuerdo a tu búsqueda")
                

            }else if (tipoDeFiltro == 2) {
                let femeninoOMasculino = prompt("Ingresa el sexo del animal a adoptar. Escoje entre: femenino o masculino; te pedimos, por favor, escribas todo en minúscula");
                const sexoDelAnimal = enAdopcion.filter (animal => animal.sexo == femeninoOMasculino)
                alert("Muy bien! estos son los resultados del filtro aplicado, de mayor a menor edad: ")
                for (const animales of sexoDelAnimal) {
                    alert( "Te presentamos a " + animales.nombre + "; un " + animales.especie + ", de sexo "  + animales.sexo + ", que tiene " + animales.edad + " mes(es) de edad.")
                }
                alert("Si estás interesad@ en alguno de ellos, por favor envíanos tu información, y la del bichito que deseas adoptar, al e-mail adoptemos@gmail.com, y nos pondremos en contacto contigo!")
                alert("Si deseas ver otras opciones, o poner a un animal en adopción, te sugerimos refrescar la página y responder al pop-up de acuerdo a tu búsqueda")

            }else if (tipoDeFiltro == 3) {
                let tipoDeEspecie = prompt("Ingresa la especie del animal; de momento puedes escoger entre: perro, gato, conejo, hámster; te pedimos, por favor, escribas todo en minúscula");
                const especieDelAnimal = enAdopcion.filter (animal => animal.especie == tipoDeEspecie)
                alert("Muy bien! estos son los resultados del filtro aplicado, de mayor a menor edad: ")
                for (const animales of especieDelAnimal) {
                    alert( "Te presentamos a " + animales.nombre + "; un " + animales.especie + ", de sexo "  + animales.sexo + ", que tiene " + animales.edad + " mes(es) de edad.")
                }
                alert("Si estás interesad@ en alguno de ellos, por favor envíanos tu información, y la del bichito que deseas adoptar, al e-mail adoptemos@gmail.com, y nos pondremos en contacto contigo!")
                alert("Si deseas ver otras opciones, o poner a un animal en adopción, te sugerimos refrescar la página y responder al pop-up de acuerdo a tu búsqueda")

            }else {
                alert("Tu respuesta no está dentro de nuestros archivos; por favor refresca la página e ingresa alguna de las formas previamente solicitadas.")
            }
            }
            
        else if (condiciones == 2) {
            alert("Genial! entonces te dejamos, a continuación, una lista con los datos de los bichitos en adopción, de mayor a menor edad: ");
            for (const animal of enAdopcion) {
                alert( "Te presentamos a " + animal.nombre + "; un " + animal.especie + ", de sexo "  + animal.sexo + ", que tiene " + animal.edad + " mes(es) de edad.")
            }
            alert("Si estás interesad@ en alguno de ellos, por favor envíanos tu información, y la del bichito que deseas adoptar, al e-mail adoptemos@gmail.com, y nos pondremos en contacto contigo!")
            alert("Si deseas ver otras opciones, o poner a un animal en adopción, te sugerimos refrescar la página y responder al pop-up de acuerdo a tu búsqueda")
            }
            else {
            alert("Tu respuesta no está dentro de nuestros archivos; por favor refresca la página e ingresa alguna de las formas previamente solicitadas.")
        }
}


/*let titulo = document.getElementById('titulo');
console.log(titulo.innerHTML);

let parrafos = document  */

/*class Producto {
    constructor (id, nombre, precio){
        this.id = parseInt(id);
        this.nombre = nombre;
        this.precio = precio;
    }
}
const productors = []
productors.push(new Producto(1, 'Dona', 150));*/

//document.querySelector('#titulo').innerHTML = 'Hola mundo'; /query selector: obtiene (sólo 1) id, o sólo el primer elemento de una clase. cambia el original(?

//query selector all: documeHnt.querySelector.All('.parrafo').forEach (nodo => nodo.append ('Se agrega determinada cosa al final de, en este caso, cada párrafo));

//intenté aplicar find de la manera comentada más abajo, pero no pude. Como se solicitaba que estuviese en la entrega, lo agregué de manera simple; Me podrías indicar en qué me he equivocado acá? me gustaría poder usar la busqueda en esta sección :(

/*else if (condiciones == 3) {
                let nombreDelAnimal = prompt("Por favor, ingresa el nombre del animal del que quieres recibir más información; recuerda escribir la inicial de su nombre con mayúscula, y utilizar tildes en caso de que corresponda.");
                const encontrar = enAdopcion.find(animal => animal.nombre == nombreDelAnimal)
                alert("Te dejamos, a continuación, lo que encontramos en nuestros archivos: ")
                for (const animales of encontrar) {
                    alert( "Te presentamos a " + animales.nombre + "; un " + animales.especie + ", de sexo "  + animales.sexo + ", que tiene " + animales.edad + " mes(es) de edad.")
                }
                alert("Si estás interesad@ en alguno de ellos, por favor envíanos tu información, y la del bichito que deseas adoptar, al e-mail adoptemos@gmail.com, y nos pondremos en contacto contigo!")
                alert("Si deseas ver otras opciones, o poner a un animal en adopción, te sugerimos refrescar la página y responder al pop-up de acuerdo a tu búsqueda")
            }*/
            


//`` = alt + 9 + signo
//appendchild = agrega un hijo y/o texto
// const encontrar = enAdopcion.find(animal => animal.nombre == 'Rocky')
// console.log(encontrar);


// para guardar información - de forma local:

// para m+as de 1 valor:
/*const lenguajes = ('JavaScript','php','python');
localStorage.setItem('Lenguajes', lenguajes);
localStorage.setItem('Comision', 40240);

console.log(parseInt(localStorage.getItem('Comision')));
console.log (localStorage.getItem('Lenguajes'));

// todo lo que se almacena e el navegador, se almacena como texto
// texto a número: parseInt
// texto a array:
let nuevoArray = localStorage.getItem('Lenguajes'); //Generalmente los datos se guardan en un array
console.log(nuevoArray.split(','));
localStorage.removeItem('Lenguajes');
// localStorage.clear()

// Session storage:

sessionStorage.setItem('Saludo', 'Hola mundo');
console.log(sessionStorage.getItem('Saludo'));*/


/*tributos:
<a href='https://www.freepik.com/vectors/pet-silhouette'>Pet silhouette vector created by freepik - www.freepik.com</a>
<a href='https://www.freepik.com/vectors/animal-care'>Animal care vector created by pikisuperstar - www.freepik.com</a>
<a href='https://www.freepik.com/vectors/animal-line'>Animal line vector created by rawpixel.com - www.freepik.com</a>

*/

/*<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="/images/Patitas Felices (2).png" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="/images/Patitas Felices (3).png" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="/images/Patitas Felices (4).png" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="/images/Patitas Felices (5).png" class="d-block w-100" alt="...">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div> */

                  /*puestaEnAdopcion.push(nombreusuario);
        puestaEnAdopcion.push(emailUsuario);
        puestaEnAdopcion.push(nombreAnimal);
        puestaEnAdopcion.push(especieAnimal);
        puestaEnAdopcion.push(sexoAnimal);
        puestaEnAdopcion.push(edadAnimal);*/
        // puestaEnAdopcion.push(mensajeDarEnAdop);

        /*let parrafo = document.createElement('p');
parrafo.innerHTML = "Recuerda que, si alguno de estos animalitos es de tu interés, nos puedes contactar a adoptemos@gmail.com, incluyéndo tu información y la de tu posible adoptado.";
document.body.append(parrafo);*/


/*onsubmit = () => {
    console.log('Tus respuestas han sido registradas; nos pondremos en contacto prontamente.')
*/



// enAdopcion.sort((animal1, animal2)=> animal2.edad-animal1.edad);

// let btnDarEnAdopcion = document.getElementById('darEnAdopcion');







//opción 2
/*console.dir(btnDarEnAdopcion);
btnDarEnAdopcion.onclick = () => {console.log ('Aquí la función')}*/


/*for (const animal of enAdopcion) {
    let divEnAdopcion = document.createElement('div');
    divEnAdopcion.innerHTML = `<h4>En adopción: ${animal.nombre} </h4> <h5> ${animal.especie}, ${animal.sexo}. ${animal.edad} mes(es) de edad. </h5> <h4><button id = "${animal.id}" class="botonAdopcion">Estoy Interesad@</button></h4><hr>`;
    document.body.append(divEnAdopcion);
}*/

/*let botones = document.getElementsByClassName("botonAdopcion");
for (const boton of botones) {
    boton.addEventListener("click", function () {
        console.log(this.id);
        let seleccion = enAdopcion.find(animal => animal.id == this.id);
        console.log("El animal que estás por adoptar es " + seleccion.nombre);
    })
}
*/




let categorias=[];
//LLAMO A LA FUNCION OBTENERCATEGORIAS PARA QUE SE EJECUTE CUANDO SE REFRESQUE LA PAGINA
obtenerCategorias();

//OBTENGO DESDE EL DOM EL BOTON AGREGAR
const botonCategoria=document.getElementById('addCategoria');
//ASOCIO AL BOTON AGREGAR UN MANEJADOR DE EVENTO CLICK
botonCategoria.addEventListener('click', agregarCategoria);

//FUNCION MANEJADORA DEL EVENTO
function agregarCategoria() {
        //OBTENGO EL VALOR DEL INPUT
        let texto= document.getElementById('textoCategoria').value;        
        //SI EL INPUT NO ESTA VACIO
        if(texto != ""){
                //AGREGO LA CATEGORIA AL ARRAY
                categorias.push(texto);
                //LA ALMACENO EN EL LOCAL STORAGE
                localStorage.setItem('ListaCategorias', categorias);
        }
        //VACIO EL INPUT
        document.getElementById('textoCategoria').value="";
        //LLAMO A LA FUNCION OBTENERCATEGORIA PARA ACTUALIZAR LA INTERFAZ DEL SELECT
        obtenerCategorias();       

}
//FUNCION PARA ACTUALIZAR LA INTERFAZ DEL SELECT CON LOS VALORES DEL ARRAY
function obtenerCategorias() {
        //PREGUNTO SI YA EXISTE LA CLAVE EN EL LOCAL STORAGE
        if('ListaCategorias' in localStorage){
                //TRANSFORMO DE TEXTO A ARRAY CON SPLIT
                categorias=localStorage.getItem('ListaCategorias').split(',');
                //CONCATENO EN UNA VARIABLE TODOS LOS VALORES DEL ARRAY CON JOIN
                let salida=`<option>${categorias.join('</option><option>')}</option>`;
                //MODIFICO EL SELECT AGREGANDO LOS VALORES GUARDADOS EN LA VARIABLE SALIDA
                document.getElementById('categorias').innerHTML=salida;
        }        
}

// let salidaSelect = `<option>Animal ingresado: ${agregarAnimal.nombreAnimal}, un ${agregarAnimal.especieAnimal}, ${agregarAnimal.sexoAnimal}, de ${agregarAnimal.edadAnimal} mes(es) de edad. </option>`

        // <Option> ${puestaEnAdopcion.join('</Option><Option>')} </Option>


        // let adulto

        // if (animal.edad >= 12) {
        //   adulto = true
        // } else {
        //   adulto = false
        // }
        
        // if (adulto) {
        //   alert("Este animal ya ha cumplido la mayoría de edad(?)")
        // } else {
        //   alert("Este animal sigue siendo cachorro")
        // }
        const {nombre, emailUsuario, nombreAnimal, especieAnimal, sexoAnimal, edadAnimal} = puestaEnAdopcion;
console.log(nombre)
        
        const adulto = (individuo.edad >= 18) ? true : false
        adulto ? alert ('Usted es elegible para adoptar') :  alert ('Usted no es elegible para adoptar')



    // Fetch


        fetch('')
        .then((respuesta)=>{
            return respuesta.json()
        }).then((datos)=>{
            for(const generico of datos){
                enAdopcion.push(new Animal(animal.id, animal.nombre, animal.sexo, animal.edad, animal.img));
            }
            console.log(datos);
        })

        .catch((mensaje)=>{
            console.log(mensaje);
        })


        //DECLARACIÓN DE CLASE PRODUCTO
//VARIABLES DE ACCESO GLOBAL
const productos = [];
const carrito=[];

const cantidadCarrito= document.getElementById('cantidad');
const productosCarrito= document.getElementById('productosCarrito');
const confirmar= document.getElementById('confirmar');

const totalCarritoInterfaz= document.getElementById('totalCarrito');


let saldoCliente= 1000;


class Producto {
    constructor(id, titulo, img, descripcion, precio, cantidad) {
            this.id = id;
            this.titulo = titulo.toUpperCase();
            this.img= img;
            this.descripcion= descripcion;
            this.precio = parseFloat(precio) || 150;            
            this.cantidad= cantidad || 1;
    }
    //1ra opcion
    addCantidad(){
        this.cantidad++;                
    }
    subTotal(){
        return this.precio * this.cantidad;                
    }
    //2da opcion: sirve para sumar y restar
    agregarCantidad (valor){
        this.cantidad += valor;
    }    
}


cargarDatos();

//Recuperar los valores almacenados en el localStorage
if('Carrito' in localStorage){
  //Obtengo los valores como obj genericos
  let guardados= JSON.parse(localStorage.getItem('Carrito'));
    //Los transformo a obj Producto
  for (const generico of guardados) {
    carrito.push(new Producto(generico.id, generico.titulo, generico.img, generico.descripcion, generico.precio, generico.cantidad));    
  }
  //Llamo a la funcion generadora de interfaz
  carritoHTML(carrito);
}

//Boton confirmar carrito
confirmar.onclick = () => {  
  enviarDatos()      //Llamo a la funcion que realiza el post y vacia el carrito  
}

function productosUI(productos, id) {
    let productosRender = document.getElementById(id);
    productosRender.innerHTML = "";
    for (const producto of productos) {
            let divProducto = document.createElement("div");
            //Agrego la clase columna
            divProducto.classList.add('col');
            //Agrego la estructura de la clase card para generarla en la interfaz
            divProducto.innerHTML = `<div class="card" style="width: 18rem;">
                                    <img src="${producto.img}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                    <h5 class="card-title">${producto.titulo}</h5>
                                    <p class="card-text">${producto.descripcion}</p>
                                    <p class="card-text">Precio: $${producto.precio}</p>
                                    <button id='${producto.id}' class = 'btnCompra btn btn-primary'>Comprar</button>
                                    </div>
                                    </div>`
            productosRender.append(divProducto);
    }
    seleccionarProducto();
}

function seleccionarProducto() {
    let botones = document.getElementsByClassName('btnCompra');
    for (const boton of botones) {
            boton.addEventListener('click', function () {
                    let seleccion = carrito.find(producto => producto.id == this.id);
                    if (seleccion) {
                            seleccion.addCantidad();
                    } else {
                            seleccion = productos.find(producto => producto.id == this.id);
                            carrito.push(seleccion);
                    }
                    localStorage.setItem('Carrito', JSON.stringify(carrito));
                    //Llamo a la funcion para generar la interfaz de carrito
                    carritoHTML(carrito);
                    //Uso de la librería toastify para mostrar un mensaje de accion
                    Toastify({
                            text: `Se ha agregado el producto: ${seleccion.titulo}`,
                            duration: 3000,
                            style: {
                                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                            },
                            gravity: "bottom"
                    }).showToast();
            })
    }

}
//Funcion para generar la interfaz del modal
function carritoHTML(lista) {
    //modifico el valor del badge que indica la cantidad de productos en el carrito
    cantidadCarrito.innerHTML = lista.length;
    //Vacio la interfaz de carrito
    productosCarrito.innerHTML = "";
    //Recorro la lista del carrito y genero la interfaz
    for (const producto of lista) {
            let prod = document.createElement('div');
            prod.innerHTML = `${producto.titulo} 
            <span class="badge bg-warning text-dark">Precio: $ ${producto.precio}</span>
            <span class="badge bg-primary">Cantidad: ${producto.cantidad}</span>
            <span class="badge bg-dark">Subtotal: $${producto.subTotal()}</span>
            <a id="${producto.id}" class="btn btn-secondary btn-add">+</a>
            <a id="${producto.id}" class="btn btn-secondary btn-sub">-</a>
            <a id="${producto.id}" class="btn btn-secondary btn-delete">x</a>    
            `;
            productosCarrito.append(prod);
    }
    //actualizo la suma de carrito
    sumarCarrito();
    //Agrego los eventos a los botones agregar, restar y eliminar
    document.querySelectorAll('.btn-delete').forEach(boton => boton.onclick = eliminarCarrito);
    document.querySelectorAll('.btn-add').forEach(boton => boton.onclick = addCarrito);
    document.querySelectorAll('.btn-sub').forEach(boton => boton.onclick = subCarrito);
}

function eliminarCarrito() {
    //Busco el indice del producto que quiero eliminar con findIndex
    let posicion = carrito.findIndex(producto => producto.id == this.id);
    //Lo elimino con splice
    carrito.splice(posicion, 1);
    //Actualizo la interfaz
    carritoHTML(carrito);
    //guardo en el storage
    localStorage.setItem('Carrito', JSON.stringify(carrito));
}

function addCarrito() {
    //Busco a que producto quiero agregar cantidad
    let producto = carrito.find(producto => producto.id == this.id);
    //Uso el metodo agregarCantidad para agregar
    producto.agregarCantidad(1);
    //Modifico el dom subiendo al padre del boton(con parentNode) y obtengo sus hijos(children) para modificarlos
    this.parentNode.children[1].innerHTML = "Cantidad: " + producto.cantidad;
    this.parentNode.children[2].innerHTML = "Subtotal: " + producto.subTotal();
    //Actualizo la interfaz del total
    sumarCarrito();
    localStorage.setItem('Carrito', JSON.stringify(carrito));
}

function subCarrito() {
    //Busco a que producto quiero quitar cantidad
    let producto = carrito.find(producto => producto.id == this.id);
    //Verifico que no reste si es 1
    if (producto.cantidad > 1) {
            //Uso el metodo agregarCantidad para restar con -1
            producto.agregarCantidad(-1);
            //Modifico el dom subiendo al padre del boton(con parentNode) y obtengo sus hijos(children) para modificarlos
            this.parentNode.children[1].innerHTML = "Cantidad: " + producto.cantidad;
            this.parentNode.children[2].innerHTML = "Subtotal: " + producto.subTotal();
            //Actualizo la interfaz del total
            sumarCarrito();
            localStorage.setItem('Carrito', JSON.stringify(carrito));
    }
}

//Funcion para realizar la suma total del carrito
function sumarCarrito() {
    //Realizo la suma total del carrito
    let total = carrito.reduce((totalCompra, producto) => totalCompra += producto.subTotal(), 0);
    totalCarritoInterfaz.innerHTML = "Total: $" + total;
    return total;
}

//Funcion para realizar un post
function enviarDatos(lista) {
    //Se realiza un fetch con url y el mensaje
    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            body: JSON.stringify({ carrito: lista, userID: 666 }),
            headers: { "Content-type": "application/json; charset=UTF-8" }
    }).then((respuesta) => { return respuesta.json() })//Se trcibe obj response y se transforma
            .then((datos) => {//Se recibe objetos literales y se muestra un mensaje
                    Swal.fire(
                            'Compra realizada',
                            `Compra nro ${datos.id} realizada correctamente`,
                            'success'
                    )
                    vaciarCarrito()//Si el envio salio vien vacio el carrito
            }).catch((datos)=>{
                    Swal.fire(
                            'Compra rechazada',
                            `Compra nro ${datos.id} fue rechazada`,
                            'success'
                    )
            })
}

//Funcion de GET con async await
async function cargarDatos() {
    //Se ocupa la palabra await para simular sincronia
    const pedido= await fetch('https://ghibliapi.herokuapp.com/films');
    const datosJson= await pedido.json();
    for (const generico of datosJson) {
            productos.push(new Producto(generico.id, generico.title, generico.image, generico.description, generico.precio, generico.cantidad))
          }
          productosUI(productos, 'productosContenedor');
}


//--------------Funcion vaciar localstorage y array carrito----------------------
function vaciarCarrito() {
    //borro el localStorage
    localStorage.clear();
    //borro el array carrito con splice
    carrito.splice(0, carrito.length);
    //Llamo a la funcion para generar una interfaz vacia
    carritoHTML(carrito);        
}








// ------------------------------------------
const productossolidarios = [];
const confirmar = document.getElementById('confirmar');

class ProductoSolidario {
        constructor(id, titulo, img, descripcion, precio, cantidad) {
                this.id = id;
                this.titulo = titulo.toUpperCase();
                this.img = img;
                this.descripcion = descripcion;
                this.precio = parseFloat(precio) || 150;
                this.cantidad = cantidad || 1;
        }
        addCantidad(){
                this.cantidad++;                
            }
            subTotal(){
                return this.precio * this.cantidad;                
            }
}


function productosVoluntad(productossolidarios, id) {
        let productosRender = document.getElementById(id);
        productosRender.innerHTML = "";
        for (const producto of productossolidarios) {
                let divProducto = document.createElement("div");
                //Agrego la clase columna
                divProducto.classList.add('col');
                //Agrego la estructura de la clase card para generarla en la interfaz
                divProducto.innerHTML = `<div class="card" style="width: 18rem;">
                                        <img src="${producto.img}" class="card-img-top" alt="...">
                                        <div class="card-body">
                                        <h5 class="card-title">${producto.titulo}</h5>
                                        <p class="card-text">${producto.descripcion}</p>
                                        <p class="card-text">Precio: $${producto.precio}</p>
                                        <button id='${producto.id}' class = 'btnCompra btn btn-primary'>Comprar</button>
                                        </div>
                                        </div>`
                productosRender.append(divProducto);
        }
}


fetch('http://ghibliapi.herokuapp.com/films')
        .then((res) => {
                console.log(res)
                return res.json()
        }).then((jsonRes) => {
                for (const generico of jsonRes) {
                        productossolidarios.push(new ProductoSolidario(generico.id, generico.title, generico.image, generico.description, generico.precio, generico.cantidad));
                }
                productosVoluntad(productossolidarios, 'productosContenedor');
        })
        .catch((error) => { console.log(error) });

function enviarDatos(lista) {
        fetch('https://jsonplaceholder.typicode.com/posts', {
                method: "POST",
                body: JSON.stringify({ carrito: lista, userID: 666 }),
                headers: { "Content-type": "application/json; charset=UTF-8" }
        }).then((respuesta) => { return respuesta.json() })
                .then((datos) => {
                        Swal.fire(
                                'Compra realizada',
                                `Compra nro ${datos.id} ha sido realizada correctamente`,
                                'success'
                        ).catch((datos) => {
                                Swal.fire(
                                        'Compra rechazada',
                                        `Compra nro ${datos.id} ha sido rechazada`,
                                        'success'
                                )
                        })

                })
}
confirmar.onclick = () => {
        enviarDatos();
}