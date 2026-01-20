/*let marks=[10,20,30,40]
let result=marks.filter(element=>element<70)
console.log(result)
let res=marks.map((accumulator,element)=>accumulator+element)
console.log(res)
let r=marks.reduce((accumulator,element)=>accumulator<element?accumulator:element)
console.log(r)
//find
let result1=marks.find(element=>element===20)
console.log(result1)
let result2=marks.findIndex(element=>element===200)
console.log(result2)*/
//students
let student=[
    {sno:1,name:"ravi",age:21},
        {sno:12,name:"ramu",age:181},
    {sno:11,name:"r",age:20},
   { sno:13,name:"avi",age:19}
];
console.log(student)
//find students age less than 20
let result3=student.filter(studentObj=>studentObj.age<20)
console.log(result3) 
//incrementing ravi age by 2
let result4=student.map(studentObj=>{
    if(studentObj.name==="ravi"){
      return {
        sno:studentObj.sno,
        name:studentObj.name,
        age:studentObj.age+2
      }
    }
return studentObj
})
console.log(result4)
//find sum of ages of all students
let sumof=student.reduce((acc,studentObj)=>acc+studentObj.age,0)
console.log(sumof)