//let titulo = document.querySelector('h1');
//titulo.innerHTML= "Jogo Numero Secreto 2.0"

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = "Escolha um número entre 1 e 10:";

let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML= texto;
}

exibirTextoNaTela('h1', 'Jogo Numero Secreto 2.0');
exibirTextoNaTela('p','Escolha um número entre 1 e 10:');

function verificarChute(){
     console.log('Botão foi clicado!')
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 +1);
    
}