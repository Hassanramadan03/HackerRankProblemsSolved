var arr = [[0, 0, 0, 0], [1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3]]
const diagonalD = (arr) => {
    var right = 0;
    var left = 0;
    for (let i = 0; i < arr.length; i++)
        for (let j = i; j <= i; j++) {
            right += arr[i][j];
            left += arr[i][arr.length - j - 1];
        }
    return Math.abs(right - left)
}
console.log(diagonalD(arr));
