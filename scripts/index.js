// POJO Plain Old Javascript Object

const car = {
    color: 'red',
    maximumSpeed: 230,
    numberOfWheels: 4
};


// Class-based object

class Car {

    constructor(speed, maximumSpeed, color = 'yellow') {

        if (typeof speed === 'number' && typeof maximumSpeed === 'number' && isNaN(speed) === false && isNaN(maximumSpeed) === false && typeof color === 'string') {
            this.color = color;
            this.maximumSpeed = maximumSpeed;
            this.speed = speed;
        }
    }

    setSpeed(speed) {

    }

    accelerate(howMuch) {

    }

    decelerate(howMuch) {

    }


}

const newCar = new Car(200, 6);
// const car2 = new Car(230, 4, 'red');




