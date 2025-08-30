
// variables fetched from the DOM

const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")
const lengthEl = document.getElementById("length")
const inputCon = document.getElementById("input-con")
const convertBtn = document.getElementById("convert-btn")

// function for conversion

convertBtn.addEventListener("click", function() {
    const inputValue = Number(inputCon.value)

    const metersToFeet = inputValue * 3.281
    const feetToMeters = inputValue * 0.3048

    const litersToGallons = inputValue * 0.264
    const gallonsToLiters = inputValue * 3.785

    const kilosToPounds = inputValue * 2.204
    const poundsToKilos = inputValue * 0.4535

    lengthEl.textContent = `${inputValue} meters = ${metersToFeet.toFixed(3)} feet
                                 | ${inputValue} feet = ${feetToMeters.toFixed(3)} meters`
    massEl.textContent = `${inputValue} kilos = ${kilosToPounds.toFixed(3)} pounds
                                     | ${inputValue} pounds = ${poundsToKilos.toFixed(3)} kilos`
    volumeEl.textContent = `${inputValue} liters = ${litersToGallons.toFixed(3)} gallons
                                         | ${inputValue} gallons = ${gallonsToLiters.toFixed(3)} liters`
})