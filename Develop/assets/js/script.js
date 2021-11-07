var currentTime = moment()
var currentMin = moment().minutes()
var timeSuffix = ":00am"

var timeLabel = 9

var userContainer = document.getElementById('container')
//Forms dynamic html elements on the page
function generateTimeBlocks(iterations) {

    if(!iterations) {
        iterations = 1
    }
    for (var i = 0; i < iterations; i++) {

        time = timeLabel + timeSuffix

        $Block = $("<div>").addClass("row py-1");
    
        $TimeText = $("<h5>").addClass("text-center").text(time)
        $TimeDiv = $("<div>").addClass("col-2 py-3 hour align-middle").append($TimeText)
        $TextDiv = $("<textarea>").addClass("col-8 py-3 overflow-auto").text("Enter Event")

        $Block.append($TimeDiv, $TextDiv)
    
        $("#container").append($Block)
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
        timeLabel++;
    }
}

generateTimeBlocks(9)