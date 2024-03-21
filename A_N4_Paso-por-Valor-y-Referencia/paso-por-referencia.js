// Tipo de dato complejo - Paso pos referencia

let frutas =  {
    naranja: '🍊'
};

let vegetables = frutas;
vegetables.naranja = '🥦';
console.log(frutas);

let ropa = {
    blusa: '👚'
};

ropa.pantalon = '👖';
console.log(ropa);