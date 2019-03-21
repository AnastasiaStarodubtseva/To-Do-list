function newItem() {
  var todoItems = document.getElementById("todo-items");
  var todoItem = document.createElement("li");
  var todoInput = document.getElementById("add-todo-item");
  var deleteButton = document.createElement("button");
  var editButton = document.createElement("button");

  todoItem.appendChild(document.createTextNode(todoInput.value));
  todoItem.appendChild(deleteButton);
  deleteButton.onclick = deleteTodoItem;
  todoItems.appendChild(todoItem);
  todoInput.value = "";
  
  todoItem.appendChild(editButton);
  editButton.onclick = createTodoInput;
}

function deleteTodoItem() {
  var todoItem = this.parentElement;
  todoItem.parentNode.removeChild(todoItem);
}

function createTodoInput() {
  var todoItem = this.parentElement;
  var currentTextNode = todoItem.firstChild;
  var inputField = document.createElement("input");

  todoItem.appendChild(inputField);
  inputField.value = currentTextNode.textContent;
  currentTextNode.parentNode.removeChild(currentTextNode);
  inputField.focus();
  inputField.onkeyup = function(event) {
    if (event.keyCode !== 13) { return; }
    var newInputText = document.createTextNode(inputField.value);
    todoItem.insertBefore(newInputText, todoItem.firstChild);
    todoItem.removeChild(inputField);
  }
}

document.getElementById("add-todo-item").onkeyup = function(event) {
  if (event.keyCode === 13) {
    newItem();
  }
}