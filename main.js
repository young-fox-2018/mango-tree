const FruitTree = require('./fruit_tree')
const AppleTree = require('./apple_tree')
const MangoTree = require('./mango_tree')
const PearTree = require('./pear_tree')

function fruits() {
    console.log(`The fruitTree is alive!`)
    let fruitTree = new FruitTree()
    do {
        fruitTree.grow();
        fruitTree.produceFruits();
        fruitTree.harvest();
        console.log(`[Year ${fruitTree.age} Report] Height = ${fruitTree.height} | Fruits harvested = ${fruitTree.harvested}`)
    } while (fruitTree.healthStatus != false)
    console.log(`The fruitTree has met its end`)
}

function apple() {
    console.log(`The appleTree is alive!`)
    let appleTree = new AppleTree()
    do {
        appleTree.grow();
        appleTree.produceApples();
        appleTree.harvest();
        console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
    } while (appleTree.healthStatus != false)
    console.log(`The appleTree has met its end`)
}

function mango() {
    console.log(`The mangoTree is alive!`)
    let mangoTree = new MangoTree()
    do {
        mangoTree.grow();
        mangoTree.produceMangoes();
        mangoTree.harvest();
        console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
    } while (mangoTree.healthStatus != false)
    console.log(`The mangoTree has met its end`)
}

function pear() {
    console.log(`The pearTree is alive!`)
    let pearTree = new PearTree()
    do {
        pearTree.grow();
        pearTree.producePears();
        pearTree.harvest();
        console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Fruits harvested = ${pearTree.harvested}`)
    } while (pearTree.healthStatus != false)
    console.log(`The pearTree has met its end`)
}

fruits()
apple()
mango()
pear()