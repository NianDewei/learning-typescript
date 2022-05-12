// lesson 3
/**
 * Functions | Basic
 */

// wait and number
function addOne(a: number, b: number): number {
	return a + b
}
// wait and number
const addTwo = (a: number, b: number): number => a + b

// nothing returns | ? = optional
function multiply(
	number: number,
	otherNumber?: number,
	base: number = 2
): number {
	return number * base
}
const firstResult = addOne(1, 2)
const secondResult = addTwo(3, 4)

//the order of the parameters is important
const thirdResult = multiply(5, 5, 6)

console.log(thirdResult)

/**
 * Functions | With Objects
 */

interface CharacterLOR {
	name: string
	pv: number,
    viewHP: () => void
}

function cure(character: CharacterLOR, cureX: number): void {
	character.pv += cureX
	console.log(character)
}

const newCharacter: CharacterLOR = {
    name: 'Rolando',
    pv: 50,
    viewHP() { console.log("HP: " + this.pv) }
}

cure(newCharacter, 20)
newCharacter.viewHP()