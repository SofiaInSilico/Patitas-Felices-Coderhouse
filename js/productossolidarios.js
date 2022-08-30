const productossolidarios = [];
const confirmar = document.getElementById('confirmar');

class ProductoSolidario {
        constructor(id, nombre, imagen, precio, cantidad) {
                this.id = id;
                this.titulo = nombre.toUpperCase();
                this.img = imagen;
                this.precio = precio || 150;
                this.cantidad = cantidad || 1;
        }
        // addCantidad(){
        //         this.cantidad++;                
        //     }
        //     subTotal(){
        //         return this.precio * this.cantidad;                
        //     }
        //     agregarCantidad (valor){
        //         this.cantidad += valor;
        //     }    
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
                                        <p class="card-text">Precio: ${producto.precio}</p>
                                        <button id='${producto.id}' class ='btnCompra btn btn-primary'>Comprar</button>
                                        </div>
                                        </div>`
                productosRender.append(divProducto);
        }
}
const botones = document.getElementsByClassName("btnCompra");
for (const boton of botones) {
        boton.onclick= () => {
enviarDatos();
}}

fetch('../js/mock_data.json')
        .then((res) => {
                console.log(res)
                return res.json()
        }).then((jsonRes) => {
                for (const generico of jsonRes) {
                        productossolidarios.push(new ProductoSolidario(generico.id, generico.nombre, generico.imagen, generico.precio, generico.cantidad));
                }
                productosVoluntad(productossolidarios, 'productosContenedor');
        })
        .catch((error) => { console.log(error) });

// function enviarDatos(producto) {
//         fetch('https://jsonplaceholder.typicode.com/posts', {
//                 method: "POST",
//                 body: JSON.stringify({ productossolidarios: producto, userID: 666 }),
//                 headers: { "Content-type": "application/json; charset=UTF-8" }
//         }).then((respuesta) => { return respuesta.json() })
//                 .then((datos) => {
//                         Swal.fire(
//                                 'Compra realizada',
//                                 `Compra n° ${datos.id} ha sido realizada correctamente`,
//                                 'success'
//                         ).catch((datos) => {
//                                 Swal.fire(
//                                         'Compra rechazada',
//                                         `Compra n° ${datos.id} ha sido rechazada`,
//                                         'info'
//                                 )
//                         })
//                 })
// }

