let addToDoButton = document.getElementById('addToDo');
let inputText = document.getElementById('inputText');
let clearToDoButton = document.getElementById('clearToDo');
let toDoContainer = document.getElementById('toDoContainer');

addToDoButton.addEventListener('click', function () {

    let paragraf = document.createElement('p');
    toDoContainer.appendChild(paragraf);
    paragraf.innerHTML = inputText.value;
    inputText.value = "";
    paragraf.classList.add('paragraf-styling');

    paragraf.addEventListener('click', function(){
        paragraf.style.textDecoration= "line-through";
    });

    paragraf.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraf);
    });

    clearToDoButton.addEventListener('click', function(){
    
        paragraf.remove() ;
    });
})