const express = require("express");
const bodyparser = require("body-parser");
const history = require("../modules/history");

const app = express();
const PORT = 5000;

app.use(express.static("server/public"));
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/history", (req, res) => {
  res.send(history);
});

app.post("/calculate", (req, res) => {
  //   console.log(req.body);
  calculate(req.body);
  res.sendStatus(201);
});

app.listen(PORT, () => {
  console.log("Listen Here Pal....");
});

function calculate(object) {
  let newCalc = {};
  let operator = object.operatorSelector;
  let num1 = Number(object.num1);
  let num2 = Number(object.num2);
  let output;
  switch (operator) {
    case "*":
      output = multiply(num1, num2);
      break;
    case "/":
      output = divide(num1, num2);
      break;
    case "+":
      output = add(num1, num2);
      break;
    case "-":
      output = subtract(num1, num2);
      break;
    default:
      console.log("error");
  }
  newCalc.num1 = Number(object.num1);
  newCalc.output = output;
  newCalc.num2 = Number(object.num2);
  newCalc.operatorSelector = object.operatorSelector;
  history.push(newCalc);
  console.log(newCalc);
}

function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
