// import { Component } from "@angular/core";
// import { Car } from "./Car";

// // class Car {
// //     color:string;
// //     year:number;
// //     constructor(color: string, year: number) {
// //         this.color = color;
// //         this.year = year;
// //     }
// //     drive() {
// //         console.log('cccccc');

// //     }
// // }
// // const myCar = new Car('red' , 2000) ;
// //myCar.drive();
// const add = (a: number, b: number) =>{
//     return a + b;
// }


// // @Component({
// //     selector:'jhm',
// //     templateUrl:'jkgh',
// //     styleUrls:['jhgkjgh'],
// // })
// const car = new Car()


interface Driveable {
    speed: number;
    drive(): string;
}
class Car {
    speed: number;
    drive() {
        console.log('cdscsdfvdf' + this.speed);

    }
}
const csr = new Car();
const startDrive=(drive: Driveable) => {
    drive.drive();
}
// startDrive(csr)

//generic class 
export class Numberholder<T> {
    value: T
}
const numberholder = new Numberholder<string>();
numberholder.value = '10';

new Numberholder<number>();
new Numberholder<[]>();

//generic function
const add = <T>(a: T) : T => {
    return a;
} 
add<number>(5);
const bool =  add(true);