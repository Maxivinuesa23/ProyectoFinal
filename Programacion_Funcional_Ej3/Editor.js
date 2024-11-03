import * as Controlador from './Controlador.js';


//*Se crea la funcion async (Necesaria para el correcto funcionamiento de la misma) En donde toma como parametros la lista de tareas y el indice de la tarea a modificar.
async function modificarTitulo(ListaTareas, i) {
    const titulo = await Controlador.ingresarTitulo();
    const ultimaModificacion = Controlador.ultimaModificacion();

    //*Se crea una nueva lista de tareas en donde se crea una nueva copia buscando con el indice de la tarea a modificar.
    let nuevaListaTareas = ListaTareas.map((tarea, indice) => { 
        if (indice === i) {                                     //*Si el indice coincide
            return { ...tarea, titulo, ultimaModificacion };    //* Retorna una nueva tarea con el titulo modificado y la ultima modificacion.
        } else {
            return tarea;  //* En el caso de que no coincida (Es decir no se encuentre la tarea a modificar) retorna la tarea sin modificar.
        }
    });

    return nuevaListaTareas;
}

async function modificarDescripcion(ListaTareas, i) {
    const descripcion = await Controlador.ingresarDescripcion();
    const ultimaModificacion = Controlador.ultimaModificacion();

    let nuevaListaTareas = ListaTareas.map((tarea, indice) => {
        if (indice === i) {
            return { ...tarea, descripcion, ultimaModificacion };
        } else {
            return tarea;
        }
    });

    return nuevaListaTareas;
}

async function modificarEstado(ListaTareas, i){
    const estado = Controlador.traducirEstado(await Controlador.modificarEstado());
    const ultimaModificacion = Controlador.ultimaModificacion();

    let nuevaListaTareas = ListaTareas.map((tarea, indice) => {
        if (indice === i) {
            return { ...tarea, estado, ultimaModificacion };
        } else {
            return tarea;
        }
    });

    return nuevaListaTareas;
}

async function modificarVencimiento(ListaTareas, i){
    const vencimiento = await Controlador.ingresarVencimiento();
    const ultimaModificacion = Controlador.ultimaModificacion();

    let nuevaListaTareas = ListaTareas.map((tarea, indice) => {
        if (indice === i) {
            return { ...tarea, vencimiento, ultimaModificacion };
        } else {
            return tarea;
        }
    });

    return nuevaListaTareas;
}

async function modificarDificultad(ListaTareas, i){
    const dificultad = Controlador.traducirDificultad(await Controlador.ingresarDificultad());
    const ultimaModificacion = Controlador.ultimaModificacion();

    let nuevaListaTareas = ListaTareas.map((tarea, indice) => {
        if (indice === i) {
            return { ...tarea, dificultad, ultimaModificacion };
        } else {
            return tarea;
        }
    });

    return nuevaListaTareas;
}



export {modificarTitulo, modificarDescripcion, modificarEstado, modificarVencimiento, modificarDificultad};