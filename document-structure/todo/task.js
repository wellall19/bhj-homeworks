const form = document.querySelector('form');

function addTask(event) {
    event.preventDefault();
    
    const taskList = document.querySelector('.tasks__list')
    const taskText = document.querySelector('.tasks__input');

    if (!taskText.value.trim()) {
        return;
    }
    
    const newTask = document.createElement('div');
    newTask.classList.add('task');
    
    const newTaskTitle = document.createElement('div');
    newTaskTitle.classList.add('task__title');
    newTaskTitle.textContent = taskText.value;
    newTask.appendChild(newTaskTitle)
    
    const newTaskRemove = document.createElement('a');
    newTaskRemove.classList.add('task__remove');
    newTaskRemove.href = '#';
    newTaskRemove.textContent = '×';
    newTask.appendChild(newTaskRemove);

    newTaskRemove.addEventListener('click', removeTask);

    taskList.prepend(newTask);

    taskText.value = '';
}

function removeTask(event) {
    event.preventDefault();
    event.target.closest('.task').remove();
}

form.addEventListener('submit', addTask);