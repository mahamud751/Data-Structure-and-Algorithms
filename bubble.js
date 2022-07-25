// function bubble(arr) {
//     let isSwap;
//     for (let i = 0; i < arr.length; i++) {
//         isSwap = false
//         for (let j = 0; j < arr.length - i - 1; j++) {
//             console.log(arr[i], arr[j])
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//                 isSwap = true
//             }
//         }
//         if (!isSwap) break
//     }
//     return arr
// }
// console.log(bubble([2, 1, 4, -22, 55, -1])) //[ -22, -1, 1, 2, 4, 55 ]

function bubbleSort(arr) {
    let isSwap;
    for (let i = 0; i < arr.length; i++) {

        isSwap = false
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                isSwap = true
            }
        }
        if (!isSwap) break

    }
    return arr
}
console.log(bubbleSort([2, 1, 4, -22, 55, -1])) //[ -22, -1, 1, 2, 4, 55 ]