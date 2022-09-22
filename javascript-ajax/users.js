var $userList = document.querySelector('#user-list');
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', handleLoad);
function handleLoad(event) {
  console.log('xhr status:', xhr.status);
  console.log('xhr response:', xhr.response);
  for (var i = 0; i < xhr.response.length; i++) {
    var newLi = document.createElement('li');
    var newLiTextContent = document.createTextNode(xhr.response[i].name);
    newLi.appendChild(newLiTextContent);
    $userList.appendChild(newLi);
  }
}
xhr.send();
