import promptSync from 'prompt-sync';
const scc = promptSync();

function obtenerTitulo(){
    console.log("Ingrese el titulo.");
    let titulo = scc('');
    while (titulo === ''){
        console.log("Por favor. Ingrese un titulo valido.");    //! Mientras que el titulo sea vacio se pide que se vuelva a ingresar
        titulo = scc('');
    }
    return titulo;
}

function obtenerDescripcion(){
    console.log("Ingrese la descripcion.");
    let descripcion = scc('');
    while (descripcion === ''){
        console.log("Por favor. Ingrese una descripción valida.");
        descripcion = scc('');
    }
    return descripcion;
}

function convertirMayuscula(texto){
    return texto.toUpperCase();
}

function obtenerEstado(){
    console.clear();
    console.log("Ingrese el estado de la tarea.");
    console.log("--------------------");
    console.log("[P] Pendiente.");
    console.log("[C] En curso.");
    console.log("[T] Terminada.");
    let estado = scc('');

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

function obtenerCreacion(){
    let creacion = new Date;
    return creacion;
}

function obtenerUltimaModificacion(){
    let ultimaModificacion = new Date;

    return ultimaModificacion;
}

function obtenerVencimiento(creacion){
    console.clear();
    console.log("--------------------");
    console.log("Recuerde que la misma debe ser mayor a la fecha actual.");
    console.log("--------------------");
    console.log("Ingrese el día de vencimiento de la tarea.");

    let dia = scc(''); //Crea una variable dia y usa la función scc para ingresar un valor por consola.
    dia = parseInt(dia); //Convierte el valor de dia a un valor entero.


    console.log("Ingrese el mes de vencimiento de la tarea.");
    let mes = scc(''); //Crea una variable mes y usa la función scc para ingresar un valor por consola.
    mes = parseInt(mes); //Convierte el valor de mes a un valor entero.


    console.log("Ingrese el año de vencimiento de la tarea.");
    let año = scc(''); //Crea una variable año y usa la función scc para ingresar un valor por consola.
    año = parseInt(año); //Convierte el valor de año a un valor entero.

    let vencimiento = new Date(año, mes - 1, dia); //Crea una variable vencimiento y le asigna la fecha ingresada en formato dd/mm/yyyy. 
    
    //! Se le resta 1 porque en JS los meses empiezan en 0

    //Crea un ciclo while para evitar que los datos ingresados por consola sean vacios o que la fecha ingresada sea antes a la de creación.

    while ((dia === '' || mes === '' || año === '') && vencimiento < creacion){
        console.clear();
        console.log("--------------------");
        console.log("Ingrese una fecha valida.");
        console.log("Recuerde que la misma debe ser mayor a la fecha actual.");
        console.log("--------------------");
        console.log("Ingrese el día de vencimiento de la tarea.");
        dia = scc('');
        dia = parseInt(dia);
        console.log("Ingrese el mes de vencimiento de la tarea.");
        mes = scc('');
        mes = parseInt(mes);
        console.log("Ingrese el año de vencimiento de la tarea.");
        año = scc('');
        año = parseInt(año);
    }

    vencimiento = new Date(año, mes - 1, dia);

    return vencimiento; //Retorna el valor del vencimiento para luego poder ingresarlo a la función sTarea.
}

function obtenerDificultad(){
    console.clear();
    console.log("Ingrese la dificultad de la tarea.");
    console.log("--------------------");
    console.log("[F] Facil.");
    console.log("[M] Media.");
    console.log("[D] Dificil.");
    console.log("--------------------");

    let dificultad = scc('');

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

export {obtenerTitulo, obtenerDescripcion, obtenerEstado, obtenerCreacion, obtenerUltimaModificacion, obtenerVencimiento, obtenerDificultad}