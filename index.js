const MangoTree = require('./MangoTree.js')
const AppleTree = require('./AppleTree.js')
const PearTree = require('./PearTree.js')
// const PearTree = require('./PearTree.js')

console.log("\n"+ "-----MANGO Tree ----")
console.log("The tree is alive! :smile:")
 let mangoTree = new MangoTree(15,20)
  do {
    mangoTree.grow();
    mangoTree.produceFruits();   
    mangoTree.harvest();   
    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height.toFixed('1')} m | ${mangoTree.name} harvested = ${mangoTree.harvested}`)
  } while (mangoTree.healthStatus != false)
console.log("The tree has met its end. :sad:")


console.log("\n"+ "-----Apple Tree-----")
console.log("The tree is alive! :smile:")
 let appleTree = new AppleTree(15,20)
  do {
    appleTree.grow();
    appleTree.produceFruits();   
    appleTree.harvest();   
    console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height.toFixed('1')} m | ${appleTree.name} harvested = ${appleTree.harvested}`)
  } while (appleTree.healthStatus != false)
console.log("The tree has met its end. :sad:")

console.log("\n"+ "-----Pear Tree-----")
console.log("The tree is alive! :smile:")
 let pearTree = new PearTree(15,20)
  do {
    pearTree.grow();
    pearTree.produceFruits();   
    pearTree.harvest();   
    console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height.toFixed('1')} m | ${pearTree.name} harvested = ${pearTree.harvested}`)
  } while (pearTree.healthStatus != false)
console.log("The tree has met its end. :sad:")
