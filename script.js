// Tic Tac Toe game logic
var player = 'x';

function handleClick(event) {
  var cell = event.target;
  if (cell.innerHTML !== '') {
    return;
  }
  cell.classList.add(player);
  cell.innerHTML = player;
  if (checkWin()) {
    alert(player + ' wins!');
    reset();
    return;
  }
  if (checkDraw()) {
    alert('Draw!');
    reset();
    return;
  }
  player = player === 'x' ? 'o' : 'x';
}

function checkWin() {
  var cells = document.querySelectorAll('table td');
  var combos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  return combos.some(function(combo) {
    return combo.every(function(i) {
      return cells[i].classList.contains(player);
    });
  });
}

function checkDraw() {
  var cells = document.querySelectorAll('table td');
  for (var i = 0; i < cells.length; i++) {
    if (cells[i].innerHTML === '') {
      return false;
    }
  }
  return true;
}

function reset() {
  var cells = document.querySelectorAll('table td');
  for (var i = 0; i < cells.length; i++) {
    cells[i].classList.remove('x', 'o');
    cells[i].innerHTML = '';
  }
  player = 'x';
}

var cells = document.querySelectorAll('table td');
for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', handleClick);
}
