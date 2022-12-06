const formulario = document.querySelector('form')
const inputValue = document.querySelector('.input__son');
const elementDiv = document.querySelector('.boxList')
const elementsInsideDiv = Array.from(elementDiv.children)
const divInput = document.querySelector('.divInput');



/* formulario.addEventListener('submit', event => {

    event.preventDefault()
    if(inputValue.value === ""){
        alert('Digitar uma tarefa por favor')
    }
    const newParagraph = document.createElement('p');
    newParagraph.textContent = inputValue.value;
    newParagraph.classList.add('list');
    elementDiv.appendChild(newParagraph);
    inputValue.value = ""
    inputValue.getAttribute('newParagraph')
    
    const novaListaParagrafo = document.querySelectorAll('p')
    novaListaParagrafo.forEach( item => {
        item.addEventListener('click', event => {
            const teste = event.target
            teste.style.textDecoration ='line-through';
        })
    })
});  */


formulario.addEventListener('submit', event => {
    event.preventDefault();
    let txtValue = document.createTextNode(inputValue.value)

    if (inputValue.value === "") {
        alert('Digite uma tarefa por favor');
        return;
    }

    const newInput = document.createElement("li");
    newInput.appendChild(txtValue)
    newInput.classList.add("input_grandSon");
    divInput.appendChild(newInput);

    inputValue.value = ""

    const newLis = document.querySelectorAll('li');
    
    newLis.forEach(item => {
        item.addEventListener('click', event => {
            const liEvent = event.target;
            if(liEvent === newInput){
                console.log('entrou no if');
                // liEvent.style.textDecoration = 'line-through'
                // liEvent.style.backgroundColor = '#888'

                liEvent.classList.toggle("checked");
            }
        }, false)
    });

})

