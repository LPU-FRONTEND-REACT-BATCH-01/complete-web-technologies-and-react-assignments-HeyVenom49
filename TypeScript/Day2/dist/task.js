var value = "Hello";
var value1;
if (typeof value === "string") {
    value1 = value.charAt(0).toUpperCase() + value.slice(1);
}
else if (typeof value === "number") {
    value1 = value + 100;
}
else if (typeof value === "boolean") {
    value1 = !value;
}
console.log(value1);
