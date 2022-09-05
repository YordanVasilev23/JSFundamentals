function messegeDecode(data) {
  let pattern = /!(?<command>[A-Z][a-z]{2,})\!:\[(?<string>[A-z]{7,})\]/gm
  let count = data.shift();
  let isValid = false;
  for (let i = 0; i < count; i++) {
    let messege = data[i];
    let match = pattern.exec(messege);
    let numbers = "";
    let command = ''
    if (match !== null) {
      isValid = true;
      command = match.groups.command;
      let str = match.groups.string;
      for (let char of str) {
        numbers += char.charCodeAt(char).toString() + " ";
      }
      match = pattern.exec(messege);
    }
    if (isValid) {
      console.log(`${command}: ${numbers.trim()}`);
      isValid = false
    } else {
      console.log("The message is invalid");
    }
  }
}
messegeDecode(["2",
"!Send!:[IvanisHere]",
"*Time@:[Itis5amAlready"]);
