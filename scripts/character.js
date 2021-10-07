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
    constructor(name, hitPoints, strength, weapon, img) {
        super();
        this.setHitPoints(hitPoints);
        this.setStrength(strength);
        this.setImage(img);
        this.setName(name);
        this.setWeapon(weapon);
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
        console.log(isCarriable);

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

    setStrength(strength) {
        this.strength = strength;
    }

    setHtmlElement(htmlElement) {
        this.htmlElement = htmlElement;
    }
}

export class Hero extends Character {
    constructor(name, hitPoints, strength, weapon, img) {
        super(name, hitPoints, strength, weapon, img);
        // this.hitPoints = getRandomNumberFromRange(100, 150);
        // this.strength = getRandomNumberFromRange(30, 60);
    }
}

export class Villain extends Character {
    constructor(ame, hitPoints, strength, weapon, img) {
        super(name, hitPoints, strength, weapon, img);
        // this.hitPoints = 100;
        // this.strength = 40;
    }
}

export function createHtmlCharacter(character) {

    if (character instanceof Character) {
        const characterContainer = document.createElement('div');
        characterContainer.classList.add('character', 'nes-container');


        characterContainer.innerHTML = `
                <h2 class="name" id="char-name">${document.querySelector('#name').value}</h2>
                <button type="button" class="delete-char" id="delete-char">X</button>
                <div class="avatar__wrapper">
                <img class="avatar" src="${character.image}" alt="hero-avatar">
                </div>
                <div class="details__wrapper">

                <p>Weapon: <span class="nes-text is-warning">${document.querySelector('#weapon').value}</span></p>
                <p>Strength: <span class="nes-text is-success">${document.querySelector('#strength').value}</span></p>
                <p>HitPoints: <span class="nes-text is-error">${document.querySelector('#hitpoints').value}</span></p>
                
                </div>
                <progress class="nes-progress is-error" value="${character.hitPoints}" max="${character.hitPoints}"></progress>
        `;

        return characterContainer;
    }

    return null;
}



