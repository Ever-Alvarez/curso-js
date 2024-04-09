//Conversión de tipo explicita
const string = '42';
//Convertir string a number
const integer = parseInt(string);
console.log(integer + ' ' + typeof integer);

const stringDecimal = '3.14';
const float = parseFloat(stringDecimal);
console.log(float + ' ' + typeof float);

const binary = '1010';
const decimal = parseInt(binary, 2);
console.log(decimal + ' ' + typeof decimal);