//https://medium.com/walternascimentobarroso-pt/criando-um-todo-com-javascript-8622331367eb

let i = 1;
let count = 1;

//let taskstotal = 0;

function addTask() {  
  let textInput = document.getElementById("textInput")

  if (i == 1){
    //Create Div
    let summary = document.createElement('div');
    summary.setAttribute('id',`summary`);  
    document.getElementById('dashboard').appendChild(summary); 
    summary.style.border = "thick solid #FFFFFF";
  
    let tasksLeft = document.createElement('span');
    tasksLeft.setAttribute('id',`tasksLeft`);
    summary.appendChild(tasksLeft);
    tasksLeft.textContent = `${countTasks()} tasks left`; 
    
  }   
   //Create Div
  let taskdiv = document.createElement('div');
  taskdiv.setAttribute('id',`taskdiv${i}`);
  taskdiv.setAttribute('class','taskdiv');
  document.getElementById('holder').appendChild(taskdiv);
  taskdiv.style.border = "thick solid #FFFFFF";

  tasksLeft.textContent = `${countTasks()} tasks left`; 

  //taskstotal = taskstotal + 1;
  

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
  btnClose.style.fontSize = "2rem";
  btnClose.style.paddingTop = "0.5rem";
  btnClose.style.paddingBottom = "0.5rem";
  btnClose.style.background = "none";
  btnClose.style.border = "none";
  btnClose.style.color = "white";
  btnClose.onclick = function(){    
    this.parentElement.style.backgroundColor = "red";    
    let taskToclose = document.getElementById(btnClose.parentNode.id);
    taskToclose.style.display = "none";
    //taskstotal = taskstotal - 1;
    //tasksLeft.textContent = `${taskstotal} tasks left`;  
    
  }  

  //Add input text to task
  task.textContent = textInput.value;

  checkbox.addEventListener('change', function() {
    if (this.checked) {      
      task.style.textDecoration = "line-through";
      //taskstotal = taskstotal - 1;
      //tasksLeft.textContent = `${taskstotal} tasks left`;  
      tasksLeft.textContent = `${countTasks()} tasks left`; 
      
    }     
    else {
      task.style.textDecoration = "none";
      //taskstotal = taskstotal + 1;
      //tasksLeft.textContent = `${taskstotal} tasks left`; 
      tasksLeft.textContent = `${countTasks()} tasks left`; 
      
    }
    
  }); 

  
  


  //tasksLeft.textContent = `${taskstotal} tasks left`;  
  i = i + 1;

  //let count = document.getElementsByTagName('input').length;
  

}

function countTasks(){
  count = document.getElementsByClassName('taskdiv').length;
  return count;
}













  








  

 
  


