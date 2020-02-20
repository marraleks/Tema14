const bilde1 = document.querySelector(".bilde1");
const bakgrunn1 = document.querySelector(".bakgrunn1");
const door = document.querySelector(".door");
const profiler = document.querySelector(".profiler");
const chatContainer = document.querySelector(".chat-container");
const yes = document.querySelector(".yes");
const no = document.querySelector(".no");

bilde1.onclick = () => {
    profiler.style.display = "none"
    bakgrunn1.classList.toggle("visible")
    
    door.onclick = () => {
        profiler.style.display = "flex"
        chatContainer.style.display = "block"
            yes.onclick = () => {
                bakgrunn1.classList.toggle("visible")
                chatContainer.style.display = "none"
            }
            no.onclick = () => {
                chatContainer.style.display = "none"
            }
    }
}




