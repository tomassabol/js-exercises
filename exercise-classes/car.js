/**
 * Class representing a Car
 */
export class Car {
  /**
   *
   * @param {string} make
   * @param {string} model
   * @param {number} year
   * @param {boolean | undefined} isRunning
   */
  constructor(make, model, year, isRunning = undefined) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = isRunning;
  }

  /**
   *
   * @returns {{make: string, model: string, year: number}}
   */
  getInfo() {
    return `This is a ${this.year} ${this.make} ${this.model}`;
  }

  /**
   *
   * @param {string} newMake
   * @returns {string}
   */
  start() {
    this.isRunning = true;
    return "Car has started";
  }

  /**
   *
   * @returns {string}
   */
  stop() {
    this.isRunning = false;
    return "Car has stopped";
  }
}
