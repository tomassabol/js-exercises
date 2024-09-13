import { Car } from "./car.js";

const car1 = new Car("Toyota", "Corolla", 2020);
const car2 = new Car("Honda", "Civic", 2019);

const cars = [car1, car2];

cars.forEach((car, index) => {
  console.log(car.getInfo());
  console.log(car.start());
  console.log(car.stop());
  if (index !== cars.length - 1) {
    console.log();
  }
});
