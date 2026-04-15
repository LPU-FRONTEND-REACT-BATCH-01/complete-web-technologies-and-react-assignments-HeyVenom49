let arr = [1,2,3,4,5];
// let a = arr[0];
// console.log(a);
let [a,b,c,d,e] = arr;
console.log(a);


let users = {
    id:1,
    username:"aryan",
    userLocation:{
        city:"Sherghati",
        state:"Bihar"
    }
}
// let {id, userLocation, username} = users;  // variable name should be same as object key, and ordering doesn't matter.
// console.log(id, username, userLocation);
let {id, userLocation:{city, state}, username} = users; // deep destructuring
console.log(id, username, city, state);