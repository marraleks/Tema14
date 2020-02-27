const endings = document.querySelectorAll(".ending");
const bilde = document.querySelectorAll(".bilde");
const bilde1 = document.querySelector(".bilde1");
const bilde2 = document.querySelector(".bilde2");
const bilde3 = document.querySelector(".bilde3");
const bilde4 = document.querySelector(".bilde4");
const bilde5 = document.querySelector(".bilde5");
const bilde6 = document.querySelector(".bilde6");
const topText = document.querySelector('.topText')
const select = document.querySelector('.select')
const bakgrunn1 = document.querySelector(".bakgrunn1");
const bakgrunn2 = document.querySelector(".bakgrunn2");
const bakgrunn3 = document.querySelector(".bakgrunn3");
const bakgrunn4 = document.querySelector(".bakgrunn4");
const bakgrunn5 = document.querySelector(".bakgrunn5");
const bakgrunn6 = document.querySelector(".bakgrunn6");
const door = document.querySelector(".door");
const profiler = document.querySelector(".profiler");
const ending1 = document.querySelector(".ending1");
const ending2 = document.querySelector(".ending2");
const ending3 = document.querySelector(".ending3");
const ending4 = document.querySelector(".ending4");
const ending5 = document.querySelector(".ending5");
const close = document.querySelector(".close");
const mcDoor = document.querySelector('.mcDoor')

const chatContainer = document.querySelector(".chat-container");
const yes = document.querySelector(".yes");
const no = document.querySelector(".no");

const chatContainer4 = document.querySelector(".chat-container4");
const yes4 = document.querySelector(".yes4");
const no4 = document.querySelector(".no4");

const kommentar = document.querySelectorAll('.kommentar')
const ting = document.querySelectorAll('.ting')


topText.innerHTML = "Velg din date"

bilde1.onclick = () => {
    bakgrunn1.classList.toggle("visible")
    profiler.style.display = "none"
    
    door.onclick = () => {
        bilde1.classList.add("unclickable")
        if(chatContainer.style.display != "block"){
            closeComments()
            chatContainer.style.display = "block"
        }else{
            closeComments()
        }
        yes.onclick = () => {
                bakgrunn1.classList.toggle("visible")
                chatContainer.style.display = "none"
                profiler.style.display = "flex"

            }
            no.onclick = () => {
                chatContainer.style.display = "none"
            }
        choose()
    }
}

bilde2.onclick = () => {
    bakgrunn2.classList.toggle("visible")
    profiler.style.display = "none"
    
    bakgrunn2.onclick = () => {
        bakgrunn2.classList.toggle("visible")
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
    bakgrunn4.classList.toggle("visible")
    profiler.style.display = "none"
    
    mcDoor.onclick = () => {
        bilde4.classList.add("unclickable")
        if(chatContainer4.style.display != "block"){
            closeComments()
            chatContainer4.style.display = "block"
        }else{
            closeComments()
        }
        yes4.onclick = () => {
                bakgrunn4.classList.toggle("visible")
                chatContainer4.style.display = "none"
                profiler.style.display = "flex"

            }
            no4.onclick = () => {
                chatContainer4.style.display = "none"
            }
        choose()
    }
}


bilde5.onclick = () => {
    bakgrunn5.classList.toggle("visible")
    profiler.style.display = "none"
    
    bakgrunn5.onclick = () => {
        bakgrunn5.classList.toggle("visible")
        profiler.style.display = "flex"
        bilde5.classList.add("unclickable")
        choose()
    }
}

bilde6.onclick = () => {
    bakgrunn6.classList.toggle("visible")
    profiler.style.display = "none"
    
    bakgrunn6.onclick = () => {
        bakgrunn6.classList.toggle("visible")
        profiler.style.display = "flex"
        bilde6.classList.add("unclickable")
        choose()
    }
}

function choose() {  
    if (
    bilde1.classList.contains('unclickable')
    && bilde2.classList.contains('unclickable')
    && bilde3.classList.contains('unclickable')
    && bilde4.classList.contains('unclickable')
    && bilde5.classList.contains('unclickable')
    && bilde6.classList.contains('unclickable')
     ) {
        topText.innerHTML='Hvem går du for?'
        bilde1.classList.toggle('unclickable')
        bilde2.classList.toggle('unclickable')
        bilde3.classList.toggle('unclickable')
        bilde4.classList.toggle('unclickable')
        bilde5.classList.toggle('unclickable')
        bilde6.classList.toggle('unclickable')
    }
    velgDate()
}
function velgDate() {
    if(topText.innerHTML === "Hvem går du for?"){
        bilde1.onclick = () => {
            ending1.style.display = "block"
            bakgrunn1.style.display = "none"
            profiler.style.display = 'none'
            close.style.display = "block"
        }
        bilde2.onclick = () => {
            ending2.style.display = "block"
            bakgrunn2.style.display = "none"
            profiler.style.display = 'none'
            close.style.display = "block"
        }
        bilde3.onclick = () => {
            ending3.style.display = "block"
            bakgrunn3.style.display = "none"
            profiler.style.display = 'none'
            close.style.display = "block"
        }
        bilde4.onclick = () => {
            ending4.style.display = "block"
            bakgrunn4.style.display = "none"
            profiler.style.display = 'none'
            close.style.display = "block"
        }
        bilde5.onclick = () => {
            ending5.style.display = "block"
            bakgrunn5.style.display = "none"
            profiler.style.display = 'none'
            close.style.display = "block"
        }
    }
}

close.onclick = () => {
    location.reload()
}


for(let i = 0; i < ting.length; i++) {
    ting[i].onclick = () => {
            if(kommentar[i].style.display != "block"){
                closeComments()
                kommentar[i].style.display = "block"
            }else{
                kommentar[i].style.display = "none"
            }
    }
}

const closeComments = () => {
    chatContainer.style.display = "none"
    for(let i = 0; i < ting.length; i++) {
        kommentar[i].style.display = "none"
    }
}