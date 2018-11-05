

class Fruit {
    constructor() {
        this._quality = this.qualityCheck()
    }
    qualityCheck() {
        let random = Math.round(Math.random())
        if (!random) {
            return `Good`
        } else {
            return `Bad`
        }
    }
}

module.exports = Fruit
