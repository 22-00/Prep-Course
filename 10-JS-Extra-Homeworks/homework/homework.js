// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let arreglo = [];
  for(let propiedad in objeto){
    arreglo.push([propiedad, objeto[propiedad]])
  }
    return arreglo;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el string y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let objeto = {};
  for(var i = 0; i < string.length; i++){
      if(Object.keys(objeto).includes(string[i])){
        objeto[string[i]] = objeto[string[i]] + 1;
      } 
        else objeto[string[i]] = 1;
  }
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var letrasM = "";
  var nuevoString = "";
  for(let i = 0; i < s.length; i++){
    if(s[i].toUpperCase() === s[i]){
      letrasM += s[i]
    } else {
      nuevoString += s[i];
    }
  }
      return letrasM + nuevoString;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var strInvertida  = str.split(" ").map(function(element){
    return element.split("").reverse().join("")
  }).join(" ");

  return strInvertida;

} 

function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var num = numero.toString()
  if(num.split("").reverse().join("") === num){
    return "Es capicua"
  } else {
    return "No es capicua"
  }

}

function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de no contener dichas letras.
  //Escribe tu código aquí
  cadena2 = "";
  for(let i = 0; i < cadena.length; i++){
    if(cadena[i] != "a" && cadena[i] != "b" && cadena[i] != "c"){
      cadena2 = cadena2 + cadena[i]
    }
  }
    return cadena2;
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí                      0      1         2           3
  for(var i = 0; i < arr.length; i++){   //  ["You", "are", "beautiful", "looking"] = i
                                        //                       *                              
    for(var j = i + 1; j < arr.length; j++){  // ["You", "are", "beautiful", "looking"]  = j [i+1] 
                                             //                                   *                                           
      if(arr[i].length > arr[j].length){    //      0      1          2           3
        var aux = arr[i];
        arr[i] = arr[j];                   
        arr[j] = aux;                      //  ["You", "are", "looking", "beautiful"] = var aux
      }
    }
  }
  return arr;
}
// me quede en el mi 1:22:22

function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
var nuevoArr = [];
for(var i = 0; i < arreglo1.length; i++){
for(var j = 0; j < arreglo2.length; j++){
  if(arreglo1[i] === arreglo2 [j]){
    nuevoArr.push(arreglo1[i])
  }
}
}

  return nuevoArr
}
//npm t 10-JS-Extra-Homeworks/

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

