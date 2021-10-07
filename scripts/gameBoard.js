import { Character, createHtmlCharacter, Hero, Villain } from './character.js';

export class GameBoard {
    maxTeamLength = 5;

    constructor() {
        this.characters = [];
        this.heroesTeam = [];
        this.villainsTeam = [];

        this.heroTeamHtmlWrapper = document.getElementById('hero-team');
        this.villainTeamHtmlWrapper = document.getElementById('villain-team');
    }

    addCharacterToBoard(character) {
        if (character instanceof Character === false) {
            alert('The person is not instance of Character class');
            return false;
        }

        character.onRemove = this.removeCharacterFromBoard;

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
                return  false;
            }
            this.villainsTeam.push(character);
        }
        this.renderCharacters();
    }


    removeCharacterFromBoard = (character) => {
        if (character instanceof Hero) {
            this.heroesTeam = this.heroesTeam.filter( hero => hero.id !== character.id);
        }

        if (character instanceof Villain) {
            this.villainsTeam = this.villainsTeam.filter( hero => hero.id !== character.id);
        }

        this.renderCharacters();
    }

    renderCharacters = () => {
        this.heroTeamHtmlWrapper.innerHTML = '';
        this.heroesTeam.forEach( character => {
            const htmlCharacter = createHtmlCharacter(character);
            this.heroTeamHtmlWrapper.appendChild(htmlCharacter);
            character.setHtmlElement(htmlCharacter);

        });
        this.villainTeamHtmlWrapper.innerHTML = '';
        this.villainsTeam.forEach( character => {
            const htmlCharacter = createHtmlCharacter(character);
            this.villainTeamHtmlWrapper.appendChild(htmlCharacter);
            character.setHtmlElement(htmlCharacter);
        });
    }



}
