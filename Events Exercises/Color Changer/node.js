//Create an application with three grey, square divs, in a row.
function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var context = canvas.getContext('2d');

        //rectangle 1
        //make all three rectangles grey 
        context.fillRect(20,20,150,100);
        context.clearRect(40,40,60,60);
        context.strokeRect(45,45,50,50);
        context.fillRect(grey);
    }
        //rectangle 2 
        context.fillRect(20,20,150,100);
        context.clearRect(40,40,60,60);
        context.strokeRect(45,45,50,50);
        context.fillRect(grey);
    }
        //rectangle 3 
        context.fillRect(20,20,150,100);
        context.clearRect(40,40,60,60);
        context.strokeRect(45,45,50,50);
        context.fillRect(grey);

        //create a function for the onclick button 
        function squaresWillMakeYouDance() {
            document.getElementById("demo").innerHTML = "You got clicked";
        }