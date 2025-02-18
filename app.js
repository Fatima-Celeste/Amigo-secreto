let amigos = []; //Crear un array vacío llamado amigos.

//Crear una función llamada agregarAmigo.
function agregarAmigo() { 
    let nombre = document.getElementById("nombre").value; //Obtener el valor del campo de texto con el id amigo.
    if (nombre === "") { //Validar si el campo está vacío.  Si está vacío, mostrar un mensaje de alerta.
        alert("Por favor, inserte un nombre.");
        return;  //Salir de la función.
    }
    amigos.push(nombre); //Agregar el nombre a la lista de amigos.
    document.getElementById("nombre").value = ""; //Limpiar el campo de texto.
    mostrarAmigos(); //Llamar a la función mostrarAmigos para actualizar la lista de amigos en el HTML.
}

//Crear una función llamada mostrarAmigos.
function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos"); //Obtener el elemento HTML con el id listaAmigos y asignarlo a la variable lista.
    lista.innerHTML = ""; //Limpiar el contenido del elemento lista para evitar duplicados al agregar un nuevo amigo al arreglo amigos.
    //Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.
    for (let i = 0; i < amigos.length; i++) { //Iterar sobre el arreglo amigos mientras i sea menor que la longitud de la lista de amigos. Luego, incrementar i en 1.
        let li = document.createElement("li");
        li.id = "listaNueva" //Crear un elemento li (lista dentro de Ul) y asignarlo a la variable li.
        li.textContent = `${i + 1}.- ${amigos[i]}`; //Asignar el texto del elemento li al nombre del amigo en la posición i del arreglo amigos (usar la variable i para mostrar el número de amigo). 
        lista.appendChild(li); //Agregar el elemento li al elemento lista (Ul) en el HTML.
    }
}

//Crear una función llamada sorteoAmigo.
function sortearAmigo() { 
    if (amigos.length === 0) { //Validar si la longitud del arreglo amigos es igual a 0 entonces mostrar un mensaje de alerta.
        alert("No hay amigos disponibles."); //Mostrar un mensaje de alerta.
        return; //Para salir de la función.
    }
    let indice = Math.floor(Math.random() * amigos.length); //Generar un número aleatorio entre 0 y la longitud del arreglo amigos y asignarlo a la variable índice.
    let amigoSorteado = amigos[indice]; //Obtener el nombre del amigo en la posición del índice aleatorio y asignarlo a la variable amigoSorteado.
    document.getElementById("resultado").innerHTML = `El amigo secreto es: ${amigoSorteado}`; //Mostrar el nombre del amigo sorteado en el elemento con el id resultado en el HTML.
    
    //Creamos un nuevo botón de reinicio: 
    let nuevoBoton = document.createElement("button"); //Creamos un elemento de botón y lo asignamos a la variable botón.
    nuevoBoton.id = "reiniciarButton"; //Asignar el id "reiniciarButton" al botón.
    nuevoBoton.textContent = "Reiniciar Sorteo"; //Asignar el texto "Reiniciar Sorteo" al botón.
    nuevoBoton.onclick = resetearSorteo; //Asignar la función resetearSorteo al evento onclick del botón.
    document.getElementById("resultado").appendChild(nuevoBoton); //Agregar el botón al elemento con el id resultado en el HTML.
}

//Crear una función llamada resetearSorteo
function resetearSorteo() {  
    amigos = []; //Limpiamos el arreglo de amigos.
    document.getElementById("resultado").innerHTML = ""; //Limpiar el contenido del elemento con el id "resultado" en el HTML.
    mostrarAmigos(); //Llamar a la función mostrarAmigos para actualizar la lista de amigos en el HTML.
}