//runner up 
//Madison Smith-Majors 10/6/2022

//display the array 
const bestTimes = ["1,2,3"];
bestTimes.sort(); 

function myDisplay() {
    var x = document.getElementById("myDiv")
    //create if else statement
    //if greater than one, "second place" will be displayed 
    if (x.style.display > 1 == "2") {
        x.style.display = "second place"
        //if greater than 1 and not equal to 2, "third place" will be displayed 
    } else {
        x.style.display = "third place"; 
    }
}