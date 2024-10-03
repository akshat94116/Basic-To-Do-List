function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `${taskInput.value} <button onclick="deleteTask(this)">Delete</button>`;
    taskList.appendChild(li);

    taskInput.value = "";  // Clear input after adding task
}

function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}
