var counter = 0;
var $hotbutton = document.querySelector('.hot-button');
var $clickcount = document.querySelector('.click-count');

function handleClick(event) {
  counter++;
  $clickcount.textContent = 'Clicks: ' + counter;
  if (counter < 4) {
    $hotbutton.className = 'hot-button cold';
  } else if (counter >= 4 && counter < 7) {
    $hotbutton.className = 'hot-button cool';
  } else if (counter >= 7 && counter < 10) {
    $hotbutton.className = 'hot-button tepid';
  } else if (counter >= 10 && counter < 13) {
    $hotbutton.className = 'hot-button warm';
  } else if (counter >= 13 && counter < 16) {
    $hotbutton.className = 'hot-button hot';
  } else {
    $hotbutton.className = 'hot-button nuclear';
  }
}
$hotbutton.addEventListener('click', handleClick);
