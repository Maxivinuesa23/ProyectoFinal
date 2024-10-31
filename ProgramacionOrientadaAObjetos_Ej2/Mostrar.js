//Crea las funciones correspondientes en donde toma como parametros el arreglo de tareas y las muestra en consola.
function mostrarTareas(Tarea){
    
    for (let i = 0; i < Tarea.length; i++){
        console.log("--------------------");
            console.log(" ID: " + Tarea[i].id);
            console.log("📚 Titulo: " + Tarea[i].titulo);
            console.log("📝 Descripción: " + Tarea[i].descripcion);
            console.log("🔴 Estado: " + Tarea[i].estado);
            console.log("📅 Creación: " + Tarea[i].creacion);
            console.log("📅 Ultima modificación: " + Tarea[i].ultimaModificacion);
            console.log("📅 Vencimiento: " + Tarea[i].vencimiento);
            console.log("🧩 Dificultad: " + Tarea[i].dificultad);
            console.log("--------------------");
    }
}
//A partir de aca se crean variables con el valor de los estados de las tareas y se comparan con el valor de las tareas para mostrarlas en consola.

function mostrarEnCurso(Tarea){
    let enCurso = "⏳ En curso.";

    for (let i = 0; i< Tarea.length; i++){
        if (Tarea[i].estado === enCurso){
            console.log("--------------------");
            console.log(" ID: " + Tarea[i].id);
            console.log("📚 Titulo: " + Tarea[i].titulo);
            console.log("📝 Descripción: " + Tarea[i].descripcion);
            console.log("🔴 Estado: " + Tarea[i].estado);
            console.log("📅 Creación: " + Tarea[i].creacion);
            console.log("📅 Ultima modificación: " + Tarea[i].ultimaModificacion);
            console.log("📅 Vencimiento: " + Tarea[i].vencimiento);
            console.log("🧩 Dificultad: " + Tarea[i].dificultad);
            console.log("--------------------");
        }
    }
}



function mostrarPendientes(Tarea){
    let pendiente = "🔴 Pendiente.";

    for (let i=0; i<Tarea.length; i++){
        if ( Tarea[i].estado === pendiente){
            console.log("--------------------");
            console.log(" ID: " + Tarea[i].id);
            console.log("📚 Titulo: " + Tarea[i].titulo);
            console.log("📝 Descripción: " + Tarea[i].descripcion);
            console.log("🔴 Estado: " + Tarea[i].estado);
            console.log("📅 Creación: " + Tarea[i].creacion);
            console.log("📅 Ultima modificación: " + Tarea[i].ultimaModificacion);
            console.log("📅 Vencimiento: " + Tarea[i].vencimiento);
            console.log("🧩 Dificultad: " + Tarea[i].dificultad);
            console.log("--------------------");
    }
}
}

function mostrarTerminadas(Tarea){
    let terminado = "✅ Terminada.";

    for (let i=0; i<Tarea.length; i++){
        if (Tarea[i].estado === terminado){
            console.log("--------------------");
            console.log(" ID: " + Tarea[i].id);
            console.log("📚 Titulo: " + Tarea[i].titulo);
            console.log("📝 Descripción: " + Tarea[i].descripcion);
            console.log("🔴 Estado: " + Tarea[i].estado);
            console.log("📅 Creación: " + Tarea[i].creacion);
            console.log("📅 Ultima modificación: " + Tarea[i].ultimaModificacion);
            console.log("📅 Vencimiento: " + Tarea[i].vencimiento);
            console.log("🧩 Dificultad: " + Tarea[i].dificultad);
            console.log("--------------------");
    }
}
}

//Exporta las funciones para poder ser utilizadas en otros archivos.
export {mostrarTareas, mostrarEnCurso, mostrarPendientes, mostrarTerminadas};