(function (){
   let lista = document.getElementById("lista"),
     tareaInput = document.getElementById ("tareaInput"),
     btnNuevo = document.getElementById ("Agregar"),
     
    //Funciones
    let agregarTarea = function () {
        let tarea = tareaInput.value,
         nuevaTarea = document.createElement("li"), //agregar elemento
         enlace = document.createElement("a"), //agregar enlace
         contenido = document.createElement(tarea); //agregar la tarea
    

         if (tarea === "") {
            tareaInput.setAttribute("placeholder", "Agrega una tarea válida")
        
            return false; //queremos salirnos de la función
         }
         //Agregar contenido al enlace 
        enlace.appendChild(contenido); // queremos el contenido dentro del enlace
        //insertar un elemento creado dentro de otro
        //establecer atributo
        enlace.setAttribute("href", "#");
        nuevaTarea.appendChild(enlace); //agregar enlace a li, nuevatarea
        lista.appendChild(nuevaTarea); 
        tareaInput.value = ""; //limpia barra despues de agregar tarea
        for (let i = 0; i <= lista.children.length -1; i++){
            lista.children[i].addEventListener("click", function(){
        //evento 
        this.parentNode.removeChild(this); //this hace referencia a lo que se trabaja en el objeto
        //remover el elemento padre 
            });
               }
    }; 
    
    let ComprobarInput = function (){
//cada que reciba un click ejecuta la funcion
tareaInput.className = "";
tareaInput.setAttribute("placeholder", "Agrega tu tarea");
//regresa al placeholder original "Agregar tarea"
    }; 
    
    let eleminarTarea = function (){
        this.parentNode = removeChild (this);
        //se accede al padre ul y removemos el hijo li
    };
    
    //Eventos
    //Agregar tarea
    btnNuevo.addEventListener("click", agregarTarea) //para agregar tarea dando click
//comprobar input
//si está vacío marca error poniéndose de color rojo
    tareaInput.addEventListener("click", ComprobarInput);
//accede a los elementos li, incluyendo los hijos y nos dice cuántos son
//el -1 es por las posiciones  
for (let i = 0; i <= lista.children.length -1; i++){
 lista.children[i].addEventListener("click", eleminarTarea)
    } //borrando elementos de la lista 
}());
