//Importa todos los modulos necesarios para el correcto funcionamiento del programa.
const Tarea = require ('./Tarea.js');
const Menu = require ('./Menu.js');
const Print = require ('./Print.js');
const Pausa =  require ('./Pausa.js');
const Convertir = require ('./Convertir.js');
const Search = require ('./Search.js');
const Editor = require ('./Editor.js');

//Crea el arreglo Tareas en donde se iran insertando las distintas tareas creadas para su futura muestra.
const Tareas = [];

//Crea una variable para guardar la opción que el usuario ingresara dentro del menú principal.
let opc;

//Crea una variable llamada controlador que nos permitira tener un control para que primero deba ingresar una tarea antes de poder verla.
let controlador = 0;



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
                            Print.mostrarTareas(Tareas);
                            Editor.editar(Tareas);
                            break;

                        case 2:
                            console.log("Tareas pendientes. ");
                            Print.mostrarPendientes(Tareas);
                            Editor.editar(Tareas);
                            break;

                        case 3:
                            console.log("Tareas en curso. ");
                            Print.mostrarEnCurso(Tareas);
                            Editor.editar(Tareas);
                            break;

                        case 4:
                            console.log("Tareas terminadas. ");
                            Print.mostrarTerminadas(Tareas);
                            Editor.editar(Tareas);  
                            break;

                        default:
                            console.log("❌ Opcion no valida.");
                            break;
                }

            }while (opc2 != 0);

        }
        else{
            console.log("❌ No hay tareas para mostrar.");
        }

        break;


        case 2:
            if (controlador === 1){ //Verifica que la variable controlador sea igual a 1 para poder mostrar las tareas.
                Search.buscarTarea(Tareas);
            }
            break;
        
        case 3:
            controlador = 1; //Coloca la variable en 1 para poder acceder a las otras funciones.

            console.clear();
            //Crea las distintas variables necesarias y llama a las funciones correspondientes para poder ingresar los datos de la tarea.
            let titulo = Tarea.setTitulo();
            let descripcion = Tarea.setDescripcion();
            let estado = Convertir.convertirEstado('P'); //Convierte el estado ingresado a un formato mas legible.
            let creacion = Tarea.setCreacion();
            let vencimiento = Tarea.setVencimiento(creacion);
            let dificultad = Tarea.setDificultad(); 
            dificultad = Convertir.convertirDificultad(dificultad); //Convierte la dificultad ingresada a un formato mas legible.

            Tareas.push(Tarea.sTarea(titulo, descripcion, estado, creacion, vencimiento, dificultad)); //Ingresa los datos de la tarea al arreglo Tareas.
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