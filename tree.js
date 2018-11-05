
class FruitTree {
    constructor(age = 0, height = 0, matureAge, stopGrow, dead) {
        this._age = age
        this._height = height
        this._fruits = ""
        this._harvest = ""
        this._healthStatus = true
        this.matureAge = matureAge
        this.stopGrow = stopGrow
        this.dead = dead
    }
    set age(param) {
        this._age += param
    }
    get age() {
        return this._age
    }
    set height(param) {
        this._height += param
    }

    get height() {
        return this._height.toFixed(2)
    }
    set fruits(fruits) {
        this._fruits = fruits
    }
    get fruits() {
        return this._fruits
    }

    set healthStatus(param) {
        this._healthStatus = param
    }
    get healthStatus() {
        return this._healthStatus
    }
    set harvested(param) {
        this._harvest = param
    }

    get harvested() {
        return this._harvest
    }

}
module.exports = FruitTree