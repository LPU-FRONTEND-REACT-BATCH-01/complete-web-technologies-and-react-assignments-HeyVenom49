function getData() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("hello");
            resolve(4000);
        },4000);
    });
    // return "h"
};

// console.log("p1");
// console.log("p2");
// let data = getData();
// console.log(data.then((a)=>{
//     console.log(a);
// }));
// console.log("p4");
// console.log("p5");

async function main() {
    console.log("p1");
    console.log("p2");
    let data = await getData();
    console.log(data);
    console.log("p4");
    console.log("p5");
}

main();