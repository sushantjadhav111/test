// String calculation function
const stringCalculation=(str)=>{
const arr=str.split(',')

const sum=arr.reduce((accumalator,item)=>{
    return accumalator+=Number(item);
},0)


}

stringCalculation("")

