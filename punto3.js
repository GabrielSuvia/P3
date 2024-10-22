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
//eliminar tarea
function eliminarTarea(){
    tareas.forEach((tarea,indice)=>{
      console.log(`${indice+1}:${tarea}`)
    });
    const indice = parseInt(prompt("ingrese el numero de la tarea a eliminar:"))-1
    if(indice >=0 && indice<tareas.lenght){
        const tareaEliminada = tareas.splice(indice, 1)[0];
    }else{
        console.log("Número de tarea inválido");
    }
}

//