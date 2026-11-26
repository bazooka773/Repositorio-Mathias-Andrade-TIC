let x = "Estoy fuera del bloque"

{
  let y = "Estoy dentro del bloque"
  console.log("Dentro del bloque, y:", y)
}

console.log("Fuera del bloque, x:", x)
// console.log(y) // ReferenceError: y solo existe dentro del bloque donde se declaró con let.
console.log("Fuera del bloque, typeof y:", typeof y) // "undefined": y no está disponible en este scope.
