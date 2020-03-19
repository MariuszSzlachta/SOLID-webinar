import {Honk} from "./Honk";
import {Alertable} from "./Allertable";

export abstract class Vehicle {
    private readonly type: string;

    private readonly color: string;

    public alert: Alertable;

    protected constructor(type: string, color: string, honk: Alertable) {
        this.type = type;
        this.color = color;
        this.alert = honk;
    }

    abstract drive(): void;
}