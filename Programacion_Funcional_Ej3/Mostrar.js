function mostrarTareas(ListaTareas){
    return ListaTareas;                 //* Esta funcion se encarga de llamar a la Lista de tareas y devolverla.
}

function mostrarTareasPendientes(ListaTareas){
    const Tareas = ListaTareas.filter(x => (x.estado === 'Pendiente')); //* Se crea una connstante la cual guarda una nueva lista filtrada por el estado de la tarea.
    return Tareas;                                                      //* En este caso se filtra por las tareas que esten pendientes.
}

function mostrarTareasEnCurso(ListaTareas){
    const Tareas = ListaTareas.filter(x => (x.estado === 'En curso')); //* Aca se filtran por las tareas que esten en curso.
    return Tareas;
}

function mostrarTareasTerminadas(ListaTareas){
    const Tareas = ListaTareas.filter(x => (x.estado === 'Terminada')); //* Aca se filtran por las tareas que esten terminadas.
    return Tareas;
}


export {mostrarTareas, mostrarTareasPendientes, mostrarTareasEnCurso, mostrarTareasTerminadas};