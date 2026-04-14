// let a = 20


// console.log(a)

// let b;

// console.log(c)

// var c;

// console.log(c)

// console.log(d)

// let d = 20


// let a = Number(prompt("Enter your value"))

// console.log(typeof a)


// function display(name="Not available"){
//     console.log("Hello MR.",name)
// }

// display()


// let greet = function display(name="invalid"){
//     console.log("Hello ", name)
// }
// greet("Nick")


// IIFE(Immidiate Invoke FUnction Expression)
// (function fetchData(){
//     console.log("Data fetched")
// })();


// let arrow = name => {
//     let a = name;
//     return "Hello "+a
// }

// let result = arrow("Nick")

// console.log(result)

// let temp = 0

// function calculator(a,b,operation){
//     return operation(a,b)
// }

// function add(a_from_calculator,b_from_calculator){
//     return a_from_calculator+b_from_calculator
// }

// let results = calculator(10,20,add)
// console.log(results) 

// let b = 20


// function test(){
//     var a = 30
//     const d = 50
//     let local_variable = 50
//     console.log(a)
// }

// console.log(a)
// console.log(d)
// console.log(local_variable)


// function test(){
//     var demo = 40
// }

// if(true){
//     let a = 10
//     const b = 20
//     var c = 40
// }

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(window.c)
// console.log(demo)

// let dummy = 0


// function kailash(){
//     let grand_land = 10
//     function shyam(){
//         let father_land = 5
//         function arman(){
//             let arman_land = 12
//             let total_asset = grand_land+father_land+arman_land
//             console.log(total_asset)
//         }
//         arman()
//     }
//     shyam()
// }
// kailash()



// let age = 21

// let name = `your age is ${age}, you are eligible to vote`


// console.log("your age is "+age+", you are eligible to vote")


// String Methods

// let names = " Chota Bheem, Jaggu, Raju, Chutki"
// let str = "Helloo"

// console.log(names.toLowerCase())
// console.log(names.toUpperCase())

// console.log(names.trim())

// console.log(names.split(","))

// console.log(names.length)

// console.log(names.replace('a','k'))
// console.log(names.replaceAll('a','k'))


// console.log(names.charAt(2))

// console.log(str.slice(3,4))

// console.log(str.includes('z'))

// let user_Data = {
//     id:1,
//     name:"Chota Bheem",
//     "age":12
// }

// Object.freeze(user_Data)
// Object.seal(user_Data)

// user_Data.city = "Dholakpur"
// user_Data.id = 100

// console.log(user_Data)
// console.log(user_Data.id)
// console.log(user_Data.name)
// console.log(user_Data.age)
// console.log(user_Data["age"])


// let keys = Object.keys(user_Data)
// console.log(keys)


// let values = Object.values(user_Data)
// console.log(values)


// let pairs = Object.entries(user_Data)
// console.log(pairs)








// let arr = [12,"hello",true,undefined]
// console.log(arr)

// arr.push(21)


// console.log(arr)

// arr.pop()

// console.log(arr)

// arr.shift()

// console.log(arr)

// arr.unshift(100)

// console.log(arr)

// console.log(arr.length)

// console.log(arr.at(3))


// console.log(arr.join("-"))

// let arr1 = [1,2,3]
// let arr2 = ["hlloo","bye"]

// console.log(arr.concat(arr1,arr2))



// let arr = ["Nick","Chota Bheem","Jaggu"]

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i],i)

// }

// arr.map((value,index)=>{
//     console.log(value,index)
// })





// let arr = ["hi","hello",'bye']
// let arr1 = [1,2,4,6,3]

// arr1.reduce


// let results = arr1.reduce((prev,value)=>{
//     return prev+value
// })

// console.log(results)

// let func = (prev,current)=>{
//     return prev+current
// }

// let total = arr1.reduce(func,0)

// console.log(total)

// arr1.map((value,index)=>{
//     console.log(value*2)
// })

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i],i)
// }






// let cartData = [
//     {
//         id: 1,
//         name: "Watch",
//         price: 2999,
//         quantity:2
//     },
//     {
//         id: 2,
//         name: "Shoes",
//         price: 199,
//         quantity:5
//     },
//     {
//         id: 3,
//         name: "Earphones",
//         price: 299,
//         quantity:10
//     }
// ]

// let totalCartValue = cartData.reduce((initial_value,current_product)=>{
//     return initial_value+(current_product.price*current_product.quantity)
// },0)

// console.log(totalCartValue)





// let total_amount = cartData.reduce((prev, value) => {
//     return prev+value.price
// },0)

// console.log(total_amount)



// let arr = ["Banana","Kiwi","Apple","Orange"]

// arr.sort((a,b)=> a-b)
// arr.sort((a,b)=> b-a)

// console.log(arr)

// let cartData = [
//     {
//         id: 1,
//         name: "Watch",
//         price: 2999,
//         quantity:2
//     },
//     {
//         id: 2,
//         name: "Shoes",
//         price: 199,
//         quantity:5
//     },
//     {
//         id: 3,
//         name: "Earphones",
//         price: 299,
//         quantity:10
//     }
// ]

// let sorted = cartData.sort((a,b)=>{
//     if(a.name > b.name) return 1
//     if(a.name < b.name) return -1
// })
// console.log(sorted)


// let arr = [1,23,63,25,73,5,3]

// let arr1 = arr

// arr1.push(1000)

// console.log(arr)

// let filtered_array = arr.filter((ele)=>{
//     return ele>20
// })

// for (let index = 0; index < arr.length; index++) {
//     let temp = []
//     if(arr[i]>20){
//         temp.push(arr[i])
//     }

//     return temp

// }


// console.log(arr)
// console.log(filtered_array)



// let onStove = () => {
//     return new Promise((resolve, reject) => {
//         console.log("Started making biryani")
//         let isOn = false
//         setTimeout(() => {
//             if(isOn){
//                 console.log("Turned on the stove")
//                 resolve()
//             }
//             else{
//                 reject("Not able to do itttttttttt")
//             }
//         }, 5000)
//     })
// }

// let putRice = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Rice is inserted")
//             console.log("End of biryani")
//             resolve()
//         }, 5000)
//     })
// }

// onStove()
// .then(()=>putRice())
// .catch((error)=>{
//     console.log(error)
// })



// Filter
// Map
// Reduce
// Sort
// Some


// let arr = ["Apple","Kiwi","Banana"]


// let users = [
//     {
//         id:1,
//         username:"AkramShammi",
//         password:"Akru"
//     },
//     {
//         id:2,
//         username:"AkhilRana",
//         password:"Anmol"
//     },
//     {
//         id:3,
//         username:"Devanshu",
//         password:"Devanshi"
//     }
// ]

// let inputData = {
//     username:"AkhilRana",
//     password:"Chutki"
// }

// let results = users.find(ele => ele.username === inputData.username)

// console.log(results)


// let results = users.some(ele => ele.username === inputData.username)

// console.log(results)


// let arr = ["Hello","hi"]

// let results = arr.find(ele => ele === "Helloo")
// console.log(results)


// let results = arr.some(ele => ele === "Apple")
// console.log(results)



// let original_Object = {
//     id:1,
//     name:"Nick",
//     city:"Pune"
// }

// let duplicate = {...original_Object,state:"maharashtra"}

// original_Object.state = "Maharashtra"

// console.log(original_Object)
// console.log(duplicate)
// let duplicate = structuredClone(original_Object);


// let arr = [1,34,2334,12,12,3]


// let duplicate = [...arr,"Byeeeee"]

// arr.push("helooooo")

// console.log(duplicate)
// console.log(arr)

// function numbers(...number){
//     console.log(number)
// }

// numbers(21,10,28,38)


// console.log("Start")

// setTimeout(()=>{
//     console.log("First Statement Executed")
// },2000)

// setTimeout(()=>{
//     console.log("Second Statement Executed")
// },1000)

// setTimeout(()=>{
//     console.log("Last")
// },0)

// console.log("End")


// function turnOnGas(callback){
//     setTimeout(()=>{
//         console.log("Gas turned On")
//         callback()
//     },3000)
// }
// function addSpices(callback){
//     setTimeout(()=>{
//         console.log("Added Spices")
//         callback()
//     },1000)
// }
// function addRice(callback){
//     setTimeout(()=>{
//         console.log("Rice added")
//     },2000)
// }

// turnOnGas(()=>{
//     addSpices(()=>{
//         addRice()
//     })
// })

// function turnOnGas() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Gas turned On")
//             resolve()
//         }, 3000)
//     })
// }
// function addSpices() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("Spices")
//             console.log("Added Spices")
//         }, 1000)
//     })
// }
// function addRice() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Rice added")
//             resolve()
//         }, 2000)
//     })
// }

// turnOnGas()
// .then(()=>addSpices())
// .then(()=>addRice())

// let cookBiryani = async () => {
//     try {
//         await turnOnGas();
//         await addSpices()
//         await addRice()
//     } catch (error) {
//         console.warn("No"+error)
//     }
// }

// cookBiryani()




// setTimeout(()=>{
//     console.log("A")
// },3000)

// setTimeout(()=>{
//     console.log("B")
// },500)

// setTimeout(()=>{
//     console.log("C")
// },2000)


// function addSpices(callback) {
//     setTimeout(() => {
//         console.log("Spices Added")
//         callback()
//     }, 1000)
// }



// function pourOil(callback) {
//     setTimeout(() => {
//         console.log("Poured Oil")
//         callback()
//     }, 3000)
// }

// addSpices(() => {
//     pourOil(() => {
//         fryOnions(() => {
//             addRice()
//         })
//     })
// })



// function fryOnions(callback) {
//     setTimeout(() => {
//         console.log("Fried Onions")
//         callback()
//     }, 5000)
// }


// function addRice() {
//     setTimeout(() => {
//         console.log("Rice Added")
//     }, 4000)
// }



// function addSpices() {
//     return new Promise((resolve, reject) => {
//         let addedSpices = true
//         setTimeout(() => {
//             if (addedSpices) {
//                 console.log("Spices Added")
//                 resolve()
//             }
//             else {
//                 reject("Rejected the first")
//             }
//         }, 1000)
//     })
// }


// function pourOil() {

//     return new Promise((resolve, reject) => {
//         let pouredOil = true
//         setTimeout(() => {
//             if (pouredOil) {
//                 console.log("Poured Oil")
//                 resolve()
//             }
//         }, 3000)
//     })
// }

// function fryOnions() {

//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             let friedOnions = false
//             if (friedOnions) {
//                 console.log("Fried Onions")
//                 resolve()
//             }
//             else {
//                 console.log("Still onions not fried")
//                 reject("You were unable to fry onions, you cant cook")
//             }
//         }, 5000)
//     })
// }


// function addRice() {

//     return new Promise((resolve, reject) => {
//         let addedRice = true
//         setTimeout(() => {
//             if (addedRice) {
//                 console.log("Rice Added")
//                 resolve()
//             }
//         }, 4000)
//     })
// }


// addSpices()
// .then(()=>pourOil())
// .then(()=>fryOnions())
// .then(()=>addRice())
// .catch((error)=>console.log(error))

// Aync and Await

// async function cookBiryani() {
//     try {
//         await addSpices()
//         await pourOil()
//         await fryOnions()
//         await addRice()
//     } catch (error) {
//         console.log(error)
//     }
// }

// cookBiryani()


// async function fetchData() {
//     try {
//         let res = await fetch("https://dummyjson.com/products")
//         console.log(res)



//         if (res.ok) {
//             let data = await res.json()
//             console.log(data)
//         }
//         else {
//             console.log("There is an HTTP Error")
//         }
//     } catch (error) {
//         console.log("Unable to fetch")
//     }
// }






// DOM - Document Object Model

// document - it is an object present inside our browser

// 1. getElementById("")
// 2. getElementByTagName("")
// 3. getElementByClassName("")
// 4. querrySelector("")
// 5. querrySelectorAll("")



// let heading = document.getElementById("heading")
// let container = document.getElementsByClassName("container")
// let paragraph = document.getElementsByTagName("p")


// let heading = document.querySelector("#heading")
// let paragraph = document.querySelector("p")
// let container = document.querySelectorAll('.container')


// paragraph.innerHTML = "<b>This is changed heading</b>"
// heading.textContent = "This is changed paragraph"

// heading.classList.add("heading")

// console.log(heading.classList.contains("heading"))

// heading.classList.toggle("heading")


// heading.classList.remove("heading")



// append()
// remove()
// createElement()





// let ul = document.querySelector(".fruits")

// let banana = document.querySelectorAll(".items")[1]


// banana.remove()

// let kiwi = document.createElement("li")
// let mango = document.createElement("li").textContent = "Mango"
// kiwi.textContent = "Kiwi"

// ul.after(kiwi)




// EventListners





// button.addEventListener('mouseover',()=>{
//     console.log("This button got clicked")
// })


// let button = document.querySelector("button")
// let input = document.querySelector("input")
// let ul = document.querySelector("ul")

// button.addEventListener('click',()=>{
//     let li = document.createElement("li")
//     let inputText = input.value

//     li.textContent = inputText

//     let dltBtn = document.createElement("button")
//     let edit = document.createElement("button")
//     dltBtn.textContent = "Delete"

//     li.append(dltBtn)

//     ul.append(li)


//     dltBtn.addEventListener('click',()=>{
//         li.remove()
//     })

// })








let parentContainer = document.querySelector(".parent-container")


let fetchData = async () => {
    let res = await fetch("https://dummyjson.com/products")
    let data = await res.json()

    let products = data.products

    console.log(data)
    displayData(products)
}

let displayData = (data) => {


    data.map((product) => {
        let container = document.createElement("ul")
        let title = document.createElement("li")
        let price = document.createElement("li")

        title.textContent = product.title
        price.textContent = product.price

        container.append(title,price)

        parentContainer.append(container)
    })
}


fetchData()