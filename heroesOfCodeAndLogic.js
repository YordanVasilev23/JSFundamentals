function heroesOfCodeAndMagic(data){
    let countOfHeroes = data.shift();
    let heroObj = {};
    for (let i = 0; i < countOfHeroes; i++){
        let currentHero = data.shift().split(' ');
        let heroName = currentHero.shift();
        heroObj[heroName] = currentHero;
    }
    data.forEach(element => {
        let [command, hero, points, description] = element.split(' - ');
        switch (command){
            case "Heal":
                heroObj = healing(hero, points, heroObj);
                break;
            case "Recharge":
                heroObj = recharging(hero, points, heroObj);
                break;
            case "TakeDamage":
                heroObj = takingDmg(hero, points, description, heroObj);
                break;
            case "CastSpell":
                heroObj = castingSpell(hero, points, description, heroObj);
                break;
        }
    });
    function castingSpell(hero, points, description, heroObj){
        if (Number(heroObj[hero][1]) >= Number(points)){
            heroObj[hero][1] = Number(heroObj[hero][1]) - Number(points);
            console.log(`${hero} has successfully cast ${description} and now has ${heroObj[hero][1]} MP!`);
        }
        else{
            console.log(`${hero} does not have enough MP to cast ${description}!`);
        }
        return heroObj;
    }
    function healing(hero, points, heroObj){
        let missingHealth = 100 - Number(heroObj[hero][0]);
        heroObj[hero][0] = Number(heroObj[hero][0]) + Number(points);
        if (Number(heroObj[hero][0]) > 100){
            heroObj[hero][0] = 100;
            console.log(`${hero} healed for ${missingHealth} HP!`);
        }
        else {
            console.log(`${hero} healed for ${points} HP!`);
        }
        return heroObj;
    }
    function recharging(hero, points, heroObj){
        let missingMana = 200 - Number(heroObj[hero][1]);
        heroObj[hero][1] = Number(heroObj[hero][1]) + Number(points);
        if (Number(heroObj[hero][1]) > 200){
            heroObj[hero][1] = 200;
            console.log(`${hero} recharged for ${missingMana} MP!`);
        }
        else {
            console.log(`${hero} recharged for ${points} MP!`);
        }
        return heroObj;
    }
    function takingDmg(hero, points, description, heroObj){
        if (Number(heroObj[hero][0]) > Number(points)){
            heroObj[hero][0] = Number(heroObj[hero][0]) - Number(points);
            console.log(`${hero} was hit for ${points} HP by ${description} and now has ${heroObj[hero][0]} HP left!`)
        }
        else{
            console.log(`${hero} has been killed by ${description}!`);
            delete heroObj[hero];
        }
        return heroObj;
    }
    for (let [hero, stats] of Object.entries(heroObj)){
        console.log(`${hero}`);
        console.log(` HP: ${stats[0]}`);
        console.log(` MP: ${stats[1]}`)
    }
}
heroesOfCodeAndMagic([2,
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End']);