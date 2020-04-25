// export class Ingredient {
//     public name: string;
//     public amount: number;

//     constructor(name: string, amount: number) {
//         this.name = name;
//         this.amount = amount;
//     }
// }

// A quicker way to write the same:
export class Ingredient {
    constructor(public name: string, public amount: number) {}
}