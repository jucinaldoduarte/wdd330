/* Show Congratulations */
function showCongratulations(theButtonClicked)
{
  document.getElementById("result_display").innerHTML = "Congratulations, you did it! <p>You got the page to update!</p>";
  /*theButtonClicked.innerHTML = "Click Me Again!";*/   
}

/* Story Editor */
function loadStory(){
    let storyName = document.getElementById("name_input").value;
    let storyHTML = localStorage.getItem(storyName);
    document.getElementById("story_editor").value = storyHTML;
}

function saveStory(){
    let storyName = document.getElementById("name_input").value;
    let storyHTML = document.getElementById("story_editor").value;
    localStorage.setItem(storyName, storyHTML)
}

function displayStory(){
    let storyHTML = document.getElementById("story_editor").value;
    document.getElementById("story_display").innerHTML = storyHTML;
}