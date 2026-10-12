
let tasks = [];

const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");
const count = document.getElementById("count");

function addTask() {
    if (input.value.trim() === "") {
        alert("Enter a task!");
        return;
    }

    tasks.push({
        title: input.value,
        completed: false
    });

    input.value = "";
    displayTasks();
}

function displayTasks() {
    list.innerHTML = "";

    tasks.map((task, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            ${task.title}
            <button onclick="completeTask(${index})">Complete</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;

        if (task.completed) {
            li.style.textDecoration = "line-through";
        }

        list.appendChild(li);
    });

    let pending = tasks.filter(task => !task.completed);
    let total = pending.reduce(count => count + 1, 0);

    count.textContent = "Pending Tasks: " + total;
}

function completeTask(index) {
    tasks[index].completed = true;
    displayTasks();
}

function deleteTask(index) {
    tasks = tasks.filter((task, i) => i !== index);
    displayTasks();
}
