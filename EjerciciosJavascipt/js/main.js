
let numeros= [-1, 3, 4, 2, 6];
console.log(minimo(numeros));
function minimo(num) 
{
    let minimo=num[0];
    for (let index = 1; index < num.length; index++) {
        if(num[index]<minimo){
        minimo = num[index];
        }
    }    
    return minimo;
}