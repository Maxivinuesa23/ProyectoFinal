//Crea la función convertirEstado para que al invocarla nos permita convertir el estado de la tarea en emojis.
//Toma como parametro el estado ingresado anteriormente.
function convertirEstado(estado){

    //Crea las variables con sus correspondientes emojis. La creación de variables en este caso es necesaria ya que luego se comparan los valores de las mismas.
    let pendiente = "🔴 Pendiente.";
    let enCurso = "⏳ En curso.";
    let terminado = "✅ Terminada.";

    //Utiliza la estructura Switch para asignar el valor de la variable estado a la variable correspondiente.
    switch (estado){
        case 'P':
            estado = pendiente
            break;

        case 'C':
            estado = enCurso;
            break;

        case 'T':
            estado = terminado;
            break;
    }

    return estado; //Retorna el valor del estado para luego poder ingresarlo a la función sTarea.
}

//Crea la función convertirDificultad para que al invocarla nos permita convertir la dificultad de la tarea en emojis.
function convertirDificultad(dificultad){

    //Crea la estructura switch para asignar los valores y como luego no se deben comparar asigna el valor sin necesidad de crear una variable antes.
    switch (dificultad){
        case 'F':
            dificultad = "⭐";
            break;

        case 'M':
            dificultad = "⭐⭐";
            break;

        case 'D':
            dificultad = "⭐⭐⭐";
            break;
    }

    return dificultad; //Retorna el valor de la dificultad para luego poder ingresarlo a la función sTarea.
}

//Exporta las funciones convertirEstado y convertirDificultad para poder ser utilizadas en otros archivos.
module.exports = {convertirEstado, convertirDificultad};