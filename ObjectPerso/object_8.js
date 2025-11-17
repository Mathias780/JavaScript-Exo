//---------------------------------- Rechercher dans un tableau d’objets ---------------------------------------------//   

let products = [
    { name: "Laptop", price: 1200 },
    { name: "Phone", price: 800 },
    { name: "Mouse", price: 25 }
];

function findProduct(arr, name) {
    for (let product of arr) {
        if (product.name === name) {
            return product;  // we sent the all object
        }
    }
    return null; // if we find nothing
}

/* Witch coding tehcnique i found online i dont understand anything about this :( 

function findProduct(arr, name) {
    return arr.find(p => p.name === name) || null;
}
    
*/

console.log(findProduct(products, "Phone")); //display: { name: 'Phone', price: 800 }