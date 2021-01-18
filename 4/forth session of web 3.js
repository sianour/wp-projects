//Do fibonacci function without recursive function

function fibonacci(x) {
    let arr = [0, 1, 1];
    // in fibonacci first 3 element is static number
    for (let i = 3; i < x + 1; i++) {
        arr.push(arr[i - 2] + arr[i - 1])
    }
    return arr[x]
}
console.log(fibonacci(8))
