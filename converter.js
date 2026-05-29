// function convert(){
//     const inputValue = document.getElementById('value').ariaValueMax.trim();
//     //const conversionType = document.getElementById('conversion').value;
//     const resultDiv = document.getElementById('result');

//     if(inputValue === '' || isNaN(inputValue)){
//         resultDiv.textContent = "❌ Please enter a valid number.";
//         resultDiv.style.color = "red";
//         return;
//     }

//     const value = parseFloat(inputValue);
//     let result;
// }
const inputValue = document.getElementById('value').value.trim();
const resultDiv = document.getElementById('result');
const value = parseFloat(inputValue);
let result;
function tempConvert(){
    result = value * 33.8;
}

function weightConvert(inputValue){
    result = value*2.20462262;
    resultDiv.textContent = `${value} lbs = ${result.toFixed(2)} kg`;
    resultDiv.style.color = "green";
}

function speedConvert(){
    result = value * 0.62137119
}

function error(){
        if(inputValue === '' || isNaN(inputValue)){
        resultDiv.textContent = "❌ Please enter a valid number.";
        resultDiv.style.color = "red";
        return;
    }
}