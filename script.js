// variables

const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")
const lengthEl = document.getElementById("length")
const inputCon = document.getElementById("input-con")
const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function() {
    const inputValue = Number(inputCon.value)

    const metersToFeet = inputValue * 3.281
    const feetToMeters = inputValue * 0.3048

    const litersToGallons = inputValue * 0.264
    const gallonsToLiters = inputValue * 3.785

    const kilosToPounds = inputValue * 2.204
    const poundsToKilos = inputValue * 0.4535

    lengthEl.textContent = `${inputValue} meters = ${metersToFeet.toFixed(2)} feet
                                 | ${inputValue} feet = ${feetToMeters.toFixed(2)} meters`
    massEl.textContent = `${inputValue} kilos = ${kilosToPounds.toFixed(2)} pounds
                                     | ${inputValue} pounds = ${poundsToKilos.toFixed(2)} kilos`
    volumeEl.textContent = `${inputValue} liters = ${litersToGallons.toFixed(2)} gallons
                                         | ${inputValue} gallons = ${gallonsToLiters.toFixed(2)} liters`
})