//Generar un arreglo con los números pares entre 1 y un número dado. 

const pares=[]

const par = () =>{
    for(let i=1; i<50; i++){
        if(i%2==0){
            pares.push(i);
        }
    }
    return pares;
}
console.log(pares)
console.log(par());