const swiper = document.querySelector(`input[type = "range"]`);
const swiperLabel = document.querySelector(`label[for = "swipe"]`);
const drawingBox = document.querySelector(".container")
const colorPicker = document.querySelector("#color");
const clearButton = document.querySelector("#clear");
const rainbowButton = document.querySelector("#rainbow");
console.log(getRandomColour());
let rainbowClickedOn = false;
rainbowButton.addEventListener("click", rainbowModeOn);
swiper.addEventListener("input", changePixelDensity);
clearButton.addEventListener("click", resetDrawing);
swiperLabel.textContent = `Pixel Density: ${swiper.value} X ${swiper.value}`;
window.addEventListener("load", changePixelDensity, {once: true});
function changePixelDensity(e){
    changeSwiperText();
    removePreviousDivs();
    addnewDivs();
    addListeners();
}

function changeSwiperText(){
    swiperLabel.textContent = `Pixel Density: ${swiper.value} X ${swiper.value}`
}

function getSize(){
    
    return drawingBox.clientWidth / swiper.value;
}

function amountOfDivsNeeded(){
    return (drawingBox.clientWidth / getSize()) *  (drawingBox.clientWidth / getSize());
}

function removePreviousDivs(){
    drawingBox.textContent = "";
}
function addnewDivs(){
    const amountOfDivs = amountOfDivsNeeded();
    const divSizes = getSize();
    for(let i = 0; i < amountOfDivs; i++){
        const newDiv = document.createElement("div");
        newDiv.style.cssText = `width: ${divSizes}px; height: ${divSizes}px;`
        drawingBox.appendChild(newDiv);
    }
}
function addListeners(){
    const allDivs = drawingBox.childNodes;
    allDivs.forEach(childDiv => {
        childDiv.addEventListener("mouseover", eventListenerDetails);
    })
}
function eventListenerDetails(e){
    if(rainbowClickedOn){
        e.target.style.backgroundColor = getRandomColour();
    }
    else{
    e.target.style.backgroundColor = colorPicker.value;
    }
}
function resetDrawing(){
    const childrenNodes = drawingBox.childNodes;
    for(let i = 0; i < drawingBox.childNodes.length; i++){
        childrenNodes[i].style.backgroundColor = "white";

    }
}
function rainbowModeOn(){
    if(rainbowClickedOn){
        rainbowClickedOn = false;
    }
    else{
        rainbowClickedOn = true;
    }
    console.log(rainbowClickedOn);
    if(rainbowClickedOn){
        rainbowButton.style.cssText = "border:solid 2px gold"
    }
    else{
        rainbowButton.style.cssText = "";
    }


}
function getRandomColour(){
    const hexadecimal = "123456789ABCDEF";
    let colour = "#";
    for(let i = 0; i < 6; i++){
        colour = colour + hexadecimal.charAt(Math.floor(Math.random() * 15));   
    }
    return colour;
}