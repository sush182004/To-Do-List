function addTask() {
    let taskInput = document.getElementById("task");
    let taskValue = taskInput.value.trim();
    if (taskValue === "") return;

    let li = document.createElement("li");
    li.innerHTML = `${taskValue} <button class='delete' onclick='removeTask(this)'>X</button>`;

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}

function removeTask(button) {
    button.parentElement.remove();
}
