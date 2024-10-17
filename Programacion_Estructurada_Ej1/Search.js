//Importa los modulos necesarios.
const scc = require ('prompt-sync')();
const Pausa = require ('./Pausa.js');


function buscarTarea(Tareas){
    let arrayTareasSimilares = []; //Crea un arreglo para guardar las tareas similares.
    let contador = 0; //Crea un contador que servira para saber cuantas tareas similares se encontraron.
    
    console.clear();
    console.log("-----------------------------------");
    console.log("¿Qué tarea desea buscar?");
    console.log("-----------------------------------");
    let titulo = scc(''); //Crea una variable titulo y usa la función scc para ingresar un valor por consola.
    
    for (i=0; i<Tareas.length; i++){
        //Verificara que el titulo ingresado se encuentre en alguna parte del titulo de las tareas ingresadas en el array Tareas.
        if (Tareas[i].titulo.toLowerCase().includes(titulo.toLowerCase())){ 
            arrayTareasSimilares.push(Tareas[i]); //Metera el resultado en el nuevo arreglo arrayTareasSimilares.
            contador = contador + 1; //Aumentara el contador en 1.
        }
    }

    if (contador == 0){ //Si el contador es igual a 0, mostrara un mensaje diciendo que no se encontraron tareas similares.
        console.log("No se encontraron tareas similares.");
        Pausa.pausa();
    }
    else{ //Si el contador es mayor a 0, mostrara las tareas similares.
        mostrarTareasSimilares(arrayTareasSimilares, contador);
    }
}

function mostrarTareasSimilares(arrayTareasSimilares, contador){
    console.clear();
    console.log("-----------------------------------");
    console.log(`Se encontraron ${contador} tareas similares.`);
    for (i=0; i<arrayTareasSimilares.length; i++){
        console.log(`[${i+1}] ${arrayTareasSimilares[i].titulo}`);
    }
    console.log("-----------------------------------");
    Pausa.pausa();
    console.clear();
}

//Exporta la función buscarTarea para poder ser utilizada en otros archivos.
module.exports = {buscarTarea};