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
    constructor(name) {
        super();
        this.name = name;
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

export function createHtmlCharacter(character) {
    console.log(character);

    if (character instanceof Character) {
        const characterContainer = document.createElement('div');
        characterContainer.classList.add('character', 'nes-container');

        characterContainer.innerHTML = `
                <h2 class="name">${character.name}</h2>
                <div class="avatar__wrapper">
                <img class="avatar" src="${character.imageSrc}" alt="hero-avatar">
                </div>
                <div class="details__wrapper">
                <p>Weapon: <span class="nes-text is-warning">${character.weapon}</span></p>
                <p>Strength: <span class="nes-text is-success">${character.strength}</span></p>
                <p>HitPoints: <span class="nes-text is-error">${character.hitPoints}</span></p>
                </div>
                <progress class="nes-progress is-error" value="${character.hitPoints}" max="${character.hitPoints}"></progress>
        `;

        // const characterHitpoints = document.createElement('progress');
        // characterHitpoints.classList.add('character', 'nes-container');
        //
        // characterHitpoints.value = '150';
        // characterHitpoints.max = '150';
        //
        // characterContainer.appendChild(characterHitpoints);


        return characterContainer;
    }
    return null;
}



