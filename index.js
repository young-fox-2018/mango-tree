let FruitTree = require("./FruitTree.js")
let AppleTree = require("./AppleTree.js")
let PearTree = require("./PearTree.js")
let MangoTree = require("./MangoTree.js")

console.log("\n"+ "-----FRUITS TREE-----")
console.log("The tree is alive! :smile:")
let fruitTree = new FruitTree(10,15,20)

do {
  fruitTree.grow();
  fruitTree.produceFruits();
  fruitTree.harvest();
  console.log(`[Year ${fruitTree.age} Report] Height = ${fruitTree.height.toFixed(2)} m | Fruits harvested = ${fruitTree.harvested}`)
} while (fruitTree.healthStatus !== false)

console.log("The tree has met its end. :sad:")

// ---------------------------MANGO TREE--------------------------------------//

console.log("\n"+ "-----MANGO TREE-----")
console.log("The tree is alive! :smile:")
let mangoTree = new MangoTree(2,5,15)

do {
  mangoTree.grow();
  mangoTree.produceFruits();
  mangoTree.harvest();
  //console.log(mangoTree)
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height.toFixed(2)} m | Mango harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus !== false)

console.log("The tree has met its end. :sad:")


// -----------------------APPLE TREE------------------------------------//
  
  console.log("\n"+ "-----APPLE TREE-----")
  console.log("The tree is alive! :smile:")
  let appleTree = new AppleTree(5,10,15)
  
  do {
    appleTree.grow();
    appleTree.produceFruits();
    appleTree.harvest();
    // console.log(appleTree)
    console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height.toFixed(2)} m | Apple harvested = ${appleTree.harvested}`)
  } while (appleTree.healthStatus !== false)
  
  console.log("The tree has met its end. :sad:")
  
  
// ---------------------------PEAR TREE--------------------------------------//

console.log("\n"+ "-----PEAR TREE-----")
console.log("The tree is alive! :smile:")
let pearTree = new PearTree(2,3,5)

do {
  pearTree.grow();
  pearTree.produceFruits();
  pearTree.harvest();
  // console.log(pearTree)
  console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height.toFixed(2)} m | Mango harvested = ${pearTree.harvested}`)
} while (pearTree.healthStatus !== false)

console.log("The tree has met its end. :sad:")
