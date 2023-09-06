document.addEventListener("DOMContentLoaded", function() {
    const inputTemp = document.getElementById("inputTemp");
    const fromUnit = document.getElementById("fromUnit");
    const toUnit = document.getElementById("toUnit");
    const convertButton = document.getElementById("convertButton");
    const outputTemp = document.getElementById("outputTemp");

    convertButton.addEventListener("click", function() {
        const temperature = parseFloat(inputTemp.value);
        const from = fromUnit.value;
        const to = toUnit.value;
        let convertedTemp;

        if (from === "celsius") {
            if (to === "fahrenheit") {
                convertedTemp = (temperature * 9/5) + 32;
            } else if (to === "kelvin") {
                convertedTemp = temperature + 273.15;
            } else {
                convertedTemp = temperature;
            }
        } else if (from === "fahrenheit") {
            if (to === "celsius") {
                convertedTemp = (temperature - 32) * 5/9;
            } else if (to === "kelvin") {
                convertedTemp = (temperature - 32) * 5/9 + 273.15;
            } else {
                convertedTemp = temperature;
            }
        } else {
            if (to === "celsius") {
                convertedTemp = temperature - 273.15;
            } else if (to === "fahrenheit") {
                convertedTemp = (temperature - 273.15) * 9/5 + 32;
            } else {
                convertedTemp = temperature;
            }
        }

        outputTemp.textContent = convertedTemp.toFixed(2);
    });
});
