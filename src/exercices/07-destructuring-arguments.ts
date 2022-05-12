// Lesson 07
/**
 * Destructuring arguments
 */

export interface Product {
	name: string
	price: number
}

const phone: Product = {
	name: "Samsung A71 5G",
	price: 100
}

const table: Product = {
	name: "Sony XM4",
	price: 100
}

export const calculateISV = (products: Product[]): number[] => {
	let total: number = 0
	products.map(({ price }) => (total += price))

	return [total, total * 0.15]
}

// const products: Product[] = [phone, table]

// const [total, isv] = calculateISV(products)

// console.log("Total: ", total)
// console.log("ISV: ", isv)
