
window.addEventListener('load', start);

const inputRangeRed = document.querySelector('#inputRangeRed');
const inputTextRed  = document.querySelector('#inputTextRed');
const inputRangeGreen = document.querySelector('#inputRangeGreen');
const inputTextGreen = document.querySelector('#inputTextGreen');
const inputRangeBlue = document.querySelector('#inputRangeBlue');
const inputTextBlue = document.querySelector('#inputTextBlue');
const changedColor = document.querySelector('#changedColor');
const valueColor = document.querySelector('#valueColor');



function start() {
    inputWorking();
}


function inputWorking(){


    inputRangeRed.focus();

    document.getElementById("inputRangeRed").addEventListener("input", function(){
    document.getElementById("inputTextRed").innerHTML = inputRangeRed.value;
    
    });
        
    document.getElementById("inputRangeGreen").addEventListener("input", function(){
    document.getElementById("inputTextGreen").innerHTML = inputRangeGreen.value;
    
    });
    
    document.getElementById("inputRangeBlue").addEventListener("input", function(){
    document.getElementById("inputTextBlue").innerHTML = inputRangeBlue.value;
    
    });


    addEventListener("input", function(){
    let concatColors = document.getElementById("valueColor").innerHTML = 'rgb('+inputRangeRed.value+', '+inputRangeGreen.value+', '+inputRangeBlue.value + ')';

    let changedColorRgb = document.getElementById("changedColor");
    changedColorRgb.style.backgroundColor = concatColors;    

    });
    
}
