// Zadanie 7
// ---

// Napisz skrypt, który sprawdzi czy dwa podane ciągi znaków są anagramami*.

// > *[anagram](https://pl.wikipedia.org/wiki/Anagram)

alert('Podaj wyrazy aby sprawdzić czy są anagramami !');
var a = prompt('Wyraz nr 1: ');
var b = prompt('Wyraz nr 2: ');

var a1 = a.split("").sort().join("").toLowerCase();
var b1 = b.split("").sort().join("").toLowerCase();

if( a1 === b1) {
    alert('To jest anagram!');
}else{
    alert('To nie jest anagram');
}
