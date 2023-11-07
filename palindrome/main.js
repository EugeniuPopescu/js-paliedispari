// recupero la parola dall'utente
let word = prompt('Inserisci una Parola:');

// rigiro la parola al contrario attraverso la mia funzione palindrome();
let reversedWord = palindrome(word);

// controllo la parola sia uguale al contrario del suo risultato
isPalindrome = false;

if (word == reversedWord) {
    isPalindrome = true;    
} 

// output: avvisuo l'utente
if (isPalindrome) {
    document.querySelector('#io').innerHTML = `La parola "${word}" è Palindroma`;
} else {
    document.querySelector('#io').innerHTML = `La parola "${word}" NON è Palindroma`;
}

// la x non deve essere dichiarata, posso scrivere quello che voglio nei parametri della funzione
function palindrome(x) {
    let reversed = '';

    // capovolgo la parola
    for (let i = x.length - 1; i >= 0; i--) {
        reversed += x[i];
    }

    return reversed;
}


// let word = prompt('Inserisci una Parola:');

// let reversed = '';

// for (let i = word.length - 1; i >= 0; i--) {
//     reversed += word[i];

// }
// console.log(reversed);


