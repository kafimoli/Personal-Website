const texts = document.querySelectorAll(".fade-text");

const nextBtn = document.getElementById("next-btn");
const backBtn = document.getElementById("back-btn");

let currentIndex = 0;

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
    let nextIndex = currentIndex + 1;
    if(nextIndex >= texts.length) return;
    showText(nextIndex);
});

backBtn.addEventListener("click", () => {
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) return;
    showText(prevIndex);
});