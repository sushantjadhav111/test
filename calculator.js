// String calculation function
const stringCalculation=(str)=>{
const arr=str.split(',')

const sum=arr.reduce((accumalator,item)=>{
    if(Number(item)<=0){return new Error("negative numbers not allowed"+item)}
    return accumalator+=Number(item);
},0)

return sum

}

stringCalculation("")
stringCalculation("1")
stringCalculation("1,2,3")
console.log(stringCalculation("1,2,3"))



