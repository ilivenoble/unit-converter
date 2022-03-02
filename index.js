
//const numebrEl = document.getElementById("my-number")

const lengthResult = document.getElementById("length-result")

const volumeResult = document.getElementById("volume-result")

const massResult = document.getElementById("mass-result")

function convertLength() {
    const numberInput = document.getElementById("number-input")
    let myNumber = numberInput.value
    if(myNumber) {
    const lengthConstant = 3.28084
    const feetConstant = 0.3048
    const literConstant = 0.2641722
    const gallonConstant = 3.78541
    const kiloConstant = 2.20462
    const poundConstant = 0.453592

    let lengthToFeet = myNumber * lengthConstant;
    let feetToLength = myNumber * feetConstant;
    lengthResult.innerHTML = `${myNumber} meters = ${lengthToFeet.toFixed(3)} feet | ${myNumber} feet = ${feetToLength.toFixed(3)} meters`

    let literToGallon = myNumber * literConstant
    let gallonToLiter = myNumber * gallonConstant
    volumeResult.innerHTML = `${myNumber} liters = ${literToGallon.toFixed(3)} gallons | ${myNumber} gallons = ${gallonToLiter.toFixed(3)} liters`

    let kiloTopounds = myNumber * kiloConstant
    let poundsTokilo = myNumber * poundConstant
    massResult.innerHTML = `${myNumber} kilos = ${kiloTopounds.toFixed(3)} pounds | ${myNumber} pounds = ${poundsTokilo.toFixed(3)} kilos`
    }
    
}

// function reset() {
//     const numberInput = document.getElementById("number-input")
//     const resultEl = document.getElementsByClassName("result")
//     numberInput.value = ''
//     resultEl.style.display = 'none'
// }
