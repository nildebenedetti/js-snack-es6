// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// creo array vuoto
const campionatoFantastico = [

{
    nome: 'lupi lucy',
    puntiSegnati: 0,
    falliSubiti: 0
},

{
    nome: 'serpenti bianchi',
    puntiSegnati: '0',
    falliSubiti: '0'
},

{
    nome: 'impavidi cantastorie',
    puntiSegnati: 0,
    falliSubiti: 0
},

{
    nome: 'clava banana',
    puntiSegnati: 0,
    falliSubiti: 0
},

{
    nome: 'bradipi corridori',
    puntiSegnati: 0,
    falliSubiti: 0
},

{
    nome: 'fiamme di gorgonzola',
    puntiSegnati: 0,
    falliSubiti: 0
},

{
    nome: 'talpe sonnambule',
    puntiSegnati: 0,
    falliSubiti: 0
},

{
    nome: 'rane stroboscopiche',
    puntiSegnati: 0,
    falliSubiti: 0
},

{
    nome: 'cactus abbracciabili',
    puntiSegnati: 0,
    falliSubiti: 0
},

{
    nome: 'pinguini pirotecnici',
    puntiSegnati: 0,
    falliSubiti: 0
}

];

console.log(campionatoFantastico);

// creiamo un ciclo for, in cui andiamo a generare un numero random

for (i = 0; i < campionatoFantastico.length; i++) {
    const currentSquadra = campionatoFantastico[i];
    const numFalli = myRandom(0, 50);
    currentSquadra.falliSubiti = numFalli;
    
    // imposto il check per vedere come procede
    console.log( `squadra: ${currentSquadra.nome}, punti: ${currentSquadra.puntiSegnati}, falli subiti: ${currentSquadra.falliSubiti}`);
    

}



