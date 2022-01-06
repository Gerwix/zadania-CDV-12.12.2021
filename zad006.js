// Zadanie 6
// ---

// Napisz skrypt który dla podanych przez użytkownika liczb oddzielonych przecinkami wyliczy i wyświetli ich średnią arytmetyczną.
// Wartości nieliczbowe powinny zostać pominięte w obliczeniach.

// Przykład:

// Dla wartości `2,x,4,6,y` wartość średniej to `4`.

var n = prompt("Ile liczb chcesz podać aby obliczyć średnią arytmetyczną:");
var a = new Array();
for (let i = 0; i < n; i++) {
    let b = prompt(' Podaj liczby ' + (i + 1) + ':');
    a.push(b);
}
var value1 = a.map(Number);

var value2 = value1.filter(function (value) {
    return value >= 0 || value <= 0;
});

var sum = value2.reduce(function (acc, value) {
    return acc + value;
});

alert('Średnia arytmetyczna podanych liczb to: ' + sum / value2.length);
