class Fruits {
    constructor(good, bad) {
        this.total = this.total(good, bad)
        this.good = good
        this.bad = bad
    }
    total(good, bad) {
        return good + bad
    }
}
module.exports = Fruits