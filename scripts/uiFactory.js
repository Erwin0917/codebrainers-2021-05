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
}