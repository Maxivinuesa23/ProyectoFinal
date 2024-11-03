import * as Editor from './Editor.js';



async function modificarTarea(ListaTareas, i, opc){
    i = i-1; //* Se toma el indice obtenido y se resta 1 para obtener el indice real del array.

    switch(opc){
        case 1:
            ListaTareas = await Editor.modificarTitulo(ListaTareas, i);
            return ListaTareas;
            break;
                                                                                //* Se llaman a las distintas funciones encargadas de su respectiva modificacion.
        case 2:
            ListaTareas = await Editor.modificarDescripcion(ListaTareas, i);
            return ListaTareas;
            break;

        case 3:
            ListaTareas = await Editor.modificarEstado(ListaTareas, i);
            return ListaTareas;
            break;

        case 4:
            ListaTareas = await Editor.modificarVencimiento(ListaTareas, i);
            return ListaTareas;
            break;

        case 5:
            ListaTareas = await Editor.modificarDificultad(ListaTareas, i);
            return ListaTareas;
            break;
    }
}

export {modificarTarea};