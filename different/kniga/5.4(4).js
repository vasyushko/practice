const str = prompt();

function extractCurrencyValue(str) {
  return +str.slice(1);
}

extractCurrencyValue(str);