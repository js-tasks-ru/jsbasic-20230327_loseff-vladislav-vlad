let schedule = {};

let schedule2 = {
  name: 'Bob',
  age:30,
};

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }

  return true;
}