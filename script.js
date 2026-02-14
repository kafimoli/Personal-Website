const texts = document.querySelectorAll(".fade-text");

const nextBtn = document.getElementById("next-btn");
const backBtn = document.getElementById("back-btn");


const bgMusic = document.getElementById("bg-music");
const clickSound = document.getElementById ("click-sound");

let musicStarted = false;
let currentIndex = 0;

bgMusic.volume = 0.02;
clickSound.volume = 0.5;

function playClickSound(){
    clickSound.currentTime = 0;
    clickSound.play();
}

function startMusic(){
    if (!musicStarted){
        bgMusic.play();
        musicStarted = true;
    }
}

window.addEventListener("load", () =>{
    texts[currentIndex].classList.add("visible");
    texts[currentIndex].classList.remove("hidden");
})

function showText(newIndex){
    if(newIndex < 0 || newIndex >= texts.length) return;

    texts[currentIndex].classList.remove("visible");
    setTimeout(() => {
        texts[currentIndex].classList.add("hidden");

        currentIndex = newIndex;
        texts[currentIndex].classList.remove("hidden");
        setTimeout(() => {
            texts[currentIndex].classList.add("visible");
        }, 50);
    }, 1000);
    console.log(newIndex);
}

nextBtn.addEventListener("click", () =>{
    startMusic();
    playClickSound();
    let nextIndex = currentIndex + 1;
    if(nextIndex >= texts.length) return;
    showText(nextIndex);
});

backBtn.addEventListener("click", () => {
    playClickSound();
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) return;
    showText(prevIndex);
});