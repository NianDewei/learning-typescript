// Lesson 04 
/**
 * Task on objects and interfaces
 */

 interface Hero {
	name: string
	age: number
	address: Address
	powers: string[]
	showAddress: () => string
}

interface Address {
    street: string
    city: string
    country: string
}

const superHero: Hero = {
	name: "Batman",
	age: 30,
	address: {
		street: "Calle 123",
		city: "Gotham",
		country: "USA"
	},
	powers: ["Money", "Intelligence", "Fighting"],
	showAddress() {
		return `${this.name} lives in ${this.address.city}, ${this.address.country}`
	}
}

const address = superHero.showAddress()
console.log(address)