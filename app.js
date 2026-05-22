const humburger= document.querySelector("#humburger")
const menu= document.querySelector("#menu")
const hLink= document.querySelectorAll("#hLink")


humburger.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    humburger.classList.toggle("bg-white")
})

hLinks.forEach(link => {
 link.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    humburger.classList.toggle("bg-white")   
})

})