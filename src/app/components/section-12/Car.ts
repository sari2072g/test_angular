export class Car {
    year = 2000

    constructor() {
       this.year = 1000 
    }
    drive(speed: number) {
        console.log(`Driving at ${speed}` );
        
    }
}
const car = new Car();
console.log(car.year);
