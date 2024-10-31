//Importa el módulo prompt-sync para poder utilizar la función scc.
import * as promptSync from 'prompt-sync';
const scc = promptSync();

//Crea la función menuPrincipal la cual muestra las opciones del menú principal.
function menuPrincipal(): number{
    console.log("--------------------");
    console.log("Menu de tareas");
    console.log("[1] Ver mis tareas.");
    console.log("[2] Buscar tarea.");
    console.log("[3] Agregar tarea.");
    console.log("[0] Salir.");
    console.log("--------------------");
    let opc = parseInt(scc('')) 

    return opc; //Retorna el valor de la variable opc para luego poder ser utilizada en el archivo index.js.
}



//Crea la función menuTareas la cual muestra las opciones del menú de tareas.
function menuTareas(): number{
    console.log("--------------------");
    console.log("[1] Todas.");
    console.log("[2] Pendientes.");
    console.log("[3] En curso.");
    console.log("[4] Terminadas.");
    console.log("[0] Volver.");
    console.log("--------------------");
    let opc2 = parseInt(scc('')) 

    return opc2;  //Retorna el valor de la variable opc2 para luego poder ser utilizada en el archivo index.js.
}

//*Exporta la función menuPrincipal para poder ser utilizada en otros archivos.
export {menuPrincipal, menuTareas}