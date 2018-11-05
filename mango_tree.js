"use strict"

// Release 0
const Fruit = require('/home/aandroomeedaa/Desktop/hacktiv8/PHASE-1/WEEK-2/day-1/mango-tree/fruit.js')
class FruitTree {

  // Initialize a new MangoTree
  constructor (umur, tinggi, jenisBuah, jumlahBuah, status) {
    this._age = umur || 0;
    this._height = tinggi || 0;
    this._fruitName = jenisBuah || 'Any Fruit';
    this._harvested = jumlahBuah || 0;
    this._healthStatus = status || true;
    this._fruits = [];
    this._maxAge = 20;
    this._maxFruit = 50;
    this.goodQuality = 0;
    this.badQuality = 0;
  }

  get age () {
    return this._age;
  }

  get height () {
    return this._height;
  }

  get fruits () {
    return this._fruitName;
  }

  get healthStatus () {
    return this._healthStatus;
  }

  get harvested () {
    return this._harvested;
  }

  grow () {
    this._age++;
    if (this._age < this._maxAge) {
      this._height += Math.round(Math.random() * 10 + 1);
      return this._healthStatus = true;
    } else {
      return this._healthStatus = false;
    }
  }

  produceFruits () {
    let buah = Math.round(Math.random() * 40 + 10);
    let totalBuah = (buah > this._maxFruit) ? this._maxFruit : buah;
    for (var i = 0; i < totalBuah; i++) {
      let fruit = new Fruit();
      if (fruit.quality === 'Good') {
        this.goodQuality++;
      } else {
        this.badQuality++;
      }
      this._fruits.push(fruit);
    }
  }

  harvest () {
    this._harvested = ` ${this._fruits.length} (${this.goodQuality} good, ${this.badQuality} bad)`;
    this.goodQuality = 0;
    this.badQuality = 0
    this._fruits = [];
  }
}
module.exports = FruitTree
