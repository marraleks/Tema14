const bilde1 = document.querySelector(".bilde1");
const bilde2 = document.querySelector(".bilde2");
const bilde3 = document.querySelector(".bilde3");
const bilde4 = document.querySelector(".bilde4");
const bilde5 = document.querySelector(".bilde5");
const topText = document.querySelector('.topText')
const select = document.querySelector('.select')
const bakgrunn1 = document.querySelector(".bakgrunn1");
const door = document.querySelector(".door");
const profiler = document.querySelector(".profiler");


bilde1.onclick = () => {
    bakgrunn1.classList.toggle("visible")
    profiler.style.display = "none"
    
    door.onclick = () => {
        bakgrunn1.classList.toggle("visible")
        profiler.style.display = "flex"
        bilde1.classList.add("unclickable")
        select()
    }
}

bilde2.onclick = () => {
    bakgrunn1.classList.toggle("visible")
    profiler.style.display = "none"
    
    door.onclick = () => {
        bakgrunn1.classList.toggle("visible")
        profiler.style.display = "flex"
        bilde2.classList.add("unclickable")
        select()
    }
}

bilde3.onclick = () => {
    bakgrunn1.classList.toggle("visible")
    profiler.style.display = "none"
    
    door.onclick = () => {
        bakgrunn1.classList.toggle("visible")
        profiler.style.display = "flex"
        bilde3.classList.add("unclickable")
        select()
    }
}

bilde4.onclick = () => {
    bakgrunn1.classList.toggle("visible")
    profiler.style.display = "none"
    
    door.onclick = () => {
        bakgrunn1.classList.toggle("visible")
        profiler.style.display = "flex"
        bilde4.classList.add("unclickable")
        select()
    }
}

bilde5.onclick = () => {
    bakgrunn1.classList.toggle("visible")
    profiler.style.display = "none"
    
    door.onclick = () => {
        bakgrunn1.classList.toggle("visible")
        profiler.style.display = "flex"
        bilde5.classList.add("unclickable")
        select()
    }
}

function select() {
    if (
    bilde1.classList.contains('unclickable')
    && bilde2.classList.contains('unclickable')
    && bilde3.classList.contains('unclickable')
    && bilde4.classList.contains('unclickable')
    && bilde5.classList.contains('unclickable') ) {
        // console.log("test")
        topText.innerHTML='Velg'
    }
}