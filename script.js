// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const scuderiaBici = [];

const gwendalin = {
    nome: 'gwendalin',
    peso: '11 kg',
    colore: 'azzurro cielo'
};

const catapult4 = {
    nome: 'catapult4',
    peso: '9 kg',
    colore: 'verde lime'
};

const mazzoRazzo = {
    nome: 'mazzoRazzo',
    peso: '7 kg',
    colore: 'rosso fiamma'
};

const ruotaLiscia = {
    nome: 'ruotaLiscia',
    peso: '10 kg',
    colore: 'grafite'
};

// sparo le bici in scuderia
scuderiaBici.push(gwendalin,catapult4,mazzoRazzo,ruotaLiscia);
// guardo se ci sono
console.log(scuderiaBici);

