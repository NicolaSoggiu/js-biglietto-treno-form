// Ask km numbers
let kmNumber = parseInt(prompt("How many km will you have to travel?"));
console.log(kmNumber);
// Ask age
let age = parseInt(prompt("How old are you?"));
console.log(age);
// Multiply Km numbers * ticket price
let kmPrice = kmNumber * 0.21;
console.log("Your ticket price is:" + " " + kmPrice.toFixed(2) + "€");

// Minor age discount
let minorDiscount = (kmPrice * 20) / 100;

// Over 65 discount
let overDiscount = (kmPrice * 40) / 100;

// Refresh when user write a wrong value
if (isNaN(kmNumber)) {
  alert("You entered a wrong value, refresh the page and try again");
}

if (isNaN(age)) {
  alert("You entered a wrong value, refresh the page and try again");
}

// Discount application
if (age < 18) {
  kmPrice = kmPrice - minorDiscount.toFixed(2);
} else if (age > 65) {
  kmPrice = kmPrice - overDiscount.toFixed(2);
} else {
  kmPrice.toFixed(2);
}

// Stamp in html
document.getElementById("price").innerHTML = kmPrice.toFixed(2);
