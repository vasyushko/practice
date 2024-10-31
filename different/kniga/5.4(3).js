const str = 'Вот, что мне хотелось бы сказать на эту тему:';
let maxlength = 20;

function truncate(str, maxlength) {
  let newStr;
  if (str.length >= maxlength) {
    return newStr = str.slice(0, maxlength - 1) + "…";
  } else return str;
}

console.log(truncate(str, maxlength)); 


///////////

function truncate(str, maxlength) {
    return (str.length > maxlength) ? 
      str.slice(0, maxlength - 1) + '…' : str;
  }
