// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

///Función para agregar nuevos amigos
function nuevoAmigo(){
    let input = document.querySelector("#amigo");
    let nombre = input.value; 

///Primero tenemos que validar que no esté vacío 

    if (nombre.trim() === "")
    {
        alert("Porfa inserta un nombre, recuerda que no puede estar vacío!");
        return;
    }
}

/// Y ahora tenemos que agregar al array de amigos
    amigos.push(nombre.trim());


///Limpiamos el campo del texto para nuevos queries
    input.value = "";

///Finalmente mostramos la lista actualizada
    ///No sé como hacerlo xd
;
