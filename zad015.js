// Zadanie 15
// ---

// Napisz funkcję `flatten` która dla przekazanej tablicy tablic zwróci tablicę składającą się z elementów tablic wewnętrznych.

// Przykład:
// Dla tablicy `[[1, 2], [3, 4]]` zwracana wartość to `[1, 2, 3, 4]`

var arr1 = [1, 2, [3, 4]];

function flatten() {
    var arr2 = arr1.flat();
    return arr2;
}
// tylko takie coś przychodzi mi do głowy jednak domyślam się, że nie o to chodziło w tym zadaniu.