//! Se importan los modulos necesarios para el funcionamiento del programa.

import * as Opciones from './Opciones.js';
import * as Buscar from './Buscar.js';
import * as Mostrar from './Mostrar.js';
import * as Todo from './Ejecutar.js';
import * as Controlador from './Controlador.js';
import * as ClassTarea from './Tarea.js';
import promptSync from 'prompt-sync';
const scc = promptSync();

let opc, opc1;

//! Se crea el array ListaTareas para almacenar las tareas que se vayan creando.
let ListaTareas = [];


let nuevo=0;
nuevo = parseInt(nuevo);

async function mainMenu(){
    do{
        opc = Opciones.menuPrincipal()
        switch(opc){
            
            case 1:
                //Ver mis tareas
                await menu1();
                break;

            case 2:
                //Buscar tarea
                console.clear();
                let titulobuscado = scc("Ingrese el titulo de la tarea a buscar: ");
                console.log(Buscar.buscarTarea(ListaTareas, titulobuscado));
                break;

            case 3:
                //Agregar tarea

                if (nuevo === 0){
                    nuevo = 1;
                    await todo(1);
                }else if (nuevo === 1){
                    let id = ListaTareas[ListaTareas.length-1].id + 1;
                    await todo(id);
                }
                break;

            case 4:
                console.log(Mostrar.mostrarTareas(ListaTareas))
                ListaTareas = await Todo.modificarTarea(ListaTareas, Opciones.menuElegirTarea(), Opciones.menuModificarTarea());
                break;

            case 0:
                //Salir
                break;

            default:
                console.log("Opción incorrecta.");
                break;
        }

    }while (opc != 0);
}

async function menu1(){
    do{

        opc1 = Opciones.menuTareas()
    switch(opc1){

        case 1:
            //Todas
            console.log(Mostrar.mostrarTareas(ListaTareas))
            break;

        case 2:
            //Pendientes
            console.log(Mostrar.mostrarTareasPendientes(ListaTareas))
            break;

        case 3:
            //En curso
            console.log(Mostrar.mostrarTareasEnCurso(ListaTareas))
            break;

        case 4:
            //Terminadas
            console.log(Mostrar.mostrarTareasTerminadas(ListaTareas))
            break;

        case 0:
            break;

        default:
            console.log("Opción incorrecta.");
            break;

    }

    }while (opc1 != 0);
}

//* Esta funcion se encarga de que el usuario pueda ingresar los datos de la tarea.
//* Sirve para no tener que repetir el codigo en la funcion de agregar tarea. Y que el apartado del menu se vea mas limpio.

//* Lo que hace es tomar a la función con async y await para que se ejecute de manera sincrona y no se ejecute la siguiente linea hasta que no se haya completado la tarea.
//* Si las mismas no estuvieran la muestra por consola no se veria de manera correcta.

async function todo(id){
    const titulo = await Controlador.ingresarTitulo();
    const descripcion = await Controlador.ingresarDescripcion();
    const estado = 'Pendiente';
    const dia = await Controlador.ingresarDia();
    const mes = await Controlador.ingresarMes();
    const anio = await Controlador.ingresarAnio();
    const vencimiento = Controlador.obtenerVencimiento(dia, mes, anio);
    const ultimaModificacion = Controlador.ultimaModificacion();
    const dificultad = Controlador.traducirDificultad(await Controlador.ingresarDificultad());
    
    //* Crea el objeto tarea con los datos ingresados por el usuario.
    const tarea = new ClassTarea.Tarea(id, titulo, descripcion,estado, ultimaModificacion, vencimiento, dificultad);

    //* Utiliza la funcion appendInArray para agregar tareas a la lista de tareas. Y asi poder mantener la pureza de la funcion.
    const appendInArray = (ListaTareas, tareas) => {return [...ListaTareas, tarea]};

    //* Se le asigna a la Lista de Tareas la nueva lista con la tarea.
    ListaTareas = appendInArray(ListaTareas, tarea);
}


export {mainMenu};