function tempConvert(){
    const inputValue = document.getElementById('value').value.trim();
    const resultDiv = document.getElementById('result');
    
    if((inputValue === '' || isNaN(inputValue)) && (inputValue2 === '' || isNaN(inputValue2))){
        resultDiv.textContent = "❌ Please enter a valid number.";
        resultDiv.style.color = "red";
        return;
    }
    if(inputValue2 != ''){
        const value = parseFloat(inputValue2);
        const result = value / 33.8;
        document.getElementById('value').value = result.toFixed(2);
        return;
    }
    const value = parseFloat(inputValue);
    const result = value * 33.8;
    document.getElementById('value2').value = result.toFixed(2);
}

function weightConvert(){
    const inputValue = document.getElementById('value').value.trim();
    const inputValue2 = document.getElementById('value2').value.trim();
    // const resultDiv = document.getElementById('result');
    
    if((inputValue === '' || isNaN(inputValue)) && (inputValue2 === '' || isNaN(inputValue2))){
        resultDiv.textContent = "❌ Please enter a valid number.";
        resultDiv.style.color = "red";
        return;
    }
    if(inputValue2 != ''){
        const value = parseFloat(inputValue2);
        const result = value / 2.20462262;
        document.getElementById('value').value = result.toFixed(2);
        return;
    }
    const value = parseFloat(inputValue);
    const result = value * 2.20462262;
    document.getElementById('value2').value = result.toFixed(2);
}


function speedConvert(){
    const inputValue = document.getElementById('value').value.trim();
    const inputValue2 = document.getElementById('value2').value.trim();
    const resultDiv = document.getElementById('result');
    
    if((inputValue === '' || isNaN(inputValue)) && (inputValue2 === '' || isNaN(inputValue2))){
        resultDiv.textContent = "❌ Please enter a valid number.";
        resultDiv.style.color = "red";
        return;
    }
    if(inputValue2 != ''){
        const value = parseFloat(inputValue2);
        const result = value / 0.62137119;
        document.getElementById('value').value = result.toFixed(2);
        return;
    }
    
    const value = parseFloat(inputValue);
    const result = value * 0.62137119;
    document.getElementById('value2').value = result.toFixed(2);

}

function reset(){
    document.getElementById('value').value = '';
    document.getElementById('value2').value = '';
    document.getElementById('result').textContent = '';
}