const studentBioData = {
  fullName: "Muhammad Hudair",
  age: 19,
  gender: "Male",
  grade: "A",
  courses: ["Web Development", "App Development", "Computer Science"],
  address: {
    street: "123 Main St",
    city: "Faisalabad",
    state: "Punjab",
    zipCode: "37000",
  },
};

const addBtn = document.getElementById("addBtn")
const getBtn = document.getElementById("getBtn")
const removeBtn = document.getElementById("removeBtn")

const addTask = () => {
  localStorage.setItem("obj", JSON.stringify(studentBioData));
}
const getTask = () => {
    console.log(JSON.parse(localStorage.getItem("obj")));
}

const removeTask = () => {
    localStorage.removeItem("obj")
}

addBtn.addEventListener("click", addTask)
getBtn.addEventListener("click", getTask)
removeBtn.addEventListener("click", removeTask);