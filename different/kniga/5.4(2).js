const str = 'ddd ViaGra dff';

function checkSpam(str) {
  const checkStr = str.toLowerCase();
  return (checkStr.includes('viagra') || checkStr.includes('xxx'));
}

console.log(checkSpam(str));