//! Creamos el objeto tarea con los siguientes atributos.
export class Tarea {
    #id;
    #titulo;
    #descripcion
    #creacion;
    #ultimaModificacion;
    #vencimiento;
    #dificultad;

    // * Constructor.

    constructor(id,titulo, descripcion, estado, creacion, ultimaModificacion, vencimiento, dificultad){
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.estado = estado;
        this.creacion = creacion;
        this.vencimiento = vencimiento;
        this.ultimaModificacion = ultimaModificacion;
        this.dificultad = dificultad;
    }

    //* Getters Y Setters

    //* Getters

    getTitulo(){
        return this.titulo;
    }

    getDescripcion(){
        return this.descripcion;
    }

    getEstado(){
        return this.estado;
    }

    getCreacion(){
        return this.creacion;
    }

    getUltimaModificacion(){
        return this.ultimaModificacion;
    }

    getVencimiento(){
        return this.vencimiento;
    }

    getDificultad(){
        return this.dificultad;
    }

    //* Setters

    setTitulo(titulo){
        this.titulo = titulo;
    }

    setDescripcion(descripcion){
        this.descripcion = descripcion;
    }

    setEstado(estado){
        this.estado = estado;
    }

    setCreacion(creacion) {
        this.creacion = creacion;
    }

    setUltimaModificacion(ultimaModificacion){
        this.ultimaModificacion = ultimaModificacion;
    }

    setVencimiento(vencimiento){
        this.vencimiento = vencimiento;
    }

    setDificultad(dificultad) {
        this.dificultad = dificultad;
    }
    
}
