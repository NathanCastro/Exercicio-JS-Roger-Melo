/*
  01
  - Utilize o array abaixo para exibir no console uma string com a seguinte  
    formatação:
  
  Segundo o site Omelete, os melhores filmes de 2019 são:
    - NOME_DO_FILME, dirigido por DIRETOR_DO_FILME
    - NOME_DO_FILME, dirigido por DIRETOR_DO_FILME
    - NOME_DO_FILME, dirigido por DIRETOR_DO_FILME
  
  - Todos os filmes e diretores do array devem constar na lista.
*/

const best2019Movies = [
  { title: 'Parasita', directedBy: 'Bong Joon-ho' },
  { title: 'Bacurau', directedBy: 'Kleber Mendonça Filho' },
  { title: 'O Irlandês', directedBy: 'Martin Scorsese' },
  { title: 'Entre Facas e Segredos', directedBy: 'Rian Johnson' },
  { title: 'Turma da Mônica: Laços', directedBy: 'Daniel Rezende' },
  { title: 'Homem-Aranha: No Aranhaverso', directedBy: 'Peter Ramsey' },
  { title: 'Klaus', directedBy: 'Sergio Pablos' },
  { title: 'Fora de Série', directedBy: 'Olivia Wilde' },
  { title: 'Shazam', directedBy: 'David F. Sandberg' },
  { title: 'História de um Casamento', directedBy: 'Noah Baumbach' },
  { title: 'Varda por Agnès', directedBy: 'Agnès Varda' },
  { title: 'A Vida Invisível', directedBy: 'Karim Aïnouz' }
]

let msg = "Todos os filmes e diretores do array devem constar na lista."
best2019Movies.forEach(items => {
  
   msg += `
   ${items.title} 'dirigido por', ${items.directedBy}`
  
})
// console.log(msg);
/*
  02
  - No objeto abaixo, implemente um método que exibe a seguinte mensagem no 
    console:
    Vídeos recentes de Roger Melo:
    Introdução ao TDD - Parte 02 | JavaScript | Jest
    Introdução ao TDD | JavaScript | Jest
    Higher-order Functions | JavaScript
  
  - As 4 linhas da mensagem, podem ser exibidas separadamente.
*/

const youtubeUser = {
  name: 'Roger Melo',
  chanelUrl: 'https://www.youtube.com/channel/UCmjDevp9Y8r-qi-xueD3Izg',
  videos: {
    total: 111,
    recentVideos: [
      { title: 'Introdução ao TDD - Parte 02 | JavaScript | Jest', length: '28:28' },
      { title: 'Introdução ao TDD | JavaScript | Jest', length: '19:29' },
      { title: 'Higher-order Functions | JavaScript', length: '47:38' }
    ]
  },
  about: {
    description: '🔥 Ensino as pessoas a alcançarem a fluência em JavaScript! 🔥',
    socialNetworks: {
      twitter: 'https://twitter.com/rogermelodev',
      gitHub: 'https://github.com/Roger-Melo'
    },
    country: 'Brasil'
  },
  getVideos ()  {
    console.log(`Vídeos recentes de ${this.name}`);

    this.videos.recentVideos.forEach(items => {
      console.log(items.title);
      return
    }
  )}
}

// youtubeUser.getVideos()
// console.log(youtubeUser.getVideos());

/*
  03
  - Exiba o valor do PI no console.
*/

console.log(Math.PI);


/*
  04
  - Arredonde o número que a constante abaixo armazena para 9 e exiba-o no  
    console.
*/

const firstNumber = 8.3
console.log('aqui vem o firstNumber',Math.ceil(firstNumber));

/*
  05
  - Arredonde o número que a constante abaixo armazena para 4, utilizando a  
    forma padrão, e exiba-o no console.
*/

const secondNumber = 3.5
console.log('aqui vem o secondNumber', Math.round(secondNumber));


/*
  06
  - Arredonde o número que a constante abaixo armazena para 8 e exiba-o no  
    console.
*/

const thirdNumber = 8.9
console.log('aqui vem o thirdNumber', Math.floor(thirdNumber));
/*
  07
  - Exiba no console o número abaixo com a parte decimal removida.
*/

const fourthNumber = 5.5
console.log('aqui vem o fourthNumber', Math.trunc(fourthNumber));

/*
  08
  - A cada vez que o index.html for carregado, exiba no console um número  
    aleatório de 0 à 10, incluindo 0 e 10.
*/

// for( let i = 0; i < Math.random(); i++)
console.log('aqui vem o random', Math.round(Math.random() * 10));