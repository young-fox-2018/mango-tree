
// "use strict"
const goodBad = ['GOOD', 'BAD']
//! BAPAK
  class FruitTree {
    
    constructor (matreAge) {
    this._age = 0
    this._height = 0
    this._fruits = []
    this._harvested = 0
    this._healthStatus = true
  }

  get age () {
    return this._age
  }

  get height () {
    return this._height
  }

  get fruits () {
    return this._fruits
  }

  get healthStatus () {
    return this._healthStatus
  }

  get harvested () {
    return this._harvested
  }

  // Get current states here

  // Grow the tree
  grow () {
    
    if(this._age !== this._die) {
      this._age += 1
    } 
    if(this._age <= this._stopGrowAge) {
      this._height += Math.floor(Math.random()*6)
    }

    if(this._age === this._die) {
      this._healthStatus = false
    }

  }

  // Produce some mangoes
  produceFruit () {

    if(this.age >= this._matureAge){
      let random = Math.floor(Math.random()*8)
      this._fruits = []
      for(let i = 0; i <= random; i++) {
        this._fruits.push(this.getfruit())
      }
    }
  }

  // Get some fruits
  harvest () {
    let buah = this._fruits
    let good = 0
    let bad = 0
    for(let i = 0; i < buah.length; i++) {
      if(buah[i].quality === 'GOOD'){
        good += 1
      } else {
        bad += 1
      }
    }

    this._harvested = buah.length + ' (' + String(good) + ' good ' + String(bad) + ' bad)'
  }
  getfruit(){
    return new Fruit
  }
}

class Fruit {
  constructor () {
    this.quality = goodBad[Math.floor(Math.random()*2)]
  }
}


//! BUAH MANGGA

class MangoTree extends FruitTree{
  constructor () {
    super()
    this._matureAge = 2
    this._stopGrowAge = 6
    this._die = 10
    this._kindFruit = 'Mango'
  }

  getfruit () {
    return new Mango()
  }
}

class Mango extends Fruit{
  // Produce a mango
}




//! BUAH APEL

class AppleTree extends FruitTree{
  constructor () {
    super()
    this._matureAge = 3
    this._stopGrowAge = 8
    this._die = 11
    this._kindFruit = 'Apple'
  }

  getfruit () {
    return new Apple()
  }
}

class Apple extends Fruit{
  
}

//! BUAR PIR

class PearTree extends FruitTree{
  constructor () {
    super()
    this._matureAge = 5
    this._stopGrowAge = 9
    this._die = 13
    this._kindFruit = 'Pear'
  }

  getfruit () {
    return new Pear()
  }
}

class Pear extends Fruit{
  
}

//! LOOPING MANGO
  let mangoTree = new MangoTree()
  do {
  mangoTree.grow();
  mangoTree.produceFruit();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
  } while (mangoTree.healthStatus != false)


//! LOOPING APPEL
let treeApel = new AppleTree()
do {
treeApel.grow();
treeApel.produceFruit();
treeApel.harvest();
console.log(`[Year ${treeApel.age} Report] Height = ${treeApel.height} | Fruits harvested = ${treeApel.harvested}`)
} while (treeApel.healthStatus != false)


//! LOOPING PEAR
let treePear = new PearTree()
do {
treePear.grow();
treePear.produceFruit();
treePear.harvest();
console.log(`[Year ${treePear.age} Report] Height = ${treePear.height} | Fruits harvested = ${treePear.harvested}`)
} while (treePear.healthStatus != false)
