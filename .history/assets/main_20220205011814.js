const numbers = [9, 2, 5, 7, 8];

const sortRekursif = (arr) => {
    let res = [];

    for (i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i + 1]) {
            res.push(arr[i])
        } else {
            res.push(arr[i + 1])
        }
        if (i == 1) return
    }
    console.log(res)
}

sortRekursif(numbers)
// sortRekursif([2, 9, 1, 5, 8])
