// lesson 12
/**
 *  optional chaining
 */

 interface Pasajero {
    name: string;
    sons?: string[];
}

const passenger: Pasajero = {
    name: "Juan",
    sons: ["Pedro", "Juan", "Maria"]
}

const passengerTwo: Pasajero = {
    name: "Juan",
}

const printNumberChildren = (passenger: Pasajero):void => {
    // const numberOfChildren = passenger.sons.length; //error property 
    const numberOfChildren = passenger.sons?.length || 0;
    console.log("Number Children: ",numberOfChildren)
}

printNumberChildren(passengerTwo)