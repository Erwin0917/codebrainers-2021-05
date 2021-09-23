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
