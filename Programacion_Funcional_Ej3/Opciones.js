import promptSync from 'prompt-sync';
const scc = promptSync();

function menuPrincipal(){
    console.log("--------------------");
    console.log("Menu de tareas");
    console.log("[1] Ver mis tareas.");
    console.log("[2] Buscar tarea.");
    console.log("[3] Agregar tarea.");
    console.log("[4] Modificar tarea.");
    console.log("[0] Salir.");
    console.log("--------------------");
    let opc = scc(''); //Crea una variable opc y usa la función scc para ingresar un valor por consola.
    opc = parseInt(opc); //Convierte el valor ingresado a un valor entero.

    return opc; //Retorna el valor de la variable opc para luego poder ser utilizada en el archivo index.js.
}

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

function menuModificarTarea(){
    console.log("Que desea modificar?");
    console.log("[1] Titulo.");
    console.log("[2] Descripción.");
    console.log("[3] Estado.");
    console.log("[4] Vencimiento.");
    console.log("[5] Dificultad.");
    console.log("[0] Salir.");
    let opcion = scc('');
    opcion = parseInt(opcion);
    return opcion;
}

function menuElegirTarea(){
    console.log("Que número de tarea desea modificar");
    let i = scc("Ingrese el número de tarea a modificar: ");
    i = parseInt(i);
    return i;
}

export {menuPrincipal, menuTareas, menuModificarTarea, menuElegirTarea}; 