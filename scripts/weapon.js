import { getRandomNumberFromRange } from './utilis.js';

export class Weapon {
    constructor(name, minDamage, maxDamage, reqStrength) {
        this.name = name;
        this.minDamage = minDamage;
        this.maxDamage = maxDamage;
        this.reqStrength = reqStrength;
    }

    getHitDamage() {
        return getRandomNumberFromRange(this.minDamage, this.maxDamage);
    }
}
const weaponNames = ['Scourge', 'Deathbringer', 'Blade of Darkness', 'Soul Eater', 'Bloodbath', 'Scarlet Delirium', 'Perpetual Gloom', 'Nightfall', 'Doomsday', 'Final Reckoning', 'Bleak Eradicator', 'Dread Devourer', 'Hideous Dissector', 'Timeless Twilight', 'Gruesome Carnage', 'Shadow of Death', 'Chaos Conqueror', 'Vicious Catastrophe', 'Frostreaper', 'Foul Mutilator', 'Havocfang', 'Widowmaker', 'Gravedigger', 'Searing Vengeance', 'Grim Despair', 'Ceaseless Torment', 'Executioner', 'Neckchopper', 'Bonesplitter', 'Bane of Existence', 'Viper\'s Bite', 'Eviscerator', 'Merciless Fate', 'Heartsnatcher', 'Worldbreaker\'s Woe', 'Sanguine Thirst', 'Justifier', 'Demented Rampage', 'Great Destroyer', 'Claw of Calamity', 'Decimation', 'Despicable Onslaught', 'Fleshrender', 'Godslayer', 'Shatterskull', 'Crimson Cyclone', 'Blackrazor', 'Unholy Ruin', 'Spirit Crusher', 'Cataclysm', 'Joykiller', 'Facesmasher', 'Baleful Misery', 'Harvester of Sorrow', 'Infernal Rapture', 'Terrorfist', 'Warmonger', 'Decapitator', 'Skinripper', 'Herald of Madness', 'Dire Genocide', 'Eternal Punishment', 'Butcher\'s Blight', 'Immortal Agony', 'Loathsome Harbinger', 'Fatal Void', 'Limb Eliminator', 'Life Drainer', 'Plaguetooth', 'Neverending Dismemberment', 'Undying Cruelty', 'Gutslicer', 'Corpse Tyrant', 'Wounds of Sin', 'Heretic\'s Prophecy', 'Rotpiercer', 'Inevitable Decay', 'Armageddon', 'Hategrinder', 'Withering Sanity']
const weapons = [];

export function generateWeapon() {

    const name = weaponNames[getRandomNumberFromRange(0, weaponNames.length - 1)];
    weaponNames.splice(weaponNames.indexOf(name), 1);

    const newWeapon = new Weapon(name, getRandomNumberFromRange(3, 10), getRandomNumberFromRange(40, 60), getRandomNumberFromRange(30, 70));
    return newWeapon;
}

// for (let i = 1; i <= 15; i++) {
//     weapons.push(generateWeapon());
// }