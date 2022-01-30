//https://medium.com/walternascimentobarroso-pt/criando-um-todo-com-javascript-8622331367eb

let i = 1;

function addTask() {  
  let textInput = document.getElementById("textInput")

  //Create Div
  let taskdiv = document.createElement('div');
  taskdiv.setAttribute('id','taskdiv');
  document.getElementById('holder').appendChild(taskdiv);  

  //Create checkbox
  let checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.setAttribute('class','checkbox');
  //document.getElementById('holder').appendChild(checkbox);  
  document.getElementById('taskdiv').appendChild(checkbox);  

  //Create span
  let task = document.createElement('span');
  task.setAttribute('class','task');
  //document.getElementById('holder').appendChild(task);
  document.getElementById('taskdiv').appendChild(task);

  //Create button
  let btnClose = document.createElement('button');
  btnClose.setAttribute('class','btnClose');  
  document.getElementById('taskdiv').appendChild(btnClose);
  btnClose.textContent = "X";
  btnClose.onclick = function(){
    alert("yes");
    this.parentElement.style.backgroundColor = "red";
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







  

 
  


