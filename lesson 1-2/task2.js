'use strict';
var count = 5;
function setName () {
  var arr = [];
  for (var i = 0; i < count; i++) {
    arr[i] = prompt('Введите имя');
  }
  return arr;
}

var names = setName();
console.log(names);

function alertName (arr) {
  var userName = prompt('Введите своё имя');
  var message = '';
  for (var i = 0; i < arr.length; i++) {
    if (names.indexOf(userName) >= 0) {
      message = userName + ' , вы успешно вошли';
    } else {
      message = 'Такого пользователя не существует';
    }
  }
  return message;
}

var message = alertName(names);
alert(message);