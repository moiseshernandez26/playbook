console.log("Objetos")

// Ejemplo 1: Crear un objeto
const myObjetc = {} // Esto es un objeto vacío
console.log("Ejemplo 1: Crear un objeto vacío")
console.log(myObjetc)

// Ejemplo 2: Crear un objeto con propiedades
const myObjetc2 = {
  name: "Moises",
  age: 23
}
console.log("Ejemplo 2: Crear un objeto con propiedades")
console.log(myObjetc2)

// Ejemplo 3: Objeto con diferentes propiedades
const myObject3 = {
  name: "Moises",
  age: 23,
  nicknames: [
    "Moises",
    "Moi",
    "Moisito"
  ],
  address: {
    zip_code: "12345",
    street: "Calle 123",
    city: "Ciudad 123"
  }
}
console.log("Ejemplo 3: Objeto con diferentes propiedades")
console.log(myObject3)
console.log(myObject3.name)
console.log(myObject3["address"])

// Ejemplo 4: Objeto con métodos
const pet = {
  name: "Moises",
  // Esta es una función que se guarda como propiedad
  sayHello: function(){
    // this.name hace referencia a la propiedad del objeto
    console.log(`${this.name} te saluda en español latino!`)
  }
}

console.log("Ejemplo 4: Objeto con métodos")
pet.sayHello()

// Ejemplo 5: Objeto con método que recibe parámetros
const myPet = {
  name: "Mickey",
  sayHelloToMyPet: function(yourPet){
    console.log(`${this.name} say's hello to ${yourPet}`)
  }
}

console.log("Ejemplo 5: Objeto con método que recibe parámetros")
myPet.sayHelloToMyPet("Manuel")
