
console.log("hi")
let resume_skills=document.getElementById("skill")
let resume_education=document.getElementById("ed")
let link=document.getElementById("link")
let link2=document.getElementById("link2")
console.log(resume_education)
console.log(resume_skills)

function Skills(){
    resume_skills.classList.toggle("display")
    link.style.color="red"
    link.style.textDecoration="underline"
    link2.style.textDecoration="none"
    link2.style.color="white"
    resume_education.classList.add("display")
    
   
 }
 function Education(){
    resume_education.classList.toggle("display")
    link2.style.color="red"
    link2.style.textDecoration="underline"
    link.style.textDecoration="none"
    link.style.color="white"
    resume_skills.classList.add("display")
    
}