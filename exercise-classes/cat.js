/**
 * Class representing a Cat
 */
export class Cat {
  /**
   *
   * @param {string} name
   * @param {number} age
   * @param {string} breed
   */
  constructor(name, age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  }

  /**
   *
   * @returns {string}
   */
  getInfo() {
    return `This is a ${this.age} year old ${this.breed} named ${this.name}`;
  }

  /**
   *
   * @param {string} newName
   */
  setName(newName) {
    this.name = newName;
  }
}
