// Informacion de usuario
const usuario = 'Terminator3000';
const nombre = 'Eliud Alvarez';
const edad = 18;
const esEstudiante = true;

// Direccion (Calle, ciudad, estado, codigo postal)
const direccion = {
    calle: 'saturno',
    ciudad: 'Guadalupe',
    codigoPostal: 13497,
}

// Hobbies
const hobbies = ['Leer', 'Escribir codigo', 'Dormir'];
// console.log(hobbies[1] + ' | ' + typeof hobbies);
// Imprimir informacion
// console.log('El array hobbies tiene ' + hobbies.length + ' elementos');
// const hobbies2 = hobbies.join(', ');
// const hobbies3 = hobbies.join(' y ');
// console.log(hobbies2 + ' | ' + typeof hobbies2);
// console.log(hobbies3 + ' | ' + typeof hobbies3);
    
console.log('Hola, soy ' + nombre + ' y tengo ' + edad + ' años. Vivo en ' + direccion.ciudad + ' y mis hobbies son ' + hobbies.join(', '));