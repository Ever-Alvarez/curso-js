let nombre = { usuario: "Eliud", edad: 18 };

console.log(nombre);

function cambiarNombre(object) {
    object.usuario = 'Ever';
    object.edad = 20;
    //Cada variable se guarda en el objeto object y lo devuelde al parametro
    //Es mas facil guardar las variables en un objeto y devolverlas con un solo objeto que hacerlo con cada una de las variables
}

cambiarNombre(nombre);

console.log(nombre);