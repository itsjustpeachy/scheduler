var userContainer = document.getElementById('container')

var currentHour = 3 //moment().format("h")
var currentHour24 = 15 //moment().hour()
var currentDay = moment().format("dddd, MMMM Do YYYY")

var timeSuffix = ":00am"
var timeLabel = 9

var now = parseInt(moment().format('HH'));

//set the lead text to current date
$('#currentDay').text(currentDay)

//Forms dynamic html elements on the page for time, text box, and save btn
function generateTimeBlocks(iterations) {
    rowNumber = 8
    //for loop that iterates for desired amount (9)
    if(!iterations) {
        iterations = 1
    }
    for (var i = 0; i < iterations; i++) {

        time = timeLabel + timeSuffix
        rowNumber++

        //creates the row div to hold time, text, & save btn
        $rowDiv = $("<div>").addClass("row py-1")
    
        //generates and appends elements to their parents elements
        $TimeText = $("<h5>").addClass("time-block").text(time)
        $TimeDiv = $("<div>").addClass("col-2 py-3 hour").append($TimeText)
        $TextDiv = $("<textarea>").attr('id', rowNumber).addClass("col-8 py-3 textarea description").text('')
        console.log(rowNumber, time)

        //save button html
        $saveBtnIcon = $("<img>").attr('src','./assets/images/Save-Icon.png').attr('id','saveBtnIcon').addClass("saveBtnIcon")
        $saveBtnDiv = $("<btn>").addClass("col-1 py-3 saveBtn").attr('id','saveBtn').append($saveBtnIcon)

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

$(document).ready(function () {

//checks each function id# compared to time
$("textarea").each(function () {
    var name = parseInt($(this).attr("id"));
    if (name < now) {
        $(this).addClass("past");
    }
    if (name > now) {
        $(this).addClass("future")
    }
    if (name === now) {
        $(this).addClass("present")
    }



})

//Save description to local storage on btn click
var $text9AM = $("#9");
var $text10AM = $("#10");
var $text11AM = $("#11");
var $text12AM = $("#12");
var $text1PM = $("#13");
var $text2PM = $("#14");
var $text3PM = $("#15");
var $text4PM = $("#16");
var $text5PM = $("#17");

$(document).on("click",'#saveBtn',function() {
    console.log('events saved')
    localStorage.setItem("9AM", ($text9AM.val()))
    localStorage.setItem("10AM", ($text10AM.val()))
    localStorage.setItem("11AM", ($text11AM.val()))
    localStorage.setItem("12PM", ($text12AM.val()))
    localStorage.setItem("1PM", ($text1PM.val()))
    localStorage.setItem("2PM", ($text2PM.val()))
    localStorage.setItem("3PM", ($text3PM.val()))
    localStorage.setItem("4PM", ($text4PM.val()))
    localStorage.setItem("5PM", ($text5PM.val()))
})

//Call task description from local storage
$("#9").text(localStorage.getItem("9AM"));
$("#10").text(localStorage.getItem("10AM"));
$("#11").text(localStorage.getItem("11AM"));
$("#12").text(localStorage.getItem("12AM"));
$("#13").text(localStorage.getItem("1PM"));
$("#14").text(localStorage.getItem("2PM"));
$("#15").text(localStorage.getItem("3PM"));
$("#16").text(localStorage.getItem("4PM"));
$("#17").text(localStorage.getItem("5PM"));
})

//I wanted so badly to do this with another loop to cut down on repeat, but I couldn't for the life of me figure it out ;~;

generateTimeBlocks(9)