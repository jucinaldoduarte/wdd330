function drawSquare(){
    const canvas = document.getElementById("myCanvas");
    let context = canvas.getContext("2d");
    context.strokeStyle = "white";
    context.fillStyle = "#64A494"; 
    context.fillRect(10,10,100,100);
    context.strokeRect(10,10,100,100);
}


