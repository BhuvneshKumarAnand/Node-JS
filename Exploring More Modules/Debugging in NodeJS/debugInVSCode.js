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

const printTotalValue = (value) => {
    console.log(value);
}

const grandTotal = calculateTotal(productsList)
printTotalValue(grandTotal)
console.log(typeof productsList);