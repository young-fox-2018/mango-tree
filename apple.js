const Fruits = require("./fruits")

class Apple extends Fruits {
    constructor(good, bad) {
        super(good, bad)
    }
}
module.exports = Apple