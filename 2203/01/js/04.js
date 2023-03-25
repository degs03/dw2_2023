//Reemplazar un valor en un arreglo por otro valor dado

let frutas = ['manzana', 'pera', 'frutilla'];

const reemplazar = (arr, reemplazarValor, valor) => {

    arr.forEach((val, i) => {
        if (arr[i] == reemplazarValor) {
            arr[i] = valor;
        }
    });
    return arr;
}

console.log(reemplazar(frutas, 'manzana', 'naranja'));