let input = document.getElementById("addTaskField")
let btn = document.getElementById("addTask")
let container = document.getElementById("container")



function TODO() {
    let div = document.createElement("div");
    let p = document.createElement("p");
    let btn = document.createElement("button");
    p.textContent = input.value;
    btn.textContent = "Delete";

    div.classList.add("divTask")
    div.appendChild(p)
    div.appendChild(btn)
    container.append(div)
    

    btn.addEventListener("click", () => {
        div.remove();
    })
    
    input.value = "";
}

btn.addEventListener("click", () => {
   TODO()
})