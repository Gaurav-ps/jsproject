var filter = document.getElementById('filter');
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
   var newDes = document.getElementById('description').value;
   //create new li element
   var li = document.createElement('li');
   li.className = 'list-group-item';
   //add text node with input value
   li.appendChild(document.createTextNode(newItem));
   li.appendChild(document.createTextNode(newDes));

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

//filter event
filter.addEventListener('keyup', filterItems);

function filterItems(e)
{
    var text = e.target.value.toLowerCase();
    //get li
    var items = itemList.getElementsByTagName('li');
    //convert to array
    Array.from(items).forEach(function(item){

        var itemName = item.firstChild.textContent;
        var description = item.childNodes[1].textContent;
        
        
            if(itemName.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text)!= -1)
            {
                item.style.display = 'block';
            }
            else
            {
                item.style.display = 'none';
            }
        
    })
}