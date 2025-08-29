// variables

const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")
const lengthEl = document.getElementById("length")
const inputCon = document.getElementById("input-con")
const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function() {
    const inputValue = Number(inputCon.value)
    const metersToFeet = inputValue * 3.281
    const litersToGallons = inputValue * 0.264
    const kilosToPounds = inputValue * 2.204

    lengthEl.textContent = `${metersToFeet} meters = `
    massEl.textContent = `${kilosToPounds} kilos = `
    volumeEl.textContent = `${litersToGallons} liters = `
})