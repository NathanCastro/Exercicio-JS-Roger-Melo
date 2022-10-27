/*
  01

  - No envio do form, faça com que a página não seja recarregada.
*/
const formulario = document.querySelector('form')
formulario.addEventListener('submit', event => {
  event.preventDefault()

  const getInput = document.querySelector('#input');
  // console.log(getInput.value);
})
/*
  02

  - No envio do form obtenha, através do objeto event, o texto inserido no  
    input e exiba-o no console.
*/



// formulario.addEventListener( 'click', () => {
//   // console.log(getInput.value);
// })

/*
  03

  - Teste uma regex que dá match com a palavra "documentation" do parágrafo do  
    index.html;
  - Exiba no console o boolean no qual este teste resulta.
*/
const regExer = document.querySelector('p')
const caractesRegex = /documentation/
const resulRegex = caractesRegex.test(regExer.textContent)

// console.log(resulRegex);
/*
  04

  - Escreva uma regex que dê match com a palavra "B99" da string abaixo;
  - A regex não deve conter (literalmente) os caracteres B99;
  - Teste se o match aconteceu e exiba o resultado no console.
*/

const B99message = 'E o Terry Crews faz tudo, inclusive tocar a abertura de B99 na flauta'
const regexB99 = /[A-B]{1}[0-9]{2}/
const resultB99 = regexB99.test(B99message)

// console.log(resultB99);
/*
  05

  - Modifique (manualmente) o valor que a const word armazena para que o  
    resultado do teste entre a regex e a string exibido no console seja true.
*/

const word = 'NASA'
const NASARegex = /^[A-Z]{4}$/
const NASAResult = NASARegex.test(word)

// console.log(NASAResult)

/*
  06

  - No envio do form, se o valor inserido no input conter, no mínimo, 7  
    caracteres, que podem ser quaisquer caracteres, exiba no console a mensagem
    "O valor inserido no input é válido =)";
  - Caso contrário, exiba "Valor inválido =(" no console.
  
  Exemplos:
    - "a[b@X7c" é um valor válido, pois contém 7 caracteres;
    - "jozeti" não é um valor válido, pois contém 6 caracteres.
*/
const resultadoRegex = /.{7,}/
const formRegex = document.querySelector('form')
const inputRegex = document.querySelector('#input')


// formRegex.addEventListener('submit', event => {
//   event.preventDefault()
//   const teste = resultadoRegex.test(inputRegex.value)

//   if (teste) {
//     console.log("O valor inserido no input é válido =)");
//   } else {
//     console.log("Valor inválido =(");
//   }
// })

/*
  07

  - Agora, no envio do form, faça com que o valor permitido contenha de 7 a 11 
    caracteres mas não contenha caracteres especiais. Apenas letras maiúsculas  
    ou minúsculas e números serão permitidos.

  Exemplos:
    - "0xY79aYx54e" é um valor válido, pois contém 11 letras e números;
    - "eich_1961" não é um valor válido, pois contém um caractere especial.
*/

const inputRegex2 = document.querySelector('#input')
const resultadoRegexUltimo = /[a-zA-Z0-9]{7,11}/
const clearInput = () => {
  inputRegex2.value = ''
  inputRegex2.focus()
}
const logMessage = message => {
  console.log(message);
  clearInput()
}
const handleSubmit = event => {
  event.preventDefault()

  const isValidValue = resultadoRegexUltimo.test(inputRegex2.value)
  if (isValidValue) {
    logMessage('é valido');
  } else {
    logMessage('não é valido')
  }
}
formRegex.addEventListener('submit', handleSubmit)
