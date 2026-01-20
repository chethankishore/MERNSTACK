let marks=[90,87,89,67,56]
let res=0
for(let i of marks){
    res+=i

}
console.log(res)
//write a function that receives marks as a argument and return the small element
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
//program for max marks
function max(marks){
    let s=marks[0]
    for(let i of marks){
        if(i>s){
            s=i
        }
    }
    return s
}
console.log(max(marks))