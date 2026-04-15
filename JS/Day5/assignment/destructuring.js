let users = {
    id:1,
    username:"Nick",
    userLocation:{
        city:"Jalandhar",
        state:"Punjab"
    },
    phone:"23y422342",
    skills:{
        frontend:["react", "html", "css"],
        backend:["java", "springboot"]
    }
}

console.log(typeof users);

let {id, username, userLocation:{city, state}, phone, skills:{frontend:[react, html, css], backend:[java, springboot]}} = users;
console.log(id, username, city, state, phone, react, html, css, java, springboot);