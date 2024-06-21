const botaoSortear = document.getElementById('botaoSortear');
const botaoReiniciar = document.getElementById('botaoReiniciar');
const numeroAtualDisplay = document.getElementById('numeroAtual');
const ultimosNumerosDisplay = document.getElementById('ultimosNumeros');
const listaNumeros = document.getElementById('listaNumeros');

let numerosSorteados = [];
const totalNumeros = 75;

document.addEventListener('DOMContentLoaded', inicializarJogo);
botaoSortear.addEventListener('click', sortearNumero);
botaoReiniciar.addEventListener('click', confirmarReinicio);

function inicializarJogo() {
    for (let i = 1; i <= totalNumeros; i++) {
        const span = document.createElement('span');
        span.textContent = i;
        listaNumeros.appendChild(span);
    }
}

function sortearNumero() {
    if (numerosSorteados.length >= totalNumeros) {
        alert('Todos os números já foram sorteados!');
        return;
    }

    let novoNumero;
    do {
        novoNumero = Math.floor(Math.random() * totalNumeros) + 1;
    } while (numerosSorteados.includes(novoNumero));

    numerosSorteados.push(novoNumero);
    atualizarNumeroAtual(novoNumero);
    atualizarUltimosNumeros();
    atualizarListaNumeros();
}

function confirmarReinicio() {
    const confirmacao = confirm("Deseja mesmo reiniciar o jogo?");
    if (confirmacao) {
        reiniciarJogo();
    }
}

function reiniciarJogo() {
    numerosSorteados = [];
    numeroAtualDisplay.textContent = '-';
    ultimosNumerosDisplay.textContent = '-';
    listaNumeros.innerHTML = '';
    inicializarJogo();
}

function atualizarNumeroAtual(novoNumero) {
    numeroAtualDisplay.textContent = novoNumero;
}

function atualizarUltimosNumeros() {
    const ultimosTres = numerosSorteados.slice(-3);
    ultimosNumerosDisplay.textContent = ultimosTres.join(', ');
}

function atualizarListaNumeros() {
    const spans = listaNumeros.querySelectorAll('span');
    spans.forEach(span => {
        const numero = parseInt(span.textContent);
        if (numerosSorteados.includes(numero)) {
            span.classList.add('sorteado');
        } else {
            span.classList.remove('sorteado');
        }
    });
}
