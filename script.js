// variables
let meter = 3.281
let liter = 0.264
let kilogram = 2.204

const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")
const lengthEl = document.getElementById("length")
const inputCon = document.getElementById("input-con")
const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function() {
    const inputValue = Number(inputCon.value)
    getMetrics(inputValue)
})

function getMetrics(value) {
    if (value === 20) {
    let length = 20
    let feet = 65.616
    lengthEl.textContent = `${length} meters = ${feet}`
} else {
    lengthEl.textContent = `No data available:`
}
}

// Instead of checking for one specific number (like 20), 
// think about how to calculate the feet value dynamically from the input number.

// Remember the formula:
// 1 meter ≈ 3.28084 feet
// Use this to convert any meters input to feet.

// You'll want to update your getMetrics function to:
// Receive the input value.
// Calculate feet by multiplying input by the conversion factor.
// Show the result in your <p> element.

// Think about formatting:
// Do you want to limit decimal places?
// (Example: feet.toFixed(2))