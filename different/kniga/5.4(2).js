let str = 'ViaGra';

function checkSpam(str) {
  let checkStr = str;
  checkStr.toLowerCase();
  if (checkStr.includes('viagra') || checkStr.includes(xxx)) {
    return true;
  }
  return false;
}

checkSpam(str);