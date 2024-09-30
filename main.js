function calc(num1, num2, cb) {
  return console.log(
    `answer of ${cb.name} is ${cb(num1, num2)}`
  );
}

function plus(num1, num2) {
  return num1 + num2;
}

function mines(num1, num2) {
  return num1 - num2;
}

function division(num1, num2) {
  return num1 / num2;
}

function mul(num1, num2) {
  return num1 * num2;
}

calc(3, 4, plus);
calc(3, 4, mines);
calc(3, 4, division);
calc(3, 4, mul);
