import {Vehicle} from "./Vehicle";
import {Honk} from "./Honk";

export class Car extends Vehicle {

    constructor(type: string, color: string, honk: Honk) {
        super(type, color, honk);
    }

    drive(): void {
        // wheels
    }

    doHonk(): void {
        this.alert.makeNoise()
    }
}