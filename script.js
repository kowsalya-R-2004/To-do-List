document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
  const taskInput = document.getElementById('task-input');
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const taskList = document.getElementById('task-list');

  const li = document.createElement('li');
  li.textContent = taskText;

  li.addEventListener('click', function () {
    this.classList.toggle('completed');
  });

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.classList.add('remove-btn');

  removeBtn.addEventListener('click', function () {
    taskList.removeChild(li);
  });

  li.appendChild(removeBtn);
  taskList.appendChild(li);

  taskInput.value = '';
}
