//https://medium.com/walternascimentobarroso-pt/criando-um-todo-com-javascript-8622331367eb

let i = 1;

function addTask() {  
  let textInput = document.getElementById("textInput")

  //Create Div
  let taskdiv = document.createElement('div');
  taskdiv.setAttribute('id',`taskdiv${i}`);
  taskdiv.setAttribute('class','taskdiv');
  document.getElementById('holder').appendChild(taskdiv);  

  //Create checkbox
  let checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.setAttribute('id',`checkbox${i}`);
  checkbox.setAttribute('class','checkbox');
  //document.getElementById('holder').appendChild(checkbox);  
  document.getElementById(`taskdiv${i}`).appendChild(checkbox);  

  //Create span
  let task = document.createElement('span');
  task.setAttribute('id',`task${i}`);
  task.setAttribute('class', 'task');
  //document.getElementById('holder').appendChild(task);
  document.getElementById(`taskdiv${i}`).appendChild(task);

  //Create button
  let btnClose = document.createElement('button');
  btnClose.setAttribute('id',`btnClose${i}`); 
  btnClose.setAttribute('class', 'btnClose');   
  document.getElementById(`taskdiv${i}`).appendChild(btnClose);
  btnClose.textContent = "X";
  btnClose.onclick = function(){    
    this.parentElement.style.backgroundColor = "red";    
    let taskToclose = document.getElementById(btnClose.parentNode.id);
    taskToclose.style.display = "none";
  }
  

  //Add input text to task
  task.textContent = textInput.value;

  checkbox.addEventListener('change', function() {
    if (this.checked) {      
      task.style.textDecoration = "line-through";
    } else {
      task.style.textDecoration = "none";
    }
  }); 

  i = i + 1;
  console.log(i);

}







  

 
  


