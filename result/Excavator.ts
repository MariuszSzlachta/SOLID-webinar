import { Vehicle } from "./Vehicle";
import { Excavable } from "./Excavable";
import { Honk } from "./Honk";

export class Excavator extends Vehicle implements Excavable {

    constructor(type: string, color: string, honk: Honk) {
        super(type, color, honk);
    }

    drive(): void {
        // uses a track to move
    }

    excavate(): void {
        // other implementation
    }

    doHonk(): void {
        this.alert.makeNoise()
    }
}