var lightSwitch = false;
var $background = document.querySelector('.container');
var $button = document.querySelector('.button');

function handleClick(event) {
  lightSwitch = !lightSwitch;
  if (lightSwitch === true) {
    $background.className = 'container on';
    $button.className = 'button on';
  } else {
    $background.className = 'container off';
    $button.className = 'button off';
  }
}

$button.addEventListener('click', handleClick);
