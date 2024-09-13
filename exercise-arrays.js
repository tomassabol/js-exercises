// @ts-check

/**
 * @author Tomáš Sabol
 * @description Sep 2, 2024
 */

const names = ["Thomas", "Christian", "Oskar", "Peter", "John"];
console.log("fistName", names[0]);

const thomas = names.indexOf("Thomas");
console.log("thomas", thomas);

const notInArray = names.indexOf("NotInArray");
console.log("notInArray", notInArray);

names.push("Jack");
console.log("names", names);

/**
 * @type {(string| {firstName: string, lastName: string, email: string})[]}
 */
const newArray = names.slice(0, 3);
console.log("newArray", newArray);

const person1 = {
  firstName: "Thomas",
  lastName: "Sabol",
  email: "test@test.com",
};

const person2 = {
  firstName: "Christian",
  lastName: "Sabol",
  email: "test1@test.com",
};

newArray.push(person1);
console.log("newArray", newArray);
const firstObject = newArray[3];
if (typeof firstObject === "object") {
  console.log("firstObject", firstObject.email);
}
console.log("firstPersonEmail", person1.email);
