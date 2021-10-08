const prices = [9.99, 1.50, 9.90, 1.00, 49.90,50.99 ]

//sum

/* let total=0;
for (let price of prices) {
    total += price
}
console.log(total) */

prices.reduce((total,price)=>{
    return total + price
})