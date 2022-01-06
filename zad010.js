// Zadanie 10
// ---
// Napisz funkcję która odwróci kolejność cyfr dla przekazanej w argumencie liczby.

// Przykład:
// Dla liczby `32243` zwracana wartość to `34223`

var number = 0;
function reversNum(number) {
    let a = number.toString().split('').reverse().join('');
    number = parseInt(a);
    return a;
}
console.log(reversNum(number));