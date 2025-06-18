const ordersAllPrices = [10,20,30,40];
let x = 233;
const totalPrice = ordersAllPrices.reduce((total, price) => total + price, x);
console.log(`Total price starting with ${x} is ${totalPrice}`);