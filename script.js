// variables

const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")
const lengthEl = document.getElementById("length")
const inputCon = document.getElementById("input-con")
const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function() {
    const inputValue = Number(inputCon.value)

    const metersToFeet = inputValue * 3.281.toFixed(2)
    const feetToMeters = inputValue * 0.3048.toFixed(2)

    const litersToGallons = inputValue * 0.264.toFixed(2)
    const gallonsToLiters = inputValue * 3.785.toFixed(2)

    const kilosToPounds = inputValue * 2.204.toFixed(2)
    const poundsToKilos = inputValue * 0.4535.toFixed(2)

    lengthEl.textContent = `${metersToFeet} meters | ${feetToMeters} feet`
    massEl.textContent = `${kilosToPounds} kilos | ${poundsToKilos} pounds`
    volumeEl.textContent = `${litersToGallons} liters | ${gallonsToLiters} gallons`
})