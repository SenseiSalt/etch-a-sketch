//change numbers above slider
let grid = document.querySelector(".grid");
let gridSideLength = document.querySelector(".grid-size");
let slider = document.querySelector(".slider");
let sliderValue = 16;
let gridColor = "#000000";
let totalDivBoxes;
let gridColorInput = document.querySelector('#color-picker-input');
let rainbowButton = document.querySelector('#rainbow-mode');
let clear = document.querySelector('#clear');
createDivs();


gridColorInput.addEventListener('input', () => gridColor = gridColorInput.value);
slider.addEventListener('input', changeSliderNumber);
clear.addEventListener('click', createDivs);
rainbowButton.addEventListener('click', () => {
    gridColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    console.log(gridColor);



});


function changeSliderNumber() {    
    sliderValue = slider.value;
    gridSideLength.innerText = sliderValue + " x " + sliderValue;
    createDivs();
}


function createDivs() {
    let numOfDivs = Math.pow(sliderValue, 2);
    $(".in-grid").remove();

    for(let i = 0; i < numOfDivs; i++) {
        
        divBoxes = document.createElement('div');
        grid.appendChild(divBoxes);
        divBoxes.classList.add("in-grid");
        totalDivBoxes = document.getElementsByClassName("in-grid");

    }
    totalDivBoxes = document.getElementsByClassName("in-grid");
    sizeDivs(sliderValue);
}

function sizeDivs(divSideCount) {
    let divSideLength = 500 / divSideCount;
    $(".in-grid").css("height", `${divSideLength}`);
    $(".in-grid").css("width", `${divSideLength}`);
    colorDivs();
    
}


function colorDivs() {
    gridColor = gridColorInput.value;
    console.log(gridColor);
    Array.from(totalDivBoxes).forEach(box => box.addEventListener('mouseover', () => {
        box.classList.add("active");
        $(".active").css('background-color', `${gridColor}`);




}));
    


}

