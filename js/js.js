function calculatePay() {
  // values from inputs
  let grossPay = parseFloat(document.getElementById("grossPay").value);

  let taxRate = parseFloat(document.getElementById("taxRate").value);


  let hoursWorked = parseFloat(document.getElementById("hoursWorked").value);

  // check if inputs are empty

  if (isNaN(grossPay) || isNaN(taxRate) || isNaN(hoursWorked)) {
    alert("please fill all fields");
    return;
  }
  // convert to percentage
  let tax = grossPay * (taxRate / 100);
  

  // calculate take-home pay
  let monthlyPay = grossPay - tax;
  let weeklyPay = monthlyPay / 4;
  let yearlyPay = monthlyPay * 12;
  let hourlyPay = weeklyPay / hoursWorked;

  // Display results
  document.getElementById("perHour").innerText = "₦" + hourlyPay.toFixed(2);

  document.getElementById("perWeek").innerText = "₦" + weeklyPay.toFixed(2);

  document.getElementById("perMonth").innerText = "₦" + monthlyPay.toFixed(2);

  document.getElementById("perYear").innerText = "₦" + yearlyPay.toFixed(2);
}
