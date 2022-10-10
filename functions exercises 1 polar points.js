//Madison Smith-Majors 10/11/2022 Midterm Makeup 
//polar points 


//begin making setup call 
function setup () {
    createCanvas (200,250); 
}
//translate line 
translate (100,100); 

//create a function
function draw () {
    circle (res.x, res.y, 10); 

//create x and y variables for the function below 
function polarPoint() 
let x = r * Math.sin(mouseX);
let y =  r * Math.cos(mouseX);
return createVector(x,y); 

//using function as a value 
let something = "polarPoint" + r * Math.sin(mouseX) +  r * Math.cos(mouseX);
}


