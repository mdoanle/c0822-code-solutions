function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log('event.target:', event.target);
}

var $clickButton = document.querySelector('.click-button');
$clickButton.addEventListener('click', handleClick, false);

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log('event.target:', event.target);
}

var $hoverButton = document.querySelector('.hover-button');
$hoverButton.addEventListener('mouseover', handleMouseover, false);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log('event.target:', event.target);
}

var $dblClick = document.querySelector('.double-click-button');
$dblClick.addEventListener('dblclick', handleDoubleClick, false);
