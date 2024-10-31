import promptSync from 'prompt-sync';
import * as Controlador from './Controlador.js';
import * as Convertir from './Convertir.js';
import * as Menu from './Menu.js';
const scc = promptSync();

//* Muestra una especie de menu basico para que el usuario pueda decidir si quiere modificar alguna tarea.

function vistaDetallada(){
    console.log("Ingrese el ID de la tarea que desea ver detalladamente.");
    console.log("Si desea salir presione [0].");
    let i = scc('');
    i = parseInt(i);
    return i;
}


//* Toma como parametros el arreglo de tareas, el indice y la opción que el usuario eligió para modificar la tarea (titulo, descripción, estado, vencimiento, dificultad).
function ModificarTarea(Tarea,opc,i){
    i=i-1;
    let ultimaModificacion;
    switch(opc){
        case 1:
            let titulo = Controlador.obtenerTitulo();
            Tarea[i].setTitulo(titulo);
            ultimaModificacion = Controlador.obtenerUltimaModificacion();
            Tarea[i].setUltimaModificacion(ultimaModificacion);
            break;
        case 2:
            let descripcion = Controlador.obtenerDescripcion();
            Tarea[i].setDescripcion(descripcion);
            ultimaModificacion = Controlador.obtenerUltimaModificacion();
            Tarea[i].setUltimaModificacion(ultimaModificacion);
            break;
        case 3:
            let estado = Controlador.obtenerEstado();
            estado = Convertir.convertirEstado(estado);
            Tarea[i].setEstado(estado);
            ultimaModificacion = Controlador.obtenerUltimaModificacion();
            Tarea[i].setUltimaModificacion(ultimaModificacion);
            break;
        case 4:
            let vencimiento = Controlador.obtenerVencimiento();
            Tarea[i].setVencimiento(vencimiento);
            ultimaModificacion = Controlador.obtenerUltimaModificacion();
            Tarea[i].setUltimaModificacion(ultimaModificacion);
            break;
        case 5:
            let dificultad = Controlador.obtenerDificultad();
            dificultad = Convertir.convertirDificultad(dificultad);
            Tarea[i].setDificultad(dificultad);
            ultimaModificacion = Controlador.obtenerUltimaModificacion();
            Tarea[i].setUltimaModificacion(ultimaModificacion);
            break;
        case 0:
            break;
        default:
            console.log("Ingrese una opción valida.");
            break;
    }
}

//* Realiza un junte de las anteriores funciones mas el menu de opciones para modificar una tarea.

function editar(ListaDeTareas){
    let indice = vistaDetallada();
        if (indice === 0){
            return 0;
    }
        else{
            let opcion = Menu.menuModificarTarea();
            ModificarTarea(ListaDeTareas,opcion,indice);
            console.log("Tarea modificada con exito.");
    }
}


export {vistaDetallada, ModificarTarea, editar};