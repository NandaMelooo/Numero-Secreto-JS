//let titulo = document.querySelector('h1');
//titulo.innerHTML= "Jogo Numero Secreto 2.0"

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = "Escolha um número entre 1 e 10:";

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML= texto;
}

exibirTextoNaTela('h1', 'Jogo Numero Secreto 2.0');
exibirTextoNaTela('p','Escolha um número entre 1 e 10:');

function verificarChute(){
    let chute = document.querySelector('input').value;
     
    if (chute==numeroSecreto){
        exibirTextoNaTela('h1','Acertou!!!');
        let palavraTentativa = tentativas > 1? 'tentativas': 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto){
            exibirTextoNaTela('h1', 'Não foi dessa vez :(');
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else{
            exibirTextoNaTela('h1', 'Não foi dessa vez :(');
            exibirTextoNaTela('p','O número secreto é maior');
        }
        tentativas++;
       
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 +1);
    
}

function limparCampo(){
    chute = document.querySelector('input');
        chute.value = '';
    
}