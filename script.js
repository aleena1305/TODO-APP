function addTask() {
    let taskInput = document.getElementById('new-task');
    let taskText = taskInput.value.trim();
    if (taskText) {
        let taskList = document.getElementById('task-list');
        let li = document.createElement('li');
        li.innerHTML = `${taskText} <button onclick="removeTask(this)">Delete</button>`;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function removeTask(button) {
    let li = button.parentElement;
    li.remove();
}
