var itemList = document.querySelector('#items');
//Parent Node
console.log(itemList.parentNode);

//parentElement
console.log(itemList.parentElement);

//child nodes
console.log(itemList.childNodes);

//child element
console.log(itemList.children);

//first Child
console.log(itemList.firstChild);
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello';

//last Child
console.log(itemList.lastChild);
console.log(itemList.lastElementChild);

//siblings
console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);
console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);

//create element
var newDiv = document.createElement('div');
newDiv.className = 'Hello';
newDiv.id = 'hello1';

newDiv.setAttribute('title','Hello Div');

var newDivText = document.createTextNode('Hello World');
newDiv.appendChild(new newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

container.insertBefore(newDiv, h1);


