const FruitTree = require("./fruit_tree")
const AppleTree = require("./apple_tree")
const MangoTree = require("./mango_tree")
const PearTree = require("./pear_tree")


let tree = new FruitTree(0, 10, 15) // matureAge, ageStopGrow, deadAge
console.log("The tree is alive! 😁")
do {
  tree.grow();
  tree.produce();
  tree.harvest();
  console.log(`[Year ${tree.age} Report] Height = ${tree.height} | Fruits harvested = ${tree.harvested}`)
} while (tree.healthStatus != false)
console.log("The tree has met its end 😱")

let appleTree = new AppleTree(5, 20, 30)

console.log("The apple tree is alive! 😁")
do {
  appleTree.grow();
  appleTree.produce();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthStatus != false)
console.log("The tree has met its end 😱")


let mangoTree = new MangoTree(2,20,20)

console.log("The mango tree is alive! 😁")
do {
  mangoTree.grow();
  mangoTree.produce();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)
console.log("The tree has met its end 😱")

let pearTree = new PearTree(5, 50, 50)
console.log("The pear tree is alive! 😁")
do {
  pearTree.grow();
  pearTree.produce();
  pearTree.harvest();
  console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Fruits harvested = ${pearTree.harvested}`)
} while (pearTree.healthStatus != false)
console.log("The tree has met its end 😱")


