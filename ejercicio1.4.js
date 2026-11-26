let precio = "350"
console.log("Precio original:", precio, typeof precio)

let precioNumerico = Number(precio)
console.log("Precio convertido a número:", precioNumerico, typeof precioNumerico)

precioNumerico = precioNumerico + 100
console.log("Precio más 100:", precioNumerico)

let precioComoTexto = String(precioNumerico)
console.log("Resultado convertido a string:", precioComoTexto, typeof precioComoTexto)

let precioConMoneda = precioComoTexto + " pesos colombianos"
console.log(precioConMoneda)
