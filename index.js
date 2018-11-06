"use strict"

const FruitTree = require('./FruitTree')
const AppleTree = require('./AppleTree')
const MangoTree = require('./MangoTree')
const PearTree = require('./PearTree')

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


// //------------------------------------------------------------------//

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


//   //------------------------------------------------------------------//
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