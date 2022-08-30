// const organizacion = {
//     nombre: '4patitas',
//     tipo: 'ONG',
//     tareas : {
//         t1: 'rescate',
//         t2: 'atención veterinaria',
//         t3: 'alojamiento provisorio',
//         t4: 'puesta en adopción'
//     },
//     animales: 'Rocky, Pepper, Chuli'
// }

// let divOrg = document.getElementsByClassName('org');

// function detalleOrg (organizacion){
//     const {nombre, tipo, tareas: {t1, t2, t3, t4}, animales} = organizacion;
//     let divOrg = document.createElement ('div');
//     divOrg.innerHTML = `Organización de rescate: ${nombre} 
//                         Tipo de Organización: ${tipo}
//                         Funciones de la Organización: ${t1, t2, t3, t4}
//                         En nuestra plataforma, la organización cumple con: ${t2}
//                         Animales en adopción en la plataforma: ${animales}`
//     document.body.append(divOrg);
// }