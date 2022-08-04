const firstColEl = document.querySelector('.first');
const ParentRowContainer = document.querySelector('.columns')

//find next element sibling of tragreted one 
const nextSiblingEl = firstColEl.nextElementSibling;

//find the sibling from parent container



const g = t => document.createElement(t)

//insertBefore

const divCol = g('div')
divCol.className = "col-md-3 bg-danger p-5";
ParentRowContainer.children[1].insertBefore(divCol,ParentRowContainer.lastElementChild);
