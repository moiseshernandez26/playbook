export default class Pokemon {
  constructor(name, type, age){
    this.name = name
    this.type = type
    this.age = age
    this.attacks = []
  }

  get getAttacks(){
    return this.attacks
  }

  set setAttacks(attacks){
    return this.attacks = attacks
  }
}

const myPokemon = new Pokemon("Pikachu", "Electric", 10)
console.log(myPokemon)
