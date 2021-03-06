// Test

console.log('Ciao peppe!');

// Traccia


/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in forma umana 
(con massimo due decimali, per indicare centesimi sul prezzo). 
Questo richiederà un minimo di ricerca.
*/

// variable from html

var textage = document.getElementById('textage');
var textticketprice = document.getElementById('textticketprice');
var textdiscount = document.getElementById('textdiscount');


// Take input km and age

var userkm = parseInt(prompt('Inserisci i km che vuoi percorrere: '));
var userage = parseInt(prompt('Inserisci la tua età: '));

// Ticket price
var ticketprice = 0.21;

// Discount Junior and over
var discountjunior = 20 / 100;
var discountover = 40 / 100;

// Ticket Total for km 
var totalkmprice = (ticketprice * userkm);

// Validation and start conditional

if(isNaN(userkm) || isNaN(userage)){
    alert('Ehy devi inserire dei numeri!');
}else{
    // User < 18 anni
    if(userage < 18){
        var discount = totalkmprice * discountjunior;
        var ticketpriceuser = totalkmprice - discount;
        textage.innerHTML = 'Ciao hai meno di 18 anni';
        textticketprice.innerHTML = ('Il biglietto costa ' + ticketpriceuser.toFixed(2) + '€');
        textdiscount.innerHTML = ('Il tuo sconto è di ' + discount.toFixed(2) + '€');
    // User > 65 anni
    }else if(userage > 65){
        var discount = totalkmprice * discountover;
        var ticketpriceuser = totalkmprice - discount;
        textage.innerHTML = 'Ciao hai più di 65 anni';
        textticketprice.innerHTML = ('Il biglietto costa ' + ticketpriceuser.toFixed(2) + '€');
        textdiscount.innerHTML = ('Il tuo sconto è di ' + discount.toFixed(2) + '€');
    // User not junior and not over
    }else {
        totalkmprice = (ticketprice * userkm)
        textage.innerHTML = 'Ciao hai un età compresa tra 18 e 65 anni';
        textticketprice.innerHTML = ('Il biglietto costa ' + totalkmprice.toFixed(2) + '€');
        textdiscount.innerHTML = ('Non puoi usufruire dello sconto :(');
    }
}




