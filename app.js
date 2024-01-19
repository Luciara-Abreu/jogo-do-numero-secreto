let listaDeNumeosSorteados = [];
let numeroLimte = 10
let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 1

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.3});
}

function exibirMensagemInicial() {
  exibirTextoNaTela('h1', 'Jogo do numero secreto');
  exibirTextoNaTela('p', 'Informe um numero de 0 a 10');
}
exibirMensagemInicial()


function verificarChute() {
  let chute = document.querySelector('input').value
  if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'Uhulll!! Você acertou!!');
    let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativas}`;
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela('p', 'O numero é menor');
    }
    else {
      exibirTextoNaTela('p', 'O numero secreto é maior');
    }
    tentativas++;
    limparCampo()
  }
}

function gerarNumeroAleatorio() {
  let numeroEscolhido =  parseInt(Math.random() * numeroLimte + 1);
  let quatidadeDeElementosNaLista = listaDeNumeosSorteados.length;

  if(quatidadeDeElementosNaLista == numeroLimte){
    listaDeNumeosSorteados = [];
  }
  if(listaDeNumeosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
  }else{
    listaDeNumeosSorteados.push(numeroEscolhido)
    console.log(listaDeNumeosSorteados)
    return numeroEscolhido;
  }
}


function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio()
  limparCampo()
  tentativas = 1
  exibirMensagemInicial()
  document.getElementById('reiniciar').setAttribute('disabled', true);
}

