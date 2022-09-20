var countdownNum = 4;
var countdown = setInterval(function () {
  var $h1 = document.querySelector('.countdown-display');
  $h1.textContent = --countdownNum;
  if (countdownNum === 0) {
    $h1.textContent = '~Earth Beeeloooowww Us~';
    clearInterval(countdown);
  }
}, 1000);
