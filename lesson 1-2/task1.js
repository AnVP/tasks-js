'use strict';
function pow (x, n) {
  return Math.pow(parseInt(x), parseInt(n));
};
var x = prompt('Введите число', 0);
var n = prompt('Возвести число в степень:', 0);

var result = x + ' в степени ' + n + ' = ' + pow(x, n);
console.log(result);