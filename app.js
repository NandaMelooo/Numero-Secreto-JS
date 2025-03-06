//let titulo = document.querySelector('h1');
//titulo.innerHTML= "Jogo Numero Secreto 2.0"

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = "Escolha um número entre 1 e 10:";
let listaDeNumerosSorteados= [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML= texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo Numero Secreto 2.0');
    exibirTextoNaTela('p','Escolha um número entre 1 e 10:');
}

exibirMensagemInicial();


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
    let numeroEscolhido = parseInt(Math.random() * numeroLimite +1);
    let quantidadeDeElementosSorteadosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosSorteadosNaLista == numeroLimite){
        listaDeNumerosSorteados[];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNovoNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
    
}

function limparCampo(){
    chute = document.querySelector('input');
        chute.value = '';
    
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas=1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);

}