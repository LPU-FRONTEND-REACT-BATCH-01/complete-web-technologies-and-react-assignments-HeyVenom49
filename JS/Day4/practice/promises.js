async function fetchData() {

    try {
        let res = await fetch("https://dummyjson.com/products")
        console.log(res);
    
        if(res.ok){
            let data = await res.json();
            console.log(data);
        }else{
            console.log("there is an http error");
        }
    } catch (error) {
        console.log("Unable to fetch");
    }
}

fetchData();