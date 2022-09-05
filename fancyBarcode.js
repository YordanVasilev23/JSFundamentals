function fancyBarCode(data){
    let n = Number(data.shift());
    let pattern = /(@#{1,})(?<code>[A-Z][A-Za-z0-9]{4,}[A-Z])(@#{1,})/gm
    for (let i = 0; i < n; i++){
        let barcode = data[i];
        let match = pattern.exec(barcode);
        let numbers = '';
        let isValid = false;
        while(match !== null){
            isValid = true;
            let text = match.groups.code;
            for (let char of text){
                if(!isNaN(Number(char))){
                    numbers += char;
                }
            }
            match = pattern.exec(barcode);
        }
        if (isValid){
            numbers = numbers !== '' ? numbers : '00';
            console.log(`Product group: ${numbers}`);

        }
        else {
            console.log('Invalid barcode');
        }


    }
}
fancyBarCode(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#",
  ]);