import { getRandomNumberFromRange } from './utilis.js';

export class Weapon {
    constructor(name, minDamage, maxDamage, reqStrength) {
        this.name = name;
        this.minDamage = minDamage;
        this.maxDamage = maxDamage;
        this.reqStrength = reqStrength;
    }

    getHitDamage() {
        return getRandomNumberFromRange(this.minDamage, this.maxDamage);
    }
}
