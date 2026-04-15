// interface Product {
//   id: number;
//   title: string;
//   price: number;
// }

// const products: Product[] = [];

// products.push(
//   { id: 1, title: "Laptop", price: 75000 },
//   { id: 2, title: "Phone", price: 25000 },
//   { id: 3, title: "Headphones", price: 3000 },
// );

// console.log(products);

type PaymentOptionsAvailable = "UPI" | "Card" | "COD" | "Netbanking" | "Cash";

function payment(
  modeOfPayment: PaymentOptionsAvailable,
  amount: number,
): string {
  if (modeOfPayment === "UPI") {
    const extra = amount * 0.1;
    return `Total: ₹${amount + extra} (10% extra for UPI)`;
  } else if (modeOfPayment === "Card") {
    const extra = amount * 0.05;
    return `Total: ₹${amount + extra} (5% extra for Card)`;
  } else if (modeOfPayment === "COD") {
    return `Total: ₹${amount + 50} (₹50 extra for COD)`;
  } else if (modeOfPayment === "Netbanking") {
    return `Total: ₹${amount} (No extra charge)`;
  } else if (modeOfPayment === "Cash") {
    return `Total: ₹${amount} (No extra charge)`;
  }

  return "Invalid payment method";
}

console.log(payment("Card", 5000));
