let input = document.getElementById("addTaskField");
let addBtn = document.getElementById("addTask");
let container = document.getElementById("container");

const addTODO = () => {
    let p = document.createElement("p");
    let deleteBtn = document.createElement("button");
    let div = document.createElement("div");
    let input = document.createElement("input");

    deleteBtn.addEventListener("click", () => {
        div.remove();
    })

    input.addEventListener("change", () => {
        if (input.checked) {
            p.style.textDecoration = "line-through";
        }else {
            p.style.textDecoration = "none";
        }
    })


    deleteBtn.innerText = "Delete";
    input.type = "checkbox";
    p.textContent = input.value;
    
    div.classList.add("divTask");
    div.appendChild(p)
    div.appendChild(deleteBtn)
    div.appendChild(input)
    container.append(div)

    input.value = "";
}


addBtn.addEventListener("click", () => {
    addTODO();
})
