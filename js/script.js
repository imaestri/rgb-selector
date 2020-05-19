
window.addEventListener('DOMContentLoaded', start);


let inputRangeRed = document.querySelector('#inputRangeRed');
let inputTextRed  = document.querySelector('#inputTextRed');
let inputRangeGreen = document.querySelector('#inputRangeGreen');
let inputTextGreen = document.querySelector('#inputTextGreen');
let inputRangeBlue = document.querySelector('#inputRangeBlue');
let inputTextBlue = document.querySelector('#inputTextBlue');
let changeColor = document.querySelector('#changedColor');
let valueColor = document.querySelector('#valueColor');





function start() {
    inputWorking();
}


function inputWorking(){


    inputRangeRed.focus();

    document.addEventListener("input", function(){
        inputTextRed = inputRangeRed.value;

    });
        
    document.addEventListener("input", function(){
        inputTextGreen = inputRangeGreen.value;
    
    });
    
    document.addEventListener("input", function(){
        inputTextBlue = inputRangeBlue.value;
    
    });

    changeColors();

}



function changeColors() {
    
    addEventListener("input", function(){
        
        let concatColors = document.getElementById("valueColor").innerHTML = `rgb(${inputTextRed}, ${inputTextGreen}, ${inputTextBlue})`
        let changedColorRgb = document.getElementById("changedColor");
        changedColorRgb.style.backgroundColor = concatColors;    
        
        });
        
}



