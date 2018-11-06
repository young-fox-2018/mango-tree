"use strict"

// Release 0

class FruitTree {

  // Initialize a new MangoTree
  constructor () {
    this._age = 0;
    this._height =0;
    this._fruits = []
    this._health = true
    this._mature_Age = 0
    this._Stop_Grow = 0
    this._Death = 0
    this._harvested = 0
    this._min_height = 0
    this._max_height = 0

  }
  
  get age () {
    return this._age
  }
  set age(num){
    this._age = num
  }
  
  get height () {
    return this._height
    
  }
  set height(num){
    this._height = num
  }
  
  get fruits () {
    return this._fruits
  }
  
  
  get healthStatus () {
    return this._health
  }
  

  get harvested () {
    
  }
  
  // Get current states here
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }



  // Grow the tree
  grow () {
    let Random = this.getRandomInt(this._min_height , this._max_height)
    this.age += 1

    if(this.age >= this._Death){
     this._health = false

   }else{
     if(this.age < this._Stop_Grow){
       this.height += Random
     }
    }

   
    
    // if(this.age <= this._Stop_Grow){

    //   this.height+= Random
    // }

    //     if(this.age === this._Death){
    //       this._health = false
    //     }else{
    //       this.age += 1
    //   }
  
  }

  // Produce some mangoes
  produceFruits () {
    let random = Math.floor(Math.random()*20)
    if(this.age >= this._mature_Age && this.age <= this._Death){
      // this.fruits(random)
      while(this._fruits.length < random){
        this._fruits.push(this.getfruit())
      }
      
    }
  }
  getfruit(){
    return new Fruit()
  }

  // Get some fruits
  harvest () {
    let badcount = 0
    let goodcount = 0
    for(var i = 0 ; i < this.fruits.length; i++ ){
      if(this.fruits[i].quality == 'good'){
        goodcount++
      }else if (this.fruits[i].quality == "bad"){
        badcount++
      }
    }
    this._harvested = `${this._fruits.length} (${goodcount} good, ${badcount} bad)`
    this._fruits = []

  }
}

class Fruit {
  // Produce a mango
  constructor () {
    this.quality  = this.generateQuality()
    
  }
  generateQuality(){
    const arr = ["good","bad"]
    var Random = Math.floor(Math.random()*arr.length)
    return arr[Random]
  }
}



   


// Release 1
class AppleTree extends FruitTree {
  constructor(){
    super()
    this._mature_Age = 10
    this._Stop_Grow = 15
    this._Death = 20
    this._min_height = 1
    this._max_height = 5
  }
  getfruit(){

    return new Apple()
  }
}
class Apple extends Fruit {}

// Release 2
class MangoTree extends FruitTree {
  constructor(){
    super()
    this._mature_Age = 10
    this._Stop_Grow = 17
    this._Death = 22
    this._min_height = 2
    this._max_height = 7
  }
  getfruit(){
    return new Mango()
  }
  
}
class Mango extends Fruit{}

class PearTree extends FruitTree {
  constructor(){
    super()
    this._mature_Age = 15
    this._Stop_Grow = 20
    this._Death = 25
    this._min_height = 1
    this._max_height = 3
  }
  getfruit(){
    return new Pear()
  }
  
}
class Pear extends Fruit{}

let mangoTree = new MangoTree()
do {
mangoTree.grow();
 mangoTree.produceFruits();
//  console.log(mangoTree.getfruit())
mangoTree.harvest();

console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree._harvested}`)
} while (mangoTree.healthStatus != false)

let appleTree = new AppleTree()
do {
appleTree.grow();
 appleTree.produceFruits();
 // console.log(appleTree.fruits)
appleTree.harvest();
console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} m | Fruits harvested = ${appleTree._harvested}`)
} while (appleTree.healthStatus != false)

let pearTree = new PearTree()
do {
pearTree.grow();
 pearTree.produceFruits();
 // console.log(pearTree.fruits)
pearTree.harvest();
console.log(pearTree.healthStatus)
console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} m | Fruits harvested = ${pearTree._harvested}`)
} while (pearTree.healthStatus != false)