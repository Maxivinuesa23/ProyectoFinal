"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerTitulo = obtenerTitulo;
exports.obtenerDescripcion = obtenerDescripcion;
exports.obtenerEstado = obtenerEstado;
exports.obtenerCreacion = obtenerCreacion;
exports.obtenerUltimaModificacion = obtenerUltimaModificacion;
exports.controlarVencimiento = controlarVencimiento;
exports.obtenerDificultad = obtenerDificultad;
var prompt_sync_1 = __importDefault(require("prompt-sync"));
var scc = (0, prompt_sync_1.default)();
function obtenerTitulo() {
    var titulo = scc('');
    while (titulo === '') {
        console.log("Por favor. Ingrese un titulo valido."); //! Mientras que el titulo sea vacio se pide que se vuelva a ingresar
        titulo = scc('');
    }
    return titulo;
}
function obtenerDescripcion() {
    var descripcion = scc('');
    while (descripcion === '') {
        console.log("Por favor. Ingrese una descripción valida.");
        descripcion = scc('');
    }
    return descripcion;
}
function convertirMayuscula(texto) {
    return texto.toUpperCase();
}
function obtenerEstado() {
    console.clear();
    console.log("Ingrese el estado de la tarea.");
    console.log("--------------------");
    console.log("[P] Pendiente.");
    console.log("[C] En curso.");
    console.log("[T] Terminada.");
    var estado = scc('');
    // Crea un ciclo while para evitar que los datos ingresados por consola sean vacios o distintos a los permitidos.
    while (estado === '' || (estado !== 'P' && estado !== 'C' && estado !== 'T' && estado !== 'p' && estado !== 'c' && estado !== 't')) {
        console.clear();
        console.log("[📌] Por favor. Ingrese un estado valido.");
        console.log("Ingrese el estado de la tarea.");
        console.log("--------------------");
        console.log("[P] Pendiente.");
        console.log("[C] En curso.");
        console.log("[T] Terminada.");
        estado = scc('');
    }
    return convertirMayuscula(estado);
    ; //Retorna el valor del estado para luego poder ingresarlo a la función sTarea.
}
function obtenerCreacion() {
    var creacion = new Date;
    return creacion;
}
function obtenerUltimaModificacion() {
    var ultimaModificacion = new Date;
    return ultimaModificacion;
}
function obtenerVencimiento() {
    var dia = parseInt(scc(''));
    var mes = parseInt(scc(''));
    var anio = parseInt(scc(''));
    var vencimiento = new Date(anio, mes - 1, dia);
    return vencimiento;
}
function controlarVencimiento(vencimiento, creacion) {
    while (vencimiento < creacion) {
        console.log("Por favor. Ingrese un vencimiento valido.");
        console.log("La misma no puede ser anterior a la fecha de creación");
        obtenerVencimiento();
    }
    return vencimiento;
}
function obtenerDificultad() {
    console.clear();
    console.log("Ingrese la dificultad de la tarea.");
    console.log("--------------------");
    console.log("[F] Facil.");
    console.log("[M] Media.");
    console.log("[D] Dificil.");
    console.log("--------------------");
    var dificultad = scc('');
    //Crea un ciclo while para evitar que los datos ingresados por consola sean vacios o distintos a los permitidos.
    while (dificultad === '' || (dificultad !== 'F' && dificultad !== 'M' && dificultad !== 'D' && dificultad !== 'f' && dificultad !== 'm' && dificultad !== 'd')) {
        console.log("Ingrese una dificultad valida.");
        console.log("Ingrese la dificultad de la tarea.");
        console.log("--------------------");
        console.log("[F] Facil.");
        console.log("[M] Media.");
        console.log("[D] Dificil.");
        console.log("--------------------");
        dificultad = scc('');
    }
    return convertirMayuscula(dificultad); //Retorna el valor de la dificultad para luego poder ingresarlo a la función sTarea.
}
