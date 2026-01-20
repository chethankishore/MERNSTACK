//WRITE A FUNCTION THAT CAN EXTRACT MARKS GREATER THAN 70,PACK THEM INTO AN ARRAY AND RETRUN IT 
let marks=[90,70,40,89,56]
let c=[]
for(let i of marks){
    if(marks[i]>70){
c.push(i)
    }
}
console.log(c)
//find all marks between 30 and 90
let result=marks.filter(function(element){
    return element>30 && element<90
})
console.log(result)
//add 50 for each salary
let sal=[100,200,300]
let n=[]
function hike(sal){
    for(let i of sal){
        n.push(i+=50)
    }
}
hike(sal)
console.log(n)
//using map method
let res=sal.map((e)=>e+50)
console.log(res)