var $tabContainer = document.querySelector('.tab-container');
var $allTabs = document.querySelectorAll('.tab');
var $allViews = document.querySelectorAll('.view');

function handleClick(event) {

  if (event.target.matches('.tab') === true) {
    for (var i = 0; i < $allTabs.length; i++) {
      if ($allTabs[i] === event.target) {
        $allTabs[i].className = 'tab active';
      } else {
        $allTabs[i].className = 'tab';
      }
    }

    var $dataView = event.target.getAttribute('data-view');
    for (i = 0; i < $allViews.length; i++) {
      if ($dataView === $allViews[i].getAttribute('data-view')) {
        $allViews[i].className = 'view';
      } else {
        $allViews[i].className = 'view hidden';
      }
    }
  }

}
$tabContainer.addEventListener('click', handleClick);
