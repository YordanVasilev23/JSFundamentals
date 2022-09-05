function plantDiscovery(data){
    let myMap = new Map();
    let plantsCount = Number(data.shift());
    let plantsArray = data.splice(0, plantsCount);
    let myObj = {};
    for (let plant of plantsArray){
        let statsArray = [];
        let currentRating = 0;
        let currentRarity = plant.split('<->').pop();
        let currentPlant = plant.split('<->').shift();
        statsArray.push(currentRarity);
        statsArray.push(currentRating);
        myMap.set(currentPlant, statsArray);
        myObj[currentPlant] = [];
    }
    let index = 0;
    let tokens = data[index].split(': ');
    let command =tokens.shift();
    index++;
    
    while (command !== "Exhibition"){
        let [plantToUpdate, number] = tokens[0].split(' - ')
        switch(command){
            case "Rate":
                myObj = rating(plantToUpdate, Number(number), myObj);
                break;
            case "Update":
                myMap = updating(plantToUpdate, Number(number), myMap);
                break;
            case "Reset":
                myObj = reseting(plantToUpdate, myObj);
                break;
        }
        tokens = data[index].split(': ');
        command =tokens.shift();
        index++;
    }
    function rating(plantToUpdate, number, myObj){
        myObj[plantToUpdate].push(number);
        return myObj;
    }
    function updating(plantToUpdate, number, myMap){
        myMap.get(plantToUpdate)[0] = number;
        return myMap;
    }
    function reseting(plantToUpdate, myObj){
        myObj[plantToUpdate] = [0];
        return myObj;
    }
    for (let [key, value] of Object.entries(myObj)){
        if (value.length > 1){
            if(value[0] === 0){
                value.shift()
            }
            let currentLength = value.length;
            value = value.reduce((a, b) => a + b);
            myObj[key] = value / currentLength;
        
        }else{
            myObj[key] = Number(value.join(''));
        }

    }
    console.log('Plants for the exhibition:')
    for (let [plant, stats] of myMap){
        console.log(`- ${plant}; Rarity: ${stats[0]}; Rating: ${myObj[plant].toFixed(2)}`)
    }
}
plantDiscovery(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Reset: Woodii",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"]);