// lesson 10
/**
 * Generics
 */

// const whatTypeAmI<T> = (params: T) => {
// 	return params
// }

function whatTypeAmI<T>(params: T) {
    return params;
}

const iAmString = whatTypeAmI("I am a string")
const iAmNumber = whatTypeAmI(10)
const iAmBoolean = whatTypeAmI(true)
const iAmArray = whatTypeAmI([1, 2, 3])

const iAmExplicitNumber = whatTypeAmI<number>(2)
const iAmExplicitString = whatTypeAmI<string>("I am a string , generic")