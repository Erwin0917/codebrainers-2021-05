function getRandomNumberFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

class Person {
    constructor() {
        this.hitPoints = 0;
        this.strength = 0;
    }

    isAlive() {
        return this.hitPoints > 0;
    }

}

class Weapon {
    constructor(name, minDamage, maxDamage, reqStrength){
        this.name = name;
        this.minDamage = minDamage;
        this.maxDamage = maxDamage;
        this.reqStrength = reqStrength;
    }

    getHitDamage() {
        return getRandomNumberFromRange(this.minDamage, this.maxDamage);
    }
}

class Character extends Person {
    constructor() {
        super();
        this.hitPoints = 50;
        this.strength = 20;
        this.weapon = null;
    }

    isAlive() {
        return super.isAlive() && this.strength > 0;
    }

    attack(target, defaultHitDamage) {
        if (!this.isAlive()){
            throw Error('Character not alive, cannot attack again');
        }
        let hitPointsAfterAttack = target.hitPoints - defaultHitDamage;
        if (this.weapon !== null) {
            const hitDamage = this.weapon.getHitDamage();
            hitPointsAfterAttack = target.hitPoints - hitDamage;
        }

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

class Hero extends Character {
    constructor() {
        super();
        this.hitPoints = 150;
        this.strength = 50;
    }
}

class Villain extends Character {
    constructor() {
        super();
        this.hitPoints = 100;
        this.strength = 40;
    }
}
const weaponNames = ['Scourge', 'Deathbringer', 'Blade of Darkness', 'Soul Eater', 'Bloodbath', 'Scarlet Delirium', 'Perpetual Gloom', 'Nightfall', 'Doomsday', 'Final Reckoning', 'Bleak Eradicator', 'Dread Devourer', 'Hideous Dissector', 'Timeless Twilight', 'Gruesome Carnage', 'Shadow of Death', 'Chaos Conqueror', 'Vicious Catastrophe', 'Frostreaper', 'Foul Mutilator', 'Havocfang', 'Widowmaker', 'Gravedigger', 'Searing Vengeance', 'Grim Despair', 'Ceaseless Torment', 'Executioner', 'Neckchopper', 'Bonesplitter', 'Bane of Existence', 'Viper\'s Bite', 'Eviscerator', 'Merciless Fate', 'Heartsnatcher', 'Worldbreaker\'s Woe', 'Sanguine Thirst', 'Justifier', 'Demented Rampage', 'Great Destroyer', 'Claw of Calamity', 'Decimation', 'Despicable Onslaught', 'Fleshrender', 'Godslayer', 'Shatterskull', 'Crimson Cyclone', 'Blackrazor', 'Unholy Ruin', 'Spirit Crusher', 'Cataclysm', 'Joykiller', 'Facesmasher', 'Baleful Misery', 'Harvester of Sorrow', 'Infernal Rapture', 'Terrorfist', 'Warmonger', 'Decapitator', 'Skinripper', 'Herald of Madness', 'Dire Genocide', 'Eternal Punishment', 'Butcher\'s Blight', 'Immortal Agony', 'Loathsome Harbinger', 'Fatal Void', 'Limb Eliminator', 'Life Drainer', 'Plaguetooth', 'Neverending Dismemberment', 'Undying Cruelty', 'Gutslicer', 'Corpse Tyrant', 'Wounds of Sin', 'Heretic\'s Prophecy', 'Rotpiercer', 'Inevitable Decay', 'Armageddon', 'Hategrinder', 'Withering Sanity']
const weapons = [];

function generateWeapon() {

        const name = weaponNames[getRandomNumberFromRange(0,weaponNames.length - 1)];
        weaponNames.splice(weaponNames.indexOf(name),1);

        return new Weapon(name,getRandomNumberFromRange(3, 10), getRandomNumberFromRange(40, 60), getRandomNumberFromRange(30, 70));
}
for (let i = 1; i <= 15; i++) {

    weapons.push(generateWeapon());
}

const villain = new Villain();
const hero = new Hero();
while (hero.weapon === null){

    const isCarriable = hero.setWeapon(weapons[getRandomNumberFromRange(0,weapons.length - 1)]);
    console.log(isCarriable);

}
while (villain.weapon === null) {
    const isCarriable = villain.setWeapon(weapons[getRandomNumberFromRange(0, weapons.length - 1)]);
    console.log(isCarriable);

}

console.log(hero);
console.log(villain);
function attack(attacker, target, attackerName, targetName){
    if (attacker.isAlive()) {
        console.log(attackerName, ' attacks: ');
        attacker.attack(target, 2);
        console.log(`${targetName} after ${attackerName}'attack ${target.hitPoints}`);
        if(!target.isAlive()){
            console.log(targetName, 'is dead');
        }
    }
}

function duel(attacker, target, attackerName, targetName){
    attack(attacker, target, attackerName, targetName);
    attack(target, attacker, targetName, attackerName);
}


