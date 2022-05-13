// lesson 9
/**
 *  Basic Class
 */

 class HeroNow {
	/**
	 * 01- public: public property or method can be accessed from outside the class.
	 * 02- private: private property or method can be accessed only from inside the class.
	 * 03- protected: protected property or method can be accessed from inside and outside the class.
	 * 04- static: static property or method belongs to the class and not to an instance of the class.
	 * 05- readonly: readonly property can be set only once.
	 * 06- getter and setter: getter and setter are used to control the access to the property.
	 * 07- constructor: constructor is used to create an instance of the class.
	 * ==========================================================================
	 *
	 */

	// public alterEgo: string
	// private year: number
	// static realName: string

	alterEgo: string
	year: number
	realName: string
}

/**
 *  01.- The class is declared with the keyword class, and the name of the class is Hero.
 *  02.- The Interface is declared with the keyword interface, the interface does not exist in JavaScript.
 */

// instance of the class Hero
const superman = new HeroNow()
console.log(superman)

/**
 *  Class with constructor
 */

class HeroWithConstructor {
	constructor(
		public alterEgo: string,
		public realName: string,
		public year: number
	) {}
}

const ironMan = new HeroWithConstructor("IronMan", "Tony Stark", 1963)
console.log(ironMan)

/**
 *  Extending a class
 */

class Mortal {
	constructor(public name: string, public address: string) {}
}

class SuperHero extends Mortal {
	constructor(
		public alterEgo: string,
		public year: number
	) {
		super('Bruce Wayne', "Gotham City")
	}
}

const batMan = new SuperHero("Batman", 1939)
console.log(batMan)