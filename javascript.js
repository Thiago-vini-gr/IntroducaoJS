let tela = document.getElementById('tela');

// Adiciona o valor clicado na tela
function adicionarValor(valor) {
    tela.value += valor;
}

// Calcula o resultado da expressão na tela
function calcular() {
    try {
        tela.value = eval(tela.value);
    } catch (e) {
        alert('Expressão inválida');
        limparTela();
    }
}

// Limpa a tela
function limparTela() {
    tela.value = '';
}