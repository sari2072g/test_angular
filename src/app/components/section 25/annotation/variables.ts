let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMach: null = null;
let nothing: undefined = undefined;
//built in a object
let date = new Date();

//Arrey
let colors: string[] = ['red', 'green', 'black', 'yellow'];
let myNumbers: number[] = [1,2,3];
let truths: boolean[] = [true, true, false, false];

//classes
class Car {

}

let car: Car = new Car();

let Point: { x: number; y: number } = {
    x: 10,
    y: 20
}

//functions
const logNumber: (i: number) => void = (i: number) => {

}

const json = '{ "x": 10 , "y": 20 }';
const soordinates = JSON.parse(json);

let words = ['red', 'green', 'black', 'yellow'];
let foundWord: boolean;

for(let i = 0; i < words.length; i++) {
    if( words[i] == 'green')
        foundWord = true;
}

let numbers = [-10, -5, 1, 2, 13];
let numberAboveZero: boolean | number = false;

for(let i = 0; i < numbers.length; i++) {
    if( numbers[i] > 0 )
    numberAboveZero = numbers[i];
}