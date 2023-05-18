/* console.log(quickSort([5, 1, 4, 2, 8]));
function quickSort(array) { */
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
  /* let ordArr = []
  let leftArr = []
  let rightArr = []
  if(array.length === 1){//Caso base cuando haya un solo elemento en el array lo concateno al array ordenado
    return ordArr.concat(array)
  }

  function dividir(array){
    let pivot = array[array.length - 1]
    for (let i = 0; i < array.length; i++) {
      if(array.indexOf(pivot) === i){//Para no pushear el pivot a ningun array (estoy admitiendo valores iguales a la derecha pero salteando a pivot)
        continue;
      }
      if(array[i] < pivot){
        leftArr.push(array[i])
        console.log(leftArr)
      }
      if(array[i] >= pivot){
        rightArr.push(array[i])
        console.log(rightArr)
      }
    }
  }
  
  if(leftArr){
    dividir(leftArr)
  }
  if(rightArr){
    dividir(rightArr)
  }
} */

/* console.log(quickSort([5, 1, 4, 2, 8]));
function quickSort(array) { */
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
 /* let ordArr = []
  if(array.length <= 1){//Caso base cuando haya un solo elemento en el array lo concateno al array ordenado
    return ordArr.concat(array)
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
    if(array[i] > pivot){
      rightArr.push(array[i])
    }
  }
  console.log(leftArr)
  console.log(rightArr);
  quickSort(leftArr)
  quickSort(rightArr)
  return ordArr;
  

  
  
}
 */

/* let ordArr = []
  if(array.length <= 1){//Caso base cuando haya un solo elemento en el array lo concateno al array ordenado
    return ordArr.concat(array)
  }
  dividir(array)
  return ordArr;
  
  
  
  
}

function dividir(array){
  if(array.length <= 1){
    return ordArr.concat(array)
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
    if(array[i] > pivot){
      rightArr.push(array[i])
    }
  }
  console.log(leftArr)
  console.log(rightArr);
  dividir(leftArr)
  dividir(rightArr)
}

console.log(dividir(([5, 1, 4, 2, 8]))) */

//Compañero
/* function mergeSort(array) {
    if(array.length === 1){
        return array;
    }

    let mitad = Math.floor(array.length / 2);
    let izq = array.slice(0, mitad);
    let der = array.slice(mitad);

    array = [];

    izq = mergeSort(izq);
    der = mergeSort(der);

    while(izq.length && der.length){
        let elimIzq = izq.shift();
        let elimDer = der.shift();
        if(izq[0] <= der[0]){
        array.push(elimIzq);
        }
        else{
        array.push(elimDer);
        }
        array = array.concat(izq, der);
        return array;
    }

}

console.log(mergeSort([1,5,2,9,3,10])) */


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
  if(array.length <= 1){//Caso base cuando haya un solo elemento en el array 
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

//console.log(mergeSort([5, 1, 4, 2, 8, 6]));
/* function mergeSort(array) {
  function parteIzq(array){
    return array.slice(0, Math.ceil(array.length / 2));
  }
  function parteDer(array){
    return array.slice((Math.ceil(array.length / 2)))
  } 
  function merge(izq,der){
    let combArr = []
    console.log(izq);
    console.log(der);
    while(izq.length !== 0 || der.length !== 0){
      if(izq[0] <= der[0] || der.length === 0){
        combArr.push(izq.shift())
        console.log(izq)
        console.log(combArr)
      }else if(izq[0] > der[0] || izq.length === 0){
        combArr.push(der.shift())
        console.log(der)
        console.log(combArr)
      }
    }
    return combArr
  }
  if(array.length <= 1){//Caso base
    return array
  }
  merge(parteIzq(array),parteDer(array))
 
  //mergeSort(merge(dividir(array)))
  //mergeSort(array)
  // return mergeSort(dividir(array))
} */
// console.log(mergeSort([5, 1, 4, 2, 8, 6]));
// function mergeSort(array) {
//   function parteIzq(array){
//     return array.slice(0, Math.ceil(array.length / 2));
//   }
//   function parteDer(array){
//     return array.slice((Math.ceil(array.length / 2)))
//   } 
//   function merge(izq,der){
//     let combArr = []
//     console.log(izq);
//     console.log(der);
//     while(izq.length !== 0 || der.length !== 0){
//       if(izq[0] <= der[0] || der.length === 0){
//         combArr.push(izq.shift())
//         console.log(izq)
//         console.log(combArr)
//       }else if(izq[0] > der[0] || izq.length === 0){
//         combArr.push(der.shift())
//         console.log(der)
//         console.log(combArr)
//       }
//     }
//     return combArr
//   }
//   if(array.length <= 1){//Caso base
//     return array
//   }
//   let parteIzq = parteIzq(array)
//   let parteDer = parteDer(array)
//   return mergeSort()
//   /* while(array.length > 1){
//     parteIzq(array)
//   } */
  
//   //mergeSort(merge(dividir(array)))
//   //mergeSort(array)
//   // return mergeSort(dividir(array))
// }


/* console.log(mergeSort([5, 1, 4, 3, 9, 2, 8, 6]));
function mergeSort(array) {
  function dividir(array){
    let leftArr = array.slice(0, Math.ceil(array.length / 2));
    let rightArr = array.slice((Math.ceil(array.length / 2)))
    return [leftArr,rightArr]
  }
  function merge(array){
    let leftArr = array[0];
    let rightArr = array[1];
    let combArr = []
    while(leftArr.length !== 0 || rightArr.length !== 0){
      if(leftArr[0] <= rightArr[0] || rightArr.length === 0){
        combArr.push(leftArr.shift())
      }else if(leftArr[0] > rightArr[0] || leftArr.length === 0){
        combArr.push(rightArr.shift())
      }
    }
    return combArr
  }
  if(array.length <= 1){
    return array
  }
  //mergeSort(merge(dividir(array)))
  //mergeSort(array)
  return [...mergeSort(merge(dividir(array)))]
} */
/* function mergeSort(array) {
  //DIVISION
    let leftArr = array.slice(0, Math.ceil(array.length / 2));
    let rightArr = array.slice((Math.ceil(array.length / 2)))
    leftArr
  //FUSION Y ORDENAMIENTO  
    
    let combArr = []
  while(leftArr.length !== 0 || rightArr.length !== 0){
    if(leftArr[0] <= rightArr[0] || rightArr.length === 0){
      combArr.push(leftArr.shift())
    }else if(leftArr[0] > rightArr[0] || leftArr.length === 0){
      combArr.push(rightArr.shift())
    }
  }
  return combArr
}
console.log(mergeSort([5, 1, 4, 3, 9, 2, 8, 6])); */





/* console.log(mergeSort([5, 1, 4, 3, 9, 2, 8, 6]));
function mergeSort(array) {
  function dividir(array){
    let leftArr = array.slice(0, Math.ceil(array.length / 2));
    let rightArr = array.slice((Math.ceil(array.length / 2)))
    return [leftArr,rightArr]
  }
  function merge(array) {
    let leftArr = array[0];
    let rightArr = array[1];
    let combArr = [];
  
    while (leftArr.length !== 0 && rightArr.length !== 0) {
      if (leftArr[0] <= rightArr[0]) {
        combArr.push(leftArr.shift());
      } else {
        combArr.push(rightArr.shift());
      }
    }
  
    // Agregar los elementos restantes del subarray que no se haya vaciado completamente
    while (leftArr.length !== 0) {
      combArr.push(leftArr.shift());
    }
  
    while (rightArr.length !== 0) {
      combArr.push(rightArr.shift());
    }
  
    return combArr;
  }
  if(array.length <= 1){
    return array
  }
  return [mergeSort(merge(dividir(array)))]
} */

//console.log(mergeSort([5, 1, 4, 3, 9, 2, 8, 6]));
/* function mergeSort(array) {
  function dividir(array) {
    let leftArr = array.slice(0, Math.ceil(array.length / 2));
    let rightArr = array.slice(Math.ceil(array.length / 2));
    return [leftArr, rightArr];
  }

  function merge(array) {
    let leftArr = array[0];
    let rightArr = array[1];
    let combArr = [];

    while (leftArr.length !== 0 && rightArr.length !== 0) {
      if (leftArr[0] <= rightArr[0]) {
        combArr.push(leftArr.shift());
      } else {
        combArr.push(rightArr.shift());
      }
    }

    // Agregar los elementos restantes del subarray que no se haya vaciado completamente
    while (leftArr.length !== 0) {
      combArr.push(leftArr.shift());
    }

    while (rightArr.length !== 0) {
      combArr.push(rightArr.shift());
    }

    return combArr;
  }

  if (array.length <= 1) {
    return array;
  }

  return merge(mergeSort(dividir(array)));
}
 */



// console.log(mergeSort([5, 1, 4, 3, 9, 2, 8, 6]));
/* function mergeSort(array) {
  function dividir(array) {
    let leftArr = array.slice(0, Math.ceil(array.length / 2));
    let rightArr = array.slice(Math.ceil(array.length / 2));
    return [leftArr, rightArr];
  }

  function merge(array) {
    let leftArr = array[0];
    let rightArr = array[1];
    let combArr = [];

    while (leftArr.length !== 0 && rightArr.length !== 0) {
      if (leftArr[0] <= rightArr[0]) {
        combArr.push(leftArr.shift());
      } else {
        combArr.push(rightArr.shift());
      }
    }

    // Agregar los elementos restantes del subarray que no se haya vaciado completamente
    while (leftArr.length !== 0) {
      combArr.push(leftArr.shift());
    }

    while (rightArr.length !== 0) {
      combArr.push(rightArr.shift());
    }

    return combArr;
  }

  if (array.length <= 1 || !Array.isArray(array[0]) || !Array.isArray(array[1])) {
    return array;
  }

  return merge(mergeSort(dividir(array)));
} */



//SEGUN CHATGPT

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


//Mi intento
// function mergeSort(array) {
//   // Implementar el método conocido como mergeSort para ordenar de menor a mayor
//   // el array recibido como parámetro
//   // Devolver el array ordenado resultante
//   // Tu código:
//   /*
//   Pseudocodigo:
//   1- divido el array en 2 mitades (usar math floor por si es impar la longitud) hasta que ya no se pueda dividir
//   2- caso base es cuando tengo arrays de longitud 1
//   3- fusiono ordenados los arrays de longitud 1
//   4- 
//   */ 
//   //okey probemos ahora
//   if(array.length <= 1){
//     return array
//   }
  
//   //mergeSort(merge(dividir(array)))
//   //mergeSort(array)
//   // return mergeSort(dividir(array))
// }

// function dividir(array){
//   if(array.length <= 2){
//     return array
//   }
//   let leftArr = array.slice(0, Math.ceil(array.length / 2));
//   let rightArr = array.slice((Math.ceil(array.length / 2)))
//   return [leftArr,rightArr]
// }
// console.log(dividir([5]))
// console.log(dividir([5, 1]))
// console.log(dividir([5, 1, 4, 2, 8, 6]))
// console.log(dividir([5, 1, 4, 2, 8, 6]))

// console.log([1,4,5],[2,8,6]);

// function merge(array){
//   let leftArr = array[0];
//   console.log(leftArr)
//   let rightArr = array[1];
//   let combArr = []
//   console.log(rightArr)
//   while(leftArr.length !== 0 || rightArr.length !== 0){
//     if(leftArr[0] <= rightArr[0] || rightArr.length === 0){
//       combArr.push(leftArr.shift())
//       console.log(leftArr)
//       console.log(combArr)
//     }else if(leftArr[0] > rightArr[0] || leftArr.length === 0){
//       combArr.push(rightArr.shift())
//       console.log(rightArr)
//       console.log(combArr)
//     }
//   }
//   return combArr
// }

console.log(mergeSort([5, 1, 4, 3, 9, 2, 8, 6]));
