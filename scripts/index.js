// POJO Plain Old Javascript Object

const car = {
    color: 'red',
    maximumSpeed: 230,
    numberOfWheels: 4
};


// Class-based object

class Car {

    constructor(speed, maximumSpeed, color = 'yellow') {
        if (typeof color === 'string') {
            this.color = color;
        };
        this.maximumSpeed = this.numericValue(maximumSpeed, 250);
        this.speed = this.numericValue(speed, 0);
    }

    numericValue(value, defaultValue) {
        if (typeof value === 'number' && isNaN(value) === false) {
            return value;
        } else {
            return defaultValue;
        }
    }

    setSpeed(speed) {
        if (speed <= this.maximumSpeed && speed >= 0) {
            this.speed = speed;
        }
    }

    accelerate(howMuch) {
        const newSpeed = howMuch + this.speed;

        if (howMuch >= 0) {
            this.setSpeed(newSpeed);
        }
    }

    decelerate(howMuch) {
        const newSpeed = this.speed - howMuch;

        if (howMuch >= 0) {
            this.setSpeed(newSpeed);
        }
    }


}

const newCar = new Car('Yello');

console.log('After tryCatch');

// const newCar = new Car('Black');


console.log(newCar.setSpeed(100), newCar.accelerate(50));
console.log('setSpeed(), with -200');
newCar.setSpeed(-200);
console.log(newCar);
// console.log(newCar.setSpeed('dsadasd'));
// console.log(newCar.setSpeed(undefined));
// console.log(newCar);





