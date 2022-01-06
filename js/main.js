const requestURL = "data/links.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const links = jsonObject['links'];
    console.table(jsonObject);
    
     for (let i = 0; i < links.length; i++ ) {
        let label = links[i].label;
        let url = links[i].url; 
        
        let list = document.getElementById("list"); 
        
        let li = document.createElement("li");        
        
        list.appendChild(li); 
        
        let a = document.createElement("a");
        a.textContent = label;
        a.setAttribute("href", url);
        li.appendChild(a);
        
      }
  });

  




  


