//lista de tareas

class AppTareas{

    constructor(){
      this.tareas = [];
    }

    mostrarOpciones(){
    console.log("\n--- Opciones ----");
    console.log("1. Añadir tarea");
    console.log("2. Eliminar tarea");
    console.log("3. tarea completada");
    console.log("4. tarea pendiente");
    }
        
   //añadir tarea
    añadirTarea(){
    const tarea = prompt("escribe una tarea: ");
    tareas.push(tarea);
    console.log(`tarea agregada: ${tarea}`);
    }

   //eliminar tarea
    eliminarTarea(){
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

    //marcar tarea como completada
//function tareaCompletada(){
//}

// Función principal
 


ejecutar() {
    while (true) {
      mostrarMenu();
      const opcion = parseInt(prompt("Ingrese una opción: "));
      switch (opcion) {
        case 1:
          agregarTarea();
          break;
        case 2:
          eliminarTarea();
          break;
        default:
            console.log("opcion invalida");
        }
    }
}

}







