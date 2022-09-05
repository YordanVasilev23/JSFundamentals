function adAstra(string) {
  let pattern =
  /([#||])(?<food>\s*?[A-Z][A-z]+\s*?[A-z]+?\s*?)(\1)(?<day>[0-9]{2})\/(?<month>[0-9]{2})\/(?<year>[0-9]{2})(\1)(?<kcal>\d{1,4})(\1)/gm
    let currentKcal = 0;
    while((text = pattern.exec(string)) !== null){
        if (Number(text.groups.day) > 31 || Number(text.groups.month) > 12){
            continue;
        }
        let kcalories = Number(text.groups.kcal);
        currentKcal += kcalories;
    }
    console.log(`You have food to last you for: ${Math.floor(currentKcal / 2000)} days!`)
    while((text = pattern.exec(string)) !== null){
        if (Number(text.groups.day) > 31 || Number(text.groups.month) > 12){
            continue;
        }
        let foodToEat = text.groups.food;
        let expirationDate = text.groups.day + '/' + text.groups.month + '/' + text.groups.year;
        let kcalories = Number(text.groups.kcal);
        console.log(`Item: ${foodToEat}, Best before: ${expirationDate}, Nutrition: ${kcalories}`);
    }
}
adAstra([
  "#Bread#19/12/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);
