let price = Number(prompt("Enter the price"));

function calculateFinalPrice(price) {
  if (price > 6000) {
    return price - price * 0.25;
  } else if (price > 2000) {
    return price - price * 0.15;
  } else {
    return "No offer";
  }
}

let totalAmount = calculateFinalPrice(price);
console.log(totalAmount);
