 import { Payload } from './Payload';
 import { Astronaut } from './Astronaut';
 import { Cargo } from './Cargo';

export class Rocket implements Payload {
    name: string;
    massKg: number;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number,){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items: Payload[]): number {
        let sum: number = 0;
         for(let i = 0; i < items.length; i++){
           sum += items[i].massKg;
         }
        return sum;

    }

    currentMassKg(): number {
        let currentMass = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        return currentMass;

    }

    canAdd(item: Payload): boolean {
        if ((this.currentMassKg() + item.massKg) <= this.totalCapacityKg){
        return true;
        } else {
            return false;
        }
    }

    addCargo(cargo: Cargo){
        if (this.canAdd(cargo) == true){
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false ;
        }
    }
    
    addAstronaut(astronaut: Astronaut){
        if(this.canAdd(astronaut) == true){
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }
    }

let myRocket = new Rocket('rocket', 7);
console.log(myRocket.name);
console.log(myRocket.sumMass([]));