function messenger(data){
    let maxCountOfMsgs = Number(data.shift());
    let myObj = {};
    let countProperties = 0;
    let index = 0;
    let [command, name, first, second] = data[index].split('=');
    index++;
    while(command !== 'Statistics'){
        switch(command){
            case "Add":
                let stats = [];
                stats.push(first);
                stats.push(second);
                if(!myObj.hasOwnProperty(name)){
                myObj[name] = stats;
                }
                break;
            case "Message":
                if(myObj.hasOwnProperty(name) && myObj.hasOwnProperty(first)){
                    myObj[name][0] = Number(myObj[name][0]) + 1;
                    myObj[first][1] = Number(myObj[first][1]) + 1;
                }
                else{
                    break;
                }
                if((Number(myObj[name][0]) + Number(myObj[name][1])) >= maxCountOfMsgs){
                    console.log(`${name} reached the capacity!`);
                    delete myObj[name];
                }
                if((Number(myObj[first][0]) + Number(myObj[first][1])) >= maxCountOfMsgs){
                    console.log(`${first} reached the capacity!`);
                    delete myObj[first];
                }
                break;
            case "Empty":
                if (name === 'All'){
                    for (let key of Object.keys(myObj)){
                        delete myObj[key];
                    }
                }
                else {
                    delete myObj[name];
                }
                break;
        }
        [command, name, first, second] = data[index].split('=');
        index++;
    }
    countProperties = Object.keys(myObj).length;
    console.log(`Users count: ${countProperties}`);
    for (let [user, calls] of Object.entries(myObj)){
        let totalCalls = Number(calls[0]) + Number(calls[1]);
        console.log(`${user} - ${totalCalls}`);
    }
}
messenger(["10",
"Add=Berg=9=0",
"Add=Kevin=0=9",
"Message=Berg=Kevin",
"Add=Mark=5=4",
"Statistics"]);