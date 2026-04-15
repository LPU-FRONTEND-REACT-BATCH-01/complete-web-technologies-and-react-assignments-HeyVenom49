async function fetchData() {

    try {
        let res = await fetch("https://dummyjson.com/products")
        console.log(res);
    
        if(res.ok){
            let data = await res.json();
            console.log(data);
            displayProductData(data.products);
        }else{
            console.log("there is an http error");
        }
    } catch (error) {
        console.log("Unable to fetch");
    }
}

let parentContainer = document.querySelector(".parentContainers");
let displayProductData = function(prodData){
    prodData.map((ele)=>{
        let container = document.createElement("ul");
        let title = document.createElement("li");
        let price = document.createElement("li");
        title.textContent=ele.title;
        price.textContent=ele.price;
        container.append(title,price);
        parentContainer.append(container);
    });
}

fetchData();