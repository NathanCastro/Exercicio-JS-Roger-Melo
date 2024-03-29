const formAddTodo = document.querySelector('.form-add-todo');
const todosContainer = document.querySelector('.todos-container');
const inputSearchTodo = document.querySelector('.form-search input')

const addTodo = inputValue => {
    if(inputValue.length) {
        todosContainer.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center" data-son="${inputValue}">
                <span>${inputValue}</span>
                <i class="far fa-trash-alt delete" data-del="${inputValue}"></i>
            </li>
        `
        event.target.reset();
    }
}
formAddTodo.addEventListener('submit', event => {
    event.preventDefault();
    const inputValue = event.target.add.value.trim();
   
    addTodo(inputValue)
})

const removeTodo = clickedElement => {
    const eliminar = clickedElement.dataset.del;
    const recebeDom = document.querySelector(`[data-son="${eliminar}"]`)

    if(eliminar) {     
        recebeDom.remove();
    }
}

todosContainer.addEventListener('click', event => {
    const clickedElement = event.target;
    removeTodo(clickedElement);
});

const filterTodos = (todos, inputValue, returnMatchedTodos) =>   todos
    .filter(todo => {
        const matchedTodos = todo.textContent.toLowerCase().includes(inputValue)
        return returnMatchedTodos ? matchedTodos : !matchedTodos
    })

const manipulateClasses = (todos, classToAdd, classToRemove) => {
    todos.forEach(todo => {
        todo.classList.remove(classToRemove)
        todo.classList.add(classToAdd)
    })
}


const hideTodos = (todos,inputValue) => {
    const todoHiden = filterTodos(todos, inputValue, false)
    manipulateClasses(todoHiden, 'hidden','d-flex' )
}


const showTodo = (todos,inputValue) => {
    const todosToShow = filterTodos(todos, inputValue, true)
    manipulateClasses(todosToShow, 'd-flex','hidden' )
    
}
inputSearchTodo.addEventListener('input', event => {
    const inputValue = event.target.value.trim().toLowerCase();
    const todos = Array.from(todosContainer.children)
    
    hideTodos(todos,inputValue)
    showTodo(todos,inputValue)
})