//* Se importan las librerias readline necesaria para el ingreso de valores manteniendo la pureza de las funciones.
import readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';

//* Se crea la interfaz propia de la libreria readline.
const rl = readline.createInterface({ input, output });



// ! APARTADO TITULO (CONTROLES E INGRESO)

//* Se crea la funcion comprobar titulo la cual se encarga de verificar que el titulo no sea vacio. Retornando un valor booleano en cada caso.
function comprobarTitulo(titulo){
    if (titulo === '' || titulo === null || titulo === ' '){ 
        return false
    }else{
        return true;
    }
}

function ingresarTitulo(){  //* Se crea una promesa la cual toma como atributos la pregunta a realizar y la respuesta ingresada por el usuario.
    return new Promise((resolve) => {
        rl.question('Ingrese el titulo. (El mismo no puede estar vacio). (OBLIGATORIO) \n', (answer) => {  //* Utiliza la interfaz creada para realizar la pregunta.
            if (comprobarTitulo(answer) === false){                //* Comprueba que el titulo (answer) no sea vacio.
                resolve(ingresarTitulo());                         //*Si es vacio se vuelve a llamar a la funcion para que el usuario ingrese un titulo valido.
            }else{             
                resolve(answer);                                   //* En caso de que el titulo sea correcto devuelve el valor ingresado por el usuario. Y lo devuelve a la promesa
            }                                                      //* que lo llamo. Cumpliendo con la promesa de devolver un valor.            
        });
    });
}


//! APARTADO DESCRIPCIÓN 

function ingresarDescripcion(){
    return new Promise((resolve) => {
        rl.question('Ingrese la descripción. (OPCIONAL)\n', (answer) => {
            resolve(answer);
        })
    }) 
}



// ! APARTADO FECHAS (CONTROLES E INGRESO)

//* FUNCIONES PARA CONTROLAR VALORES
function controlDia(dia){
    if ((dia < 1 || dia > 31) || dia === ''){
        return false;
    } else{
        return true;
    }
}                                                           //* Funciones que se encargan de corroborar que los datos ingresados sean correctos.

function controlMes(mes){
    if ((mes < 1 || mes > 12) || mes === ''){
        return false;
    } else{
        return true;
    }
}

function controlAnio(anio){
    let date = new Date();
    if (anio === '' || anio < date.getFullYear()){
        return false;
    } else{
        return true;
    }
}

//* FUNCIONES PARA INGRESAR FECHAS

function ingresarDia(){
    return new Promise((resolve) => {
        rl.question('Ingrese el día de vencimiento. (OBLIGATORIO) \n', (answer) => {
            if (controlDia(answer) === false){
                resolve(ingresarDia());
            } else{
                resolve(answer);
            }
        })
    })
}

function ingresarMes(){
    return new Promise((resolve) => {
        rl.question('Ingrese el mes de vencimiento. (OBLIGATORIO) \n', (answer) => {
            if (controlMes(answer) === false){
                resolve(ingresarMes());
            } else{
                resolve(answer);
            }
        })
    })
}

function ingresarAnio(){
    return new Promise((resolve) => {
        rl.question('Ingrese el año de vencimiento. (Debe ser una fecha posterior o igual al año actual) (OBLIGATORIO) \n', (answer) => {
            if (controlAnio(answer) === false){
                resolve(ingresarAnio());
            } else{
                resolve(answer);
            }
        })
    })
}

function obtenerVencimiento(dia, mes, anio){
    return new Date(anio, mes, dia);
}

//! APARTADO ULTIMA MODIFICACIÓN

function ultimaModificacion(){
    return new Date();
}

//! APARATADO ESTADO

function modificarEstado(){
    return new Promise((resolve) => {
        rl.question('Ingrese el estado de la tarea. ([1] Pendiente, [2] En curso, [3] Terminada) (OBLIGATORIO)\n', (answer) => {
            if (controlarValor(answer) === false){
                resolve(ingresarEstado());
            } else{
                resolve(answer);
            }
        })
    })
}

function traducirEstado(estado){        //* La funcion traducirEstado se encarga de obtener el valor obtenido anteriormente (Por lo general un entero)
    switch(estado){                     //* Y asignarle un valor de tipo String como lo es 'Pendiente', 'En curso' o 'Terminada'.
        case '1':
            return 'Pendiente';
            break;

        case '2':
            return 'En curso';
            break;

        case '3':
            return 'Terminada';
            break;
    }
}

//! APARTADO DIFICULTAD
function controlarValor(valor){
    if (valor === '' || (valor < 1 || valor > 3)){                   //*Funcion compartida con estado.
        return false;                                                   
    } else{
        return true;
    }
}

function ingresarDificultad(){
    return new Promise((resolve) => {
        rl.question('Ingrese la dificultad. ([1] Facil, [2] Medio, [3] Dificil) (OBLIGATORIO)\n', (answer) => {
            if (controlarValor(answer) === false){
                resolve(ingresarDificultad());
            } else{
                resolve(answer);
            }
        })
    })
}

function traducirDificultad(dificultad){
    switch(dificultad){
        case '1':
            return '⭐';                        //* La funcion traducirDificultad cumple lo mismo que cumple traducirEstado pero con la diferencia de que
            break;                              //* Se encarga de asignarle un emoji a la dificultad de la tarea. Funcion puramente para estetica.

        case '2':
            return '⭐⭐';
            break;

        case '3':
            return '⭐⭐⭐';
            break;
    }
}

function cerrar(){      //* Funcion importante que se encarga de cerrar las interfaces creadas por la libreria readline.
    rl.close();         //* La misma se llama al finalizar el programa para evitar que queden interfaces abiertas.
}                       //* Esto evita que se tenga un mayor consumo y que se pidan valores de manera inesperada.


//* Se exportan todas las funciones para que puedan ser utilizadas en otros archivos.
export {ingresarTitulo, ingresarDescripcion, ingresarDia, ingresarMes, ingresarAnio, ultimaModificacion, obtenerVencimiento, ingresarDificultad, traducirDificultad, cerrar, modificarEstado, traducirEstado};

