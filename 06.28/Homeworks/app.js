// for-in
// Sukurkite objektą green: žalia, red: raudona, blue: mėlyna. Parodykite šio objekto raktus ir elementus.

let colors = {
    green: 'zalia',
    red: 'raudona',
    blue: 'melyna'
};

for (let key in colors)
{
    console.log(`Key:${key} Value: ${colors[key]}`)
}

// Sukurkite objektą su raktais Mantas, Paulius, Mindaugas ir reikšmėm 200, 300, 300.
// Parodykite eilutes tokiu formatu: Mantas - 200 EU atlyginimas.

let workers = {
    Mantas: 200,
    Paulius: 300,
    Mindaugas: 300
};

for (let key in workers)
{
    console.log(`${key} - ${workers[key]} EU atlyginimas`)
}

// Sukurkite objektą su savaitės dienomis.
// Raktai jame turėtų būti dienų skaičiai nuo savaitės pradžios
// (1 -> pirmadienis ir t.t.).
// Parodykite dabartinę savaitės dieną.

let weekdays = {
    1: 'pirmadienis',
    2: 'antradienis',
    3: 'treciadienis',
    4: 'ketvirtadienis',
    5: 'penktadienis',
    6: 'sestadienis',
    7: 'sekmadienis'
}

console.log(weekdays[new Date().getDay()]);

// Sukurkite kintamjį day kuriame saugomas savaitės dienos numeris.
// Atspausdinkite savaitės dieną naudojant sita kintamajį.

let day = 2;

for (let key in weekdays){
    if (day == key) {
        console.log(`${weekdays[key]}`);
    }
}

// Duotas objektas {js: ['jQuery', 'Angular'], php: 'hello', css: 'world'}.
// Parodykite žodį jQuery.

let obj = {
    js: [
        'jQuery',
        'Angular'
        ],
    php: 'hello',
    css: 'world'
}

console.log(obj.js[0]);

// Sukurkite objektą. Pirmieji du raktai yra lt ir en.
// Raktai turi savaitės dienų vardų masyvus lietuviškai ir angliškai atitinkamai.
// Naudodamiesi šiuo masyvu, pirmadienį parodykite lietuvių kalba, o trečiadienį - anglų kalba.
// Sukurkite kintamsios lang ir day (reikšmės lt arba en) ir naudojant lang ir day parodykite dieną

let week = {
    lt: ['pirmadienis', 'antradienis', 'treciadienis', 'ketvirtadienis', 'penktadienis', 'sestadienis', 'sekmadienis'],
    en: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
}

console.log(week.lt[0], week.en[2]);

let lang = 'lt';

    day = 6;

console.log(week[lang][day - 1]);