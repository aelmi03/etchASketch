const swiper = document.querySelector(`input[type = "range"]`);
const swiperLabel = document.querySelector(`label[for = "swipe"]`);
const drawingBox = document.querySelector(".container");
changePixelDensity(swiper);
swiper.addEventListener("input", changePixelDensity);
swiperLabel.textContent = `Pixel Density ${swiper.value} X ${swiper.value}`
console.log(amountOfDivsNeeded());
console.dir(swiper);
function changePixelDensity(e){
    changeSwiperText();
    removePreviousDivs()
    const amountOfDivs = amountOfDivsNeeded();
    const divSizes = getSize();
    console.log("hello");
    for(let i = 0; i < amountOfDivs ; i++){
        const newDiv = document.createElement("div");
        newDiv.style.cssText = `width: ${divSizes}; height: ${divSizes}; background-color:red;`
        drawingBox.appendChild(newDiv);
    }

}

function changeSwiperText(){
    swiperLabel.textContent = `Pixel Density ${swiper.value} X ${swiper.value}`
}

function getSize(){
    return drawingBox.clientWidth / swiper.value;
}

function amountOfDivsNeeded(){
    return drawingBox.clientWidth / getSize();
}

function removePreviousDivs(){
    for(let i = drawingBox.childNodes.length; i >= 0; i--){
        drawingBox.removeChild(drawingBox.childNodes[i]);
    }
}