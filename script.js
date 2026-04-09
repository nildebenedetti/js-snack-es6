// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const scuderiaBici = [];

const gwendalin = {
    nome: 'gwendalin',
    peso: '11',
    colore: 'azzurro cielo'
};

const catapult4 = {
    nome: 'catapult4',
    peso: '9',
    colore: 'verde lime'
};

const mazzoRazzo = {
    nome: 'mazzoRazzo',
    peso: '7',
    colore: 'rosso fiamma'
};

const ruotaLiscia = {
    nome: 'ruotaLiscia',
    peso: '10',
    colore: 'grafite'
};

// sparo le bici in scuderia
scuderiaBici.push(gwendalin,catapult4,mazzoRazzo,ruotaLiscia);
// guardo se ci sono
console.log(scuderiaBici);

// stampare bici con peso minore
// metodo for...of

let minObject = scuderiaBici[0];

for (const bici of scuderiaBici) {
    if (bici.peso < minObject.peso) {
        minObject = bici;
    }
}

console.log(minObject);
