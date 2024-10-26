// String calculation function
const add=(str)=>{
str=str.replaceAll("//","")
str=str.replaceAll(';',",")
str=str.replaceAll('\n',"")
const arr  = str.split(",")

let negativeStr=''

const sum= arr.reduce((accumalator,ele)=>{
    let item=ele;
    if(Number(item) < 0 ){
        negativeStr = negativeStr + item.toString()+",";
        return new Error("negative numbers not allowed" + (negativeStr));
    }
    return accumalator += Number(item);
},0)
return sum
}

// TestCases
//  add("") // Output: 0
//  add("-1,-4,-6") //Output:  Error: negative numbers not allowed-1,-4,-6,
// add("1,2,3") //Output: 6
// add("//;\n1;2") //Output: 3



