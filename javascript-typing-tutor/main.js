var $spans = document.querySelectorAll('span');
var counter = 0;
document.addEventListener('keydown', handleKeyDown);

function handleKeyDown(event) {

  if (event.key === $spans[counter].textContent && $spans[counter].className !== 'correct letter') {
    $spans[counter].className = 'correct letter';
    counter++;
    $spans[counter].className = 'next letter';

  } else {
    $spans[counter].className = 'wrong letter';
  }
}
