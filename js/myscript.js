const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  const passengerName = document.querySelector("#passengerName").value;
  let kmNumber = document.querySelector("#journeyDistance").value;
  let age = document.querySelector("#passengerAge").value;
  let containerFinal = document.querySelector(".Final");

  // Multiply Km numbers * ticket price
  let kmPrice = kmNumber * 0.21;
  console.log("Your ticket price is:" + " " + kmPrice.toFixed(2) + "€");

  // Minor age discount
  let minorDiscount = (kmPrice * 20) / 100;

  // Over 65 discount
  let overDiscount = (kmPrice * 40) / 100;

  // Discount application
  if (age < 18) {
    kmPrice = kmPrice - minorDiscount.toFixed(2);
  } else if (age > 65) {
    kmPrice = kmPrice - overDiscount.toFixed(2);
  } else {
    kmPrice.toFixed(2);
  }

  containerFinal.innerHTML = `${kmPrice}`;
  console.log(
    "Passenger name: " +
      passengerName.value +
      ", Journey distance: " +
      journeyDistance.value +
      ", Passenger age: " +
      passengerAge.value
  );
});
