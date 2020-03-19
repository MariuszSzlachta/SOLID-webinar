import { Vehicle } from "./Vehicle";

export class Excavator extends Vehicle {

    constructor(type: string, color: string) {
        super(type, color);
    }


    drive() {
        super.drive();
    }

    honk() {
        super.honk();
    }

    excavate() {
        // impl
    }
}