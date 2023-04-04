const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom")

let slideNumber = 1;
const length = images.length;

for (let i = 0; i < length; i++) {
    const div = document.createElement("div");
    div.className = "button";
    bottom.appendChild(div)

}

const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "white";


const clearButton =()=>{
buttons.forEach(button => {
    button.style.backgroundColor ="transparent";
    
});}

buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
        clearButton();
        slider.style.transform = `translateX(-${i * 300}px)`;
        slideNumber = i+1;
        button.style.backgroundColor ="white";


    })
});




const nextSlide = () => {
    slider.style.transform = `translateX(-${slideNumber * 300}px)`;
    slideNumber++;
}
const getFirstslide = () => {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
}

const prevSlide = () => {
    slider.style.transform = `translateX(-${(slideNumber - 2) * 300}px)`;
    slideNumber--;
    console.log("prevslide");


}
const lastslide = () => {
    slider.style.transform = `translateX(-${(length - 1) * 300}px)`
    slideNumber = length;
    console.log("last slide");


}





right.addEventListener("click", () => {
    slideNumber < length ? nextSlide() : getFirstslide()
    clearButton();
    buttons[slideNumber-1].style.backgroundColor ="white"

});

left.addEventListener("click", () => {
    slideNumber > 1 ? prevSlide() : lastslide()
    clearButton();
    buttons[slideNumber-1].style.backgroundColor ="white"


})










