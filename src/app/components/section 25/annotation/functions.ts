const add =  (a: number, b: number)  : number => {
    return a + b;
};

const substract =  (a: number, b: number)  : number => {
    return a - b;
};

function divide (a: number, b: number): number {
    return a / b;

};
const multiPly = function(a: number, b: number): number {
    return a * b;
};

const logger =  (massege: string)  => {
   console.log(massege);
   
};

const ErrorThrow =  (massege: string)  => {
    throw new Error(massege);   
};

const forCast = {
    date: new Date(),
    weather: 'sunny',
}
 
