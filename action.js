const inputel = document.querySelector("input");
const buttonel = document.querySelector("button");
const listel = document.querySelector("ul");

function addGoal(){
    val = inputel.value;
    listval = document.createElement("li")
    listval.textContent = val
    listel.append(listval)
    val = ""
}

buttonel.addEventListener("click",addGoal);