// Variables
const eurPerKm = 0.21;
const minDiscount = 20;
const maxDiscount = 40;

const kmPercorso = prompt("Quanti Km devi percorrere?");
const eta = prompt("Quanti anni hai?");
const totalPriceNo = kmPercorso * eurPerKm;
let prezzoFinale;


// Logic excecution
if (isNaN(kmPercorso) || isNaN(eta)) {

    alert("Dati inseriti sbagliati")
} else {

    if (eta < 18) {
        prezzoFinale = totalPriceNo - (totalPriceNo / 100 * minDiscount);
        alert("Benvenuto!");

    } else if (eta > 65) {
        prezzoFinale = totalPriceNo - (totalPriceNo / 100 * maxDiscount);
        alert("Benvenuto!");

    } else {
        prezzoFinale = totalPriceNo;
        alert("Purtroppo non soddisfi i requisiti per ottenere lo sconto");
    }
}

console.log(`Prezzo finale ${prezzoFinale.toFixed(2)}`);
