function getMinMax(str) {

  let min = str
  .split(' ')
  .filter(item => +item)
  .sort((a, b) => a - b)[0];
  
  let max = str
  .split(' ')
  .filter(item => +item)
  .sort((a, b) => b - a)[0];

  let obj1 = {
    min: +min,
    max: +max,
  }

  return obj1;
}