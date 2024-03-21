// Creacion de Stings

const primeraOpcion = 'Comillas simples';
const segundaOpcion = "Comillas dobles";
const TerceraOpcion = `Comillas invertidas`;

// Concatenacion: Opcion +
const direccion = 'Calle 123';
const ciudad = 'Guadalupe';
const direccionCompleta = 'Mi direccion completa es ' + direccion + ' ' + ciudad;
console.log(direccionCompleta);

// Concatenacion: Template Literals
const nombre = 'Ever';
const pais = '🇲🇽';
const presentacion = `Hola soy ${nombre} de ${pais}`;
console.log(presentacion);

// Concatenacion: join()
const primeraParte = 'Hola';
const segundaParte = 'soy';
const terceraParte = 'Ever';
const pensamiento = [primeraParte, segundaParte, terceraParte];
console.log(pensamiento.join(' '));

// Concatenacion: contact()
const hobbie1 = 'Leer';
const hobbie2 = 'Estudiar';
const hobbie3 = 'Escuchar Musica';
const hobbies = 'Mis hobbies son: '.concat(hobbie1, ', ', hobbie2, ' y ', hobbie3);
console.log(hobbies);

//Caracteres de escape
// const ejemplo = 'I'm software Engineer';

// -Escape Alternativo
const escapeAlternativo = "I'm software Engineer";

// -Barra Invertida
const escapeBarraInvertida = 'I\'m software Engineer';

// -Template Literals
const escapeComillaInvertida = `I'm Software Engineer`;

// Escritura de string largos
/*
    En el vasto mar de código, navegamos,
    Bugs y errores, valientemente enfrentamos.
    Con cada línea, un nuevo amanecer,
    En el mundo de la programación, siempre hay algo que aprender.
*/

// El * solo es decorativo

const poema = 'En el vasto mar de código, navegamos,                          *\n' +
              'Bugs y errores, valientemente enfrentamos.                     *\n' +
              'Con cada línea, un nuevo amanecer,                             *\n' +
              'En el mundo de la programación, siempre hay algo que aprender. *';

console.log('****************************************************************');
console.log('poema 1:                                                       *');
console.log(poema);
console.log('****************************************************************');

const poema2 = `En el vasto mar de código, navegamos,                          *\n\
Bugs y errores, valientemente enfrentamos.                     *\n\
Con cada línea, un nuevo amanecer,                             *\n\
En el mundo de la programación, siempre hay algo que aprender. *`;

// console.log('****************************************************************');
console.log('poema 2:                                                       *');
console.log(poema2);
console.log('****************************************************************');

const poema3 = `En el vasto mar de código, navegamos,
Bugs y errores, valientemente enfrentamos.
Con cada línea, un nuevo amanecer,
En el mundo de la programación, siempre hay algo que aprender.`;

console.log(poema3);
console.log('****************************************************************');