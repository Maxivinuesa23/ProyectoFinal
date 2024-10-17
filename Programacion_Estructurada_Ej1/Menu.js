//Importa el módulo prompt-sync para poder utilizar la función scc.
const scc = require ('prompt-sync')();

//Crea la función menuPrincipal la cual muestra las opciones del menú principal.
function menuPrincipal(){
    console.log("--------------------");
    console.log("Menu de tareas");
    console.log("[1] Ver mis tareas.");
    console.log("[2] Buscar tarea.");
    console.log("[3] Agregar tarea.");
    console.log("[0] Salir.");
    console.log("--------------------");
    let opc = scc(''); //Crea una variable opc y usa la función scc para ingresar un valor por consola.
    opc = parseInt(opc); //Convierte el valor ingresado a un valor entero.

    return opc; //Retorna el valor de la variable opc para luego poder ser utilizada en el archivo index.js.
}

//Crea la función menuTareas la cual muestra las opciones del menú de tareas.
function menuTareas(){
    console.log("--------------------");
    console.log("[1] Todas.");
    console.log("[2] Pendientes.");
    console.log("[3] En curso.");
    console.log("[4] Terminadas.");
    console.log("[0] Volver.");
    console.log("--------------------");
    let opc2 = scc(''); //Crea una variable opc2 y usa la función scc para ingresar un valor por consola.
    opc2 = parseInt(opc2); //Convierte el valor ingresado a un valor entero.

    return opc2;  //Retorna el valor de la variable opc2 para luego poder ser utilizada en el archivo index.js.
}

//Exporta la función menuPrincipal para poder ser utilizada en otros archivos.
module.exports = {menuPrincipal, menuTareas};