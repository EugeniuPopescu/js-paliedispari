// faccio scegliere se pari o dispari 
let choice = prompt('Scegli Pari o Dispari (se non scegli ti verra assegnato automaticamente Pari) ', 'pari');

if(choice != "pari" && choice != "dispari") {
    alert('Errore. Abbiamo scelto per te: punterai sui pari');
    choice = "pari";
}

const io = parseInt(prompt('Insierisci numero (tra 1 e 5)'));

if (io  > 5 || io < 1) {
    alert('Inserisci un numero tra 1 e 5 compresi');
}

// funzione numero random da 1 a 5 per il pc
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const pc = randomNumber(1, 5);

const sum = io + pc;

function evenOdd() {
    let result;
    let outcome;

    if (sum % 2 == 0) {
        result = 'pari';
    } else {
        result = 'dispari';
    }

    if (choice == result) {
        outcome = 'Hai Vinto';
    } else {
        outcome = 'Hai Perso';
    }

    return outcome;
}

document.querySelector('#io').innerHTML = `Il tuo numero: ${io}`;
document.querySelector('#pc').innerHTML = `PC's Number: ${pc}`;
document.querySelector('#outcome').innerHTML = `Hai Scelto ${choice.toUpperCase()}, somma: ${sum} => ${evenOdd()}`;