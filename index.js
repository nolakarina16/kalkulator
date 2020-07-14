const allClearButton = document.querySelector(".all-clear")
const decimalButton = document.querySelector(".decimal")
const equalButton = document.querySelector(".equal-sign")
const percentageButton = document.querySelector(".percentage")
const numberButtons = document.querySelectorAll(".number")
const operatorButtons = document.querySelectorAll(".operator")

const calculatorScreen = document.querySelector(".calculator-screen")
let prevNumber = ""
let calculationOperator = ""
let currentNumber = "0"

function calculate() {
  if (calculationOperator !== "") {
    let result = ""
  
    prevNumber = Number(prevNumber)
    currentNumber = Number(currentNumber)
  
    switch (calculationOperator) {
      case "+":
        result = prevNumber + currentNumber
        break
      case "-":
        result = prevNumber - currentNumber
        break
      case "*":
        result = prevNumber * currentNumber
        break
      case "/":
        result = prevNumber / currentNumber
        break
      default:
        break
    }
  
    currentNumber = result
    calculationOperator = ""
  }
}

function clearAll() {
  prevNumber = ""
  calculationOperator = ""
  currentNumber = "0"
}

function inputNumber(number) {
  if (currentNumber === "0") {
    currentNumber = number
  } else {
    currentNumber += number
  }
}

function inputOperator(operator) {
  if (calculationOperator === "") prevNumber = currentNumber
  calculationOperator = operator
  currentNumber = ""
}

function updateScreen(number) {
  calculatorScreen.value = number
}

numberButtons.forEach(number => {
  number.addEventListener("click", event => {
    inputNumber(event.target.value)
    updateScreen(currentNumber)
  })
})

decimalButton.addEventListener("click", () => {
  if (!currentNumber.includes(".")) currentNumber += "."
  updateScreen(currentNumber)
})

allClearButton.addEventListener("click", () => {
  clearAll()
  updateScreen(currentNumber)
})

operatorButtons.forEach(operator => {
  operator.addEventListener("click", event => {
    inputOperator(event.target.value)
  })
})

equalButton.addEventListener("click", () => {
  calculate()
  updateScreen(currentNumber)
})

percentageButton.addEventListener("click", () => {
  currentNumber = Number(currentNumber) / 100
  prevNumber = ""
  calculationOperator = ""
  updateScreen(currentNumber)
})
