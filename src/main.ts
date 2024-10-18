let palavra : string = '';
let dica : string = '';
let tentativas : number = 6;
let letrasCorretas : string[] = [];

const dicaHtml  = document.getElementById('dica');
const palavraHtml = document.getElementById('palavra');
const tentativasHtml = document.getElementById('tentativas');
const tecladoHtml = document.getElementById('teclado');
const inputHtml = document.getElementById('palavra-chute') as HTMLInputElement;
const btnChutarHtml = document.getElementById('btn-chutar');
const btnReiniciarHtml = document.getElementById('btn-reiniciar');
const labelInputHtml = document.getElementById('label-chute');

function renderizarJogo() {

  dicaHtml!.innerText = `Dica: ${dica}`
  const palavraFormatada = palavra.split('').map(letra => letrasCorretas.includes(letra) ? letra : '_').join(' ');
  palavraHtml!.innerText = palavraFormatada;

  if(!palavraFormatada.includes('_')){
    tentativasHtml!.innerText = 'VOCÊ GANHOOOU!!!'
    esconderElementos();
  }
  
  if(tentativas > 0 && palavraFormatada.includes('_')){
    tentativasHtml!.textContent = `${tentativas} restantes`;
  } else if(tentativas <= 0){
    tentativasHtml!.innerText = `Você perdeu, tente novamente! A palavra era ${palavra}`
    esconderElementos();
  }

}

async function encontrarPalavra() {
  try {
    const response = await fetch('http://localhost:3000/palavras');
    const palavras = await response.json();
    const palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];
    palavra = palavraAleatoria.palavra.toUpperCase();
    dica = palavraAleatoria.dica;
    tentativas = 6;
    letrasCorretas = [];

    renderizarJogo();
  } catch (error) {
    console.error('Erro ao buscar palavra', error);
  }
}

function formarTeclado(){
  for (let i = 65; i < 90; i++) {
    const btnLetra = document.createElement('button');
    const letra = String.fromCharCode(i);
    btnLetra.innerText = letra;

    tecladoHtml?.appendChild(btnLetra);
  }
}

function verificarLetra(letra : string){
  if(palavra.includes(letra)){
    letrasCorretas.push(letra)
  } else {
    tentativas --
  }

  console.log(letrasCorretas)

  renderizarJogo();
}

function verificarPalavra(tentativaPalavra : string){
  if(tentativaPalavra.toUpperCase() === palavra){
    for (const letra of tentativaPalavra) {
        letrasCorretas.push(letra)
    }
    palavraHtml!.innerText = palavra;
    tentativasHtml!.innerText = `VOCÊ GANHOOOU!!`
    esconderElementos();
  } else {
    tentativas--;
    tentativasHtml!.innerText = `Você errou, restam ${tentativas} tentativas`
  }
}

function reiniciarJogo(){
  encontrarPalavra();
  mostrarElementos();
}

function esconderElementos(){
  tecladoHtml!.style.display = 'none';
  inputHtml!.style.display = 'none';
  btnChutarHtml!.style.display = 'none';
  labelInputHtml!.style.display = 'none';
}

function mostrarElementos() {
  tecladoHtml!.style.display = 'block';
  inputHtml!.style.display = 'block';
  btnChutarHtml!.style.display = 'block';
  labelInputHtml!.style.display = 'block';
}

function salvarHistorico(){
  
}

function estilizarTeclado(){

}

btnChutarHtml!.addEventListener('click', () => {
  verificarPalavra(inputHtml.value);
  inputHtml.value = '';
});

tecladoHtml!.addEventListener('click', (event) => {
  const letra = (event.target as HTMLButtonElement).textContent!;
  console.log(letra)
  verificarLetra(letra);
});

btnReiniciarHtml!.addEventListener('click', () => {
  reiniciarJogo();
});

formarTeclado();
encontrarPalavra();