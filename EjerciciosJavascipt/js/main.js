// Escribir una función que permita saber si un número se repite dentro de un arreglo.
// Blockquote Casos de prueba:

// Caso 1: Resultado esperado: El número 5 se encuentra más de una vez 

// Caso 2: Resultado esperado: El número 7 se encuentra más de una vez [7, 41, 5, 7, 10, 13, 2]

// Caso 3: Resultado esperado: No hay números repetidos [1, 22, 5, 14, 24, 31, 27, 15, 105]

let caso1=[1, 22, 5, 17, 10, 5, 40, 5];
let caso2=[7, 41, 5, 7, 10, 13, 2];
let caso3=[1, 22, 5, 14, 24, 31, 27, 15, 105];

let numerosrepetidos = function (numeros) {
    for (let index = 0; index < numeros.length; index++) {
        let cont=0;
        for (let j = 0; j < numeros.length; j++) {
           if (numeros[index]==numeros[j]) {
            cont ++;
           }
        }
        if (cont!=1) 
            console.log(`el número ${numeros[index]} se repite ${cont} veces`);
        }
        
    }
numerosrepetidos(caso1);
numerosrepetidos(caso2);
numerosrepetidos(caso3);



