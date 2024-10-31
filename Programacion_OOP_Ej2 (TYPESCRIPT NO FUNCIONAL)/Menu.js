"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuPrincipal = menuPrincipal;
exports.menuTareas = menuTareas;
//Importa el módulo prompt-sync para poder utilizar la función scc.
var scc = require("prompt-sync");
//Crea la función menuPrincipal la cual muestra las opciones del menú principal.
function menuPrincipal() {
    console.log("--------------------");
    console.log("Menu de tareas");
    console.log("[1] Ver mis tareas.");
    console.log("[2] Buscar tarea.");
    console.log("[3] Agregar tarea.");
    console.log("[0] Salir.");
    console.log("--------------------");
    var opc = parseInt(scc(''));
    return opc; //Retorna el valor de la variable opc para luego poder ser utilizada en el archivo index.js.
}
//Crea la función menuTareas la cual muestra las opciones del menú de tareas.
function menuTareas() {
    console.log("--------------------");
    console.log("[1] Todas.");
    console.log("[2] Pendientes.");
    console.log("[3] En curso.");
    console.log("[4] Terminadas.");
    console.log("[0] Volver.");
    console.log("--------------------");
    var opc2 = parseInt(scc(''));
    return opc2; //Retorna el valor de la variable opc2 para luego poder ser utilizada en el archivo index.js.
}
