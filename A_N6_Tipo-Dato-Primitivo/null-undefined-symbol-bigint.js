//Null
//JS considera a null como objeto
const snoopy = null;
console.log(snoopy);
console.log(typeof snoopy);

//Undefined
//Evita usar undefined como una declaracion inicial. let name = undefined. Lo emjor es esperar a el programa a que lo haga el mismo
//Normalmente se usa para comparaciones o si alguna variable tiene una aasignacion
let name;
console.log(name);

//Symbol
//Para escribir valores unicos y para se sean siempre el mismo
const uniquedId = Symbol('id');

//Lo que pasaria si tenemos dos valores unicos iguales
const symbol1 = Symbol(1);
const symbol2 = Symbol(1);
//Crea algo unico y aunque exista otro igual, el programa los va a detectar como si fueran diferentres
console.log(symbol1 === symbol2);

const ID = Symbol('id');
let user = {};
user[ID] = '1234';
console.log(user);

//Bigint
//Es para ayudar con numeros o expresiones muy grandes
const bigNumber = 12345678910123456789n
console.log(bigNumber);