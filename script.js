document.getElementById('add-todo').addEventListener('click', function() {
    var taskContent = document.getElementById('new-todo').value;
    if (taskContent.trim() !== '') {
        var taskItem = document.createElement('li');
        taskItem.textContent = taskContent;
        taskItem.addEventListener('click', function() {
            this.classList.toggle('completed');
        });

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Remove';
        deleteButton.className = 'remove-btn';
        deleteButton.addEventListener('click', function() {
            this.parentElement.remove();
        });

        taskItem.appendChild(deleteButton);
        document.getElementById('todo-list').appendChild(taskItem);
        document.getElementById('new-todo').value = '';
    }
});
