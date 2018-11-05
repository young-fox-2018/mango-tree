const Fruit = require('./Fruit.js');

class FruitTree {
    constructor() {
        this._age = 0,
        this._height = 0,
        this._fruits = [],
        this._health = true,
        this._harvested = ''
        this._mature_age = 5,
        this._stop_grow = 15,
        this._die = 20,
        this._min = 1,
        this._max = 5
    }

    get age () {
        return this._age;
    }

    get height () {
    return this._height.toFixed(2);
    // return this._height;
    }

    get fruits () {
    return this._fruits
    }

    get healthStatus () {
    return this._health;
    }

    get mature_age () {
    return this._mature_age;
    }

    get harvested () {

    return `${this._harvested.total} (${this._harvested.good} good, ${this._harvested.bad} bad)`;
    }

    get stop_grow() {
    return this._stop_grow;
    }
    
    get die() {
    return this._die;
    }

    set age (age) {
    this._age = age;
    }

    set height (height) {
    this._height = height;
    }

    set healthStatus(health) {
    this._health = health;
    }

    set fruits(fruit) {
    this._fruits = fruit;
    }

    set harvested(obj) {
    this._harvested = obj;
    }

    getFruits() {
        return new Fruit();
    }

    grow () {
        this._age++;
        if (this.age < this.stop_grow) {
            this._height = this._height + this.getRandomInt(this._min, this._max);
        }

        if (this.age >= this.die) {
            this.healthStatus = false;
        }
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.random() * (max - min) + min; }

    // Produce the fruits
    produce () {
        if (this.age >= this.mature_age) {
            let fruits = Math.floor(Math.random() * 10) + 1;

            for (let i = 0; i < fruits; i++) {            
            this._fruits.push(this.getFruits());
            }
        }
    }
    
    harvest () {
        let countGood = 0;
        let countBad = 0;
        for (let i = 0; i < this.fruits.length; i++) {
          if (this.fruits[i].quality === 'good') {
            countGood++;
          } else {
            countBad++;
          }
        }
    
        this.harvested = {total: this.fruits.length, good: countGood, bad: countBad};
    
        this.fruits.length = 0;
      }
}

module.exports = FruitTree;