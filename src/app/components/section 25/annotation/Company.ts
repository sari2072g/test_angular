import * as faker from "faker";

export class Company {
    companyName: string;
    catchPharse: string;
    loacation: {
        lat: number;
        lng: number;
    }
    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPharse = faker.company.catchPhrase();
        this.loacation = {
            lat:parseFloat( faker.address.latitude()),
            lng:parseFloat( faker.address.latitude()),
        };
    }
}