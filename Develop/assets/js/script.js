var userContainer = document.getElementById('container')

var currentTime = moment()
var currentHour = moment().hour()
var currentMin = moment().minutes()

var timeSuffix = ":00am"
var timeLabel = 9

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
        $TextDiv = $("<textarea>").addClass("col-8 py-3 textarea description").text("")

        //save button html
        $saveBtnIcon = $("<img>").attr('src','./assets/images/Save-Icon.png').addClass("saveBtnIcon")
        $saveBtnDiv = $("<div>").addClass("col-1 py-3 saveBtn").append($saveBtnIcon)

        //todo: set bg color

        //appends formed blocks to the main div and container on page
        $rowDiv.append($TimeDiv, $TextDiv, $saveBtnDiv)
        $("#container").append($rowDiv)

        //calls timeLabelSet to dynamically change the suffix from am to pm
        timeLabelSet()
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

generateTimeBlocks(9)