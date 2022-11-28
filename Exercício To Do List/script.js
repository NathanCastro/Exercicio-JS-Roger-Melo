const formulario = document.querySelector('form')
const inputValue = document.querySelector('.input__son');
const inputResult = document.querySelector('.input_grandSon');
const elementDiv = document.querySelector('.boxList')
const elementsInsideDiv = Array.from(elementDiv.children)
const divInput = document.querySelector('.divInput');


// console.log("🚀 ~ file: script.js ~ line 5 ~ elementsInsideDiv", elementsInsideDiv)

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
    const txtValue = document.createTextNode(inputValue.value)

    if(inputValue.value === ""){
        alert('Digite uma tarefa por favor')
    }
    let i;
    // for (i = 0; i<inputValue.length; i++){
    //     // inputResult.value = inputValue.value;
    //     const maisInput = document.createElement("input")
    //     console.log("🚀 ~ file: script.js ~ line 44 ~ maisInput", maisInput)
    //     maisInput.classList.add = "input_grandSon"
    //     maisInput.value = inputResult.value
    //     inputValue[i].value.appendChild(maisInput)
    // }

    const maisInput = document.createElement("input")
    maisInput.classList.add = "input_grandSon"
    maisInput.appendChild(txtValue);
    

    inputValue.value = ""

})





/*
1- Segundo input começar com display none;

2- Ao colocar o valor no 1º input, aparecer esse valor no 2º input

3- Quando clicar no checkin aparecer o risco no input[text-decoration:line-through]
*/ 