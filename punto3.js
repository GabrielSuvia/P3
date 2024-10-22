const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
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
        
    obtenerEntrada(pregunta) {
        return new Promise(resolve => {
          rl.question(pregunta, respuesta => {
            resolve(respuesta);
          });
        });
      }

      async verTareas() {
        if (this.tareas.length === 0) {
          console.log("No hay tareas");
        } else {
          console.log("\n--- Tareas ---");
          this.tareas.forEach((tarea, indice) => {
            console.log(`${indice + 1}. ${tarea}`);
          });
        }
      }

   //añadir tarea
    async añadirTarea(){
    const tarea = await this.obtenerEntrada("escribe una tarea: ");
    tareas.push(tarea);
    console.log(`tarea agregada: ${tarea}`);
    }

   //eliminar tarea
   async eliminarTarea(){
    await this.verTareas();
    const indice = parseInt(await this.obtenerEntrada("ingrese el numero de la tarea a eliminar:"))-1
    if(indice >=0 && indice<tareas.lenght){
        const tareaEliminada = tareas.splice(indice, 1)[0];
        console.log(`tarea eliminada: ${tareaEliminada}`)
    }else{
        console.log("Número de tarea inválido");
    }
    }

    //marcar tarea como completada
// tareaCompletada(){
//}

// Función principal


   async ejecutar() {
      while (true) {
        this.mostrarOpciones();
      const opcion = parseInt(await this.obtenerEntrada("Ingrese una opción: "));
      switch (opcion) {
        case 1:
          this.añadirTarea();
          break;
        case 2:
          this.eliminarTarea();
          break;
        default:
            console.log("opcion invalida");
        }
    }
}

}

// Crear una instancia de la clase ToDoList
const listaDeTareas = new AppTareas();

// Ejecutar la aplicación
listaDeTareas.ejecutar();





