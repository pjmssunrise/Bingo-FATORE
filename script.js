const botaoSortear = document.getElementById('botaoSortear');
const botaoReiniciar = document.getElementById('botaoReiniciar');
const numeroDisplay = document.getElementById('numero');
const listaNumeros = document.getElementById('listaNumeros');

let numerosSorteados = [];
const totalNumeros = 75;

botaoSortear.addEventListener('click', sortearNumero);
botaoReiniciar.addEventListener('click', reiniciarJogo);

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
    numeroDisplay.textContent = novoNumero;
    atualizarListaNumeros();
}

function reiniciarJogo() {
    numerosSorteados = [];
    numeroDisplay.textContent = '-';
    listaNumeros.innerHTML = '';
}

function atualizarListaNumeros() {
    listaNumeros.innerHTML = '';
    numerosSorteados.forEach(numero => {
        const span = document.createElement('span');
        span.textContent = numero;
        listaNumeros.appendChild(span);
    });
}
