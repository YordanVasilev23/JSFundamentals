function passwordReset(data){
    let string = data.shift();
    let index = 0;
    let tokens = data[index].split(' ');
    let command = tokens.shift();
    while (command !== "Done"){
        switch (command){
            case "TakeOdd" :
                string = takingOdd(string);
                console.log(string);
                break;
            case "Cut" :
                string = cutting(Number(tokens[0]), Number(tokens[1]), string)
                console.log(string);
                break;
            case "Substitute" :
                string = substituting(tokens[0], tokens[1], string);
                break;
        }
        index++;
        tokens = data[index].split(' ');
        command = tokens.shift();

    }
    function takingOdd(string){
        let newStr = "";
        for (let i = 0; i < string.length; i++){
            if (i % 2 !== 0){
                newStr += string[i];
            }
        }
        string = newStr;
        return string;
    }
        
    function cutting (startIndex, length, string){
        let stringToReplace = string.substring(startIndex, startIndex + length)
        string = string.replace(stringToReplace, '');
        return string;

    }
    function substituting(el, elToreplace, string){
        if (string.includes(el)){
            string = string.split(el).join(elToreplace);
            console.log(string)
            return string;
        }
        else{
            console.log("Nothing to replace!");
            return string;
        }
    }
    console.log(`Your password is: ${string}`)
}
passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"]);
console.log('----------------');
passwordReset((["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"]))