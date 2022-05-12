// Lesson 07
/**
 * Destructuring arguments
 */

 interface Producto {
	name: string
	price: number
}

const phone: Producto = {
	name: "Samsung A71 5G",
	price: 100
}

const table: Producto = {
	name: "Sony XM4",
	price: 100
}

const calculateISV = (products: Producto[]):number[] => {
	let total: number = 0
	products.map(({ price }) => (total += price))

	return [total,total * 0.15]
}

const products: Producto[] = [phone, table]

const [total,isv] = calculateISV(products)

console.log("Total: ",total)
console.log("ISV: ",isv)