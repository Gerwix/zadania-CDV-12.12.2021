// Zadanie 11
// ---
// Napisz funkcję obliczającą Liczbę Trójkątną* o numerze przekazanym jako argument.

// Przykład:
// Dla wartości `3` zwracana wartość to `6`
// Dla wartości `6` zwracna wartość to `21`

// Wersja zaawansowana
// ---
// Funkcja powinna obliczać Liczbę Czworościenną.

// Przykład:
// Dla wartości `3` zwracna wartość to `10`
// Dla wartości `8` zwracna wartość to `120`

var n = "";
function triangle(n) {
    return n * (n + 1) / 2;
}

function tetra(n) {
    return n * (n + 2) * (n + 1) / 6;
}