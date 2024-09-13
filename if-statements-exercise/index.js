// @ts-check

/**
 *
 * @param {number} number1
 * @param {number} number2
 * @param {number} number3
 * @param {number} number4
 */
function findLargest(number1, number2, number3, number4) {
  // Write your code here
  let largest = number1;
  if (number2 > largest) {
    largest = number2;
  }
  if (number3 > largest) {
    largest = number3;
  }
  if (number4 > largest) {
    largest = number4;
  }
  return largest;
}
