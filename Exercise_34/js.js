let tasks = document.querySelector('#tasks');
let addTaskButton = document.querySelector('#addTaskButton');
let removeTaskButton = document.querySelector('#removeTaskButton');

addTaskButton.addEventListener('click', () => {
    let newTask = document.createElement('li');
    newTask.textContent = `Task ${tasks.children.length + 1}`;
    tasks.appendChild(newTask);
});

removeTaskButton.addEventListener('click', () => {
    if (tasks.children.length > 0) {
        tasks.removeChild(tasks.lastElementChild);
    }
});