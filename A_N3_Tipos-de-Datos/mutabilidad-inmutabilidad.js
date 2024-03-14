//Mutabilidad es que esta cambiando el valor original
//Inmutabilidad no cambia el valor original

//Tipo de dato primitivo - Inmutable
let numero = 23;
numero = numero + 10;
console.log(numero);
//El valor original no cambio. En la suma, js creo un nuevo valor para la variable

//Tipo de dato complejo - Mutable
let usuario = {nombre: 'Pepito', edad: 15};
//Modificar la edad del usuario
usuario.edad = 20;
console.log(usuario);

let frutas = ['Manzana', 'Pera'];
frutas[0] = 'Sandia';
console.log(frutas);

//La funcion cambiara el nombre del objeto
function cambiarNombre(objeto) {
    objeto.nombre = 'Nuevo nombre';
}

//Crear el objeto nombre
let persona = {nombre: 'Antonio'};

//Llamamos a la funcion cambiarNombre
cambiarNombre(persona);

//Para que la funcion funcione imprimimos el objeto persona
console.log(persona);