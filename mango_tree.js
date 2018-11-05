"use strict"

// Release 0

class FruitTree {

  // Initialize a new FruitTree
  constructor (maxAge, maxGrow, matureAge) {
    this._ages = 0;
    this._heights = 0;
    this._fruits = [];
    this._harvested = 0;
    this._healthStatus = true;
    this._maxAge = maxAge;
    this._maxGrow = maxGrow;
    this._matureAge = matureAge;
  }

  get age () {
    return this._ages;
  }

  get height () {
    return this._heights;
  }
  
  get fruits () {
    return this._fruits;
  }

  get healthStatus () {
    return this._healthStatus;
  }

  get harvested () {
    return this._harvested;
  }

  // Get current states here
  
  // Grow the tree
  grow () {
    this._ages += 1;
    if (this._ages <= this._maxGrow) {
      this._heights += Number(Math.floor(Math.random() * 100));
    }
    if (this._ages == this._maxAge) {
      this._healthStatus = false;
    }
  }
  
  // Produce some fruits
  produceFruits () {
    this._fruits = [];
    if (this._ages >= this._matureAge && this._ages <= this._maxAge) {
      this._harvested = Math.floor((Math.random() * 10) + 1)
    }
    
    for (let i = 0; i < this._harvested; i++) {
      var random = Math.round(Math.random());
      var fruit = new Fruit(random);
      this._fruits.push(fruit.quality);
    }
  }
  
  // Get some fruits
  harvest () {
    var countGood = 0
    for (let i = 0; i < this._fruits.length; i++) {
      if (this._fruits[i] === 'good') {
        countGood++;
      }
    }
    this._harvested = `${this._fruits.length} (${countGood} good, ${this._fruits.length - countGood} bad)`
  }
  
}

const arr = ['good', 'bad'];
class Fruit {
  // Produce a fruit
  constructor (quality) {
    this.quality = arr[quality]
  }
}


// driver code untuk release 0
let fruitTree = new FruitTree(20, 10, 5)
// console.log(`The tree is alive! :smile:`);
do {
  fruitTree.grow();
  fruitTree.produceFruits();
  fruitTree.harvest();
  // console.log(`[Year ${fruitTree.age} Report] Height = ${fruitTree.height} cm | Fruits harvested = ${fruitTree.harvested}`)
} while (fruitTree.healthStatus != false)
// console.log(`The tree has met its end. :sad:`);

// Release 1
class AppleTree extends FruitTree{
  constructor(maxAge, maxGrow, matureAge) {
    super();
    this._maxAge = maxAge;
    this._maxGrow = maxGrow;
    this._matureAge = matureAge
  }
}
class Apple extends Fruit{
  constructor() {
    super()
  }
}

let appleTree = new AppleTree(15, 10, 4)
console.log(`The tree is alive! :smile:`);
do {
  appleTree.grow();
  appleTree.produceFruits();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} cm | Apples harvested = ${appleTree.harvested}`)
} while (appleTree.healthStatus != false)
console.log(`The tree has met its end. :sad:`);

// Release 2
class MangoTree extends FruitTree{
  constructor(maxAge, maxGrow, matureAge) {
    super();
    this._maxAge = maxAge;
    this._maxGrow = maxGrow;
    this._matureAge = matureAge
  }
}
class Mango extends Fruit{
  constructor() {
    super()
  }
}

let mangoTree = new MangoTree(25, 15, 5)
console.log(`The tree is alive! :smile:`);
do {
  mangoTree.grow();
  mangoTree.produceFruits();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} cm | Mangoes harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)
console.log(`The tree has met its end. :sad:`);

class PearTree extends FruitTree{
  constructor(maxAge, maxGrow, matureAge) {
    super();
    this._maxAge = maxAge;
    this._maxGrow = maxGrow;
    this._matureAge = matureAge
  }
}
class Pear extends Fruit{
  constructor() {
    super()
  }
}

let pearTree = new PearTree(13, 8, 3)
console.log(`The tree is alive! :smile:`);
do {
  pearTree.grow();
  pearTree.produceFruits();
  pearTree.harvest();
  console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} cm | Pears harvested = ${pearTree.harvested}`)
} while (pearTree.healthStatus != false)
console.log(`The tree has met its end. :sad:`);
