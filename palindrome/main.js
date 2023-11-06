let word = prompt('Inserisci una Parola:');
let reversedWord = palindrome(word);

function palindrome(word) {
    let reversed = '';

    // capovolgo la parola
    for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i];
    }

    return reversed;
}


if (word == reversedWord) {
    document.querySelector('#io').innerHTML = `La parola "${word}" è Palindroma`;
} else {
    document.querySelector('#io').innerHTML = `La parola "${word}" NON è Palindroma`;
}

// let word = prompt('Inserisci una Parola:');

// let reversed = '';

// for (let i = word.length - 1; i >= 0; i--) {
//     reversed += word[i];

// }
// console.log(reversed);