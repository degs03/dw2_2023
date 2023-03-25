//Dada una cadena, determinar si es un palíndromo. 

let palabra = 'reconocer';
let reves = palabra.split('').reverse().join('');

const palindromo = () =>{
    if(palabra == reves){
        console.log(`${palabra} es palindromo`);
    }else{
        console.log(`${palabra}no es palindromo`);
    }
    
}
console.log(palindromo());