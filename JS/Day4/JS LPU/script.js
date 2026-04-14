// let a = 10;
// console.log(typeof a)


// let b = 20n
// console.log(typeof b)

// let c = 'Helloo'
// console.log(typeof c)

// let d  = true
// console.log(typeof d)

// let e = null
// console.log(typeof e)


// let f
// console.log(typeof f)


// let g = Symbol()
// console.log(typeof g)

// let arr = [1,2,3]
// console.log(typeof arr)


// function test() {
//     console.log(20)
// }

// console.log(typeof test)

// let a = 2-'2'

// console.log(typeof a)

// let arr = [1,24,5,3,2,5]


// let arr2 = [...arr]

// arr2.push(21)

// console.log(arr2)

// let filter = arr.filter(ele => ele < 10)
// console.log(filter)

// console.log(filter)


// let obj = {
//     id:21,
//     name:"yash",
//     age:22
// }

// Object.freeze(obj) // No changes at all
// Object.seal(obj) // Can modify, but not add/remove

// let obj2 = obj

// let obj2 = structuredClone(obj) 

// obj2.age = 23;
// obj2.city = "Hasssan"

// console.log(obj)
// console.log(obj2)


// let fetchData = async () => {
//     try {
//         let res = await fetch("http://localhost:8080/products/15",{
//             method:"POST"
//         })
//         console.log(res)
//         let response = await res.json()
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// }

// fetchData()



let input = document.getElementById("taskInput")
let ul = document.getElementById("taskList")
let addBtn = document.getElementById("addBtn")

addBtn.addEventListener('click',()=>{
    let inputValue = input.value
    console.log(inputValue)

    let li = document.createElement("li")

    let span = document.createElement("span")
    let delBtn = document.createElement("button")
    let compBtn = document.createElement("button")

    span.textContent = inputValue
    
    delBtn.classList.add('delete')
    delBtn.textContent = "Delete"

    compBtn.textContent = "Done"
    compBtn.classList.add("done")
    
    li.append(span,delBtn,compBtn)
    ul.append(li)

    compBtn.addEventListener('click',()=>{
        span.classList.add("completed")
    })

    delBtn.addEventListener("click",()=>{
        li.remove()
    })
})


// let showBtn = document.getElementById("showBtn")
// let dd = document.getElementById("show")

// let toggle = false

// showBtn.addEventListener('click',()=>{
//     toggle = !toggle
//     if(toggle){
//     dd.classList.add('show')
// }else{
//     dd.classList.remove('show')
// }
// })