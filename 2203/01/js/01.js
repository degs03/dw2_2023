// Suma de todos los números en un arreglo. 

const array = [1,2,3,4,5,6,7,8,9,10];

const sumar = () =>{
    let sum = 0;
    for(let i=0; i<array.length; i++){
        sum = sum + array[i];
    }
    return sum;
}
console.log(array)
console.log(sumar());