/*
  01
  - Obtenha a ul do index.html e adicione em todos os elementos filhos dela,  
    uma classe 'video';
  - Exiba no console os elementos filhos da ul com a classe já inserida.
*/
const c = console.log.bind(document);

const novaVar = document.querySelector("ul");
const li = Array.from(novaVar.children);
li.forEach((items) => {
  items.classList.add("video");
});
// c(li)

/*
  02
  - Usando a propriedade adequada, descubra quem é o elemento pai do h2
    e exiba-o no console;
*/
const pai = document.querySelector("h2");
// c(pai.parentElement)

/*
  03
  - Descubra quem é o próximo elemento irmão do h1 e exiba-o no console;
*/
const irmao = document.querySelector("h1");
// c(irmao.nextElementSibling)

/*
  04
  - Descubra quem é o irmão anterior da ul e exiba-o no console;
*/

const irmaoAnterior = document.querySelector("ul");
// c(irmaoAnterior.previousElementSibling)
/*
  05
  - Quando um clique acontecer em alguma das lis, faça com que a li clicada seja  
    exibida no console.
*/
// const showClickedLi = event => {  c(event.target)}
// const addClickEvent = li => {
//   li.addEventListener('click', showClickedLi)
// }
// li.forEach(addClickEvent)
/*
  06
  - Quando o botão for clicado, adicione o nome dos vídeos abaixo dentro da ul;
  - Cada nome deve estar dentro de uma li.
*/

const videos = [
  {
    name: "Como o promise all funciona | JavaScript",
    length: "00:01:52",
  },
  {
    name: "Como refatorar um for loop | JavaScript",
    length: "00:04:18",
  },
  {
    name: "Como fazer requisições HTTP com o método fetch | JavaScript",
    length: "00:02:55",
  },
];

const novaUl = document.querySelector("ul");
const botao = document.querySelector("button");

const insertVideoLi = ({length})  => {
  novaUl.innerHTML += `<li>${length}</li>`;
}
const handleClickButton = () => {
  videos.forEach(insertVideoLi);
}

botao.addEventListener("click", handleClickButton);

/*
  07
  - Se um clique no h1 acontecer, faça com que todos os elementos dentro do body 
    sejam removidos.
*/

const clickH1 = document.querySelector("h1");
const corpo = document.body;
clickH1.addEventListener("click", () => {
  corpo.remove();
});
