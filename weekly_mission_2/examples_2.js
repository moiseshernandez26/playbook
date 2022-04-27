// Ejemplo 1: Crear una clase vacía
class Person {
}
console.log("Ejemplo 1: Crear una clase vacía")
console.log(Person)

// Ejemplo 2: Crear un objeto a partir de una clase
class Pet {
}
const myPet1 = new Pet()
console.log("Ejemplo 2: Crear un objeto a partir de una clase")
console.log(myPet1)

// Ejemplo 3: Instanciar un objeto con atributos
class Student {
  constructor(name, age, subjects){
    this.name = name
    this.age = age
    this.subjects = subjects
	}
}

const moisesStudent = new Student("Moises", 30, ["NodeJs", "Python", "JavaScript", "React"])
console.log("Ejemplo 3: Instanciar un objeto con atributos")
console.log(moisesStudent)

// Ejemplo 4: Métodos en los objetos
class Repository {
  constructor(name, author, language, stars){
   this.name = name
   this.author = author
   this.language = language
   this.stars = stars
  }

  getInfo(){
    return `Repository ${this.name} has ${this.stars} stars`
  }
}
console.log("Ejemplo 4: Métodos en los objetos")
const myRepo = new Repository("LaunchX", "moiseshdz", "js", 100)
console.log(myRepo.getInfo())

// Ejemplo 5: Atributos con valores por default
class PullRequest {
  constructor(repo, title, lines_changed){
    this.repo = repo
    this.title = title
    this.lines_changed = lines_changed
    this.status = "OPEN"
    this.dateCreated = new Date()
	}

  getInfo(){
    return `This PR is in the repo: ${this.repo} (status: ${this.status}) and was created on ${this.dateCreated}`
  }
}

console.log("Ejemplo 5: Atributos con valores por default")
const myPR1 = new PullRequest("LaunchX", "Mi Primer PR", 100)
console.log(myPR1.getInfo())

const myPR2 = new PullRequest("LaunchX", "Mi segundo PR", 99)
console.log(myPR2.getInfo())

// Ejemplo 6: Getters para acceder a los atributos del objeto

class Ajolonauta {
  constructor(name, age, stack){
   this.name = name
   this.age = age
   this.stack = stack
   this.exercises_completed = 0
   this.exercises_todo = 99
  }

  get getExercisesCompleted() {
		return this.exercises_completed
  }
}

console.log("Ejemplo 6: Getters para acceder a los atributos del objeto")
const woopa = new Ajolonauta("Woopa", 1, [])
console.log(woopa.getExercisesCompleted)

// Ejemplo 7: Setters para modificar los atributos del objeto
class MissionCommander {
  constructor(name, mission){
	  this.name = name
	  this.mission = mission
	  this.students = 0
	  this.lives = 0
  }

  get getStudents(){
   return this.students
  }

  get getLives(){
   return this.lives
  }

  set setStudents(students){
    this.students = students
  }

  set setLives(lives){
    this.lives = lives
  }
}

console.log("Ejemplo 7: Setters para modificar los atributos del objeto")
const missionCommanderNode = new MissionCommander("Moises", "NodeJS")

console.log(missionCommanderNode.getStudents)
console.log(missionCommanderNode.getLives)

missionCommanderNode.setStudents = 100
missionCommanderNode.setLives = 3

console.log(missionCommanderNode.getStudents)
console.log(missionCommanderNode.getLives)

// Ejemplo 8: Métodos static nos ayudan a escribir métodos en una clase que podemos usar sin necesidad de instanciar algún objeto
class Toolbox {
  static getMostUsefulTools(){
    return ["Command line", "git", "Text Editor"]
  }
}

console.log("Ejemplo 8: Métodos static")
console.log(Toolbox.getMostUsefulTools())

// Ejemplo  9: Herencia entre dos clases
class Developer {
  constructor(name, mainLang, stack){
    this.name =  name
    this.mainLang = mainLang
    this.stack = stack
  }

  get getName() {
		return this.name
	}
}

console.log("Ejemplo  9: Herencia entre dos clases")
const carloDev = new Developer("Moises", "js", ["React", "Angular", "Vue"])
console.log(carloDev)

class LaunchXStudent extends Developer{
}

const carloLaunchXDev = new LaunchXStudent("Moises", "js", ["React", "Angular", "Vue"])
console.log(carloLaunchXDev)
console.log(carloLaunchXDev.getName)

// Ejemplo 10: Overrinding methods

class Explorer{
  constructor(name, username, mission){
   this.name = name
   this.username = username
   this.mission = mission
  }

  getNameAndUsername(){
   return `Explorer ${this. name}, username: ${this.username}`
  }
}

class Viajero extends Explorer {
  constructor(name, username, mission, cycle){
    super(name, username, mission)
    this.cycle = cycle
  }

  getGeneralInfo(){
    let nameAndUsername = this.getNameAndUsername() 
    return `${nameAndUsername}, Ciclo ${this.cycle}`
  }
}

const viajero1 = new Viajero("Moises", "LaunchX", "Node JS", "Abril 2022")
console.log("Ejemplo 10: Overrinding methods")
console.log(viajero1)
console.log(viajero1.getNameAndUsername())
console.log(viajero1.getGeneralInfo())

