import promptSync from 'prompt-sync';
const scc = promptSync();

function obtenerTitulo(): string{
    let titulo: string = scc('');
    while (titulo === ''){
        console.log("Por favor. Ingrese un titulo valido.");    //! Mientras que el titulo sea vacio se pide que se vuelva a ingresar
        titulo = scc('');
    }
    return titulo;
}

function obtenerDescripcion(): string{
    let descripcion: string = scc('');
    while (descripcion === ''){
        console.log("Por favor. Ingrese una descripción valida.");
        descripcion = scc('');
    }
    return descripcion;
}

function convertirMayuscula(texto: string): string{
    return texto.toUpperCase();
}

function obtenerEstado(): string{
    console.clear();
    console.log("Ingrese el estado de la tarea.");
    console.log("--------------------");
    console.log("[P] Pendiente.");
    console.log("[C] En curso.");
    console.log("[T] Terminada.");
    let estado: string = scc('');

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

    return convertirMayuscula(estado);; //Retorna el valor del estado para luego poder ingresarlo a la función sTarea.
}

function obtenerCreacion(): Date{
    let creacion: Date = new Date;
    return creacion;
}

function obtenerUltimaModificacion(): Date{
    let ultimaModificacion: Date = new Date;

    return ultimaModificacion;
}

function obtenerVencimiento(): Date{
    let dia = parseInt(scc(''));
    let mes = parseInt(scc(''));
    let anio = parseInt(scc(''));

    let vencimiento = new Date(anio, mes - 1, dia);
    return vencimiento;
}

function controlarVencimiento(vencimiento:Date, creacion: Date): Date{
    while (vencimiento < creacion){
        console.log("Por favor. Ingrese un vencimiento valido.");
        console.log("La misma no puede ser anterior a la fecha de creación");
        obtenerVencimiento();
    }
    return vencimiento;
}

function obtenerDificultad(): string{
    console.clear();
    console.log("Ingrese la dificultad de la tarea.");
    console.log("--------------------");
    console.log("[F] Facil.");
    console.log("[M] Media.");
    console.log("[D] Dificil.");
    console.log("--------------------");

    let dificultad: string = scc('');

    //Crea un ciclo while para evitar que los datos ingresados por consola sean vacios o distintos a los permitidos.
    while (dificultad === '' || (dificultad !== 'F' && dificultad !== 'M' && dificultad !== 'D' && dificultad !== 'f' && dificultad !== 'm' && dificultad !== 'd')){
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

export {obtenerTitulo, obtenerDescripcion, obtenerEstado, obtenerCreacion, obtenerUltimaModificacion, controlarVencimiento, obtenerDificultad}