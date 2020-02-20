const bilde1 = document.querySelector(".bilde1");
const bakgrunn1 = document.querySelector(".bakgrunn1");
const door = document.querySelector(".door");
const profiler = document.querySelector(".profiler");



bilde1.onclick = () => {
    bakgrunn1.classList.toggle("visible")
    profiler.style.display = "none"
    
    door.onclick = () => {
        bakgrunn1.classList.toggle("visible")
        profiler.style.display = "flex"
    }
}




