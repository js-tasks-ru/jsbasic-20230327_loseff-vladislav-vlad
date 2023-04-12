function camelize(str) {
  let strSplit = str.split('-');

  strSplit = strSplit.map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1));

  let strJoin = strSplit.join('');

  return strJoin;
}