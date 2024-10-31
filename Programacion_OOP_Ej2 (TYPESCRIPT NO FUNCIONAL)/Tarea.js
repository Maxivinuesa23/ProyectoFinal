// ! Importamos el modulo PROMPT-SYNC para poder ingresar valores por consola.
var scc = require('prompt-sync');
//! Creamos el objeto tarea con los siguientes atributos.
var Tarea = /** @class */ (function () {
    // * Constructor.
    function Tarea(titulo, descripcion, estado, creacion, ultimaModificacion, vencimiento, dificultad) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.estado = estado;
        this.vencimiento = vencimiento;
        this.dificultad = dificultad;
    }
    //* Getters Y Setters
    //* Getters
    Tarea.prototype.getTitulo = function () {
        return this.titulo;
    };
    Tarea.prototype.getDescripcion = function () {
        return this.descripcion;
    };
    Tarea.prototype.getEstado = function () {
        return this.estado;
    };
    Tarea.prototype.getCreacion = function () {
        return this.creacion;
    };
    Tarea.prototype.getUltimaModificacion = function () {
        return this.ultimaModificacion;
    };
    Tarea.prototype.getVencimiento = function () {
        return this.vencimiento;
    };
    Tarea.prototype.getDificultad = function () {
        return this.dificultad;
    };
    //* Setters
    Tarea.prototype.setTitulo = function (titulo) {
        this.titulo = titulo;
    };
    Tarea.prototype.setDescripcion = function (descripcion) {
        this.descripcion = descripcion;
    };
    Tarea.prototype.setEstado = function (estado) {
        this.estado = estado;
    };
    Tarea.prototype.setCreacion = function (creacion) {
        this.creacion = creacion;
    };
    Tarea.prototype.setUltimaModificacion = function (ultimaModificacion) {
        this.ultimaModificacion = ultimaModificacion;
    };
    Tarea.prototype.setVencimiento = function (vencimiento) {
        this.vencimiento = vencimiento;
    };
    Tarea.prototype.setDificultad = function (dificultad) {
        this.dificultad = dificultad;
    };
    return Tarea;
}());
