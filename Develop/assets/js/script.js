var userContainer = document.getElementById('container')

var currentHour = 3 //moment().format("h")
var currentHour24 = 15 //moment().hour()
var currentDay = moment().format("dddd, MMMM Do YYYY")

var timeSuffix = ":00am"
var timeLabel = 9
var rowNumber = 9

var tasks = {}
var description = ''

//set the lead text to current date
$('#currentDay').text(currentDay)

//Forms dynamic html elements on the page for time, text box, and save btn
function generateTimeBlocks(iterations) {

    //for loop that iterates for desired amount (9)
    if(!iterations) {
        iterations = 1
    }
    for (var i = 0; i < iterations; i++) {

        time = timeLabel + timeSuffix

        //creates the row div to hold time, text, & save btn
        $rowDiv = $("<div>").addClass("row py-1")
    
        //generates and appends elements to their parents elements
        $TimeText = $("<h5>").addClass("time-block").text(time)
        $TimeDiv = $("<div>").addClass("col-2 py-3 hour").append($TimeText)
        $TextDiv = $("<textarea>").attr('id', 'description').addClass("col-8 py-3 textarea description").text(description)

        //save button html
        $saveBtnIcon = $("<img>").attr('src','./assets/images/Save-Icon.png').attr('id','saveBtnIcon').addClass("saveBtnIcon")
        $saveBtnDiv = $("<btn>").addClass("col-1 py-3 saveBtn").attr('id','saveBtn').append($saveBtnIcon)

        //todo: set bg color

        //appends formed blocks to the main div and container on page
        $rowDiv.append($TimeDiv, $TextDiv, $saveBtnDiv)
        $("#container").append($rowDiv)

        //calls changeBgColor to dynamicall change bg color based on time 
        //changeBgColor()
        //calls timeLabelSet to dynamically change the suffix from am to pm
        timeLabelSet()
        //calls rowNumberSet to allow easier bg color change
        rowLabelSet()
    }}

//Sets the timeLabel variable to display a 9-5 work day
function timeLabelSet() {
    if(timeLabel == 12){
        timeLabel = 1
    } else if(timeLabel == 11){
        timeSuffix = ":00pm"
        timeLabel++
    } else {
        timeLabel++
    }
}

//Labels row for other code to read it easier
function rowLabelSet() {
        rowNumber++
    }

//todo:change bg color based on time in relation to current hour







//todo: save description to local storage
var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }

$(document).on("click",'#saveBtn',function(e) {
    console.log('hi')
    var taskText = $("#description").val();

    if (taskText) {
      tasks.toDo.push({
        text: taskText,
      });
      saveTasks();
}})

//todo: call task description from local storage
var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"))
  
    // if nothing in localStorage, create a new object to track all task status arrays
    if (!tasks) {
      tasks = {
        toDo: []
      };
    }

// loop over object properties
    $.each(tasks, function(list, arr) {
        console.log(list, arr)
// then loop over sub-array
//        arr.forEach(function(task) {
//
//      })
    })
  }

loadTasks();
generateTimeBlocks(9)