"use strict";
// Price decimal
var price = 0;
// Delivery bool
var delivery = null;
// Address string
var address = null;
// Make it number const
var deliveryPrice = parseFloat(5.99);
// Result to be displayed
var result = null;

// Ask for price
do {
  price = prompt("Įveskite prekės kainą");
} // Until price is valid
while(price <= 0 || isNaN(price));

// Ask for delivery
delivery = confirm("Ar reikalingas pristatymas į namus? (Taip/ne)");

// Delivery true
if(delivery === true) {
  // Ask for address
  do {
    address = prompt("Į kurį miestą pristatyti?");
  } // Until address is valid
  while(address == '');
}

// Price conversion from string to number;
price = parseFloat(price);

// Fill result
if(delivery === true) {
  // Add floats;
  var total = deliveryPrice + price;
  result = 'Prekės kaina: ' + price.toFixed(2) + ' €' + '\n' +
  'Pristatymas: ' + deliveryPrice + ' €' + '\n' +
  'Iš viso: ' + total.toFixed(2) + ' €' + '\n' +
  'Prekę pristatysime į "' + address + '" per 1-3 dienas.' + '\n';
} else {
  result = 'Prekės kaina: ' + price.toFixed(2) + ' €' + '\n' +
           'Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a' + '\n';
}
// Show result
console.log(result);
