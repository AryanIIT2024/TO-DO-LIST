const inputBox = document.getElementById("input-2");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("please write something !!");
    }
     else{
         let li = document.createElement("li");
         li.innerHTML = inputBox.value;
         listContainer.appendChild(li);
         let span = document.createElement("span");
         span.innerHTML = "\u00d7";
         li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
// console.log(document.getElementById("input-2"));
const b2 = document.getElementById("BUTTON");
b2.addEventListener('click', addTask);
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }


},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function ShowTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
ShowTask();
console.log(localStorage.getItem("data"));