'use strict';
function createTest () {
  var container = document.createElement('div');
  container.classList.add('container');
  document.body.appendChild(container);
  
  var title = document.createElement('h1');
  title.classList.add('text-center');
  title.textContent = 'Тест по программированию';
  container.appendChild(title);
  
  var questions = createQuestion();
  container.appendChild(questions);
  
  var button = document.createElement('button');
  button.type = 'submit';
  button.classList.add('btn');
  button.classList.add('btn-primary');
  button.classList.add('btn-lg');
  button.textContent = 'Проверить мои результаты';
  container.appendChild(button);
}

function createList () {
  var list = document.createElement('div');
  
  for (var i = 1; i <= 3; i++) {
    var li = document.createElement('p');
    li.classList.add('form-check');
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('form-check-input');
    var label = document.createElement('label');
    label.classList.add('form-check-label');
    li.appendChild(checkbox);
    li.appendChild(label);
    label.textContent = 'Вариант ответа № ' + i;
    list.appendChild(li);
  }
  return list;
}

function createQuestion () {
  var list = document.createElement('ol');
  for (var i = 1; i <= 3; i++) {
    var li = document.createElement('li');
    li.textContent = 'Вопрос № ' + i;
    li.appendChild(createList());
    list.appendChild(li);
  }
  return list;
}

createTest();