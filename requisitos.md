# Jogo da Forca

Este projeto é um jogo da forca interativo, desenvolvido como parte do curso de Front-End. Ele permite que o usuário jogue, chute a palavra inteira ou letras individuais, e reinicie o jogo. O jogo também inclui uma dica/tema e utiliza palavras obtidas de uma API externa. O layout do jogo inclui um teclado virtual que simula as teclas físicas.

## Funcionalidades

- *Exibição de Dica/ Tema*: O jogo exibe uma dica ou tema relacionado à palavra que o usuário deve adivinhar. (OK)
- *Chutes de Palavras Inteiras*: O jogador pode digitar a palavra completa como tentativa, além de tentar letras individuais. (OK)
- *Reiniciar o Jogo*: Após o fim do jogo, o usuário pode reiniciar e tentar adivinhar uma nova palavra. (OK)
- *Teclado Virtual*: O usuário pode usar o teclado virtual, clicando nas letras. (OK)
- *Consumo de API Externa*: As palavras e dicas são obtidas de uma API externa, garantindo variedade e dinamismo no jogo. (OK)

## Requisitos Técnicos

- *Manipulação do DOM*:
  - O jogo utiliza métodos como getElementById, getElementsByClassName e querySelector para manipular a exibição dinâmica das letras corretas e erradas, atualizar a interface e exibir o progresso do jogo.
- *Eventos em Elementos HTML*: (OK)

  - Eventos como onclick são usados para capturar interações do jogador com o teclado virtual, e oninput para capturar o chute completo digitado pelo usuário. (OK)
 
- *Persistência Local*:

  - `O jogo pode armazenar o histórico de partidas ou estatísticas dos jogadores usando localStorage.`

- *Chamadas Assíncronas*:

  - Utilizamos Promises e async/await para buscar as palavras e dicas de uma API externa, e lidamos com erros de conexão ou indisponibilidade de dados. (OK)

- *Estilização Dinâmica*:
  - `Alteramos as classes e estilos dos elementos do DOM dinamicamente, conforme o usuário interage com o jogo, como destacar letras erradas ou acertadas.`

## Requisitos Visuais

- *Interface Simples e Intuitiva*: (OK)
- *Indicação Visual de Tentativas Restantes*: (OK)

  - O número de tentativas restantes é mostrado visualmente, seja por uma contagem regressiva ou pela progressão no desenho de uma forca. (OK)

- *Feedback Visual de Acertos/Erros*:
  - `Letras corretas são reveladas na palavra em jogo, enquanto letras erradas são destacadas de forma visual, como com a mudança de cor.`

## Tecnologias Utilizadas

- *HTML5*
- *CSS3*
- *JavaScript*
  - Manipulação do DOM
  - Eventos em elementos HTML
  - Chamadas assíncronas com Promises
- *API Externa* para fornecimento das palavras e dicas
- *LocalStorage* para armazenar o histórico do jogador

## Como Jogar

1. O jogo começará com uma dica ou tema relacionado à palavra que você deve adivinhar.
2. Você pode tentar adivinhar a palavra completa digitando-a no campo de entrada, ou adivinhar uma letra de cada vez usando o teclado virtual.
3. Se errar, será indicado quantas tentativas você ainda tem.
4. Se acertar a palavra, poderá reiniciar o jogo para tentar uma nova palavra.

## Requisitos para Execução

- Um navegador moderno com suporte para ES6+ (JavaScript).
- Conexão com a internet para buscar palavras da API externa.

## Instruções de Instalação

## Sugestão de Interface

plaintext
+------------------------------+
|         JOGO DA FORCA         |
+------------------------------+
| Dica: ____________            |
| Tema: ________                |
+------------------------------+
| Palavra: _ _ _ _ _ _          |
| Letras usadas: A, E, I        |
+------------------------------+
| Tentativas restantes: 5       |
+------------------------------+
|              O                |
|             /|\               |
|             / \               |
+------------------------------+
|    [ A ] [ B ] [ C ] [ D ]    |
|    [ E ] [ F ] [ G ] [ H ]    |
|    [ I ] [ J ] [ K ] [ L ]    |
|    [ M ] [ N ] [ O ] [ P ]    |
|    [ Q ] [ R ] [ S ] [ T ]    |
|    [ U ] [ V ] [ W ] [ X ]    |
|    [ Y ] [ Z ]                |
+------------------------------+
|  [Chutar palavra] [Reiniciar] |
+------------------------------+