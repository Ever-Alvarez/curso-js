//Conversión implicita
const suma = '5' + 3;
console.log("'5' + 3 = " + suma + " (Concatenacion)");

const sumaConBoolean = '3' + true;
console.log("'3' + true = " + sumaConBoolean + " (Concatenacion)");

const sumaConNumero = 2 + true;
console.log('2 + true = ' + sumaConNumero + ' (Suma)');

const string = '10';
const number = 10;
const boolean = true;

console.log('------------------------------------');
console.log(string + ' + ' + string + ' = ' + (string + string) + ' (string + string = concatenacion)');
console.log(string + ' + ' + number + ' = ' + (string + number) + ' (string + number = concatenacion)');
console.log(string + ' + ' + boolean + ' = ' + (string + boolean) + ' (string + boolean = concatenacion)');
console.log('------------------------------------');
console.log(number + ' + ' + string + ' = ' + (number + string) + ' (number + string = concatenacion)');
console.log(number + ' + ' + number + ' = ' + (number + number) + ' (number + number = suma)');
console.log(number + ' + ' + boolean + ' = ' + (number + boolean) + ' (number + boolean = suma)');
console.log('------------------------------------');
console.log(boolean + ' + ' + string + ' = ' + (boolean + string) + ' (boolean + string = concatenacion)');
console.log(boolean + ' + ' + number + ' = ' + (boolean + number) + ' (boolean + number = suma)');
console.log(boolean + ' + ' + boolean + ' = ' + (boolean + boolean) + ' (boolean + boolean = suma)');