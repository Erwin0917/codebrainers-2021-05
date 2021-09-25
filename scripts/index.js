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
        if (this.weapon instanceof Weapon) {
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

console.log(villain);
// hero.attack(villain, 30);
// console.log('After attack', villain);
villain.setWeapon(axe);
hero.setWeapon(knife);


while (hero.isAlive() && villain.isAlive()) {
    console.log('---------------------------------------------------');
    console.log('Villain attack: ');

    if (villain.isAlive()) {
        villain.attack(hero, 2);
    }
    console.log('Hero after villain attack: ', hero.hitPoints);


    console.log('Hero attack: ');
    if (hero.isAlive()) {
        hero.attack(villain, 2);
    }
    console.log('Villain after Hero attack: ', villain.hitPoints);
}

