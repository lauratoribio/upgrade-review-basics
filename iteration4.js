//Crea una función llamada findArrayIndex que reciba como parametros un array de textos y 
//un texto y devuelve la posición del array cuando el valor del array sea igual al valor 
//del texto que enviaste como parametro. Haz varios ejemplos y compruebalos.


let animales = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']


let findArrayIndex = (array, texto) => {
  for(let item of array) {
    let value = item
    let position = array.indexOf(item)
    if(texto === value) {
      console.log(value + " posicion: " + position)
    } else {
      console.log(value + " no existe")
    }
  }
}

findArrayIndex(animales, 'Caracol')
findArrayIndex(animales, 'Perro')
findArrayIndex(animales, 'Mosquito')
findArrayIndex(animales, 'Salamandra')
findArrayIndex(animales, 'Ajolote')
