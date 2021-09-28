import { Weapon } from './weapon.js';

class Person {
    constructor() {
        this.name = '';
        this.imageSrc = '';
        this.hitPoints = 0;
        this.strength = 0;
    }

    isAlive() {
        return this.hitPoints > 0;
    }

}

export class Character extends Person {
    constructor() {
        super();
        this.hitPoints = 50;
        this.strength = 20;
        this.weapon = null;
    }

    isAlive() {
        return super.isAlive() && this.strength > 0;
    }

    attack(target, defaultHitDamage) {
        if (!this.isAlive()) {
            throw Error('Character not alive, cannot attack again');
        }
        const damageFactor = Math.round(this.strength * 0.2);
        let hitPointsAfterAttack = this.weapon !== null ?
            target.hitPoints - this.weapon.getHitDamage() * damageFactor :
            target.hitPoints - defaultHitDamage;

        if (target instanceof Character) {
            if (hitPointsAfterAttack < 0) {
                hitPointsAfterAttack = 0;
            }
            target.setHitPoints(hitPointsAfterAttack)
        }
        return target.hitPoints
    }

    setWeapon(weapon) {
        const isCarriable = this.strength >= weapon.reqStrength;
        if (weapon instanceof Weapon && isCarriable) {
            this.weapon = weapon;
        }
        return isCarriable;
    }

    setHitPoints(hitpoints) {
        this.hitPoints = hitpoints;
    }
}
