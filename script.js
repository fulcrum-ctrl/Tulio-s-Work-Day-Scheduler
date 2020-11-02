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
$(document).ready(function(){
    //var businessHours = ["9 AM","10 AM", "11 AM", "12PM"];
    for (count=0;count<8; count++){
        var sideBar = $("<div>")
        sideBar.addClass("col-sm-2 idkYet")
        var toDoList = $("<div>");
        var row = $("<div>");
        row.addClass("row");
        toDoList.addClass("col-sm-8 toDo");
        var saveButton = $("<button>");
        saveButton.addClass("saveBtn");
        $(".container").append(row);
        $(".row").append(sideBar);
        $(".row").append(toDoList);
        $(".row").append(saveButton);
    }
})