console.log(moment());

//Current date & time
let now = moment();

//formats date in hour and saves in variable
let hour = now.format("k");
console.log("This is the hour: " + hour);

//Gives live feed of moment
function update(){
    $('#currentDay').html(moment().format('D. MMMM YYYY H:mm:ss'));
}
setInterval(update, 1000);

//Sets divs to change color according to time
//gray for past events
//green for present
//aqua for future events
function colorScheme(){
    var listRet = ["toDoOne","toDoTwo","toDoThree","toDoFour","toDoFive","toDoSix","toDoSeven","toDoEight"];
    for (index=0;index<9;index++){
        var divTemp = document.getElementById(listRet[index]);
        var timetag = divTemp.getAttribute("oClock");
        if(timetag<hour){
            //timetag is 9, hour is 2; 9<2 IS FALSE
            divTemp.style.backgroundColor = "lightgray";
        }
        else if (timetag>hour){
            divTemp.style.backgroundColor = "aqua";
        }
        else if(timetag === hour){
            divTemp.style.backgroundColor = "green";
        }
    }
};

setInterval(colorScheme,1000);

//Retrieves previous values in local storage 
//Displays content on appropriate divs
//Gives divs the oClock attribute
//This would be used to compare in colorScheme
$(document).ready(function(){
var listRet = ["toDoOne","toDoTwo","toDoThree","toDoFour","toDoFive","toDoSix","toDoSeven","toDoEight"];
var timeValue = 9;
for (index=0;index<9;index++){
    var entry = localStorage.getItem(index);
    var putHere = document.getElementById(listRet[index]);
    putHere.textContent = entry;
    $(putHere).attr("oClock", timeValue);
    timeValue = timeValue + 1;
    //colorScheme();
}
});

//Save Functionality
//Stores div content to local storage
//Need to recode this part
var saveOne = document.getElementById("buttonOne");
saveOne.addEventListener("click",function(){
    var tabOne = document.getElementById("toDoOne");
    var storeOne = tabOne.textContent;
    console.log("The button works and: " + storeOne);
    localStorage.setItem("0",storeOne);
    alert("Item Saved!");
});
var saveTwo = document.getElementById("buttonTwo");
saveTwo.addEventListener("click",function(){
    var tabTwo = document.getElementById("toDoTwo");
    var storeTwo = tabTwo.textContent;
    console.log("The button works and: " + storeTwo);
    localStorage.setItem("1",storeTwo);
    alert("Item Saved!");
});
var saveThree = document.getElementById("buttonThree");
saveThree.addEventListener("click",function(){
    var tabThree = document.getElementById("toDoThree");
    var storeThree = tabThree.textContent;
    console.log("The button works and: " + storeThree);
    localStorage.setItem("2",storeThree);
    alert("Item Saved!");
});
var saveFour = document.getElementById("buttonFour");
saveFour.addEventListener("click",function(){
    var tabFour = document.getElementById("toDoFour");
    var storeFour = tabFour.textContent;
    console.log("The button works and: " + storeFour);
    localStorage.setItem("3",storeFour);
    alert("Item Saved!");
});
var saveFive = document.getElementById("buttonFive");
saveFive.addEventListener("click",function(){
    var tabFive = document.getElementById("toDoFive");
    var storeFive = tabFive.textContent;
    console.log("The button works and: " + storeFive);
    localStorage.setItem("4",storeFive);
    alert("Item Saved!");
});
var saveSix = document.getElementById("buttonSix");
saveSix.addEventListener("click",function(){
    var tabSix = document.getElementById("toDoSix");
    var storeSix = tabSix.textContent;
    console.log("The button works and: " + storeSix);
    localStorage.setItem("5",storeSix);
    alert("Item Saved!");
});
var saveSeven = document.getElementById("buttonSeven");
saveSeven.addEventListener("click",function(){
    var tabSeven = document.getElementById("toDoSeven");
    var storeSeven = tabSeven.textContent;
    console.log("The button works and: " + storeSeven);
    localStorage.setItem("6",storeSeven);
    alert("Item Saved!");
});
var saveEight = document.getElementById("buttonEight");
saveEight.addEventListener("click",function(){
    var tabEight = document.getElementById("toDoEight");
    var storeEight = tabEight.textContent;
    console.log("The button works and: " + storeEight);
    localStorage.setItem("7",storeEight);
    alert("Item Saved!");
});