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