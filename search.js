function search(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) return i
    }
    return -1
}

console.log(search([2, 11, 23, 44, 9], 23))

// function binary(arr, value) {
//     let start = 0
//     let end = arr.length - 1
//     while (start <= end) {
//         let middle = Math.round((start + end) / 2)
//         if (arr[middle] === value) return middle

//         if (value > arr[middle]) {
//             start = middle + 1
//         }
//         else if (value < arr[middle]) {
//             end = middle - 1
//         }
//     }
//     return -1
// }

// console.log(binary([2, 3, 5, 8, 11, 44, 76, 88], 44))

function binary(arr, value) {
    let start = 0
    let end = arr.length - 1
    while (start <= end) {
        let middle = Math.round((start + end) / 2)
        if (arr[middle] === value) return middle
        if (value > arr[middle]) {
            start = middle + 1
        }
        else if (value < arr[middle]) {
            end = middle - 1
        }
    }
    return -1
}

console.log([2, 3, 7, 11, 18, 33, 55], 7)