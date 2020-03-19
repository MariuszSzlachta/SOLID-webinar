export class Vehicle {
    private readonly type: string;

    private readonly color: string;


    constructor(type: string, color: string) {
        this.type = type;
        this.color = color;
    }

    public drive() {
        if (this.type === "Excavator") {
            console.log("Use track to move")
        }
        console.log("My wheal are rolling");
    }

    public honk() {
        console.warn("HONK!!!");
    }
}

