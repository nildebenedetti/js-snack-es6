// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const scuderiaBici = [

{
    nome: 'gwendalin',
    peso: '11',
    colore: 'azzurro cielo'
},

{
    nome: 'catapult4',
    peso: '9',
    colore: 'verde lime'
},

{
    nome: 'mazzoRazzo',
    peso: '7',
    colore: 'rosso fiamma'
},

{
    nome: 'ruotaLiscia',
    peso: '10',
    colore: 'grafite'
}
];


// guardo se ci sono le bici in scuderia 
console.log(scuderiaBici);

// stampare bici con peso minore
// metodo for...of

let minObject = scuderiaBici[0];

for (const bici of scuderiaBici) {
    if (Number(bici.peso) < Number(minObject.peso)) {
        minObject = bici;
    }
}

console.log(minObject);
