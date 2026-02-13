let cards = document.querySelectorAll(".card");
let elements = document.querySelectorAll(".element");
let allElem = document.querySelector(".allElements");
let allButtons = document.querySelectorAll(".element button")
let main = document.querySelector("#main");

cards.forEach((card)=>{
    card.addEventListener("click",(e)=>{
        elements[e.target.id === "" ? 0 : e.target.id].style.display = "block";
        allElem.style.display = "none";
        main.style.padding = "0px";
    })
})

allButtons.forEach((e)=>{
    e.addEventListener("click",(e)=>{
        e.target.parentElement.style.display= "none";
        allElem.style.display = "block";
        main.style.padding = "10px";
    })
})