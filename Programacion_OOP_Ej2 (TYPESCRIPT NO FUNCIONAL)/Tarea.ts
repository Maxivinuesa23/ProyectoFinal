//! Creamos el objeto tarea con los siguientes atributos.
export class Tarea{
    private titulo: string;
    private descripcion: string;
    private estado: string;
    private creacion: Date;
    private ultimaModificacion: Date;
    private vencimiento: Date;
    private dificultad: string;

    // * Constructor.

    public constructor(titulo: string, descripcion: string, estado: string, creacion: Date, ultimaModificacion: Date, vencimiento: Date, dificultad: string){
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

    public getTitulo(): string{
        return this.titulo;
    }

    public getDescripcion(): string{
        return this.descripcion;
    }

    public getEstado(): string{
        return this.estado;
    }

    public getCreacion(): Date{
        return this.creacion;
    }

    public getUltimaModificacion(): Date{
        return this.ultimaModificacion;
    }

    public getVencimiento(): Date{
        return this.vencimiento;
    }

    public getDificultad(): string{
        return this.dificultad;
    }

    //* Setters

    public setTitulo(titulo: string): void{
        this.titulo = titulo;
    }

    public setDescripcion(descripcion: string): void{
        this.descripcion = descripcion;
    }

    public setEstado(estado: string): void{
        this.estado = estado;
    }

    public setCreacion(creacion: Date): void{
        this.creacion = creacion;
    }

    public setUltimaModificacion(ultimaModificacion: Date): void{
        this.ultimaModificacion = ultimaModificacion;
    }

    public setVencimiento(vencimiento: Date): void{
        this.vencimiento = vencimiento;
    }

    public setDificultad(dificultad: string): void{
        this.dificultad = dificultad;
    }
}