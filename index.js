"use strict"

const MangoTree = require('./mango_tree')
const AppleTree = require('./apple_tree')
const PearTree = require('./pear_tree')

let mangoTree = new MangoTree()
console.log('Mango Tree')
do {
  mangoTree.grow()
  mangoTree.produceMangoes()
  mangoTree.harvest()
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)

console.log('')

let appleTree = new AppleTree()
console.log('Apple Tree')
do {
  appleTree.grow()
  appleTree.produceApples()
  appleTree.harvest()
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthStatus != false)

console.log('')

let pearTree = new PearTree()
console.log('Pear Tree')
do {
  pearTree.grow()
  pearTree.producePears()
  pearTree.harvest()
  console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Fruits harvested = ${pearTree.harvested}`)
} while (pearTree.healthStatus != false)