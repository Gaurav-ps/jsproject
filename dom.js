//Examining Document object
//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title)
//console.log(document.doctype)
//console.log(document.head)
//console.log(document.all);
//console.log(document.forms)
//document.all[10].textContent = "GPS"

//GETELEMENT BY ID
//console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
console.log(headerTitle)
//headerTitle.textContent="GPS";
//headerTitle.innerText="GPS";
//headerTitle.innerHTML="<h3>Shetty</h3>"
header.style.borderBottom = 'solid 5px #000';
header.style.fontweight = 'bold';

//GETELEMENT BY CLASS NAME
var items = document.getElementsByClassName('list-group-item');
console.log(items);
items[0].style.fontweight = 'bold';
var subHead = document.getElementsByClassName('title');
console.log(subHead)
subHead[0].style.fontweight = 'strong';

