class Veicle {
    color: string = 'red';
    drive(): void {

    }
    honk(): void {

    }
    constructor() {

    }
}
class Car1 extends Veicle {
    drive(): void {
        console.log("gff");  
    }
    constructor(public wheels: number, public color: string) {
        super();
    }
}

const car2 = new Car1(4, 'yellow');
car2.drive();
car2.honk();
