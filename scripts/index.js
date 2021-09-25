class Person {
    constructor() {
        this.hitPoints = 0;
        this.strength = 0;
    }

    isAlive() {
        return this.hitPoints > 0;
    }

}

class Weapon {
    constructor(minDamage, maxDamage){
        this.minDamage = minDamage;
        this.maxDamage = maxDamage;
    }

    getHitDamage() {
        return Math.floor(Math.random() * (this.maxDamage - this.minDamage + 1) + this.minDamage);
    }
}

class Character extends Person {
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
        if (!this.isAlive()){
            throw Error('Character not alive, cannot attack again');
        }
        let hitPointsAfterAttack = target.hitPoints - defaultHitDamage;
        if (this.weapon !== null) {
            const hitDamage = this.weapon.getHitDamage();
            hitPointsAfterAttack = target.hitPoints - hitDamage;
        }

        if (target instanceof Character) {
            if (hitPointsAfterAttack < 0) {
               hitPointsAfterAttack = 0;
            }
            target.setHitPoints(hitPointsAfterAttack)
        }
        return target.hitPoints
    }

    setWeapon(weapon) {

        if (weapon instanceof Weapon) {
            this.weapon = weapon;
        }

    }

    setHitPoints(hitpoints) {
        this.hitPoints = hitpoints;
    }
}

class Hero extends Character {
    constructor() {
        super();
        this.hitPoints = 150;
        this.strength = 50;
    }
}

class Villain extends Character {
    constructor() {
        super();
        this.hitPoints = 100;
        this.strength = 10;
    }
}




const villain = new Villain();
const hero = new Hero();

const axe = new Weapon(7, 15);
const knife = new Weapon(7, 10);

//console.log(villain);
// hero.attack(villain, 30);
// console.log('After attack', villain);
villain.setWeapon(axe);
hero.setWeapon(knife);

function attack(attacker, target, attackerName, targetName){


    if (attacker.isAlive()) {
        console.log(attackerName, ' attacks: ');
        attacker.attack(target, 2);
        console.log(targetName, ' after ', attackerName, '\'s attack: ', target.hitPoints);
        if(!target.isAlive()){
            console.log(targetName, 'is dead');
        }
    }


}
function duel(attacker, target, attackerName, targetName){
    attack(attacker, target, attackerName, targetName);
    attack(target, attacker, targetName, attackerName);
}

while (hero.isAlive() && villain.isAlive()) {
    duel(hero, villain, 'Hero', 'Villain');
}

