'use strict';
var calculator = {
  read: function () {
    this.value1 = +prompt('Введите число', 0);
    this.value2 = +prompt('Введите число', 0);
  },
  sum: function () {
    return this.value1 + this.value2;
  },
  mul: function () {
    return this.value1 * this.value2;
  }
};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());