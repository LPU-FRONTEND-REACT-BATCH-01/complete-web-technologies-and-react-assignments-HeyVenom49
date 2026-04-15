let input = document.querySelector("input");
let button = document.querySelector("button");
let ul = document.querySelector("ul");

button.addEventListener('click', ()=>{
    let li = document.createElement("li");
    let inputText = input.value;
    li.textContent=inputText;

    let deleteButton = document.createElement("button");
    deleteButton.textContent="Delete";
    deleteButton.addEventListener('click', ()=>{
        li.remove();
        // deleteButton.remove();
    });

    let completed = document.createElement("button");
    completed.textContent="Completed";
    completed.addEventListener('click', ()=>{
        li.classList.add("strikeTask");
    })

    ul.append(li);
    li.append(completed);
    li.append(deleteButton);
});