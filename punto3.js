const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
//lista de tareas

class AppTareas{

    constructor(){
      this.tareas = [];
      this.pendentTareas = [];
      this.completeTareas = [];
    }

    mostrarOpciones(){
    console.log("\n--- Opciones ----");
    console.log("1. Añadir tarea");
    console.log("2. Eliminar tarea");
    console.log("3. tarea completada");
    console.log("4. tarea pendiente");
    console.log("5. guardar tareas");
    console.log("6. salir");
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
    this.tareas.push(tarea);
    console.log(`tarea agregada: ${tarea}`);
    }

   //eliminar tarea
   async eliminarTarea(){
    await this.verTareas();
    const indice = await this.obtenerEntrada("ingrese el numero de la tarea a eliminar:")
    let index = parseInt(indice)-1;
    if(index >=0 && index<=this.tareas.length){
      
        const tareaEliminada = this.tareas.filter((num,i)=> i !== index);
        console.log("dasd",tareaEliminada)
        console.log(`tarea eliminada: ${this.tareas[index]}`);
        this.tareas = [...tareaEliminada];
        
    }else{
        console.log("Número de tarea inválido");
    }}

  //marcar tarea como completada
  
 async tareaCompletada(){
  await this.verTareas();
  const tareaMarcada = await this.obtenerEntrada("ingrese el numero de tarea completada:")
  let tareaNumber = parseInt(tareaMarcada)-1;
  if(tareaNumber>=0 && tareaNumber<= this.tareas.length){
      const tareaObject = {tarea:this.tareas[tareaNumber], completada:"completed"}
       this.completeTareas.push(tareaObject)
       console.log("tareas completada: ",this.completeTareas)
  }else{
    console.log()
  }
  }
//tareas pendiente
      tareasPendientes(){
        if (!this.completeTareas || !this.tareas) {
          console.error("no hay tareas pendientes.");
          return;
        }
        const tareasCompletadasSet = new Set(this.completeTareas.map(tarea => tarea.tarea));
        this.pendentTareas = this.tareas.filter(task => !tareasCompletadasSet.has(task));
        console.log("Tareas pendientes", this.pendentTareas);
    }
   async guardar(){
      const texto = this.tareas.join('\n');
      fs.writeFile('tareas.txt', texto, (err) => {
        if (err) {
          console.error('Error al guardar tareas:', err);
        } else {
          console.log('Tareas guardadas con éxito.');
        }
      });
    }

// Esto cierra el proceso Node.js
    salir(){
      console.log("Saliendo de la aplicación...");
      process.exit(0); 
    }

// Función principal

   async ejecutar() {
      while (true) {
        this.mostrarOpciones();
      const opcion = parseInt(await this.obtenerEntrada("Ingrese una opción: "));
      switch (parseInt(opcion)) {
        case 1:
         await this.añadirTarea();
          break;
        case 2:
         await this.eliminarTarea();
          break;
        case 3:
         await this.tareaCompletada();
          break;
        case 4:
          this.tareasPendientes();
          break;
        case 5:
           await this.guardar();
             break;
        case 6:
           this.salir();
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





