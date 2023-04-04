function checkSpam(str) {
  let toLow = str.toLowerCase();

  if (toLow === '1xbet now' || toLow === 'free xxxxx') {
    return true;
  }

  return false;
}

console.log(checkSpam('1xbet'));