import {Character, createHtmlCharacter, Hero, Villain} from './character.js';
import {Weapon} from "./weapon.js";

export class GameBoard {
    maxTeamLength = 5;

    constructor() {
        this.characters = [];
        this.heroesTeam = [];
        this.villainsTeam = [];

        this.heroTeamHtmlWrapper = document.getElementById('hero-team');
        this.villainTeamHtmlWrapper = document.getElementById('villain-team');
    }

    readStorage() {
        const charactersFromLocalStorage = JSON.parse(localStorage.getItem('characters'));

        if (charactersFromLocalStorage === null) {
            return;
        }

        if (Array.isArray(charactersFromLocalStorage)) {
            charactersFromLocalStorage.forEach(character => {
                const newWeapon = new Weapon(
                    character.weapon.name,
                    character.weapon.minDamage,
                    character.weapon.maxDamage,
                    character.weapon.reqStrength
                );

                const newCharacter = {
                    name: character.name,
                    hitPoints: character.hitPoints,
                    strength: character.strength,
                    weapon: newWeapon,
                    img: character.image
                };
                character.type === 'Hero' ? this.addCharacterToBoard(new Hero(newCharacter)) : this.addCharacterToBoard(new Villain(newCharacter));

            })
        }

    }

    isTeamAlive(team){

        return team.some(character => character.isAlive());
    }

    addCharacterToBoard(character) {

        if (character instanceof Character === false) {
            alert('The person is not instance of Character class');
            return false;
        }

        character.onRemove = this.removeCharacterFromBoard;

        const localStorage = window.localStorage;

        if (character instanceof Hero) {

            if (this.heroesTeam >= this.maxTeamLength) {
                alert('Team Hero is full, delete a character or pick another team')
                return false;
            }
            this.heroesTeam.push(character);
        }

        if (character instanceof Villain) {
            if (this.villainsTeam >= this.maxTeamLength) {
                alert('Team Villain is full, delete a character or pick another team')
                return false;
            }
            this.villainsTeam.push(character);
        }

        this.renderCharacters();

        localStorage.setItem('characters', JSON.stringify([...this.heroesTeam, ...this.villainsTeam]))
        return true;
    }

    removeCharacterFromBoard = (character) => {
        if (character instanceof Hero) {
            this.heroesTeam = this.heroesTeam.filter(hero => hero.id !== character.id);
        }

        if (character instanceof Villain) {
            this.villainsTeam = this.villainsTeam.filter(hero => hero.id !== character.id);
        }

        this.renderCharacters();
    }

    renderCharacters = () => {
        this.heroTeamHtmlWrapper.innerHTML = '';
        this.heroesTeam.forEach(character => {
            const htmlCharacter = createHtmlCharacter(character);
            this.heroTeamHtmlWrapper.appendChild(htmlCharacter);
            character.setHtmlElement(htmlCharacter);

        });
        this.villainTeamHtmlWrapper.innerHTML = '';
        this.villainsTeam.forEach(character => {
            const htmlCharacter = createHtmlCharacter(character);
            this.villainTeamHtmlWrapper.appendChild(htmlCharacter);
            character.setHtmlElement(htmlCharacter);
        });
    }

    startGame = async () => {
        if (this.validBoard() === false) {
            console.log('Board validation failed')
            return;
        }

        let i = 0;


        while (this.isTeamAlive(this.villainsTeam) && this.isTeamAlive(this.heroesTeam)) {
            this.task(i);
            await timeOut;
            i++;
        }
    }
    task(i){
            console.log('battle');
            this.heroesTeam.forEach((hero, index) => {
                console.log('battle123');
                const villain = this.villainsTeam[index];
                this.duel(hero, villain, hero.name, villain.name);
                this.renderCharacters();
            })
    }
    validBoard() {
        return this.heroesTeam.length === this.villainsTeam.length;
    }

    attack = (attacker, target, attackerName, targetName) => {
            if (attacker.isAlive()) {
                console.log(attackerName, ' attacks: ');
                attacker.attack(target, 2);
                console.log(`${targetName} after ${attackerName}'attack ${target.hitPoints}`);
                if (!target.isAlive()) {
                    console.log(targetName, 'is dead');
                }
            }
        }

    duel = (attacker, target, attackerName, targetName) => {
            this.attack(attacker, target, attackerName, targetName);
            this.attack(target, attacker, targetName, attackerName);
        }
}
const timeOut = new Promise(resolve => {
    setTimeout(resolve, 200);

});
