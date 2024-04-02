// String Primitivo
// Inmutables. Modifica el valor creando uno nuevo sin cambiar valor el original (cuando se declara por primera vez)
const stringPrimitivo = 'Soy un sting primitivo';
//typeof para saber el tipo de dato
console.log(typeof stringPrimitivo);

const stringPrimitivo2 = String('Tambien soy un string primitivo');
console.log(typeof stringPrimitivo2);

// String Objeto
// Mutables. Cambiar el valor original

const stringObjeto = new String('Soy un string objeto');
console.log(typeof stringObjeto);

// Acceder a Caracteres

const saludo = 'Hola. ¿Cómo estás?';

//Imprime el caracter que tenga el indice 2
console.log(saludo[2]);
console.log(saludo.charAt(2));

//Saber el indice de un caracter
console.log(saludo.indexOf('o'));

//Saber el indice de una palabra que existe. Devolvera el indice de donde empieza el primer caracter de la palabra
//Devolvera -1 si la palabra no existe
console.log(saludo.indexOf('Cómo'));

//Saber la ultima posicion de un caracter
console.log(saludo.lastIndexOf('o'));

//Saber que caracteres existen entre "x" y "x" indice
//El primer parametro es el indice desde donde va a empezar
//El ultimo  parametro es el indice donde termina+1
console.log(saludo.slice(3, 5));

//Saber la cantidad de caracteres del string
console.log(saludo.length);

//Convertir el string en mayusculas
console.log(saludo.toLocaleUpperCase());

//Convertir el string en minuscula
console.log(saludo.toLocaleLowerCase());

//Dividir sting
//Separa el string basandode con parametro en split y lo devuelve en arrays (Funciona casi como explode en php)
const saludoDividido = saludo.split(' ');
console.log(saludoDividido);

//String sin espacios
const saludoConEspacios = ' Hola Mundo ';
const saludoSinEspacios = saludoConEspacios.trim();
console.log(saludoSinEspacios);

//Reemplazar palabra o caracteres
const saludoOriginal = 'Hola Mundo';
const nuevoSaludo = saludoOriginal.replace('Mundo', '😁');
console.log(nuevoSaludo);