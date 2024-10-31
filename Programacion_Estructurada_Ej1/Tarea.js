//El siguiente modulo contiene la creación de la función sTareas en donde la misma nos retornara los valores que le ingresemos.
//el cual servira para guardarlo en un Array y mostrar multiples datos a la vez.

//Se importa el modulo prompt-sync y se guarda en una constante llamada scc. La misma nos servira para poder ingresar valores por consola.
const scc = require ('prompt-sync')();


//Se crea la función sTarea la cual recibe los siguientes parametros: titulo, descripcion, estado, creacion, vencimiento y dificultad. La misma retorna los valores ingresados.
function sTarea(titulo, descripcion, estado, creacion, vencimiento, dificultad){

    return {
        titulo: titulo,
        descripcion: descripcion,
        estado: estado,
        creacion: creacion,
        vencimiento: vencimiento,
        dificultad: dificultad
    };
}
//Se crea la función setTitulo para que al invocarla nos permita darle un titulo a la tarea.

function setTitulo(){
    console.clear();
    console.log("Ingrese el titulo de la tarea.");
    let titulo = scc(''); //Crea una variable titulo y usa la función scc para ingresar un valor por consola.


    //Utiliza un ciclo while para corroborar que el titulo ingresado no pueda ser un valor vacio.
    while (titulo === ''){
        console.clear();
        console.log("[📌] Por favor. Ingrese un titulo valido.");
        console.log("Ingrese el titulo de la tarea.");
        titulo = scc('');
    }

    return titulo; //Retorna el valor del titulo para luego poder ingresarlo a la función sTarea.
}


//Se crea la función setDescripcion para que al invocarla nos permita darle una descripción a la tarea.
function setDescripcion(){
    console.clear();
    console.log("Ingrese la descripción de la tarea.");
    let descripcion = scc(''); //Crea una variable descripcion y usa la función scc para ingresar un valor por consola.

    //Utiliza un ciclo while para corroborar que la descripción ingresada no pueda ser un valor vacio.
    while (descripcion === ''){
        console.clear();
        console.log("[📌] Por favor. Ingrese una descripción valid.");
        console.log("Ingrese la descripción de la tarea.");
        descripcion = scc('');
    }

    return descripcion; //Retorna el valor de la descripción para luego poder ingresarlo a la función sTarea.
}

//Se crea la función setEstado para que al invocarla nos permita darle un estado a la tarea.
function setEstado(){
    console.clear();
    console.log("Ingrese el estado de la tarea.");
    console.log("--------------------");
    console.log("[P] Pendiente.");
    console.log("[C] En curso.");
    console.log("[T] Terminada.");
    let estado = scc(''); //Crea una variable estado y usa la función scc para ingresar un valor por consola.

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

    //Crea un Switch el cual recibe como parametro el estado y convierte el mismo en mayuscula.
    switch (estado){
        case 'p':
            estado = 'P';
            break;

        case 'c':
            estado = 'C';
            break;
    
        case 't':
            estado = 'T';
            break;
    }

    
    return estado; //Retorna el valor del estado para luego poder ingresarlo a la función sTarea.
}


//Se crea la función setCreacion para que al invocarla nos permita darle una fecha de creación a la tarea.
function setCreacion(){
    let fecha = new Date(); //Crea una variable fecha y le asigna la fecha actual.
    let creacion = fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear(); //Crea una variable creacion y le asigna la fecha actual en formato dd/mm/yyyy.

    return creacion; //Retorna el valor de la creación para luego poder ingresarlo a la función sTarea.
}

//Se crea la función setUltimaModificacion para que al invocarla nos permita darle una fecha de ultima modificación a la tarea.
function setVencimiento(creacion){
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

function setDificultad(){
    console.clear();
    console.log("Ingrese la dificultad de la tarea.");
    console.log("--------------------");
    console.log("[F] Facil.");
    console.log("[M] Media.");
    console.log("[D] Dificil.");
    console.log("--------------------");
    let dificultad = scc(''); //Crea una variable dificultad y usa la función scc para ingresar un valor por consola.

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

    //Crea un Switch el cual recibe como parametro la dificultad y convierte el mismo en mayuscula.
    switch (dificultad){
        case 'f':
            dificultad = 'F';
            break;

        case 'm':
            dificultad = 'M';
            break;

        case 'd':
            dificultad = 'D';
    }

    return dificultad; //Retorna el valor de la dificultad para luego poder ingresarlo a la función sTarea.
}


//Realiza la exportación de las distintas funciones que se encuentran en el modulo Tarea.js.
module.exports = {sTarea, setTitulo, setDescripcion, setEstado, setCreacion, setVencimiento, setDificultad};