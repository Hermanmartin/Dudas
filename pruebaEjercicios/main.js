function LinkedList() {
    this.head = null;
  }
  
  function Node(value) {
    this.value = value;
    this.next = null;
  }
  
  LinkedList.prototype.add = function(value){
  
    //* armo una variable que contenga a NODE
    var nuevoNodo = new Node(value);
  
  
    //* digo que current ahora sea la list
    var current = this.head;
  
  
    //* si la lista esta vacia que aca lista es current. Digo que la lista sea nuevoNodo
    if(current === null){
      this.head = nuevoNodo; 
      return value; 
    };
  
    //* si la lista no esta vacia
    while(current.next !== null){ 
      current.next = nuevoNodo; //*esto es un tema de sintaxis y .next podira ser . siguiente o estoy tomando la propiedad directamente
    }
    current.next = nuevoNodo;
    return value;
    
  };
  var miLista = new LinkedList();
  miLista.add(5);
  miLista.add(10);
  miLista.add(20);
  
  console.log(miLista);
  console.log(miLista);

  var hola = "hola"

  console.log(hola);


  //!--------------------------------------------------------------------------------------------

  function Queue(nombre, precio) {
    this.arr = [];
    this.nombre = nombre;
    this.precio = precio;
    
    
};
Queue.prototype.enqueue = function(valor){
   return this.arr.push(valor); // los arraays no tienen no tienen metodo enqueuque incorporado por eso aca va push()?
}; 

var miQueue = new Queue("old shirt", 900);
miQueue.enqueue(50);
console.log(miQueue.nombre, miQueue.precio, miQueue.arr);

Queue.prototype.dequeue = function(valor){
return this.arr.shift(valor); // los arraays no tienen no tienen metodo enqueuque incorporado por eso aca va push()?
}; 
var miQueue1 = new Queue("old shirt", 900);
miQueue1.dequeue();
miQueue1.dequeue();
console.log(miQueue1.nombre, miQueue1.precio, miQueue1.arr);

//!------------------------------------------------------------------------------------------------------
// function Queue() {
//   this.miArrayQueue =[]; //!propiedad
// };

// //* agrega un item al array
// Queue.prototype.enqueue = function(valor){
//    return this.miArrayQueue.push(valor); // los arraays no tienen no tienen metodo enqueuque incorporado por eso aca va push()?
// }; 

// Queue.prototype.dequeue = function(){
//    return this.miArrayQueue.shift(); // los arraays no tienen no tienen metodo enqueuque incorporado por eso aca va pop()?
// }; 

// // //! no me salio
// Queue.prototype.size = function(valor){
//   return this.miArrayQueue.length; //! los arraays no tienen no tienen metodo enqueuque incorporado por eso aca va push()
// }; 


// var miQueue = new Queue();
// miQueue.enqueue("!!!");
// console.log(miQueue);


//  var miQueue1 = new Queue(); // por que no me toma el 50? es porque no necesito pasarselo ?
//  miQueue1.dequeue();
//  miQueue1.dequeue();
//  console.log(miQueue1);

// var miQueue2 = new Queue();
// var tamaño = miQueue2.size();
// console.log(tamaño);