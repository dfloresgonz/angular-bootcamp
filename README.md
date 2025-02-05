# angular-bootcamp - clase 2

### Repaso typescript

https://playcode.io/typescript

```typescript
// declaracion y asignacion de variable
let subTotal: number = 100;
const IGV: number = 0.18;
let impuesto: number; // declaracion only
const MONEDA: string = 'soles';

impuesto = 80; // asignacion

// business logic
let igvMonto: number = subTotal * IGV;
let total: number = subTotal + igvMonto;

// imprimir resultado
console.log(`El total de la factura es: ${total} ${MONEDA}`);


//////



// estructura de control
const COLORES: string[] = ['red','green','blue','orange','pink','black'];

let table = `<table border="1"><tr><th>Posicion</th><th>Color</th></tr>`
for(let i = 0; i < COLORES.length; i++) {
// console.log(`el color es ${COLORES[i]} posicion -> ${i}`);
table += `<tr><td>${i}</td><td>${COLORES[i]}</td></tr>`
}
table += `</table>`

document.write(table);

// estructura de control
const COLORES: string[] = ['red','green','blue','orange','pink','black'];

let table = `<table border="1"><tr><th>Posicion</th><th>Color</th><th>Accion</th></tr>`
// for(let i = 0; i < COLORES.length; i++) {
// for(let [index, color] of COLORES.entries()) {
for( let i in COLORES) {
// console.log(`el color es ${COLORES[i]} posicion -> ${i}`);
table += `<tr><td>${i}</td><td>${COLORES[i]}</td><td><button>Escoger</button></td></tr>`
}
table += `</table>`

document.write(table);

// ternary operator // operador ternario

let edad: number = 17;

let mensaje: string = edad >= 18 ? 'Mayor de edad' : 'menor de edad';

console.log(mensaje)

// functions
function sumar(numero1: number, numero2: number, numero3: number) {
let respuesta = numero1 + numero2 + numero3;
return respuesta;
}
let rpta = sumar(1,-5,40);
// rpta = rpta * 0.18;
console.log(rpta);

```