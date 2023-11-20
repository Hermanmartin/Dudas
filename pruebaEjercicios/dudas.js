//* puse los ejercicios que pude hacer, algunos completos segun los test y otros que estan incompletos. cada ejercicio tiene comentarios con dudas y aclaraciones que hice.

//! LA DUDA PRINCIPAL QUE ME GUSTARIA VER QUE ES LA QUE ME TRABA EN MUCHOS EJERCICIOS ES COMO SE AGREGAN Y MANIPULAN PROPIEDADES Y VALORES DE LAS PROPIEDADES A LOS OBJETOS.


//!JS A 2
//! CLOUSURES
//como es que llega "libro" a item???
function contenedor(){
    var caja =[]

    return function(item){
        caja.push(item); //la sintaxis no me termina de queda clara
        return caja;
    }
}
var miContenedor = contenedor();
console.log(miContenedor("libro"));
console.log(miContenedor("cuaderno"));

//* dudas en este ejercicio: 
//caja.push(item); //la sintaxis no me termina de queda clara. ME CUESTA AGREGAR PROPIEDADES Y VALORES DE LAS PROPIEDADES DE LOS OBJETOS

//----------------------------------------------------------------------------------------

//* pegar una repasada rapida a estos tres

//.bind permite que le indiquemos quien es this. Guarda una funcion, la guardo en una variable

//.call te jecuto y termina. funciona parecido a bind salvo que call se ejecuta instantaneamente y una sola vez

//.apply funciona igual a call salvo que los argumentos se pasan dentro de un arreglo

//*-----------------------------------------------------------------------------------------------
//!ESTRUCTURA DE DATOS 1 => tres ejercicios factorial/ fibonacci / Queue
//Repaso pero creo tenerlo claro
function nFactorial(n) {
  if(n === 0 || n === 1){
    return 1;
  }
  return n * nFactorial(n - 1);
};
var elNumeroFactorial = nFactorial(6);
console.log(elNumeroFactorial);

//---------------------------------------------------------------------------------------------
//repaso pero creo tenerlo claro
  function nFibonacci(n) {
    if(n < 2) return n
    return nFibonacci(n - 2) + nFibonacci(n - 1); // dos numero para atras y uno para atras

    };
    
var secuencia = nFibonacci(7);
console.log(secuencia);
//----------------------------------------------------------------------------------------------
//* me cuesta, puede hacer todas estas pero en el test me arroja los siguientes errores:
//! x devuelve el item correcto cuando dequeeamos
//! x maneja bien el underflow, cuando no hay elementos dequeue devuelve undefined
//! x maneja bien varios enqueue y dequeue
//! agrega y remueve sus propios items

function Queue() {
  //array donde voy agregando y quitando elementos
  this.arr = [];
  if(this.arr.length === 0) return undefined; // no me devuelve undefined
  
}
Queue.prototype.enqueue = function(valor){
  this.arr.push(valor); // los arraays no tienen no tienen metodo enqueuque incorporado por eso aca va push()?
}; 

Queue.prototype.dequeue = function(){
   if(!this.arr.length) return undefined;
   this.arr.shift(); // los arraays no tienen no tienen metodo enqueuque incorporado por eso aca va shift()?
}; 

Queue.prototype.size = function(){
  return this.arr.length;
}
//*---------------------------------------------------------------------------------------
//*agrego elementos FIFO
var agregoElemento = new Queue();
agregoElemento.enqueue(10);
console.log(agregoElemento);
agregoElemento.enqueue(20); 
console.log(agregoElemento);
agregoElemento.enqueue(30); 
console.log(agregoElemento);
//*----------------------------------------------------------------------------------
//* quito elementos.Aca lo hice directamente con agrego elemento sacondo los valores puestos FIFO
// agregoElemento.dequeue();// quito primer elemento en entrar
// console.log(agregoElemento); // 20, 30
// agregoElemento.dequeue(); // quito elemento que entro primero
// console.log(agregoElemento); // 30
// agregoElemento.dequeue(); //quito elemento que entro primero
// console.log(agregoElemento); //
//---------------------------------------------------------------------------------------
//*aca creo una nueva variable para sacarle los elementos FIFO
var quitoElemento = agregoElemento;
console.log(quitoElemento);
quitoElemento.dequeue();
console.log(quitoElemento)
quitoElemento.dequeue();
console.log(quitoElemento)
quitoElemento.dequeue();
console.log(quitoElemento)
//*----------------------------------------------------------------------------------------
//* incrementa la cantidad en size
var arraySize = new Queue() 
arraySize.size();
console.log(arraySize.size());
arraySize.enqueue(20)
console.log(arraySize.size());
arraySize.enqueue(20)
console.log(arraySize.size());
arraySize.enqueue(20)
console.log(arraySize.size());
 
  //*-----------------------------------------------------------------------------------------
  //! ESTRUCTURA DE DATOS 2. Este ejercicio lo hizo mayormente el profe. me esta costando mucho manipular y entender la manipulacion de propiedades y valores ej: current.next

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
    }
    //* si la lista no esta vacia
    while(current.next !== null){ 
      current = current.next; //! no tengo claro como se agregan propiedades y valores de las propiedades a los objetos 
      //*esto es un tema de sintaxis y .next podira ser . siguiente o estoy tomando la propiedad directamente?
    }
    current.next = nuevoNodo; 
    return value;
  };
  var miLista = new LinkedList();
  
  miLista.add(2)
  miLista.add(3)
  miLista.add(4)
  miLista.add(5)
  console.log(miLista)

  //----------------------------------------------------------------------------------------
  function HashTable() {}
