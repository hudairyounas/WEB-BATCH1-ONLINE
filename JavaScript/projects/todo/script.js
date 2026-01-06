let input = document.getElementById("addTaskField");
let addBtn = document.getElementById("addTask");
let container = document.getElementById("container");

const addTODO = () => {
    let div = document.createElement("div");
    let p = document.createElement("p");
    let input = document.createElement("input");
    let deleteBtn = document.createElement("button");

    deleteBtn.addEventListener("click", () => {
        div.remove();
    })

    input.addEventListener("change", () => {
        if (input.checked) {
          p.style.textDecoration = "line-through";
        } else {
          p.style.textDecoration = "none";
        }
    })


    deleteBtn.innerText = "Delete";
    input.type = "checkbox";
    p.textContent = input.value;
    
    div.appendChild(p)
    div.classList.add("divTask");
    div.appendChild(deleteBtn)
    div.appendChild(input)
    container.append(div)

    input.value = "";
}


addBtn.addEventListener("click", () => {
    addTODO();
})
