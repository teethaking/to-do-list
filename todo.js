document.addEventListener("DOMContentLoaded", function() {
var task = document.getElementById("task");
var add = document.getElementById("add");
var taskList = document.getElementById("taskList")

add.addEventListener("click", function(){
    var taskVal = task.value;

    //console.log(taskVal);
    if(taskVal.trim() ===""){
    alert("Cannot add empty task !!!");
    //return;
    };

    var taskItem = document.createElement("li");

    taskItem.innerHTML = `
     <span>${taskVal}</span>
     <button class="delete">delete</button>
    `;
    taskList.appendChild(taskItem);
    
    var deleteBtn = taskList.querySelector(".delete");

    deleteBtn.addEventListener("click", function(){
        taskList.removeChild(taskItem);
    });
        
})
})