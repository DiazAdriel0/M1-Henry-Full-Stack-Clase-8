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

console.log(mergeSort([5, 1, 4, 2, 8, 6]));
function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  /*
  Pseudocodigo:
  1- divido el array en 2 mitades (usar math floor por si es impar la longitud) hasta que ya no se pueda dividir
  2- caso base es cuando tengo arrays de longitud 1
  3- fusiono ordenados los arrays de longitud 1
  4- 
  */ 
  //okey probemos ahora
  if(array.length <= 1){
    return array
  }
  
  //mergeSort(merge(dividir(array)))
  //mergeSort(array)
  // return mergeSort(dividir(array))
}

function dividir(array){
  if(array.length <= 2){
    return array
  }
  let leftArr = array.slice(0, Math.ceil(array.length / 2));
  let rightArr = array.slice((Math.ceil(array.length / 2)))
  return [leftArr,rightArr]
}
console.log(dividir([5]))
console.log(dividir([5, 1]))
console.log(dividir([5, 1, 4, 2, 8, 6]))
console.log(dividir([5, 1, 4, 2, 8, 6]))

console.log([1,4,5],[2,8,6]);

function merge(array){
  let leftArr = array[0];
  console.log(leftArr)
  let rightArr = array[1];
  let combArr = []
  console.log(rightArr)
  while(leftArr.length !== 0 || rightArr.length !== 0){
    if(leftArr[0] <= rightArr[0] || rightArr.length === 0){
      combArr.push(leftArr.shift())
      console.log(leftArr)
      console.log(combArr)
    }else if(leftArr[0] > rightArr[0] || leftArr.length === 0){
      combArr.push(rightArr.shift())
      console.log(rightArr)
      console.log(combArr)
    }
  }
  return combArr
}
//console.log(merge(dividir([2, 1])))
console.log(merge([[1],[2]]))
console.log(merge([[1,4],[2,6]]))
console.log(merge([[1,4,5],[2,6,8]]))
console.log(merge(dividir([5, 1, 4, 2, 8, 6])))
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
