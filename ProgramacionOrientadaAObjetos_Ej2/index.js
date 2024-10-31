//Importa todos los modulos necesarios para el correcto funcionamiento del programa.
import promptSync from 'prompt-sync';
const scc = promptSync();
import * as Controlador from './Controlador.js';
import * as TareaModule from './Tarea.js';
import * as Menu from './Menu.js';
import * as Mostrar from './Mostrar.js';
import * as Pausa from './Pausa.js';
import * as Convertir from './Convertir.js';
import * as Buscar from './Buscar.js';
import * as Editor from './Editor.js';

//Crea una variable para guardar la opción que el usuario ingresara dentro del menú principal.
let opc, opc2, id=0;

//Crea una variable llamada controlador que nos permitira tener un control para que primero deba ingresar una tarea antes de poder verla.
let controlador = 0;

const ListaDeTareas = [];
//Creación del menu principal.

do{
    console.clear();
    opc = Menu.menuPrincipal();

    switch(opc){

        case 1:
        if (controlador === 1){ //Verifica que la variable controlador sea igual a 1 para poder mostrar las tareas.
            do{
                opc2 = Menu.menuTareas();

                switch (opc2){
                        
                        case 1:
                            console.clear();
                            Mostrar.mostrarTareas(ListaDeTareas);
                            Editor.editar(ListaDeTareas);
                            Pausa.pausa();
                            break;

                        case 2:
                            console.log("Tareas pendientes. ");
                            Mostrar.mostrarPendientes(ListaDeTareas);
                            Pausa.pausa();
                            break;

                        case 3:
                            console.log("Tareas en curso. ");
                            Mostrar.mostrarEnCurso(ListaDeTareas);
                            Pausa.pausa();
                            break;

                        case 4:
                            console.log("Tareas terminadas. ");
                            Mostrar.mostrarTerminadas(ListaDeTareas); 
                            Pausa.pausa(); 
                            break;

                        case 0:
                            break;

                        default:
                            console.log("❌ Opcion no valida.");
                            Pausa.pausa();
                            break;
                }

            }while (opc2 != 0);

        }
        else{
            console.log("❌ No hay tareas para mostrar.");
            Pausa.pausa();
        }

        break;


        case 2:
            if (controlador === 1){ //Verifica que la variable controlador sea igual a 1 para poder mostrar las tareas.
                Buscar.buscarTarea(ListaDeTareas);
            }
            break;
        
        case 3:
            controlador = 1; //Coloca la variable en 1 para poder acceder a las otras funciones.

            console.clear();
            id++;
            let titulo = Controlador.obtenerTitulo();
            let descripcion = Controlador.obtenerDescripcion();
            let creacion = Controlador.obtenerCreacion();
            let vencimiento = Controlador.obtenerVencimiento();
            let dificultad = Controlador.obtenerDificultad();
            let ultimaModificacion = Controlador.obtenerUltimaModificacion();
            let estado = Convertir.convertirEstado('P');
            dificultad = Convertir.convertirDificultad(dificultad);

            

            const Tarea = new TareaModule.Tarea(id, titulo, descripcion, estado, creacion, ultimaModificacion, vencimiento, dificultad);
            ListaDeTareas.push(Tarea);
            
            console.log("Tarea agregada con exito. 🎉"); 
            Pausa.pausa();

            break;

        case 0:
            break;

        default:
            console.log("❌ Opcion no valida.");
            break;
    }

}while (opc != 0);