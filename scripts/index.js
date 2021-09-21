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
        if (typeof speed !== 'number') {
            console.log('Wrong value!!');
        } else if (speed > this.maximumSpeed || speed < 0) {
            console.log('Speed to high or <0 !!');
        } else {
            this.speed = speed;
            return true;
        }
    }

    accelerate(howMuch) {

    }

    decelerate(howMuch) {

    }


}

const newCar = new Car(200, 6);
// const car2 = new Car(230, 4, 'red');

newCar.setSpeed(210);
newCar.setSpeed(260);
newCar.setSpeed('qwe');
console.log(newCar.setSpeed(-210));





