const ratioOfTwoNumbers = require("../utilities/ratio/index");
const factorialOfNumber = require("../utilities/factorial/index");
function ratioAndFactorial(num1, num2, num3) {
  let ratioOfNums = ratioOfTwoNumbers(num1, num2);
  let factorialOfNum = factorialOfNumber(num3);
  let outputObject = {
    ratio: ratioOfNums,
    factorial: factorialOfNum,
  };
  return outputObject;
}
module.exports = ratioAndFactorial;
