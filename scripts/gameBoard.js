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

    addCharacterToBoard(character){
        if (character instanceof  Character === false) {
            alert('The person is not instance of Character class');
            return false;
        }

        if (character instanceof Hero) {
            if (this.heroesTeam >= this.maxTeamLength) {
                alert('Team Hero is full, delete a character or pick another team')
                return false;
            }

            const htmlCharacter = createHtmlCharacter(character);
            this.heroTeamHtmlWrapper.appendChild(htmlCharacter);
            this.heroesTeam.push(character);

        }

        if (character instanceof Villain && this.villainsTeam < this.maxTeamLength) {
            if (this.villainsTeam >= this.maxTeamLength) {
                alert('Team Villain is full, delete a character or pick another team')
                return  false;
            }

            const htmlCharacter = createHtmlCharacter(character);
            this.villainTeamHtmlWrapper.appendChild(htmlCharacter);
            this.villainsTeam.push(character);
        }



    }

}
