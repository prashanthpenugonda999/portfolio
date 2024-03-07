
console.log("hi")
let resume_skills=document.getElementById("skill")
let resume_education=document.getElementById("ed")
let link=document.getElementById("link")
let link2=document.getElementById("link2")
let about=document.querySelector("click2")
let navbar=document.querySelector(".navbar")
let navcolor=document.querySelectorAll(".navcolor")
let intro=document.getElementById("intro")
let about2=document.getElementById("about")
console.log(intro)
console.log(navcolor)
console.log(navbar)
navbar.addEventListener("click",nav)
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
function nav(e){
    for (let i of navcolor){
        i.style.color="white"
    }
    e.target.style.color="red"
    


    

}
function Intro(){
    intro.style.display="none"
    about2.style.padding="3%"

}
function Intro2(){
    intro.style.display="block"
    about2.style.padding="0%"
    
}