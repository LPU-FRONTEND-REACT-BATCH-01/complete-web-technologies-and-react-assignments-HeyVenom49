// interface Product {
//   id: number;
//   title: string;
//   price: number;
// }
function payment(modeOfPayment, amount) {
    if (modeOfPayment === "UPI") {
        var extra = amount * 0.1;
        return "Total: \u20B9".concat(amount + extra, " (10% extra for UPI)");
    }
    else if (modeOfPayment === "Card") {
        var extra = amount * 0.05;
        return "Total: \u20B9".concat(amount + extra, " (5% extra for Card)");
    }
    else if (modeOfPayment === "COD") {
        return "Total: \u20B9".concat(amount + 50, " (\u20B950 extra for COD)");
    }
    else if (modeOfPayment === "Netbanking") {
        return "Total: \u20B9".concat(amount, " (No extra charge)");
    }
    else if (modeOfPayment === "Cash") {
        return "Total: \u20B9".concat(amount, " (No extra charge)");
    }
    return "Invalid payment method";
}
console.log(payment("Card", 5000));
