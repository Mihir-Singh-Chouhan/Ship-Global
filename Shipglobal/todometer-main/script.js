function moveTask(from, to, button) {
    const taskItem = button.parentElement;
    const taskText = taskItem.firstChild.textContent.trim();

    // Remove task from the current list
    taskItem.remove();

    // Add task to the new list
    const newTaskItem = document.createElement('li');
    newTaskItem.innerHTML = `${taskText} <button class="nav-button left" onclick="moveTask('${to}', '${from}', this)">←</button>`;
    
    if (to === 'todo') {
        newTaskItem.innerHTML += `<button class="nav-button right" onclick="moveTask('todo', 'ongoing', this)">→</button>`;
    } else if (to === 'ongoing') {
        newTaskItem.innerHTML += `<button class="nav-button right" onclick="moveTask('ongoing', 'done', this)">→</button>`;
    } else if (to === 'done') {
        newTaskItem.innerHTML += '';
    } else {
        newTaskItem.innerHTML += `<button class="nav-button right" onclick="moveTask('backlog', 'todo', this)">→</button>`;
    }

    document.getElementById(`${to}List`).appendChild(newTaskItem);

    // Update button states
    updateButtonStates();
}

function updateButtonStates() {
    document.querySelectorAll('.card').forEach(card => {
        const leftButton = card.querySelector('.nav-button.left');
        const rightButton = card.querySelector('.nav-button.right');

        if (card.id === 'backlog') {
            leftButton.disabled = true;
        } else if (card.id === 'done') {
            rightButton.disabled = true;
        } else {
            leftButton.disabled = false;
            rightButton.disabled = false;
        }
    });
}

// Initialize button states
updateButtonStates();
