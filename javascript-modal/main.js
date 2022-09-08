var $modal = document.querySelector('.modal');
var $openButton = document.querySelector('.big-button');
var $closeButton = document.querySelector('.close-button');
var modalToggle = false;

function handleClick(event) {
  modalToggle = !modalToggle;
  if (modalToggle === true) {
    $modal.className = 'modal on';
  } else {
    $modal.className = 'modal off';
  }
}

$openButton.addEventListener('click', handleClick);
$closeButton.addEventListener('click', handleClick);
