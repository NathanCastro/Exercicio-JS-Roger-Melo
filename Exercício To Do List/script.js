const formulario = document.querySelector('form')
const inputValue = document.querySelector('.input__son');
const elementDiv = document.querySelector('.boxList')
const divInput = document.querySelector('.divInput');



divInput.addEventListener('click', event => {
    newList = event.target;
    if(newList.tagName === 'LI'){     
        newList.classList.toggle('checked');
    }
})


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
    
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";

    span.appendChild(txt);

   newInput.appendChild(span)
      
    const close = document.querySelectorAll('span');

    for(i=0; i < close.length; i++){
        close[i].addEventListener('click', removedFather);
    }

})

function removedFather(){ 
    const li = this.parentNode;
    li.parentNode.removeChild(li)
}
