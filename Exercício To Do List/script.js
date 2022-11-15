const formulario = document.querySelector('form')
const inputValue = document.querySelector('.input__son');
const elementDiv = document.querySelector('.boxList')
const elementsInsideDiv = Array.from(elementDiv.children)

formulario.addEventListener('submit', event => {
    event.preventDefault()
    const newParagraph = document.createElement('p');
    newParagraph.textContent = inputValue.value;
    newParagraph.classList.add('list');
    elementDiv.appendChild(newParagraph);
    inputValue.value = ""
    inputValue.getAttribute('newParagraph')
    
    const novaListaParagrafo = document.querySelectorAll('p')
    novaListaParagrafo.forEach( item => {
        item.addEventListener('click', event => {
            
            console.log("🚀 ~ file: script.js ~ line 19 ~ event.target", event.target)
        })
    })
});
