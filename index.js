
// Kintamuju inicijavimas


// 1

const skaicius1 = 7;
const skaicius2 = 10;
const skaicius3 = 2.21;

console.log(skaicius1);
console.log(skaicius2);
console.log(skaicius3);


// 2

const tekstas1 = 'Labas';
const tekstas2 = 'Lietuva';
const tekstas3 = 'Kaunas';

console.log(tekstas1);
console.log(tekstas2);
console.log(tekstas3);

// 3

const skaiciaiSarasas = [1, 5, 2, 6, 7];
const skaiciaiSarasas2 = [91, 24, 48, 10, 84];
const skaiciaiSarasas3 = [101, 482, 444, 855, 129];

console.log(skaiciaiSarasas);
console.log(skaiciaiSarasas2);
console.log(skaiciaiSarasas3);

// 4

const vaisiuSarasas = ['Apelsinai', 'Obuoliai', 'Bananai', 'Mandarinai', 'Kiviai'];
const darzoviuSarasas = ['Agurkai', 'Pomidorai', 'Svogunai', 'Bulves', 'Salotos'];
const spalvuSarasas = ['Geltona', 'Zalia', 'Melyna', 'Juoda', 'Balta'];

console.log(vaisiuSarasas);
console.log(darzoviuSarasas);
console.log(spalvuSarasas);



// Veiksmai su kintamaisiais

// 1

console.log('Suma skaiciu: ', skaicius1 + skaicius2 + skaicius3);

// 2

console.log(`${tekstas1} ${tekstas2} ${tekstas3}`)

// 3

console.log(`${skaiciaiSarasas[0]} - ${skaiciaiSarasas[1]} + ${skaiciaiSarasas[2]} - ${skaiciaiSarasas[3]} + ${skaiciaiSarasas[4]}`)
const skaiciuSarasoRezultatas = skaiciaiSarasas[0] - skaiciaiSarasas[1] + skaiciaiSarasas[2] - skaiciaiSarasas[3] + skaiciaiSarasas[4];
console.log(`Rezultatas: ${skaiciuSarasoRezultatas}`);

// 4 

const SarasoSpalvuSujungimas = spalvuSarasas.join(', ');

console.log(SarasoSpalvuSujungimas);

// Kintamuju palyginimas

const keyword = 'Pomidoras';

if (keyword === 'Pomidoras') {
    console.log('Pomidoras')
} else {
    console.log('Bandykite kitą kartą')
}

// 1

const number1 = 10;
const number2 = 5;

if (number1 > number2) {
    console.log(`${number1} yra didesnis negu ${number2}`)
}
else {
    console.log(`${number1} yra mazesnis negu ${number2}`)
}


if (number1 === number2) {
    console.log('skaiciai yra lygus');
} else {
    console.log('skaicia nera lygus');
}


if (number1 >= number2) {
    console.log(`${number1} yra didesnis arba lygu ${number2}`);
}
else {
    console.log(`${number1} yra mazesnis arba lygu ${number2}`);
}

// 2

console.log(`${tekstas1} ilgis ${tekstas1.length}`);
console.log(`${tekstas2} ilgis ${tekstas2.length}`);
console.log(`${tekstas3} ilgis ${tekstas3.length}`);

// 3

if (tekstas1.length > tekstas2.length) {
    console.log(`${tekstas1} yra ilgesnis negu zodziui ${tekstas2}`);
} else {
    console.log(`${tekstas1} yra trumpesnis negu zodziui ${tekstas2}`);
}

if (tekstas1.length === tekstas2.length) {
    console.log('tekstu ilgiai yra lygus');
} else {
    console.log('tekstu ilgiai nera lygus');
}

if (tekstas1.length >= tekstas2.length) {
    console.log(`${tekstas1} yra ilgesnis arba lygus zodziui ${tekstas2}`);
} else {
    console.log(`${tekstas1} yra mazesnis arba lygus zodziui ${tekstas2}`)
}


// Funkcijos

// 1

function tusciaFunkcija() {
    return false;
}
console.log(tusciaFunkcija());

// 2

const x = 15;
const y = 2;
const z = 7;

function daugyba(a, b) {
    return a * b;
}

function rezultatas(x, y, z) {
    console.log(daugyba(x, y));
    console.log(daugyba(z, y));
    console.log(daugyba(x, z))
}

rezultatas(x, y, z);


// 3 

const x1 = 5;

function skaitmenuKiekis(kiekis) {
    return String(kiekis).length;
}

function skaitmenuKiekisSkaiciuje() {
    if (typeof x1 === 'number') {
        console.log('skaičius yra numeris')
        skaitmenuKiekis(x1);
        console.log(`skaitmenu kiekis: ${skaitmenuKiekis(x1)}`);
    } else {
        console.log('Pateikta netinkamo tipo reikšmė')
        return false;
    }
}

skaitmenuKiekisSkaiciuje();

