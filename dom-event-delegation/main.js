var $taskList = document.querySelector('.task-list');

function handleClick(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    var $exactButton = event.target;
    console.log('closest task list ancestor:', $exactButton.closest('.task-list-item'));
    $exactButton.closest('.task-list-item').remove();
  }
}

$taskList.addEventListener('click', handleClick);
