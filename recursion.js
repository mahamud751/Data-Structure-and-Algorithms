// function count(n) {
//     for (let i = n; i > 0; i--) {
//         console.log(i)
//     }
//     console.log(n)
//     n--
//     if (n > 0) {
//         count(n)
//     }
// }

// count(10)

// function sumNum(n) {
//     // let sum = 0
//     // for (let i = n; i >= 0; i--) {
//     //     sum += i
//     // }
//     // return sum
//     if (n < 0) return 0
//     return n + sumNum(n - 1)
// }

// console.log(sumNum(10))


function sumArr(arr) {
    if (arr.length === 0) return 0
    let rest = arr.slice(1)

    return arr[0] + sumArr(rest)
}



function sumArrR(arr) {
    return helper(arr, 0)
}
function helper(arr, index) {
    if (arr.length === index) return 0

    return arr[index] + helper(arr, index + 1)
}



let input = new Array(9000).fill(1)


// let now = Date.now()
// console.log(sumArr(input))
// let finish = Date.now()
// console.log(`${finish - now} ms`)

// let now2 = Date.now()
// console.log(sumArrR(input))
// let finish2 = Date.now()
// console.log(`${finish2 - now2} ms`)

const num = [2, 11, 33, 12, 9, 44, 99]
const oddN = num.filter((x) => x % 2 === 1)

console.log(oddN)

function oddNum(arr) {
    let result = []
    function helper(input) {
        if (input.length === 0) return 0

        if (input[0] % 2 === 1) {
            result.push(input[0])
        }
        helper(input.slice(1))
    }
    helper(arr)
    return result
}

console.log(oddNum([2, 11, 22, 33, 21]))