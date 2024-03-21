//Los datos primitivos son inmutables y se pasan por valor

let x = 1;
let y = 'Hola';
let z = null;

//Asignamos los valores de las variables a nuevas variables

let a = x;
let b = y;
let c = z;

console.log(x, y, z, a, b, c);

let frutas = ['manzana'];
frutas.push('pera');
console.log(frutas);

let panes = ['🥐'];
let copiaDePanes = panes;
panes.push('🥖');
console.log(panes, copiaDePanes);