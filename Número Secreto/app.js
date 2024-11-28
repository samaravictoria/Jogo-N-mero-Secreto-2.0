// Gera o número secreto aleatório
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1; // Contador de tentativas

function exibirMensagemInicial() {
    // Atualiza o título e a mensagem inicial
    exibirTextoNaTela('h1', 'Jogo do Número Secreto 2.0');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100. Boa sorte!');
}

exibirMensagemInicial();

// Função para exibir texto em um elemento na tela
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag); // Seleciona o elemento pela tag
    campo.innerHTML = texto; // Atualiza o conteúdo do elemento
}

// Função para verificar o chute do jogador
function verificarChute() {
    // Obtém o valor do input e converte para número
    let chute = Number(document.querySelector('.container__input').value);

    // Verifica se o chute é igual ao número secreto
    if (chute === numeroSecreto) {
        exibirTextoNaTela('h1', "Parabéns, você acertou!");
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; 
        let mensagemTentativa = `Você descobriu o número secreto, com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativa );
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // Dá dicas se o chute for maior ou menor
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', "Tente um número menor.");
        } else {
            exibirTextoNaTela('p', "Tente um número maior.");
        }
        tentativas++; // Incrementa as tentativas
    }

    limparCampo(); // Limpa o campo de entrada
}

// Função para gerar um número aleatório entre 1 e 100
function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1; // Gera número de 1 a 100
}

// Função para limpar o campo de entrada
function limparCampo() {
    let chute = document.querySelector('.container__input'); // Seleciona o campo de entrada
    chute.value = ''; // Limpa o valor do campo
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio(); // Gera um novo número secreto
    limparCampo(); // Limpa o campo de entrada
    tentativas = 1; // Reseta o contador de tentativas
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
