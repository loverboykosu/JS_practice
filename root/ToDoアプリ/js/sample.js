'use strict';
const addButton =document.getElementById('addButton');
let addList = document.getElementById('addList');
let todoList = document.getElementById('todoList');

addButton.addEventListener('click',function(e){
    console.log(addList.value);
    const child = document.createElement('li');
    child.textContent = addList.value;
    todoList.appendChild(child);
},false);