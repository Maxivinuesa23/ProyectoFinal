//Importa el módulo prompt-sync para poder utilizar la función scc.
import promptSync from 'prompt-sync';
const scc = promptSync();

//Crea la funcion Pausa la cual sirve para forzar una pausa en el programa.


function pausa(){
    scc('Presione ENTER para continuar.'); //(Obliga al usuario a ingresar un valor en el teclado lo que simularia una pausa.)
}

//Exporta la función pausa para poder ser utilizada en otros archivos.
export {pausa};