// JS no distingue los numeros enteros y decimales. Para JS ambos tipos de dato son uno mismo: Number
// Tipo entero y decimal
const entero = 45;
const decimal = 3.14;
console.log(typeof entero, typeof decimal);

// Notacion cientifica
const cientifico = 5e3;
console.log(typeof cientifico);

// Operaciones aritmética

// Suma, resta , multiplicacion y division
const suma = 3 + 4;
const resta = 4 - 4;
const multiplicacion =  4 * 7;
const divicion = 16 / 2;

// Modulo y exponenciacion
const modulo = 15 % 8;
const exponenciacion = 2 ** 3;

// Precision
const resultado = 0.1 + 0.2;
// JS devuelve un resultado muy largo
console.log(resultado);
// Para especificar cuantos digitos despues del . devuelva
console.log(resultado.toFixed(1));
// === compara el valor de una variable y tambien el tipo de dato

// Operaciones avanzadas
// En el () va el numero del que queremos saber su resultado
const raizCuadrada = Math.sqrt(16);
const valorAbsoluto = Math.abs(-7);
const numAleatorio = Math.random();

console.log(raizCuadrada);
console.log(valorAbsoluto);
console.log(numAleatorio.toFixed(2));