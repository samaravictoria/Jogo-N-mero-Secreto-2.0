            //let titulo = document.querySelector ('h1');
            //titulo.innerHTML =  'Jogo do Número Secreto';  

            //let paragrafo = document.querySelector ('p'); 
            //paragrafo.innerHTML = 'Escolha um número entre 1 e 10.';

let numeroSecreto = gerarNumeroAleatorio();

//Isolar em uma única função, para se escrever menos linhas de código. 
//Função com parametro e sem retorno. 
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
}


exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 100.');


//Função sem parametro e sem retorno. 
function verificarChute() {
    let chute = document.querySelector('input').value; 
    console.log(chute == numeroSecreto); 
} 


//Função sem parametro e com retorno. 
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 100 +1); 
}
