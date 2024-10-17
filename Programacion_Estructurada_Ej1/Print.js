
//Crea las funciones correspondientes en donde toma como parametros el arreglo de tareas y las muestra en consola.
function mostrarTareas(Tareas){
    
    for (let i = 0; i < Tareas.length; i++){
        console.log("--------------------");
        console.log("Titulo: " + Tareas[i].titulo);
        console.log("Descripción: " + Tareas[i].descripcion);
        console.log("Estado: " + Tareas[i].estado);
        console.log("Creación: " + Tareas[i].creacion);
        console.log("Ultima modificación: " + Tareas[i].ultimaModificacion);
        console.log("Vencimiento: " + Tareas[i].vencimiento);
        console.log("Dificultad: " + Tareas[i].dificultad);
        console.log("--------------------");
    }
}
//A partir de aca se crean variables con el valor de los estados de las tareas y se comparan con el valor de las tareas para mostrarlas en consola.

function mostrarEnCurso(Tareas){
    let enCurso = "⏳ En curso.";

    for (let i = 0; i< Tareas.length; i++){
        if (Tareas[i].estado === enCurso){
            console.log("--------------------");
            console.log("Titulo: " + Tareas[i].titulo);
            console.log("Descripción: " + Tareas[i].descripcion);
            console.log("Estado: " + Tareas[i].estado);
            console.log("Creación: " + Tareas[i].creacion);
            console.log("Ultima modificación: " + Tareas[i].ultimaModificacion);
            console.log("Vencimiento: " + Tareas[i].vencimiento);
            console.log("Dificultad: " + Tareas[i].dificultad);
            console.log("--------------------");
        }
    }
}

function mostrarPendientes(Tareas){
    let pendiente = "🔴 Pendiente.";

    for (let i=0; i<Tareas.length; i++){
        if ( Tareas[i].estado === pendiente){
            console.log("--------------------");
            console.log("Titulo: " + Tareas[i].titulo);
            console.log("Descripción: " + Tareas[i].descripcion);
            console.log("Estado: " + Tareas[i].estado);
            console.log("Creación: " + Tareas[i].creacion);
            console.log("Ultima modificación: " + Tareas[i].ultimaModificacion);
            console.log("Vencimiento: " + Tareas[i].vencimiento);
            console.log("Dificultad: " + Tareas[i].dificultad);
            console.log("--------------------");
        }
    }
}

function mostrarTerminadas(Tareas){
    let terminado = "✅ Terminada.";

    for (let i=0; i<Tareas.length; i++){
        if (Tareas[i].estado === terminado){
            console.log("--------------------");
            console.log("Titulo: " + Tareas[i].titulo);
            console.log("Descripción: " + Tareas[i].descripcion);
            console.log("Estado: " + Tareas[i].estado);
            console.log("Creación: " + Tareas[i].creacion);
            console.log("Ultima modificación: " + Tareas[i].ultimaModificacion);
            console.log("Vencimiento: " + Tareas[i].vencimiento);
            console.log("Dificultad: " + Tareas[i].dificultad);
            console.log("--------------------");
        }
    }
}

//Exporta las funciones para poder ser utilizadas en otros archivos.
module.exports = {mostrarTareas, mostrarEnCurso, mostrarPendientes, mostrarTerminadas};