function thePianists(input){
    let myMap = new Map();
    let countOfPieces = Number(input.shift());
    let piecesArray = input.splice(0,countOfPieces);
    for (let el of piecesArray){
        el = el.split('|');
        let currentPiece = el.shift();
        myMap.set(currentPiece, el);
    }
    for (let actions of input){
        if (actions === 'Stop'){
            for (let [piece, arr] of myMap){
                console.log(`${piece} -> Composer: ${arr[0]}, Key: ${arr[1]}`)
            }
            break;
        }
        let tokens = actions.split('|');
        let command = tokens.shift();
        let newPieces = tokens.shift();
        if (command === 'Add'){
            if (myMap.has(newPieces)){
                console.log(`${newPieces} is already in the collection!`);
            }else {
                console.log(`${newPieces} by ${tokens[0]} in ${tokens[1]} added to the collection!`)
                myMap.set(newPieces, tokens);
            }
        }else if (command === 'Remove'){
            if (myMap.has(newPieces)){
                console.log(`Successfully removed ${newPieces}!`);
                myMap.delete(newPieces);
            }else{
                console.log(`Invalid operation! ${newPieces} does not exist in the collection.`);
            }
        }else if (command === 'ChangeKey'){
            if (myMap.has(newPieces)){
                console.log(`Changed the key of ${newPieces} to ${tokens[0]}!`)
                let currentRes = myMap.get(newPieces);
                currentRes[1] = tokens[0];
            }else{
                console.log(`Invalid operation! ${newPieces} does not exist in the collection.`)
            }
            
        }
    }
}
thePianists([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]);