"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor () {
    this._age = 0;
    this._height =0;
    this._fruits = []
    this._health = true
    this._mature_Age = 15
    this._Stop_Grow = 20
    this._Death = 25
    this._harvested = 0
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
  set healthStatus(data){
    this._health = data
  }

  get harvested () {
    
  }
  
  // Get current states here
  
  // Grow the tree
  grow () {
    let Random = Math.floor(Math.random()*5)
    if(this.age === this._Death){
      
      this.healthStatus = false
    }else{
      this.age += 1
    }
    if(this.age <= this._Stop_Grow)
    this.height+= Random
    
  }

  // Produce some mangoes
  produceMangoes () {
    let random = Math.floor(Math.random()*20)
    if(this.age >= this._mature_Age && this.age <= this._Death){
      // this.fruits(random)
      while(this._fruits.length < random){
        this._fruits.push(new Mango())
      }
      
    }
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

class Mango {
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



   
   let mangoTree = new MangoTree()
   do {
   mangoTree.grow();
    mangoTree.produceMangoes();
    // console.log(mangoTree.fruits)
  mangoTree.harvest();
   console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree._harvested}`)
  } while (mangoTree.healthStatus != false)


// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree extends mangoTree {}
class Fruit extends Mango{}
