export class Tarea{
    #id;
    #titulo;                        //* Se crean los atributos que tendrá la clase Tarea
    #descripcion;
    #estado;
    #creacion;
    #ultimaModificacion;
    #vencimiento;
    #dificultad;

//* Se crea el constructor el cual toma como parametros los atributos de la clase Tarea

    constructor(id,titulo, descripcion,estado, ultimaModificacion, vencimiento, dificultad){
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.estado = estado;
        this.creacion = new Date();
        this.ultimaModificacion = ultimaModificacion;
        this.vencimiento = vencimiento;
        this.dificultad = dificultad;
    }

    //* Se crean los getters.

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
}