function needForSpeed(data) {
  let countOfCars = data.shift();
  let carObj = {};
  for (let i = 0; i < countOfCars; i++) {
    let tokens = data.shift().split("|");
    let carName = tokens.shift();
    carObj[carName] = tokens;
  }
  data.forEach((element) => {
    let [command, currentCar, firstNum, secondNum] = element.split(" : ");
    switch (command) {
      case "Drive":
        carObj = driving(currentCar, firstNum, secondNum, carObj);
        break;
      case "Refuel":
        carObj = refueling(currentCar, firstNum, carObj);
        break;
      case "Revert":
        carObj = reverting(currentCar, firstNum, carObj);
        break;
    }
  });
  function driving(currentCar, firstNum, secondNum, carObj) {
    if (Number(secondNum) <= Number(carObj[currentCar][1])) {
      carObj[currentCar][1] = Number(carObj[currentCar][1]) - Number(secondNum);
      carObj[currentCar][0] = Number(carObj[currentCar][0]) + Number(firstNum);
      console.log(
        `${currentCar} driven for ${firstNum} kilometers. ${secondNum} liters of fuel consumed.`
      );
    } else {
      console.log("Not enough fuel to make that ride");
    }
    if (Number(carObj[currentCar][0]) >= 100000) {
      console.log(`Time to sell the ${currentCar}!`);
      delete carObj[currentCar];
    }
    return carObj;
  }
  function refueling(currentCar, firstNum, carObj) {
    if (Number(carObj[currentCar][1]) < 75) {
      if (Number(carObj[currentCar][1]) + Number(firstNum) <= 75) {
        carObj[currentCar][1] =
          Number(carObj[currentCar][1]) + Number(firstNum);
        console.log(`${currentCar} refueled with ${firstNum} liters`);
      } else {
        let refueledLiters = 75 - Number(carObj[currentCar][1]);
        console.log(`${currentCar} refueled with ${refueledLiters} liters`);
        carObj[currentCar][1] = 75;
      }
    }
    return carObj;
  }
  function reverting(currentCar, firstNum, carObj) {
    if (Number(carObj[currentCar][0]) - Number(firstNum) < 10000) {
      carObj[currentCar][0] = 10000;
    } else {
      carObj[currentCar][0] = Number(carObj[currentCar][0]) - Number(firstNum);
      console.log(`${currentCar} mileage decreased by ${firstNum} kilometers`);
    }
    return carObj;
  }
  for (let [car, carData] of Object.entries(carObj)) {
    console.log(
      `${car} -> Mileage: ${carData[0]} kms, Fuel in the tank: ${carData[1]} lt.`
    );
  }
}
needForSpeed([
  "4",
  "Lamborghini Veneno|11111|74",
  "Bugatti Veyron|12345|67",
  "Koenigsegg CCXR|67890|12",
  "Aston Martin Valkryie|99900|50",
  "Drive : Koenigsegg CCXR : 382 : 82",
  "Drive : Aston Martin Valkryie : 99 : 23",
  "Drive : Aston Martin Valkryie : 2 : 1",
  "Refuel : Lamborghini Veneno : 40",
  "Revert : Bugatti Veyron : 2000",
  "Stop",
]);
