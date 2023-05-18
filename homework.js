'use strict'
// No cambies los nombres de las funciones.
console.log(quickSort([5, 1, 4, 2, 8]));
function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  /*
  Pseudocodigo:
  1- elegir un pivot en el array de forma aleatoria
  2- recorrer el array, si element < pivot --> pushear a la izquierda
  si element > pivot pushear a la derecha
  3- recursion hasta llegar a un array de un solo elemento
  4- ir concatenando en la forma izq,pivot,der
  */ 
  if(array.length <= 1){//Caso base cuando haya un solo elemento en el array lo concateno al array ordenado  
    return array
  }
  let pivot = array[Math.round(Math.random() * (array.length - 1))] // un numero entre 0 y el indice maximo del array
  console.log(pivot)
  let leftArr = []
  let rightArr = []
  for (let i = 0; i < array.length; i++) {
    if(array.indexOf(pivot) === i){//Para no pushear el pivot a ningun array (estoy admitiendo valores iguales a la derecha pero salteando a pivot)
       continue;
    }
    if(array[i] < pivot){
      leftArr.push(array[i])
    }
    if(array[i] >= pivot){
      rightArr.push(array[i])
    }
  }
  return [...quickSort(leftArr),pivot,...quickSort(rightArr)]
}
console.log(quickSort([2, 3, 1, 8, 5, 22, 44, 8, 65, 12 ]));

//Corregido por Gama
/* function quickSort(array){
  if(array.length <= 1){
    return array
  }
  let pivot = array[Math.floor(Math.random() * array.length)]
  let izq = []
  let der = []
  let equal = []
  for (let i = 0; i < array.length; i++) {
    if(array[i] < pivot){
      izq.push(array[i])
    }else if(array[i] > pivot){
      der.push(array[i])
    }else{
      equal.push(array[i])
    }
  }
  return quickSort(izq).concat(equal).concat(quickSort(der))
} */



console.log(mergeSort([5, 1, 4, 2, 8, 6]));
function mergeSort(array) {
  function merge(leftArray, rightArray) {
    const mergedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    // Comparar los elementos de las dos mitades y agregarlos al array combinado en orden
    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
      if (leftArray[leftIndex] <= rightArray[rightIndex]) {
        mergedArray.push(leftArray[leftIndex]);
        leftIndex++;
      } else {
        mergedArray.push(rightArray[rightIndex]);
        rightIndex++;
      }
    }
  
    // Agregar los elementos restantes de la mitad izquierda
    while (leftIndex < leftArray.length) {
      mergedArray.push(leftArray[leftIndex]);
      leftIndex++;
    }
  
    // Agregar los elementos restantes de la mitad derecha
    while (rightIndex < rightArray.length) {
      mergedArray.push(rightArray[rightIndex]);
      rightIndex++;
    }
    console.log(mergedArray);
    return mergedArray;
  }
  if (array.length <= 1) {
    return array;
  }

  // Dividir el array en mitades
  const mid = Math.floor(array.length / 2);
  const leftArray = array.slice(0, mid);
  const rightArray = array.slice(mid);

  // Recursivamente ordenar las mitades
  const sortedLeftArray = mergeSort(leftArray);
  const sortedRightArray = mergeSort(rightArray);

  // Combinar las mitades ordenadas
  return merge(sortedLeftArray, sortedRightArray);
}
//console.log(merge(dividir([2, 1])))
// console.log(merge([[1],[2]]))
// console.log(merge([[1,4],[2,6]]))
// console.log(merge([[1,4,5],[2,6,8]]))
console.log(mergeSort([5, 1, 4, 2, 8, 6]))


//Corregido por Gama
/* function mergeSort(array){
  function dividir(array){
    let medio = Math.floor(array.length/2)
    let izq = array.slice(0,medio)
    let der = array.slice(medio)
    return [izq,der]
  }
  function merge(izq,der){
    let indiceIzq = 0
    let indiceDer = 0
    let array = []
    while(indiceIzq < izq.length && indiceDer < der.length){
      if(izq[indiceIzq] < der[indiceDer]){
        array.push(izq[indiceIzq])
        indiceIzq++
      }else{
        array.push(der[indiceDer])
        indiceDer++
      }
    }
    return array.concat(izq.slice(indiceIzq)).concat(der.slice(indiceDer))
  }
  if(array.length <= 1){
    return array
  }
  let div = dividir(array) //devuelve un array posicion 0 lado izq posicion 1 lado der
  let izq = div[0]
  let der = div[1]

  return merge(mergeSort(izq),mergeSort(der));
} */
//Otra version del merge
/* function merge(array){
  let unidos = []
  while(izq.length && der.length){
    if(izq[0] <= der[0]){
      unidos.push(izq.shift())
    }else{
      unidos.push(der.shift())
    }
  }
  while(izq.length){
    unidos.push(izq.shift())
  }
  while (der.length){
    unidos.push(der.shift())
  }
  return unidos
} */
console.log(mergeSort([5, 1, 4, 2, 8, 6]))

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
