/*
  Reference:

  Be familiar with javascript conecepts up to the Conditionals section:
  https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/JavaScript_basics

  console.log
  https://developer.mozilla.org/en-US/docs/Web/API/Console/log

  Math.round
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round

  Math.pow
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow

  toFixed
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
*/

function formatMoney(value) {
  return "$" + value.toFixed(2);
}

function roundNumber(value, decimal) {
  var tens = Math.pow(10, decimal);
  return Math.round(value * tens) / tens;
}

function getTip(total, tipPercent) {
  //Calculate the tip as a dercimal
  var tipDecimal = tipPercent / 100;

  //Calculate tip percent rounded to 2 decimal places
  var tipTotal = roundNumber(total * tipDecimal, 2);

  return tipTotal;
}

function printTipSummary(total, tipPercent, tipTotal, totalAfterTip) {
  console.log("Total before tip: " + formatMoney(total));
  console.log(tipPercent + "% Tip: " + formatMoney(tipTotal));
  console.log("Total after " + tipPercent + "% tip: " + formatMoney(totalAfterTip));
  console.log("");
  console.log("-----------------------------");
}

function getTipPrintSummary(total, tipPercent) {
  var tipTotal = getTip(total, tipPercent);

  //Calculate the total after tip
  var totalAfterTip = total + tipTotal;

  printTipSummary(total, tipPercent, tipTotal, totalAfterTip);
}

getTipPrintSummary(19.95, 20);
getTipPrintSummary(18.73, 18);
getTipPrintSummary(24.93, 35);
getTipPrintSummary(33.19, 10);
