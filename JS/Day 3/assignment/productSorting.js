let userCart = [
    {
        id:1,
        name:"Watch",
        price:2999,
        quantity:2
    },
    {
        id:2,
        name:"Shoes",
        price:199,
        quantity:5
    },
    {
        id:3,
        name:"Earphone",
        price:299,
        quantity:10
    }
]

console.log("sorted by name")
let nameSorted = userCart.sort((a,b)=>{
    if(a.name>b.name) return 1;
    if(a.name<b.name) return -1;
})
console.log(nameSorted)

// console.log("sorted by price")
// let priceSorted = userCart.sort((a,b)=>a.price-b.price)
// console.log(priceSorted)

// console.log("sorted by quantity")
// let quantSorted = userCart.sort((a,b)=>a.quantity-b.quantity)
// console.log(quantSorted)