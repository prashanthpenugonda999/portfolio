
let resume_skills=document.getElementById("skill")
let resume_education=document.getElementById("ed")
let link=document.getElementById("link")
let link2=document.getElementById("link2")
let about=document.querySelector("click2")
let navbar=document.querySelector(".navbar")
let navcolor=document.querySelectorAll(".navcolor")
let intro=document.getElementById("intro")
let about2=document.getElementById("about")
let about_info=document.getElementById("about-info")
let color=document.getElementById("color")
// DOMContentLoaded
window.addEventListener("DOMContentLoaded",()=>{
    color.classList.add("hovercolor")
})

window.addEventListener("scroll", ()=>{
    if (window.scrollY > 100){
        navbar.style.background ="#212ea0"
    }
    else{
        navbar.style.background ="none"
    }
})


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
    
    about_info.style.classList.add("about-info1")

}
function Intro2(){
    intro.style.display="block"
    about2.style.padding="0%"
    
}