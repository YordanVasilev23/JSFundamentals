function worldTour(data) {
  let busStops = data.shift();
  let line = data.shift();
  while (line !== "Travel") {
    let [action, firstParam, lastParam] = line.split(":");
    let positionIndex;
    let lastIndex;
    switch(action){
        case "Add Stop":
            positionIndex = Number(firstParam);
            if (positionIndex >= 0 && positionIndex < busStops.length) {
            let value = lastParam;
            let firstPart = busStops.slice(0, positionIndex);
            let secondPart = busStops.slice(positionIndex);
            busStops = firstPart + value + secondPart;
            console.log(busStops);
            break;
            } else {
            console.log(busStops);
            break;
        }
        case "Remove Stop": 
            let startIndex = Number(firstParam);
            let endIndex = Number(lastParam);
            if (startIndex >= 0 && endIndex < busStops.length) {
            let subStr = busStops.substring(startIndex, endIndex + 1);
            busStops = busStops.replace(subStr, "");
            console.log(busStops);
            break;
            } else {
            console.log(busStops);
            break;
            }
        case "Switch":
            let oldValue = firstParam;
            let newValue = lastParam;
            let pattern = new RegExp(oldValue, "g");
            busStops = busStops.replace(pattern, newValue);
            console.log(busStops);
            break;
        }
        line = data.shift();
    }

  console.log(`Ready for world tour! Planned stops: ${busStops}`);
}
worldTour([
  "Hawai::Cyprys-Greece",

  "Add Stop:7:Rome",

  "Remove Stop:11:16",

  "Switch:Hawai:Bulgaria",

  "Travel",
]);
