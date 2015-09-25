/*
  Reference:

  Be familiar with javascript conecepts up to the Conditionals section:
  https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/JavaScript_basics

  console.log
  https://developer.mozilla.org/en-US/docs/Web/API/Console/log

  Math.round
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round

  toFixed
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
*/

var total = 19.95;
var tipPercent = 20;

//Calculate the tip as a dercimal
var tipDecimal = tipPercent / 100;

//Calculate tip percent rounded to 2 decimal places
var tipTotal = Math.round((total * tipDecimal) * 100) / 100;

//Calculate the total after tip
var totalAfterTip = total + tipTotal;

console.log("Total before tip: $" + total.toFixed(2));
console.log(tipPercent + "% Tip: $" + tipTotal.toFixed(2));
console.log("Total after " + tipPercent + "% tip: $" + totalAfterTip.toFixed(2));
console.log("");
console.log("-----------------------------");
