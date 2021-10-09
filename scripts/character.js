import {generateWeapon, Weapon} from './weapon.js';
import {getRandomNumberFromRange} from "./utilis.js";

export async function getCharacterFromRickAndMortyApi() {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${getRandomNumberFromRange(1, 670)}`);
    return response.json();
}

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

    maxHitPoints;

    constructor({name, hitPoints, strength, weapon, img}) {
        super();
        this.id = Math.random().toString(36).substr(2, 9);
        this.setHitPoints(hitPoints);
        this.setStrength(strength);
        this.setImage(img);
        this.setName(name);
        this.setWeapon(weapon);

        this.onRemove = null;

        this.maxHitPoints = hitPoints;
    }

    isAlive() {
        return super.isAlive() && this.strength > 0;
    }

    attack(target, defaultHitDamage) {
        if (!this.isAlive()) {
            throw Error('Character not alive, cannot attack again');
        }
        const damageFactor = Math.round(this.strength * 0.02);
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
        let isCarriable = this.strength >= weapon.reqStrength;

        while (isCarriable === false) {
            const newWeapon = generateWeapon();
            isCarriable = this.strength >= newWeapon.reqStrength;
        }

        // if (weapon instanceof Weapon && isCarriable) {
        //     this.weapon = weapon;
        // }

        if (isCarriable) {
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

    setStrength(strength) {
        this.strength = strength;
    }

    setHtmlElement = (htmlElement) => {
        this.htmlElement = htmlElement;

        const delButton = this.htmlElement.querySelector('#delete-char');
        if (this.onRemove !== null) {
            delButton.addEventListener('click', () => this.onRemove(this));
        }

    }


}

export class Hero extends Character {
    type = 'Hero';
    constructor({name, hitPoints, strength, weapon, img}) {
        super({name, hitPoints, strength, weapon, img});

    }
}

export class Villain extends Character {
    type = 'Villain';
    constructor({name, hitPoints, strength, weapon, img}) {
        super({name, hitPoints, strength, weapon, img});

    }
}

export function createHtmlCharacter(character) {

    if (character instanceof Character) {
        const characterContainer = document.createElement('div');
        characterContainer.classList.add('character', 'nes-container');


        characterContainer.innerHTML = `
                <h2 class="name" id="char-name">${character.name}</h2>
                <button type="button" class="delete-char" id="delete-char">X</button>
                <div class="avatar__wrapper">
                <img class="avatar" src="${character.image}" alt="hero-avatar">
                </div>
                <div class="details__wrapper">

                <p>Weapon: <span class="nes-text is-warning">${character.weapon.name}</span></p>
                <p>Strength: <span class="nes-text is-success">${character.strength}</span></p>
                <p>HitPoints: <span class="nes-text is-error">${character.hitPoints}</span></p>
                
                </div>
                <progress class="nes-progress is-error" value="${character.hitPoints}" max="${character.maxHitPoints}"></progress>
        `;

        return characterContainer;
    }

    return null;
}



