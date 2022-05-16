// lesson 11
/**
 * Class decorators
 */

 function classDecorator<T extends { new (...args: any[]): {} }>(
	constructor: T
) {
	return class extends constructor {
		newProperty = "new property"
		hello = "override"
	}
}

@classDecorator
class miSuprClass {
	public miProp: string = "miProp"

	print() {
		console.log("Hello World")
	}
}

console.log(miSuprClass)

const miSuperClassInstance = new miSuprClass()
console.log(miSuperClassInstance)