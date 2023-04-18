var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//form submit event
form.addEventListener('submit',addItem);
//Delete event
itemList.addEventListener('click', removeItem);

//Add item
function addItem(e)
{
    e.preventDefault();
   var newItem = document.getElementById('item').value;
   //create new li element
   var li = document.createElement('li');
   li.className = 'list-group-item';
   //add text node with input value
   li.appendChild(document.createTextNode(newItem));

   //create delete button element
   var deleteBtn = document.createElement('button');
   //Add classes to del btn
   deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
   //Append text node
   deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn);
   itemList.appendChild(li);
}

function removeItem(e)
{
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?'))
        {
            var li = e.target.parentElement;
            itemList.removeChild(li); 
        }
    }
}