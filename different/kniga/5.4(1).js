let str = prompt();

function ucFirst(str) {
    
  if (str == '' || str == null) {
    return str;
  }
  
  let start = str[0];
  let end = str.slice(1);
  return str = start.toUpperCase() + end;
    
}


// ||||||
// Мы не можем просто заменить первый символ, так как строки в JavaScript неизменяемы.

// Но можно пересоздать строку на основе существующей, с заглавным первым символом:

// let newStr = str[0].toUpperCase() + str.slice(1);
// Однако есть небольшая проблемка. Если строка пуста, str[0] вернёт undefined, а у undefined нет метода toUpperCase(), поэтому мы получим ошибку.

// Выхода два:

// Использовать str.charAt(0), поскольку этот метод всегда возвращает строку (для пустой строки — пустую).
// Добавить проверку на пустую строку.


function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

alert( ucFirst("вася") ); // Вася