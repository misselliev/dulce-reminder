document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {});
});

window.onload = function() {
  const container = document.getElementById('main');
  const btnCont = Object.assign(
    document.createElement('div'),
    { className: 'container' },
    { id: 'btn-container' }
  );
  const btn_create = Object.assign(
    document.createElement('button'),
    { className: 'btn' },
    { id: 'btn-create' },
    { innerText: 'Create Task' }
  );

  const btn_clear = Object.assign(
    document.createElement('button'),
    { className: 'btn' },
    { id: 'btn-clear' },
    { innerText: 'Clear List' }
  );

  const listCont = Object.assign(
    document.createElement('div'),
    { className: 'container' },
    { id: 'list-container' }
  );
  const listUl = Object.assign(document.createElement('ul'), { id: 'list-ul' });

  container.appendChild(btnCont);
  btnCont.appendChild(btn_create);
  btnCont.appendChild(btn_clear);
  container.appendChild(listCont);
  listCont.appendChild(listUl);

  btn_create.addEventListener('click', storeData);
  btn_clear.addEventListener('click', clearData);
};
let counter = 0;
let todolist = [];

function storeData() {
  let input = document.getElementById('todo').value;
  localStorage.setItem(counter, input);
  console.log('storing your data...');
  todolist.push(input);
  console.log(todolist);
  displayData(todolist);
  counter += 1;
}

function displayData(todolist) {
  console.log('displaying your to-dos...');
  const list = document.getElementById('list-ul');
  todolist.forEach((element) => {
    item_list = document.createElement('li');
    item_list.innerText = localStorage.getItem(element);
    list.appendChild(item_list);
  });
}

function clearData() {
  console.log('cleaning time!');
  todolist = [];
  localStorage.clear();
}
