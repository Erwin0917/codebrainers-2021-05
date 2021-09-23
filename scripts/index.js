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
        if (speed <= this.maximumSpeed || speed >= 0) {
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

const newCar = new Car(200, 600);
// const car2 = new Car(230, 4, 'red');

// newCar.setSpeed(210);
// newCar.setSpeed(260);
// newCar.setSpeed('qwe');
// console.log(newCar.setSpeed(-210));

console.log(newCar.setSpeed(100), newCar.accelerate(50));





