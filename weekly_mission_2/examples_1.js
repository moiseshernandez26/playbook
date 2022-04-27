// Ejemplo 1: for Each para imprimir elementos de una lista
const numbers = [2, 4, 6, 8, 10];
console.log("Ejemplo 1: Imprimiendo los elementos de una lista")
numbers.forEach(num => console.log(num))

// Ejemplo 2: for Each para calcular la suma de todos los elementos de una lista
let sum = 0;
const numbers2 = [3, 5, 7, 9, 11];
numbers2.forEach(num => sum += num)
console.log("Ejemplo 2: Cálculo de la suma de los elementos de la lista")
console.log(sum)

// Ejemplo 3: forEach para imprimir los países en letras mayúsculas
const countries = ["mexico", "argentina", "peru", "chile", "bolivia"];
console.log("Ejemplo 5: Imprimiendo la lista de países en mayúsculas")
countries.forEach((element) => console.log(element.toUpperCase()))

// Ejemplo 4: Uso de map para recorrer los elementos de una lista y crear una nueva lista
const numbers4 = [5, 10, 15, 20, 25];
const numbersSquare = numbers4.map(function(num){ return num * num})
console.log("Ejemplo 4: Imprimiendo la lista de elementos al cuadrado")
console.log(numbersSquare)

// Ejemplo 5: Uso de Map para convertir todos los nombres de una lista a minúsculas
const names = ["Moises", "Juan", "Pedro", "Miguel", "Jorge"];
const namesToUpperCase = names.map((name) => name.toUpperCase())

console.log("Ejemplo 5: Uso de Map para convertir todos los nombres de una lista a minúsculas")
console.log(namesToUpperCase)

// Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayúsculas
const countries6 = ["mexico", "argentina", "peru", "chile", "bolivia"];
const countriesFirstThreeLetters = countries6.map((country) =>
  country.toUpperCase().slice(0, 3) // el método slice obtiene solo la longitud marcada del string
)
console.log("Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayúsculas")
console.log(countriesFirstThreeLetters)

// Ejemplo 7: Uso de filter para filtrar una lista de elementos
const countries7 = ['Iceland', 'Greenland', 'Canada', 'United States', 'Mexico'];
const countriesContainingLand = countries7.filter((country) =>
  country.includes('land')
)
console.log("Ejemplo 7: Uso de filter para filtrar una lista de elementos")
console.log(countriesContainingLand)
const countriesEndsByia = countries.filter((country) => country.endsWith('ia'))
console.log("Ejemplo 7: Paises que terminan en i")
console.log(countriesEndsByia)

// Ejemplo 8: Filtrar una lista por condicional
const scores = [
  { name: 'A', score: 95 },
  { name: 'B', score: 80 },
  { name: 'C', score: 75 },
  { name: 'D', score: 60 },
  { name: 'E', score: 55 },
  { name: 'F', score: 50 },
  { name: 'G', score: 45 },

]

const scoresGreaterEighty = scores.filter((score) => score.score > 80)
console.log("Ejemplo 8: Filtrando elementos por score")
console.log(scoresGreaterEighty)

// Ejemplo 9: Uso del reduce
const numbers9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result_of_reduce = numbers9.reduce((acc, element) => acc + element, 0)
console.log("Ejemplo 9: Uso de reduce para calcular la suma de los elementos de una lista")
console.log(result_of_reduce)

// Ejemplo 10: uso de every nos ayuda a validar todos los elementos de una lista, si todos cumplen con la validación que indiques te regresa true, de lo contrario false
const names10 = ['Explorer 1', 'Explorer 2', 'Explorer 3', 'Explorer 4']
const areAllStr = names10.every((name) => typeof name === 'string')
console.log("Ejemplo 10: Son todos los nombres string: " + areAllStr)

// Ejemplo 11: Uso de find para encontrar el primer elemento de una lista que cumpla con lo que indiques
const ages = [32, 33, 16, 40, 50, 45, 4, 12, 8, 19, 21, 7, 15, 10, 3, 14, 9, 6, 11, 1, 2, 5, 13, 17, 18]
const age = ages.find((age) => age < 20)
console.log("Ejemplo 11: Primera edad menor a 20 es: "+ age)

// Ejemplo 12: Uso de find en una lista de objetos
const scores12 = [
  { name: 'A', score: 95 },
  { name: 'B', score: 80 },
  { name: 'C', score: 75 },
  { name: 'D', score: 60 },
  { name: 'E', score: 55 },
  { name: 'F', score: 50 },
]

const score_less_than_80 = scores12.find((user) => user.score > 80)
console.log("Ejemplo 12. Name score found:" + score_less_than_80.name)

// Ejemplo 13: Uso de findIndex, este método regresa la posición del primer elemento que cumpla con la validación que indiques.
const names13 = ['Explorer 1', 'Explorer 2', 'Explorer 3']
const result = names13.findIndex((name) => name.length > 7)
console.log("Ejemplo 13: Primer elemento cuya palabra sea mayor a 7 esta en la posición "+ result)

// Ejemplo 14: Uso de some, este método validará todos los elementos de la lista, y si alguno cumple con la validación indicada, regresará true, de lo contrario será false.

// lista de elementos
const bools = [true, true, false, true]
// Uso de Some para ver si al menos uno de los elementos es false
const areSomeTrue = bools.some((b) =>  b === false)
console.log("Ejemplo 14: Alguno de los elementos en el array es false: " + areSomeTrue) //true

//Ejemplo 15: Uso de sort para ordenar elementos
const products = ['iPhone', 'Samsung', 'Huawei', 'Xiaomi', 'LG']
console.log("Ejemplo 15: Elementos ordernados usando SORT")
console.log(products.sort())

// Ejemplo 16: Ordenando una lista de objetos
const users = [
  { name: 'A', age: 150 },
  { name: 'B', age: 80 },
  { name: 'C', age: 75 },
  { name: 'D', age: 60 },
]

users.sort((a, b) => { // podemos invocar una función
  if (a.age < b.age) return -1
  if (a.age > b.age) return 1
  return 0
})

console.log("Ejemplo 16: Ordenando una lista de objetos por la edad")
console.log(users)
