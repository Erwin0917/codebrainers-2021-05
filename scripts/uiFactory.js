import {generateWeapon} from "./weapon.js";
import {getRandomNumberFromRange} from "./utilis.js";
import {getDataForCharacter} from "./index.js";

export class UiFactory {
    constructor() {
        this.pickTeam = document.querySelector('#default_select')
        this.nameField = document.querySelector('#name');
        this.weaponField = document.querySelector('#weapon');
        this.strengthField = document.querySelector('#strength');
        this.hitpointsField = document.querySelector('#hitpoints');

        this.takenNameError = document.querySelector('#taken-name-error');
        this.weaponError = document.querySelector('#weapon-error');
        this.nameError = document.querySelector('#name-error');
        this.pickTeamError = document.querySelector('#select-team-error');
        this.nameTooShortError = document.querySelector('#too-short-name-error');
        this.weaponNameTooShortError = document.querySelector('#too-short-weapon-name-error');
    }

    clearErrorMessages() {
        this.takenNameError.style.display = 'none';
        this.weaponError.style.display = 'none';
        this.nameError.style.display = 'none';
        this.pickTeamError.style.display = 'none';
        this.nameTooShortError.style.display = 'none';
        this.weaponNameTooShortError.style.display = 'none';
    }

    async refreshInputFields() {
        const randomName = await getDataForCharacter();
        this.nameField.value = randomName.name;
        this.weaponField.value = generateWeapon().name;
        this.strengthField.value = getRandomNumberFromRange(30, 60);
        this.hitpointsField.value = getRandomNumberFromRange(100, 150)
    }

    validField(field, errorOutput, minValueLength) {
        const inputValue = field.value.trim()
        if (inputValue === '' || inputValue.length < minValueLength) {
            errorOutput.style.display = 'block';
            return false;
        }
        return true;
    }
}