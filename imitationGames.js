function imitationGame(input){
    let decryptedMessg = input.shift();
    let index = 0;
    let currentArray = input[index].split('|');
    let command = currentArray.shift();
    index++;
    let subStringed = '';
    let slicedString = '';
    while (command !== 'Decode'){

        if (command === 'ChangeAll'){
            let replacedLetter = currentArray[0];
            let replacedWith = currentArray[1];
            decryptedMessg = decryptedMessg.split(replacedLetter).join(replacedWith);
        }
        else if (command === 'Insert'){
            let beforeIndex = Number(currentArray[0]);
            let newValue = currentArray[1];
            decryptedMessg = decryptedMessg.split('');
            decryptedMessg.splice(beforeIndex, 0, newValue);
            decryptedMessg = decryptedMessg.join('');
        }
        else if (command === 'Move'){
            let indexToMove = Number(currentArray[0]);
            slicedString = decryptedMessg.slice(indexToMove);
            subStringed = decryptedMessg.substring(0, indexToMove);
            decryptedMessg = slicedString + subStringed;
        }
        currentArray = input[index].split('|');
        command = currentArray.shift();
        index++;
    }
    console.log(`The decrypted message is: ${decryptedMessg}`);
}
imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
  ]);