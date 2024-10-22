//lista de tareas
const tareas = []


function mostrarOpciones(){
console.log("\n--- Opciones ----");
console.log("1. Añadir tarea");
console.log("2. Eliminar tarea");
console.log("3. tarea completada");
console.log("4. tarea pendiente");
}

//añadir tarea
function añadirTarea(){
    const tarea = prompt("escribe una tarea: ");
    tareas.push(tarea);
    console.log(`tarea agregada: ${tarea}`);
}

