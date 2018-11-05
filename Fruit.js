class Fruit {
    // Produce a mango
    constructor () {
        this.quality = this.randomQuality();
    }

    randomQuality() {
        let binary = Math.round(Math.random());

        if (binary === 0) {
        return 'bad'
        } else {
        return 'good'
        }
    }
}

module.exports = Fruit;