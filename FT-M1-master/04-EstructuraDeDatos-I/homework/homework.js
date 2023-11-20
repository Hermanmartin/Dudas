'use strict';

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1


nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

//!EJERCICIO 1
function nFactorial(n) {
  if(n === 0 || n === 1){
    return 1;
  }

  return n * nFactorial(n - 1);

};
var elNumeroFactorial = nFactorial(6);
console.log(elNumeroFactorial);

//nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
// Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

// Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 
function nFibonacci(n) {
    if(n < 2) return n
    return nFibonacci(n - 2) + nFibonacci(n - 1); // dos numero para atras y uno para atras

    };
    
var secuencia = nFibonacci(7);
console.log(secuencia);

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() {
  //array donde voy agregando y quitando elementos
  this.arr = [];
  if(this.arr.length === 0) return undefined;
  
}
Queue.prototype.enqueue = function(valor){
  this.arr.push(valor); // los arraays no tienen no tienen metodo enqueuque incorporado por eso aca va push()?
}; 

Queue.prototype.dequeue = function(){
   if(!this.arr.length) return undefined;
   this.arr.shift(); // los arraays no tienen no tienen metodo enqueuque incorporado por eso aca va pop()?
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
//*aca lo hice directamente con agrego elemento sacondo los valores puestos FIFO
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



/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
