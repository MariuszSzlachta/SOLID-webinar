import { Excavable } from "./Excavable";
import { Vehicle } from "./Vehicle";
import { Strippable } from "./Strippable";
import { Honk}  from "./Honk";

export class Bulldozer extends Vehicle implements Excavable, Strippable {

    constructor(type: string, color: string, honk: Honk) {
        super(type, color, honk);
    }

    drive(): void {
        // own
    }

    excavate(): void {
        // ok
    }

    bulldoze(): void {
        // jedziemy maleńka
    }

    doHonk(): void {
        this.alert.makeNoise()
    }
}