/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
    
passo 1 - dar um jeito de pegar o elemento HTML dos botões
passo 2 - dar um jeito de identificar o clique do usuário no botão
passo 3 - desmarcar o botão selecionado anterior
passo 4 - marcar o botão clicado como se estivesse selecionado
passo 5 - esconder a imagem anteriormente selecionada
passo 6 - fazer aparecer a imagem correspondente ao botão clicado
passo 7 - esconder a informação do dragão anteriormente selecionado
passo 8 - mostrar a informação do dragão referente ao botão clicado
*/

//Passo1 
const botoesCarrosel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes")
//Passo 2
botoesCarrosel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        //Passo 3
        desativarBotaoSelecionado();
        //Passo 4
        marcarBotaoSelecionado(botao);
        //Passo 5
        esconderImagemAtiva();
        //Passo 6
        mostrarImagemDeFundo(indice);
        //Passo 7
        escondendoInformacoesAtivas();
        //Passo 8
        mostrarInformacoesAtivas(indice);



    })
})

function marcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function mostrarInformacoesAtivas(indice) {
    informacoes[indice].classList.add("ativa");
}

function escondendoInformacoesAtivas() {
    const informacoeAtiva = document.querySelector(".informacoes.ativa");
    informacoeAtiva.classList.remove("ativa");
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
