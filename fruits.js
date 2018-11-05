class Fruits {
    // Produce a mango
    constructor() {
        this.quality = this.getQuality()
    }

    getQuality() {
        if (Math.random() < 0.5) {
            return 'good'
        } else {
            return 'bad'
        }
    }

}

module.exports = Fruits