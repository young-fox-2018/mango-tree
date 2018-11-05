const MangoTree = require('./mango_tree')
const AppleTree = require('./apple_tree')
const PearTree = require('./pear_tree')

//driver code untuk release 0
console.log('============ MANGO-TREE ==============')
let mangoTree = new MangoTree(5, 15, 20)
do {
    mangoTree.grow();
    mangoTree.produceFruits();
    mangoTree.harvest();
    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)
console.log('============ APPLE-TREE ==============')
let appleTree = new AppleTree(7, 17, 30)
do {
    appleTree.grow();
    appleTree.produceFruits();
    appleTree.harvest();
    console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} m | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthStatus != false)
console.log('============ PEAR-TREE ==============')
let pearTree = new PearTree(3, 13, 19)
do {
    pearTree.grow();
    pearTree.produceFruits();
    pearTree.harvest();
    console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} m | Fruits harvested = ${pearTree.harvested}`)
} while (pearTree.healthStatus != false)

