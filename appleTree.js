const Tree = require("./tree")
const Apple = require("./apple")

class AppleTree extends Tree {
    constructor() {
        super()
        this.matureAge = 4
        this.stopGrow = 12
        this.dead = 25
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
    produceApple() {
        let GOOD = 0
        let BAD = 0
        if (this.age >= this.matureAge) {
            for (let i = 0; i < this.randomFruit(); i++) {
                let data = Math.floor(Math.random() * 2)
                if (data === 1) GOOD++
                else BAD++
            }
        }
        let buah = new Apple(GOOD, BAD)
        this.fruits = buah
    }

    harvest() {
        this.harvested = `${this.fruits.total} ( GOOD: ${this.fruits.good} BAD:${this.fruits.bad})`
        this._fruits = ""
    }

}

// * driver code untuk release 0
console.log("=== Apple Tree =====");

let appleTree = new AppleTree()
do {
    appleTree.grow();
    appleTree.produceApple();
    appleTree.harvest();
    console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthStatus != false)
