var $formObj = document.querySelector('#contact-form');
var $formElements = $formObj.elements;

function handleSubmit(event) {
  event.preventDefault();
  var formInfo = {};
  formInfo.name = $formElements[0].value;
  formInfo.email = $formElements[1].value;
  formInfo.message = $formElements[2].value;
  console.log(formInfo);
  $formObj.reset();
}

$formObj.addEventListener('submit', handleSubmit);
