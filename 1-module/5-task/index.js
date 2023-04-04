function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + '…';
  }

  return str;
}

console.log(truncate('Бобикус', 4));