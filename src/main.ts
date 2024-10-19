let palavra: string = "";
let dica: string = "";
let tentativas: number = 6;
let letrasCorretas: string[] = [];
let indiceImg: number = 7;

const dicaHtml = document.getElementById("dica");
const palavraHtml = document.getElementById("palavra");
const tentativasHtml = document.getElementById("tentativas");
const tecladoHtml = document.getElementById("teclado");
const inputHtml = document.getElementById("palavra-chute") as HTMLInputElement;
const btnChutarHtml = document.getElementById("btn-chutar");
const btnReiniciarHtml = document.getElementById("btn-reiniciar");
const labelInputHtml = document.getElementById("label-chute");
const imgForcaHtml = document.querySelector("img");

function renderizarJogo() : void {
	dicaHtml!.innerText = `Dica: ${dica}`;
	const palavraFormatada = palavra
		.split("")
		.map((letra) => (letrasCorretas.includes(letra) ? letra : "_"))
		.join(" ");
	palavraHtml!.innerText = palavraFormatada;

	if (tentativas > 0 && tentativas < 6) {
		indiceImg = tentativas + 1;
		imgForcaHtml!.src = `img${indiceImg}.png`;
	}

	if (!palavraFormatada.includes("_")) {
		tentativasHtml!.innerText = "VOCÊ GANHOOOU!!!";
		registrarVitoria();
		esconderElementos();
	}

	if (tentativas > 0 && palavraFormatada.includes("_")) {
		tentativasHtml!.textContent = `${tentativas} restantes`;
	} else if (tentativas <= 0) {
		tentativasHtml!.innerText = `Você perdeu, tente novamente! A palavra era ${palavra}`;
		imgForcaHtml!.src = "img1.png";
		registrarDerrota();
		esconderElementos();
	}
}

async function encontrarPalavra() : Promise<void>{
	try {
		const response = await fetch("http://localhost:3000/palavras");
		const palavras = await response.json();
		const palavraAleatoria =
			palavras[Math.floor(Math.random() * palavras.length)];
		palavra = palavraAleatoria.palavra.toUpperCase();
		dica = palavraAleatoria.dica;
		tentativas = 6;
		letrasCorretas = [];
		imgForcaHtml!.src = "img7.png";

		renderizarJogo();
		atualizarProgresso();
	} catch (error) {
		console.error("Erro ao buscar palavra", error);
	}
}

function formarTeclado() : void {
	for (let i = 65; i < 90; i++) {
		const btnLetra = document.createElement("button");
		const letra = String.fromCharCode(i);
		btnLetra.id = "button" + letra;
		btnLetra.innerText = letra;

		tecladoHtml?.appendChild(btnLetra);
	}
}

function verificarLetra(letra: string) : void{
	if (palavra.includes(letra)) {
		estilizarTeclado(letra, true);
		letrasCorretas.push(letra);
	} else {
		estilizarTeclado(letra, false);
		tentativas--;
	}

	console.log(letrasCorretas);

	renderizarJogo();
}

function verificarPalavra(tentativaPalavra: string) : void{
	if (tentativaPalavra.toUpperCase() === palavra) {
		for (const letra of tentativaPalavra) {
			letrasCorretas.push(letra);
		}
		palavraHtml!.innerText = palavra;
		tentativasHtml!.innerText = `VOCÊ GANHOOOU!!`;
		registrarVitoria();
		esconderElementos();
	} else {
		tentativas--;
		tentativasHtml!.innerText = `Você errou, restam ${tentativas} tentativas`;
	}
}

function reiniciarJogo() : void {
	encontrarPalavra();
	mostrarElementos();
}

function esconderElementos() : void {
	tecladoHtml!.style.display = "none";
	inputHtml!.style.display = "none";
	btnChutarHtml!.style.display = "none";
	labelInputHtml!.style.display = "none";
}

function mostrarElementos() : void {
	tecladoHtml!.style.display = "block";
	inputHtml!.style.display = "block";
	btnChutarHtml!.style.display = "block";
	labelInputHtml!.style.display = "block";
}

function salvarProgresso(chave: string, valor: number): void {
	localStorage.setItem(chave, valor.toString());
}

function carregarProgresso(chave: string): number {
	const valor = localStorage.getItem(chave);
	return valor ? parseInt(valor, 10) : 0;
}

function atualizarProgresso(): void {
	const vitorias = carregarProgresso("vitorias");
	const derrotas = carregarProgresso("derrotas");

	const vitoriasElemento = document.getElementById("vitorias");
	const derrotasElemento = document.getElementById("derrotas");

	if (vitoriasElemento && derrotasElemento) {
		vitoriasElemento.textContent = `Vitórias: ${vitorias}`;
		derrotasElemento.textContent = `Derrotas: ${derrotas}`;
	}
}

function registrarVitoria(): void {
	const vitorias = carregarProgresso("vitorias") + 1;
	salvarProgresso("vitorias", vitorias);
	atualizarProgresso();
}

function registrarDerrota(): void {
	const derrotas = carregarProgresso("derrotas") + 1;
	salvarProgresso("derrotas", derrotas);
	atualizarProgresso();
}

function estilizarTeclado(letra: string, letraEncontrada: boolean) : void {
	const buttonLetra = document.getElementById("button" + letra);
	if (letraEncontrada) {
		buttonLetra!.style.backgroundColor = "green";
	} else {
		buttonLetra!.style.backgroundColor = "red";
	}
}

btnChutarHtml!.addEventListener("click", () => {
	verificarPalavra(inputHtml.value);
	inputHtml.value = "";
});

tecladoHtml!.addEventListener("click", (event) => {
	const letra = (event.target as HTMLButtonElement).textContent!;
	console.log(letra);
	verificarLetra(letra);
});

btnReiniciarHtml!.addEventListener("click", () => {
	reiniciarJogo();
});

formarTeclado();
atualizarProgresso();
encontrarPalavra();