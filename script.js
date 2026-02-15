const texts = document.querySelectorAll(".fade-text");

const nextBtn = document.getElementById("next-btn");
const backBtn = document.getElementById("back-btn");


const bgMusic = document.getElementById("bg-music");


let musicStarted = false;
let currentIndex = 0;

bgMusic.volume = 0.03;




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
    
    let nextIndex = currentIndex + 1;
    if(nextIndex >= texts.length) return;
    showText(nextIndex);
});

backBtn.addEventListener("click", () => {
    
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) return;
    showText(prevIndex);
});

const heartsContainer = document.querySelector(".hearts-container");

function createHeart(){
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤";

    // random horizontal position
    heart.style.left = Math.random() * 100 + "vw";

    // random size
    heart.style.fontSize = (Math.random() * 20 + 10) + "px";

    // random animation duration (slow + dreamy)
    heart.style.animationDuration = (Math.random() * 5 + 5) + "s";

    heartsContainer.appendChild(heart);

    // remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, 10000);
}

// create heart every 800ms
setInterval(createHeart, 1500);

/* ===========================
   GENERATE FALLING PETALS
=========================== */

const petalsContainer = document.querySelector(".petals-container");

function createPetal(){
    const petal = document.createElement("div");
    petal.classList.add("petal");

    // using flower emoji for simplicity
    petal.innerHTML = "🌸";

    // random horizontal position
    petal.style.left = Math.random() * 100 + "vw";

    // random size
    petal.style.fontSize = (Math.random() * 15 + 15) + "px";

    // random fall duration (slow and romantic)
    petal.style.animationDuration = (Math.random() * 5 + 6) + "s";

    petalsContainer.appendChild(petal);

    // remove after animation
    setTimeout(() => {
        petal.remove();
    }, 11000);
}

// create petal every 900ms
setInterval(createPetal, 1500);
