// Get references to DOM elements
const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// Add event listener for the Add button
addBtn.addEventListener("click", addTask);

// Add event listener for pressing Enter key
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

// Function to add a task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    return; // Don't add empty tasks
  }

  // Create a new list item
  const li = document.createElement("li");
  li.classList.add("task");

  // Create the task text element
  const span = document.createElement("span");
  span.textContent = taskText;
  li.appendChild(span);

  // Create a delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", deleteTask);
  li.appendChild(deleteBtn);

  // Add click event to mark the task as completed
  li.addEventListener("click", toggleTaskCompletion);

  // Append the new task to the list
  taskList.appendChild(li);

  // Clear the input field
  taskInput.value = "";
}

// Function to delete a task
function deleteTask(event) {
  const task = event.target.parentElement;
  task.remove();
}

// Function to toggle the completion of a task
function toggleTaskCompletion(event) {
  const task = event.target;

  // Toggle the 'completed' class on the task
  if (task.tagName === "LI") {
    task.classList.toggle("completed");
  }
}
