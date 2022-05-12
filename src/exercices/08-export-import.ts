// lesson 08
/**
 * Import | Export  of the module
 */

import { calculateISV, Product } from "./07-destructuring-arguments"

 

 const shoppingCart: Product[] = [
     {
         name: "Samsung A71 5G",
         price: 300
     },
     {
         name: "Sony XM4",
         price: 100
     }
 ]
 
 const [total, isv] = calculateISV(shoppingCart)
 
 console.log("==============================")
 console.log("Total: ", total)
 console.log("ISV: ", isv)