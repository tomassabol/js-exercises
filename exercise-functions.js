// @ts-check

/**
 * @author Tomáš Sabol
 * @description Sep 2, 2024
 */

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const add = (a, b) => {
  return a + b;
};

add(1, 3);

/**
 *
 * @param {string} firstName
 * @param {string} lastName
 * @returns void
 */
function getFullName(firstName, lastName) {
  const fullName = `My full name is: ${firstName} ${lastName}`;
  console.log("fullName", fullName);
}

/**
 *
 * @param {number} width
 * @param {number} height
 * @returns void
 */
function calculateRectangleArea(width, height) {
  const area = width * height;
  console.log("area", area);
}

/**
 *
 * @param {number} speed
 * @param {number} time
 */
function calculateDistance(speed, time) {
  const distance = speed * time;
  console.log(`You have travelled ${distance}km`);
}

/**
 * @type {{ownerName: string, getFullName: (firstName: string, lastName: string) => void, calculateRectangleArea: (width: number, height: number) => void, calculateDistance: (speed: number, time: number) => void}}
 */
const calculator = {
  ownerName: "Tomas",
  getFullName,
  calculateRectangleArea,
  calculateDistance,
};

console.log("calculator:", calculator);
calculator.getFullName("Tomas", "S");
calculator.calculateRectangleArea(2, 3);
calculator.calculateDistance(2, 3);
