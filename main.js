/*** Map ***/

function map(arr, callback) {
    var res = [];

    if (!Array.isArray(arr)) {
        throw new Error('Передан не массив');
    }

    if (typeof callback !== 'function') {
        throw new Error('callback - не функция');
    }

    for (var i = 0; i < arr.length; i++) {
        res[i] = callback(arr[i], i, res);
    }

    return res;
}