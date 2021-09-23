class Person {
    constructor() {
        this.hitPoints = 0;
        this.strength = 0;
    }

    isAlive() {
        return this.hitPoints > 0;
    }

}

class Character extends Person {
    constructor() {
        super();
        this.hitPoints = 50;
        this.strength = 20;
    }

    isAlive() {
        return super.isAlive() && this.strength > 0;
    }

    attack(target, power) {
        let hitPointsAfterAttack = target.hitPoints - power;
        if (target instanceof Character) {
            if (hitPointsAfterAttack < 0) {
               hitPointsAfterAttack = 0;
            }
            target.setHitPoints(hitPointsAfterAttack)
        }
        return target.hitPoints
    }

    setHitPoints(hitpoints){
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
        this.hitPoints = 30;
        this.strength = 10;
    }
}


const villain = new Villain();
const hero = new Hero();

console.log(villain);
hero.attack(villain, 30);
console.log('After attack', villain);

while (hero.isAlive()) {
    console.log(hero);
    villain.attack(hero, 20);
    console.log('After attack', hero);
}

