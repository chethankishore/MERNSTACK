//write a function that receives marks as a argument and return the small element
//write a function that receives marks as a argument and return the small element
let marks=[90,87,89,67,56]
function min(marks){
    let s=marks[0]
    for(let i of marks){
        if(i<s){
            s=i
        }
    }
    return s
}
console.log(min(marks))
