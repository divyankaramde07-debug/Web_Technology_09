let taskInput = document.getElementById("taskInput");
let addButton = document.getElementById("addButton");
let taskList = document.getElementById("taskList");

addButton.addEventListener("click", function() {
    let task = taskInput.value.trim();
    
    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    li.textContent = task;

    let completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    li.appendChild(completeButton);

    completeButton.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    li.appendChild(deleteButton);

    deleteButton.addEventListener("click", function() {
        li.remove(); // Removes the task from the DOM
    });
    taskList.appendChild(li); 

    taskInput.value = ""; 
});
