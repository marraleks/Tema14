const endings = document.querySelectorAll(".ending");
const bilde = document.querySelectorAll(".bilde");
const bilde1 = document.querySelector(".bilde1");
const bilde2 = document.querySelector(".bilde2");
const bilde3 = document.querySelector(".bilde3");
const bilde4 = document.querySelector(".bilde4");
const bilde5 = document.querySelector(".bilde5");
const topText = document.querySelector('.topText')
const select = document.querySelector('.select')
const bakgrunn1 = document.querySelector(".bakgrunn1");
const bakgrunn3 = document.querySelector(".bakgrunn3");
const door = document.querySelector(".door");
const profiler = document.querySelector(".profiler");
const ending1 = document.querySelector(".ending1");
const ending3 = document.querySelector(".ending3");
const close = document.querySelector(".close");

const chatContainer = document.querySelector(".chat-container");
const yes = document.querySelector(".yes");
const no = document.querySelector(".no");

topText.innerHTML = "Dating i 2020"

if(topText.innerHTML === "Dating i 2020") {

bilde1.onclick = () => {
    profiler.style.display = "none"
    bakgrunn1.classList.toggle("visible")
    
    door.onclick = () => {
        bilde1.classList.add("unclickable")
        chatContainer.style.display = "block"
        yes.onclick = () => {
                profiler.style.display = "flex"
                bakgrunn1.classList.toggle("visible")
                chatContainer.style.display = "none"
            }
            no.onclick = () => {
                chatContainer.style.display = "none"
            }
        choose()
    }
}

bilde2.onclick = () => {
    bakgrunn1.classList.toggle("visible")
    profiler.style.display = "none"
    
    door.onclick = () => {
        bakgrunn1.classList.toggle("visible")
        profiler.style.display = "flex"
        bilde2.classList.add("unclickable")
        choose()
    }
}

bilde3.onclick = () => {
    bakgrunn3.classList.toggle("visible")
    profiler.style.display = "none"
    
    bakgrunn3.onclick = () => {
        bakgrunn3.classList.toggle("visible")
        profiler.style.display = "flex"
        bilde3.classList.add("unclickable")
        choose()
    }
}

bilde4.onclick = () => {
    bakgrunn1.classList.toggle("visible")
    profiler.style.display = "none"
    
    door.onclick = () => {
        bakgrunn1.classList.toggle("visible")
        profiler.style.display = "flex"
        bilde4.classList.add("unclickable")
        choose()
    }
}

bilde5.onclick = () => {
    bakgrunn1.classList.toggle("visible")
    profiler.style.display = "none"
    
    door.onclick = () => {
        bakgrunn1.classList.toggle("visible")
        profiler.style.display = "flex"
        bilde5.classList.add("unclickable")
        choose()
    }
}
}

function choose() {  
    if (
    bilde1.classList.contains('unclickable')
    && bilde2.classList.contains('unclickable')
    && bilde3.classList.contains('unclickable')
    && bilde4.classList.contains('unclickable')
    && bilde5.classList.contains('unclickable')
     ) {
        topText.innerHTML='Velg'
        bilde1.classList.toggle('unclickable')
        bilde2.classList.toggle('unclickable')
        bilde3.classList.toggle('unclickable')
        bilde4.classList.toggle('unclickable')
        bilde5.classList.toggle('unclickable')
    }
    velgDate()
}
function velgDate() {
    if(topText.innerHTML === "Velg"){
        bilde1.onclick = () => {
            ending1.style.display = "block"
            bakgrunn1.style.display = "none"
            profiler.style.display = "none"
            close.style.display = "block"
            close.style.display = "block"
        }
        bilde3.onclick = () => {
            ending3.style.display = "block"
            bakgrunn3.style.display = "none"
            profiler.style.display = "none"
            close.style.display = "block"
            close.style.display = "block"
        }
    }
}

    close.onclick = () => {
        profiler.style.display = "flex"
        close.style.display = "none"
        topText.textContent = "Dating i 2020"
        for(i = 0; i < endings.length; i++) {
            endings[i].style.display = "none";   
        }
    }
