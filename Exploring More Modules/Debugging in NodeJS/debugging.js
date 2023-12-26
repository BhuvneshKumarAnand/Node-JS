const productsList = [
    { name: 'Shoes', price: 50, quantity: 2 },
    { name: 'Hat', price: 40, quantity: 3 },
    { name: 'Suit', price: 500, quantity: 1 },
    { name: 'Tie', price: 100, quantity: 5 }
]


const calculateTotal = (products) => {
    let total = 0;
    products.forEach((product) => {
        total += product.quantity * product.price;
    })
    return total;
}

console.log(calculateTotal(productsList));
console.log(typeof productsList);

// const calculateTotal = (products) => {
//     let total = 0;
//     products.forEach((products) => {
//         total += products.quantity + products.quantity;
//     })
//     return total;
// }

// Debugging in NodeJS
// node inspect filename
// setBreakpoint('filename', lineNumber)
// watch('product')
// cont


// How debugging is different in NodeJS than javaScript?

// Environment
// debugging tools
// Access to server side resources