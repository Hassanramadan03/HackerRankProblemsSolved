// const zapat = (b) => {
//     var a = b.toString();
//     let x = parseFloat(a[8]) + 1;
//     if (a.length > 8) return (parseFloat(a[8]) >= 5) ? a = a.substring(0, 7) + x : a.substring(0, 8);
//     if (a.length === 8) return a;
//     if (a.length > 8) return (a[8] > 5) ? a.substring(0, 7) + a[8]++ : a.substring(0, 8)
//     else return zapat(a + '0')

// }



(() => {
    var arr = [-4, 3, -9, 0, 4, 1]

    let plus = 0;
    let minus = 0;
    let zero = 0;
    arr.map(item=>Math.sign(item) === 1 ? plus++ : (Math.sign(item) === -1 ? minus++ : zero++)) 
    return [
        console.log(parseFloat(plus / arr.length).toPrecision(6)),
        console.log(parseFloat(minus / arr.length).toPrecision(6)),
        console.log(parseFloat(zero / arr.length).toPrecision(6))
    ]
})()

// (() => {
//     var arr = [-4, 3, -9, 0, 4, 1]

//     let positives = 0
//     let negatives = 0
//     let zero = 0
//     arr.map(e => {
//         e == 0 ? zero++ : (e > 0 ? positives++ : negatives++)
//     })
//     console.log((positives / arr.length).toFixed(6))
//     console.log((negatives / arr.length).toFixed(6))
//     console.log((zero / arr.length).toFixed(6))
// })()



function plusMinus(arr) {
    // Complete this function
    let positives = parseFloat(arr.filter(value => value > 0).length / arr.length).toPrecision(6)
    let negatives = parseFloat(arr.filter(value => value < 0).length / arr.length).toPrecision(6)
    let zeroes = parseFloat(arr.filter(value => value === 0).length / arr.length).toPrecision(6)

    console.log(positives)
    console.log(negatives)
    console.log(zeroes)
}

plusMinus([-4, 3, -9, 0, 4, 1])
