import { Vehicle } from "./Vehicle";

export class Car extends Vehicle{

    constructor(type: string, color: string) {
        super(type, color);
    }

    drive() {
        super.drive();
    }

    honk() {
        super.honk();
    }
}


