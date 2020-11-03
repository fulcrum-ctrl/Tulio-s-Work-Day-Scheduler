console.log(moment());
//Current date & time
let now = moment();

//Displays string version of moment
console.log("toString: " + now.toString());

//Returns UTC
//ISO 8601 is a standard of displaying time and date
console.log("toISOString: " + now.toISOString());

//Work on proper formatting later
//document.querySelector("#currentDay").textContent = now.toString();


//Gives live feed of moment
function update(){
    $('#currentDay').html(moment().format('D. MMMM YYYY H:mm:ss'));
}
setInterval(update, 1000);

//Create rows columns as page loads
//should I be appending to .row or .container?
//Now got to assign different ID's to every button
//but why tho


//Review for tonight:

//var saveOne = document.getElementById("save1");
//console.log(saveOne);
//Why is this returning null?
//saveOne.addEventListener("click",function(){
//    alert("Sir, I was pressed.");
//})
//Create save button functionality
//Store and callback
//if condition for color scheme re: past, present, future
//may have to store moment element in var (continuous saving?)
//How to make content editable and storable

//SOLUTION: HARD CODE ALL ELEMENTS

var saveOne = document.getElementById("buttonOne");
saveOne.addEventListener("click",function(){
    var tabOne = document.getElementById("toDoOne");
    var storeOne = tabOne.textContent;
    console.log("The button works and: " + storeOne);
    localStorage.setItem("1",storeOne);
    alert("Item Saved!");
});
var saveTwo = document.getElementById("buttonTwo");
saveTwo.addEventListener("click",function(){
    var tabTwo = document.getElementById("toDoTwo");
    var storeTwo = tabTwo.textContent;
    console.log("The button works and: " + storeTwo);
    localStorage.setItem("2",storeTwo);
    alert("Item Saved!");
});
var saveThree = document.getElementById("buttonThree");
saveThree.addEventListener("click",function(){
    var tabThree = document.getElementById("toDoThree");
    var storeThree = tabThree.textContent;
    console.log("The button works and: " + storeThree);
    localStorage.setItem("3",storeThree);
    alert("Item Saved!");
});
var saveFour = document.getElementById("buttonFour");
saveFour.addEventListener("click",function(){
    var tabFour = document.getElementById("toDoFour");
    var storeFour = tabFour.textContent;
    console.log("The button works and: " + storeFour);
    localStorage.setItem("4",storeFour);
    alert("Item Saved!");
});
var saveFive = document.getElementById("buttonFive");
saveOne.addEventListener("click",function(){
    var tabFive = document.getElementById("toDoFive");
    var storeFive = tabFive.textContent;
    console.log("The button works and: " + storeFive);
    localStorage.setItem("5",storeFive);
    alert("Item Saved!");
});
var saveSix = document.getElementById("buttonSix");
saveSix.addEventListener("click",function(){
    var tabSix = document.getElementById("toDoSix");
    var storeSix = tabSix.textContent;
    console.log("The button works and: " + storeSix);
    localStorage.setItem("6",storeSix);
    alert("Item Saved!");
});
var saveSeven = document.getElementById("buttonSeven");
saveSeven.addEventListener("click",function(){
    var tabSeven = document.getElementById("toDoSeven");
    var storeSeven = tabSeven.textContent;
    console.log("The button works and: " + storeSeven);
    localStorage.setItem("7",storeSeven);
    alert("Item Saved!");
});
var saveEight = document.getElementById("buttonEight");
saveEight.addEventListener("click",function(){
    var tabEight = document.getElementById("toDoSix");
    var storeEight = tabEight.textContent;
    console.log("The button works and: " + storeEight);
    localStorage.setItem("8",storeEight);
    alert("Item Saved!");
});