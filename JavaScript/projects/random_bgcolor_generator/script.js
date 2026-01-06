let generateBtn = document.getElementById("generateBtn");
let colorContainer = document.querySelector(".colorContainer");
let body = document.body;


const colorGenerator = () => {
    let hexVal = "0123456789abcdef";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hexVal[Math.floor(Math.random() * 16)];
    }
    return color;
}


const btn1 = () => {
    let color1 = colorGenerator()
    let color2 = colorGenerator()
    generateBtn.innerText = color1;
    body.style.background = `linear-gradient(90deg, ${color1}, ${color2})`;
    colorContainer.innerText = `background-image: linear-gradient(90deg, ${color1}, ${color2});`;
}

const copyText = () => {
    let text = colorContainer.innerText;
    navigator.clipboard.writeText(text);
}
    
generateBtn.addEventListener("click", btn1)
colorContainer.addEventListener("click", copyText)