let skills=['react','angular','nodejs','java']
function findSkill(skills,skillName){
    for(let i=0 ;i<skills.length;i++){
        if(skills[i]===skillName)
            return i
    }
    return "skill not found"
}
console.log(findSkill(skills,"java"))