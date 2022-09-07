// Escribir una función que tome un arreglo de números y devuelva el número mayor de la lista. Ejemplo del arreglo : [3, 5, 7, 1, 6]
let numeros= [3,5,7,1,6];
console.log(mayor(numeros));
function mayor(num) 
{
    let maximo=num[0];
    for (let index = 0; index < num.length; index++) {
        if(num[index]>maximo){
        maximo = num[index];
        }
    }    
    return maximo;
}