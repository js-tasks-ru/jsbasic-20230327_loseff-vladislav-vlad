function print(text) {
  console.log(text);
}

function isValid(name) {
  if (name === null) {
    return false;
  } else if (name.trim() === '') {
    return false;
  } else if (name.length < [4]) {
    return false;
  } else if (name.includes(' ')) {
    return false;
  }
  return true;
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}

sayHello();
