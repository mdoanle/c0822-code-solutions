
function changeH1() {
  var $h1 = document.querySelector('h1');
  $h1.textContent = 'Hello There';
}

setTimeout(changeH1, 2000);
