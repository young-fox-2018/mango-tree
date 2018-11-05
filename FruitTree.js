"use strict"

class  FruitTree {
    constructor (age, height, healthStatus, stopGrowingAge, deadAge, matureAge) {
        this._age = age
        this._height = height
        this.totalFruits = 0
        this._fruits = []
        this._goodharvested = 0
        this._badHarvested = 0
        this._healthStatus = healthStatus
        this._stopGrowingAge = stopGrowingAge
        this._deadAge = deadAge
        this._matureAge = matureAge
    }
  
     getFruit() {
        return new Fruit()
    }

    get fruits() {
        return this._fruits
    }
    
    set fruits(input) {
        this._fruits = input
    }
    get height() {
        return this._height

    }

    set height(input) {
        this._height += input
    }

    get age() {
        return this._age
    }

    set age(input) {
        this._age += input
    }

    get healthStatus() {
        return this._healthStatus
    }
    set healthStatus(input) {
        this._healthStatus = input
    }

    get stopGrowingAge() {
        return this._stopGrowingAge
    }

    set stopGrowingAge(input) {
        this._stopGrowingAge += input
    }

    get matureAge() {
        return this._matureAge
    }

    set matureAge(input) {
        this._matureAge += input
    }
  
    set goodHarvested(input) {
        this._goodharvested = input
    }

    get goodHarvested() {
        return this._goodharvested
    }

    get harvested() {
        return (this.fruits.length + "(" + this.goodHarvested + "good, " + this.badHarvested +" bad)")
    }

    get badHarvested() {
        return this._badHarvested
    }

    set badHarvested(input) {
        this._badHarvested = input
    }

    get deadAge() {
        return this._deadAge
    }

    grow() {
        this.fruits = []
        this.goodHarvested = 0
        this.badHarvested = 0
 
        if (this.age == this.stopGrowingAge) {
            this.age = 1
        }
        else if (this.age <= this.stopGrowingAge) {
            this.height = this.getRandomNumber(20)
            this.age = 1
        } else if (this.age > this.stopGrowingAge && this.age <= this.deadAge) {
            this.age = 1
        } 

        if (this.age >= this.deadAge) {
            this.healthStatus = false
        }
    }

    produce() {
        if (this.age >= this.matureAge && this.age <= this.deadAge) {
            this.totalFruits = this.getRandomNumber(50)

            for (let i = 0; i < this.totalFruits; i++) {
                let fruit = this.getFruit() 
                this.fruits.push(fruit)
            }
        }
    }

    harvest() {
        console.log(this.harvested)
        if (this.age >= this.matureAge && this.age <= this.deadAge) {
            for (let i = 0; i < this.fruits.length; i++) {
                if (this.fruits[i].quality == 'good') {
                    this.goodHarvested += 1
                } else {
                    this.badHarvested += 1
                }
            }
        }
    }

    getRandomNumber(number) {
        return Math.floor(Math.random() * number)
    }
}



class Fruit {
    constructor() {
        this._quality = this.getRandomQuality()
    }

    getRandomQuality() {
        let arr = ['good', 'bad']

        return arr[Math.floor(Math.random() * 2)]
    }

    get quality() {
        return this._quality
    }
}
let fruitTree = new FruitTree(0, 0, true, 40 ,60, 50)

console.log("\n" + "====FRUIT TREE===========")
console.log("The tree is alive")
  do {
    fruitTree.grow();
    fruitTree.produce();
    fruitTree.harvest();
  console.log(`[Year ${fruitTree.age} Report] Height = ${fruitTree.height} | Fruits harvested = ${fruitTree.harvested}`)
  } while (fruitTree.healthStatus != false)

  console.log("The tree has met its end")






  //------------------------------------------------------------------//
class AppleTree extends FruitTree {
    getFruit() {
        return new Fruit()
    }
}

class Apple extends Fruit {

}

let appleTree = new AppleTree(0, 0, true, 40 ,60, 50)

console.log("\n" + "====APPLE TREE===========")
console.log("The tree is alive")
  do {
    appleTree.grow();
    appleTree.produce();
    appleTree.harvest();
    console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
  } while (appleTree.healthStatus != false)

  console.log("The tree has met its end")

  class MangoTree extends FruitTree {
    getFruit() {
        return new Mango()
    }
}



//------------------------------------------------------------------//
class Mango extends Fruit {

}

let mangoTree = new MangoTree(0, 0, true, 40 ,60, 50)

console.log("\n" + "====MANGO TREE===========")
console.log("The tree is alive")
  do {
    mangoTree.grow();
    mangoTree.produce();
    mangoTree.harvest();
    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
  } while (mangoTree.healthStatus != false)

  console.log("The tree has met its end")

  class PearTree extends FruitTree {
    getFruit() {
        return new PearTree()
    }
}

class Pear extends Fruit {

}



//------------------------------------------------------------------//
let pearTree = new PearTree(0, 0, true, 40 ,60, 50)

console.log("\n" + "====PEAR TREE===========")
console.log("The tree is alive")
  do {
    pearTree.grow();
    pearTree.produce();
    pearTree.harvest();
    console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Fruits harvested = ${pearTree.harvested}`)
  } while (pearTree.healthStatus != false)

  console.log("The tree has met its end")