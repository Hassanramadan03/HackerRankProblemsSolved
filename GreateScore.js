let xx=[12,22,23]
let y=[3,2,1]


const fn=(x,y) =>{
    let result=[0,0]
    for (let i in x) x[i]>y[i]?result[0]++:x[i]<y[i]?result[1]++:result[0]=result[0]
    return result
}   
    
console.log(fn(xx,y));

