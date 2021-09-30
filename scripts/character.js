import { Weapon } from './weapon.js';

class Person {
    constructor() {
        this.name = '';
        this.image = '';
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
        console.log((isCarriable));
        if (weapon instanceof Weapon && isCarriable) {
            this.weapon = weapon;
        }
        return isCarriable;
    }

    setName(name) {
        this.name = name;
    }

    setType(type) {
        this.type = type;
    }

    setImage(image) {
        this.image = image;
    }

    setHitPoints(hitPoints) {
        this.hitPoints = hitPoints;
    }

    setHtmlElement(htmlElement) {
        this.htmlElement = htmlElement;
    }
}

export class Hero extends Character {
    constructor() {
        super();
        this.hitPoints = 150;
        this.strength = 50;
    }
}

export class Villain extends Character {
    constructor() {
        super();
        this.hitPoints = 100;
        this.strength = 40;
    }
}
export function createHtmlCharacter(character) {

    if (character instanceof Character) {
        const characterContainer = document.createElement('div');
        characterContainer.classList.add('character', 'nes-container');

        if (character.weapon === undefined) {
            debugger;
        }

        characterContainer.innerHTML = `
                <h2 class="name">${character.name}</h2>
                <div class="avatar__wrapper">
                <img class="avatar" src="${character.image}" alt="hero-avatar">
                </div>
                <div class="details__wrapper">
                <p>Weapon: <span class="nes-text is-warning">${character.weapon.name}</span></p>
                <p>Strength: <span class="nes-text is-success">${character.strength}</span></p>
                <p>HitPoints: <span class="nes-text is-error">${character.hitPoints}</span></p>
                </div>
                <progress class="nes-progress is-error" value="${character.hitPoints}" max="${character.hitPoints}"></progress>
        `;



        return characterContainer;
    }
    return null;
}



