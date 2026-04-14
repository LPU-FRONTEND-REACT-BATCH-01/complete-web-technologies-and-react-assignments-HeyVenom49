let usersData = [
    {
        id:1,
        username:"aryan",
        password:"a123"
    },
    {
        id:2,
        username:"abishek",
        password:"nalla"
    },
    {
        id:3,
        username:"abhijeet",
        password:"ab123"
    },
    {
        id:4,
        username:"aayushi",
        password:"aa123"
    }
]

let username = prompt("Enter your name: ");
let password = prompt("Enter your password: ");
let userInputData = {
    username:username,
    password:password
}


let found = usersData.some(data => data.username === userInputData.username);
// if(found){
//     let data = usersData.filter(user => user.username === userInputData.username);
//     if(data[0].password===userInputData.password){
//         console.log("logged in successfully");
//     }else{
//         console.log("wrong credentails");
//     }
// }else{
//     console.log("username not found");
// }

if(found){
    let user = usersData.find(x => x.username===userInputData.username)
    if(user.password===userInputData.password){
        console.log("logged in successfully");
    }else{
        console.log("wrong credentails");
    }
}else{
    console.log("username not found");
}