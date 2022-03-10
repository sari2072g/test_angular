import { setTestabilityGetter } from "@angular/core";

const profile = {
    name: 'alex',
    age: 5,
    coorde: {
        let: 12,
        lng: 15
    },
    setAge(age: number): void {
        this.age = age;
    }
};
