const Tree = require("./tree")
const Pear = require("./pear")

class PearTree extends Tree {
    constructor() {
        super()
        this.matureAge = 6
        this.stopGrow = 17
        this.dead = 27
    }

    randomFruit() {
        return Math.random() * 20
    }

    grow() {
        this.age = 1
        if (this._age < this.stopGrow) {
            this.height = Math.random() * 2 + 1
        }
        if (this._age >= this.dead) this._healthStatus = false
    }
    producePear() {
        let GOOD = 0
        let BAD = 0
        if (this.age >= this.matureAge) {
            for (let i = 0; i < this.randomFruit(); i++) {
                let data = Math.floor(Math.random() * 2)
                if (data === 1) GOOD++
                else BAD++
            }
        }
        let buah = new Pear(GOOD, BAD)
        this.fruits = buah
    }

    harvest() {
        this.harvested = `${this.fruits.total} ( GOOD: ${this.fruits.good} BAD:${this.fruits.bad})`
        this._fruits = ""
    }

}

// * driver code untuk release 0
console.log("=== Pear Tree =====");

let pearTree = new PearTree()
do {
    pearTree.grow();
    pearTree.producePear();
    pearTree.harvest();
    console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Fruits harvested = ${pearTree.harvested}`)
} while (pearTree.healthStatus != false)
