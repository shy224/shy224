const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const STORAGE_TODO = "todos";

let toDos = [];

function saveToDo(){
    localStorage.setItem(STORAGE_TODO, JSON.stringify(toDos));
}

function changeToDo(event){

    const target = event.target;

    toDos.map(todo => {
        if(todo.id === parseInt(target.id)){
            todo.checked = target.checked;
        }
        return todo;
    });

    saveToDo();
}

function paintToDo(toDo){
    
    const li = document.createElement("li");

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = toDo.checked;
    checkBox.id = toDo.id
    checkBox.addEventListener("change", changeToDo);

    const label = document.createElement("label");
    label.htmlFor = toDo.id

    label.appendChild(document.createTextNode(toDo.text));

    li.appendChild(checkBox);
    li.appendChild(label);

    toDoList.appendChild(li);
}

function addTodoList(event) {
    event.preventDefault();

    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        id: Date.now(),
        text: newToDo,
        checked: false
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDo();
}

toDoForm.addEventListener("submit", addTodoList);

const savedToDos = localStorage.getItem(STORAGE_TODO);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}