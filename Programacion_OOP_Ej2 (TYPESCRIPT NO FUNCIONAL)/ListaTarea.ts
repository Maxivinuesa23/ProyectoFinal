import { Tarea } from './Tarea';

class ListaTarea{

    private ListaTarea: Tarea[] = [];

    public constructor() {
        this.ListaTarea = [];
    }

    public meterTarea(Tarea: Tarea): void{
        this.ListaTarea.push(Tarea);
    }

    public modificarTarea(Tarea: Tarea): void{

    }


}