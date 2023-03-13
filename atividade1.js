// Faça o exercício da GALERIA de IMAGENS neste arquivo

// caminho para onde as imagens estão hospedadas
const servidorDasImagens = 'https://fegemo.github.io/cefet-front-end/images/',
  // array com o nome das 5 imagens da galeria
  nomesDasImagens = [
    '01-philae-parts.jpg',
    '02-philae-rosetta.jpg',
    '03-philae-separation.jpg',
    '04-philae-67-picture.jpg',
    '05-philae-collecting.jpg'
  ];

// o índice da imagem sendo mostrada
// (inicialmente, é a imagem 0: '01-philae-parts.jpg')
let indiceDaFotoAtual = 0;

// ...COMECE a implementar aqui <--------------------------------------------
function mudarImg(sentido){
  indiceDaFotoAtual += sentido;
  if(indiceDaFotoAtual === -1){ //imagens em carrossel
    indiceDaFotoAtual = 4
  } else if(indiceDaFotoAtual === 5){
    indiceDaFotoAtual = 0;
  }
  let img = document.querySelector('#slide');
  img.src = servidorDasImagens + nomesDasImagens[indiceDaFotoAtual]; //altera imagem
}

let btnProximo = document.querySelector('#proximo');
let btnAnterior = document.querySelector('#anterior');

btnProximo.addEventListener('click', function(){
  mudarImg(1)});
btnAnterior.addEventListener('click', function(){
  mudarImg(-1)});




