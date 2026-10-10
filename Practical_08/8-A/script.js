
interface Task {
    id: number;
    title: string;
    done: boolean;
}

let tasks: Task[] = [];

const input = document.getElementById("task") as HTMLInputElement;
const list = document.getElementById("list") as HTMLUListElement;

document.getElementById("add")!.addEventListener("click", (): void => {
    if (!input.value.trim()) return;

    tasks.push({ id: Date.now(), title: input.value, done: false });
    input.value = "";
    showTasks();
});

function showTasks(): void {
    list.innerHTML = "";

    tasks.forEach((task: Task) => {
        const li = document.createElement("li");
        li.textContent = task.title + " ❌";
        li.className = task.done ? "done" : "";

        li.onclick = () => {
            if (li.textContent?.endsWith("❌")) {
                const deleteTask = confirm("OK = Complete, Cancel = Delete");
                if (deleteTask) task.done = !task.done;
                else tasks = tasks.filter(t => t.id !== task.id);
            }
            showTasks();
        };

        list.appendChild(li);
    });
}
