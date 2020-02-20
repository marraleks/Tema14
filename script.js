const bilde1 = document.querySelector(".bilde1");
const bakgrunn1 = document.querySelector(".bakgrunn1");
const door = document.querySelector(".door");


bilde1.onclick = () => {
    bakgrunn1.classList.toggle("visible")
    
    door.onclick = () => {
        bakgrunn1.classList.toggle("visible")
    }
}




