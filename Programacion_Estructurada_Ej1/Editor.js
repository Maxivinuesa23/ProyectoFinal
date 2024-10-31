const promptSync = require('prompt-sync');
const Controlador = require('./Tarea.js');
const Convertir = require('./Convertir.js');
const Menu = require('./Menu.js');
const scc = promptSync();

function vistaDetallada(){
    console.log("Ingrese el ID de la tarea que desea ver detalladamente.");
    console.log("Si desea salir presione [0].");
    let i = scc('');
    i = parseInt(i);
    return i;
}

function ModificarTarea(Tarea,opc,i){
    i=i-1;
    switch(opc){
        case 1:
            let titulo = Controlador.setTitulo();
            Tarea[i].titulo = titulo;
            break;
        case 2:
            let descripcion = Controlador.setDescripcion();
            Tarea[i].descripcion = descripcion;
            break;
        case 3:
            let estado = Controlador.setEstado();
            estado = Convertir.convertirEstado(estado);
            Tarea[i].estado = estado;
            break;
        case 4:
            let vencimiento = Controlador.setVencimiento();
            Tarea[i].vencimiento = vencimiento;
            break;
        case 5:
            let dificultad = Controlador.setDificultad();
            dificultad = Convertir.convertirDificultad(dificultad);
            Tarea[i].dificultad = dificultad;
            break;
        case 0:
            break;
        default:
            console.log("Ingrese una opción valida.");
            break;
    }
}

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


module.exports = {vistaDetallada, ModificarTarea, editar};