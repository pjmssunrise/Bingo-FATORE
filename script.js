const drawButton = document.getElementById('drawButton');
const resetButton = document.getElementById('resetButton');
const numberDisplay = document.getElementById('number');
const numbersList = document.getElementById('numbersList');

let drawnNumbers = [];
const totalNumbers = 75;

drawButton.addEventListener('click', drawNumber);
resetButton.addEventListener('click', resetGame);

function drawNumber() {
    if (drawnNumbers.length >= totalNumbers) {
        alert('Todos os números já foram sorteados!');
        return;
    }

    let newNumber;
    do {
        newNumber = Math.floor(Math.random() * totalNumbers) + 1;
    } while (drawnNumbers.includes(newNumber));

    drawnNumbers.push(newNumber);
    numberDisplay.textContent = newNumber;
    updateNumbersList();
}

function resetGame() {
    drawnNumbers = [];
    numberDisplay.textContent = '-';
    numbersList.innerHTML = '';
}

function updateNumbersList() {
    numbersList.innerHTML = '';
    drawnNumbers.forEach(number => {
        const span = document.createElement('span');
        span.textContent = number;
        numbersList.appendChild(span);
    });
}
