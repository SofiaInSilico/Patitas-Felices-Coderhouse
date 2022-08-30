class Animal {
    constructor(id, nombre, especie, sexo, edad) {
        this.id = parseInt(id);
        this.nombre = nombre;
        this.especie = especie;
        this.sexo = sexo;
        this.edad = parseInt(edad);
    }
}

const enAdopcion = [];

enAdopcion.push(new Animal(1, "Michi", "Gato", "hembra", 1));
enAdopcion.push(new Animal(2, "César", "Perro", "macho", 2));
enAdopcion.push(new Animal(3, "Mari", "Perro", "hembra", 2));
enAdopcion.push(new Animal(4, "Usagi", "Conejo", "macho", 4));
enAdopcion.push(new Animal(5, "Rocky", "Perro", "macho", 5));
enAdopcion.push(new Animal(6, "Lili", "Hámster" || "Hamster", "hembra", 5));
enAdopcion.push(new Animal(7, "Ciro", "Perro", "macho", 5));
enAdopcion.push(new Animal(8, "Tami", "Perro", "hembra", 7));
enAdopcion.push(new Animal(9, "Milú", "Gato", "hembra", 9));
enAdopcion.push(new Animal(10, "Pelusa", "Gato", "hembra", 15));
enAdopcion.push(new Animal(11, "Vodka", "Hámster" || "Hamster", "hembra", 20));
enAdopcion.push(new Animal(12, "Pepe", "Perro", "macho", 28));
enAdopcion.push(new Animal(13, "Chuli", "Gato", "macho", 33));
enAdopcion.push(new Animal(14, "Kala", "Perro", "hembra", 40));
enAdopcion.push(new Animal(15, "Chabón", "Gato", "macho", 64));


//En INICIO
let select1 = document.getElementById('select1');
for (const animal of enAdopcion){
    select1.innerHTML += "<option>" + "Te presentamos a " + animal.nombre + "; un " + animal.especie + ", "  + animal.sexo + ", que tiene " + animal.edad + " mes(es) de edad.</option>";
}









