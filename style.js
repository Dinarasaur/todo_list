let input = document.querySelector ('.input');
let todoList = document.querySelector ('.todoList');
let order = 1;
const dateElem = document.getElementById('date');

const options = {weekday:"long", month:"short", day:"numeric"};
const today = new Date ();
dateElem.innerHTML = today.toLocaleDateString("en-US", options);

input.addEventListener('keyup', (e)=>{
    if(e.code === 'Enter' && input.value !== ''){
        let todo = document.createElement ('div');
        let todoId = document.createElement ('div');
        let todoTitle = document.createElement ('div');
        let todoDelete = document.createElement ('div');

        todo.classList.add('todo');
        todoId.classList.add('todoId');
        todoTitle.classList.add('todoTitle');
        todoDelete.classList.add('todoDelete');

        todo.appendChild(todoId);
        todo.appendChild(todoTitle);
        todo.appendChild(todoDelete);
        todoList.appendChild(todo);

        let content = input.value;
        todoTitle.textContent = content;
        input.value = '';
        todoId.textContent = order++;
        todoDelete.textContent = 'X';

        todoDelete.addEventListener ('click', (e)=>{
            e.target.parentElement.style.display = 'none';
        });
        todoTitle.addEventListener('click', (e)=>{
            e.target.style.textDecoration = 'line-through';
        })
    }

const options = {weekday:"long", month:"short", day:"numeric"};
const today = new Date ();
dateElem.innerHTML = today.toLocaleDateString("en-US", options);
});