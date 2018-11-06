"use strict"

class Fruit {
    constructor() {
        this._quality = this.getRandomQuality()
    }

    getRandomQuality() {
        let arr = ['good', 'bad']

        return arr[Math.floor(Math.random() * 2)]
    }

    get quality() {
        return this._quality
    }
}

module.exports = Fruit