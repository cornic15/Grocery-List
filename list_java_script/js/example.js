// ADD NEW ITEM TO END OF LIST
// https://www.w3schools.com/jsref/met_node_appendchild.asp
var node = document.createElement("LI");
var textnode = document.createTextNode("Cream");
node.appendChild(textnode);
document.querySelector('#page ul').appendChild(node);
// ADD NEW ITEM START OF LIST

// https://www.w3schools.com/jsref/met_node_insertbefore.asp
var newItem = document.createElement("LI");
var textnode = document.createTextNode("Kale");
newItem.appendChild(textnode);

//var list = document.getElementById("myList");
var list = document.querySelector('#page ul');
list.insertBefore(newItem, list.childNodes[0]);
var liQuery = document.querySelectorAll('#page li');
for(i=0; i<liQuery.length; i++) {
  liQuery[i].classList.add('cool');
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var numItems = liQuery.length;
var headerEl = document.querySelector('#page h2');
var headerCurrent = headerEl.innerHTML;
headerCurrent = headerCurrent.fontsize(7)
headerEl.innerHTML = headerCurrent + ' ' + numItems;
