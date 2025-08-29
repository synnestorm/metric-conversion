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
    const inputValue = inputCon.value
    console.log(inputValue)
})