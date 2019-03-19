function newItem() {
  var todoItems = document.getElementById("todo-items");
  var todoItem = document.createElement("li");
  var todoInput = document.getElementById("add-todo-item");
  var deleteButton = document.createElement("button");
  var editButton = document.createElement("button");

  todoItem.appendChild(document.createTextNode(todoInput.value));
  todoItem.appendChild(deleteButton);
  deleteButton.appendChild(document.createTextNode("delete"));
  deleteButton.onclick = deleteTodoItem;
  todoItems.appendChild(todoItem);
  todoInput.value = "";
  
  todoItem.appendChild(editButton);
  editButton.appendChild(document.createTextNode("edit"));
  
}

function deleteTodoItem() {
  var todoItem = this.parentElement;
  todoItem.parentNode.removeChild(todoItem);
}

function ed

document.body.onkeyup = function(e) {
  if (e.keyCode == 13) {
    newItem();
  }
};

