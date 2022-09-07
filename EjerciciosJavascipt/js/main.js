//Escribir una función que tome un arreglo ordenado y devuelva un arreglo completamente desordenado Entrada: [1, 2, 5, 14, 24, 31, 50, 105] Posible salida: [105, 31, 14, 1, 2, 50, 24, 5]
let numeros= [1, 2, 5, 14, 24, 31, 50, 105];

function desordenado(num) {
    let nums = new Array();
    for (let index = 0; index < num.length; index++) {
       nums[num.length-index] = num[index];
        
    }
    return nums;
}




console.log(desordenado(numeros));