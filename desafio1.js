// quiero hacer un carrito de compras//

let ingresarUsuario = prompt ("Buen dia, ingrese su usuario para comenzar");
let ingresarPassword = prompt ("Ingrese su contrasena para ingresar");

if ((ingresarUsuario =="")||(ingresarPassword =="")){
    alert("Ups! ingresa tu usuario o contrasena por favor");   
} else {
    alert ("Buen dia" + " " + ingresarUsuario)
}

// aca  me suma los productos que ingrese el usuario pero al no tener precio, no se pueden sumar con valor numerico.//

let producto1 = prompt ("detalla el producto que queres");
let producto2 = prompt ("detalla el producto que queres");
let producto3 = prompt ("detalla el producto que queres");
let producto4 = prompt ("detalla el producto que queres");
let suma=0;
suma = producto1+" "+producto2+" "+producto3+" "+producto4;
console.log (suma);
alert ("tu compra total comprende:" + suma);
let montoTotal = 10000 //debiera ser la suma del monto de los productos ingresados//
alert ("el monto total de tu compra es:" + (montoTotal))

