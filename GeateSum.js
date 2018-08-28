const fn = () => {
    var array = [-100000, -2, -11, 1000, -7, -23, -23,2200]
    var result = 0;
    var sum = 0;
    for (let index = 0; index < array.length; index++) {
        var x=array[index]
        sum += array[index];
        if(sum<=0) sum = array[index]
        if(x>sum)sum=x;
        if(result < sum)  result = sum 
        

    }
    return result
}
console.log(fn());
