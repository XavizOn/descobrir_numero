//Lista de números sorteados
let numerosSorteados = [];

//Variavel para guardar número de tentativas
let numeroTentativas = 3

//guardo número secreto
let numero_Secreto = numeroAleatorio();
console.log(numero_Secreto);

//Variavel para guardar o número de tentativas.
let tentativas = 1;

// Manipular textos pelo java script
function textos_jogo(tag, texto) {
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1});
}

reiniciarJogo() // iniciar o jogo novamente.

textos_jogo('h1', 'Bem vindo ao jogo do número secreto.');
textos_jogo('p', `Escolha um número de 0 a ${numeroTentativas}`);


//função para verificar se o botão foi clicado.
function verificarChute() {
    let chute = document.querySelector('input').value

    if (chute == numero_Secreto) {
        textos_jogo('h1', 'Acertou!');
        let tentivaTentativas = tentativas > 1 ? 'tentativas' : 'tentativas';
        let textoTentativas = `'Você descobril o número secreto em ${tentativas} ${tentivaTentativas}.`;        
        textos_jogo('p', textoTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numero_Secreto) {
            textos_jogo('p', 'Chute é maior que o número secreto.');

        } else {            
            textos_jogo('p', 'Chute é menor que o número secreto.');
        }
        tentativas ++;
        limparCampo()
    }
    
}

//função pra gerar números aleatórios.
function numeroAleatorio() {
    let numeroEscolhido =  parseInt(Math.random() * numeroTentativas + 1);
    let tamanhoLista = numerosSorteados.length;

    //Limpar lista de números sorteados ao alcançar o número de tentativas.
    if(tamanhoLista == 3) {
        numerosSorteados = [];
    }
    //Garantir que números ja sorteados não se repitam nas tentativas de chute.
    if (numerosSorteados.includes(numeroEscolhido)) {
        return numeroAleatorio();
    //Preencher a lista com números escolhidos aleatóriamente.
    } else {
        numerosSorteados.push(numeroEscolhido);
        console.log(numerosSorteados);
        return numeroEscolhido;
    }
}
//Limpa o campo para incerir um número novo.
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = ''
    
}
//Para exibir textos.
function exibirTexto() {
    textos_jogo('h1', 'Bem vindo ao jogo do número secreto.');
    textos_jogo('p', 'Escolha um número de 0 a 10');    
}
//Reiniciar jogo.
function reiniciarJogo() {
    numero_Secreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirTexto(); 
    document.getElementById('reiniciar').setAttribute('disabled', true);   
}


