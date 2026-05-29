function tempConvert(){
    const inputValue = document.getElementById('value').value.trim();
    const resultDiv = document.getElementById('result');
    
    if(inputValue === '' || isNaN(inputValue)){
        resultDiv.textContent = "❌ Please enter a valid number.";
        resultDiv.style.color = "red";
        return;
    }
    
    const value = parseFloat(inputValue);
    const result = value * 33.8;
    resultDiv.textContent = `${value}°C = ${result.toFixed(2)}°F`;
    resultDiv.style.color = "green";
}

function weightConvert(){
    const inputValue = document.getElementById('value').value.trim();
    const resultDiv = document.getElementById('result');
    
    if(inputValue === '' || isNaN(inputValue)){
        resultDiv.textContent = "❌ Please enter a valid number.";
        resultDiv.style.color = "red";
        return;
    }
    
    const value = parseFloat(inputValue);
    const result = value * 2.20462262;
    resultDiv.textContent = `${value} kg = ${result.toFixed(2)} lbs`;
    resultDiv.style.color = "green";
}

function speedConvert(){
    const inputValue = document.getElementById('value').value.trim();
    const resultDiv = document.getElementById('result');
    
    if(inputValue === '' || isNaN(inputValue)){
        resultDiv.textContent = "❌ Please enter a valid number.";
        resultDiv.style.color = "red";
        return;
    }
    
    const value = parseFloat(inputValue);
    const result = value * 0.62137119;
    resultDiv.textContent = `${value} km/h = ${result.toFixed(2)} mph`;
    resultDiv.style.color = "green";
}