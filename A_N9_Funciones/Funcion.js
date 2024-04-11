function precioConDescuento(precio, porcientoDescuento){
    const descuento = (precio * porcientoDescuento) / 100;
    const precioFinal = precio - descuento;

    return precioFinal;
}

const precio = 100;
const porcientoDescuento = 20;

console.log("Precio: $"+precio);
console.log("Decuento: "+porcientoDescuento+"%");
console.log("Precio con descuento: $" + precioConDescuento(precio, porcientoDescuento));