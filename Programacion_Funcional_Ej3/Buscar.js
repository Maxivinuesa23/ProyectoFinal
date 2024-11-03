export function buscarTarea(ListaTareas, titulobuscado){  //* Se crea la funcion buscar tarea que recibe como parametros la Lista de Tareas y el titulo para mantener la pureza de la funcion.
    const Tareas = ListaTareas.filter(x => (x.titulo.toLowerCase().includes(titulobuscado.toLowerCase())));
    return Tareas;      
                        //* Lo que hace es crear una constante con una nueva Lista de tareas filtrada por el titulo de la tarea.
}                       //* En donde convierte los titulos a minusculas y busca con el includes que el titulo o alguna palabra coincida con el titulo buscado.
                        //* Por lo que si buscamos LAVAR y tenemos 3 tareas que contienen LAVAR, nos devolvera las 3 tareas.
