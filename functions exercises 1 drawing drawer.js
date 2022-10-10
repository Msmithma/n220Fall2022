//functions exercises 1: Midterm Makeup Assignment 
//Madison Smith-Majors 10/11/2022

//Drawing Drawer 

function setup() {
    createCanvas(200, 200);
}

//begin composition by describing the object 
const fruit = {fruitName: "strawberry", age: "222", color: "red"}; 

//create function using the arguments below 
let x = toName(Barry); 
let text1 = "The strawberries' name is" + x + "Name"; 
let t1 = "The strawberries' name is " +  toName(Barry) + "Name"

//using draw function, change the background to be fall inspired
//placed function in the draw() function to have composition follow mouseX and mouseY
function draw () {
    background(209, 119, 59); 
    ellipse(mouseX, mouseY, 20, 20); 
}


