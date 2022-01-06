// Zadanie 8
// ---

// Napisz skrypt, który sprawdzi czy podany ciąg znaków jest palindromem*.

// > *[palindrom](https://pl.wikipedia.org/wiki/Palindrom)

var word = prompt('Podaj ciąg znaków aby sprawdzić czy jest to palindrom: ');

word = word.toLowerCase();

var word2 = word.split('').reverse().join('');


if (word === word2) {
    alert('To jest palindrom!');
} else {
    alert('To nie jest palindrom');
}