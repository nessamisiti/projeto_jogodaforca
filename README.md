# Jogo da Forca

Este projeto é um jogo da forca interativo, desenvolvido como parte do curso de Front-End. Ele permite que o usuário jogue, chute a palavra inteira ou letras individuais, e reinicie o jogo. O jogo também inclui uma dica/tema e utiliza palavras obtidas de uma API externa. O layout do jogo inclui um teclado virtual que simula as teclas físicas.

## Funcionalidades Principais

**Exibição de Dica/ Tema**: O jogo exibe uma dica ou tema relacionado à palavra que o usuário deve adivinhar.

**Chutes de Palavras**: O jogador pode digitar a palavra completa como tentativa, além de tentar letras individuais.

**Reiniciar Jogo**: Após o fim do jogo, o usuário pode reiniciar e tentar adivinhar uma nova palavra.

**Dica ou Tema**: Cada palavra tem uma dica ou tema exibido de forma visual para ajudar o jogador.

**Consumo de API Externa**: As palavras e dicas são obtidas de uma API externa, garantindo variedade e dinamismo no jogo.

**Teclado Virtual**: Um teclado virtual é renderizado na tela, permitindo interação com o jogo sem a necessidade de teclado físico (manipulação do DOM).

## Requisitos Técnicos

- **Manipulação do DOM**: O jogo utiliza métodos como getElementById, getElementsByClassName e querySelector para manipular a exibição dinâmica das letras corretas e erradas, atualizar a interface e exibir o progresso do jogo.

- **Eventos em Elementos HTML**: Eventos como onclick são usados para capturar interações do jogador com o teclado virtual, e oninput para capturar o chute completo digitado pelo usuário.
 
- **Persistência Local**: O jogo pode armazenar o histórico de partidas ou estatísticas dos jogadores usando localStorage.

- **Chamadas Assíncronas**: Utilizamos Promises e async/await para buscar as palavras e dicas de uma API externa, e lidamos com erros de conexão ou indisponibilidade de dados. 

- **Estilização Dinâmica**: Alteramos as classes e estilos dos elementos do DOM dinamicamente, conforme o usuário interage com o jogo, como destacar letras erradas ou acertadas.

## Requisitos Visuais

- *Interface Simples e Intuitiva*: 
- *Indicação Visual de Tentativas Restantes*: 

  - O número de tentativas restantes é mostrado visualmente, seja por uma contagem regressiva ou pela progressão no desenho de uma forca. 

- *Feedback Visual de Acertos/Erros*:
  - Letras corretas são reveladas na palavra em jogo, enquanto letras erradas são destacadas de forma visual, como com a mudança de cor.


## Funcionalidades Extras

**Pontuação**: O jogo possui um sistema de pontuação baseado no tempo e na quantidade de acertos do jogador.
**Salvar Preferências**: As preferências do jogador são salvas localmente no navegador, proporcionando uma experiência personalizada.


## Como Executar o Projeto:

1. **Clone o repositório**:

```bash
git clone https://github.com/nessamisiti/projeto_jogodaforca
```  
2. **Instale as dependências**:

```bash
npm install
 ```
3. **Execução do API**

```bash
npx json-server -w db.json
```
4. **Excecução do projeto**:

```bash
npm run dev
```
5. **Acesse o jogo no navegador**:

```bash
http://localhost:3000/palavras
```

## Tecnologias Utilizadas

- *HTML5*
- *CSS3*
- *Typescript*
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


## Sugestão de Interface

![alt text](public/forca-icon.png)


## Desenvolvedores

Desenvolvido pela **Equipe 5** : Letícia Ribeiro, Maiane, Vanessa Misiti e Yasmin Silva 

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para mais informações.
