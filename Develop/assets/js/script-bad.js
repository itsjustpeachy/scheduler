var userContainer = document.getElementById('container')
var currentDay = moment().format("dddd, MMMM Do YYYY")
var timeLabel = 9

var timeSuffix = ":00am"
//row 1
$rowDiv = $("<div>").addClass("row py-1")
$TimeText = $("<h5>").addClass("time-block").text("9:00AM")
$TimeDiv = $("<div>").addClass("col-2 py-3 hour").append($TimeText)
$TextDiv = $("<textarea>").attr('id', 'description').addClass("col-8 py-3 textarea description").text('')

$saveBtnIcon = $("<img>").attr('src','./assets/images/Save-Icon.png').attr('id','saveBtnIcon').addClass("saveBtnIcon")
$saveBtnDiv = $("<btn>").addClass("col-1 py-3 saveBtn").attr('id','saveBtn').append($saveBtnIcon)

$rowDiv.append($TimeDiv, $TextDiv, $saveBtnDiv)

$("#container").append($rowDiv)

//row 2
$rowDiv1 = $("<div>").addClass("row py-1")
$TimeText1 = $("<h5>").addClass("time-block").text("10:00AM")
$TimeDiv1 = $("<div>").addClass("col-2 py-3 hour").append($TimeText1)
$TextDiv1 = $("<textarea>").attr('id', 'description').addClass("col-8 py-3 textarea description").text('')

$saveBtnIcon1 = $("<img>").attr('src','./assets/images/Save-Icon.png').attr('id','saveBtnIcon').addClass("saveBtnIcon")
$saveBtnDiv1 = $("<btn>").addClass("col-1 py-3 saveBtn").attr('id','saveBtn').append($saveBtnIcon1)

$rowDiv.append($TimeDiv1, $TextDiv1, $saveBtnDiv1)

$("#container").append($rowDiv1)

//row 3
$rowDiv2 = $("<div>").addClass("row py-1")
$TimeText2 = $("<h5>").addClass("time-block").text("11:00AM")
$TimeDiv2 = $("<div>").addClass("col-2 py-3 hour").append($TimeText2)
$TextDiv2 = $("<textarea>").attr('id', 'description').addClass("col-8 py-3 textarea description").text('')

$saveBtnIcon2 = $("<img>").attr('src','./assets/images/Save-Icon.png').attr('id','saveBtnIcon').addClass("saveBtnIcon")
$saveBtnDiv2 = $("<btn>").addClass("col-1 py-3 saveBtn").attr('id','saveBtn').append($saveBtnIcon2)

$rowDiv2.append($TimeDiv2, $TextDiv2, $saveBtnDiv2)

$("#container").append($rowDiv2)

//row 4
$rowDiv3 = $("<div>").addClass("row py-1")
$TimeText3 = $("<h5>").addClass("time-block").text("12:00PM")
$TimeDiv3 = $("<div>").addClass("col-2 py-3 hour").append($TimeText3)
$TextDiv3 = $("<textarea>").attr('id', 'description').addClass("col-8 py-3 textarea description").text('')

$saveBtnIcon3 = $("<img>").attr('src','./assets/images/Save-Icon.png').attr('id','saveBtnIcon').addClass("saveBtnIcon")
$saveBtnDiv3 = $("<btn>").addClass("col-1 py-3 saveBtn").attr('id','saveBtn').append($saveBtnIcon3)

$rowDiv3.append($TimeDiv3, $TextDiv3, $saveBtnDiv3)

$("#container").append($rowDiv3)

//row 5
$rowDiv4 = $("<div>").addClass("row py-1")
$TimeText4 = $("<h5>").addClass("time-block").text("1:00PM")
$TimeDiv4 = $("<div>").addClass("col-2 py-3 hour").append($TimeText4)
$TextDiv4 = $("<textarea>").attr('id', 'description').addClass("col-8 py-3 textarea description").text('')

$saveBtnIcon4 = $("<img>").attr('src','./assets/images/Save-Icon.png').attr('id','saveBtnIcon').addClass("saveBtnIcon")
$saveBtnDiv4 = $("<btn>").addClass("col-1 py-3 saveBtn").attr('id','saveBtn').append($saveBtnIcon4)

$rowDiv4.append($TimeDiv4, $TextDiv4, $saveBtnDiv4)

$("#container").append($rowDiv4)

//row 6
$rowDiv5 = $("<div>").addClass("row py-1")
$TimeText5 = $("<h5>").addClass("time-block").text("2:00PM")
$TimeDiv5 = $("<div>").addClass("col-2 py-3 hour").append($TimeText5)
$TextDiv5 = $("<textarea>").attr('id', 'description').addClass("col-8 py-3 textarea description").text('')

$saveBtnIcon5 = $("<img>").attr('src','./assets/images/Save-Icon.png').attr('id','saveBtnIcon').addClass("saveBtnIcon")
$saveBtnDiv5 = $("<btn>").addClass("col-1 py-3 saveBtn").attr('id','saveBtn').append($saveBtnIcon5)

$rowDiv.append($TimeDiv5, $TextDiv5, $saveBtnDiv5)

$("#container").append($rowDiv5)

//row 7
$rowDiv6 = $("<div>").addClass("row py-1")
$TimeText6 = $("<h5>").addClass("time-block").text("3:00PM")
$TimeDiv6 = $("<div>").addClass("col-2 py-3 hour").append($TimeText6)
$TextDiv6 = $("<textarea>").attr('id', 'description').addClass("col-8 py-3 textarea description").text('')

$saveBtnIcon6 = $("<img>").attr('src','./assets/images/Save-Icon.png').attr('id','saveBtnIcon').addClass("saveBtnIcon")
$saveBtnDiv6 = $("<btn>").addClass("col-1 py-3 saveBtn").attr('id','saveBtn').append($saveBtnIcon6)

$rowDiv6.append($TimeDiv6, $TextDiv6, $saveBtnDiv6)

$("#container").append($rowDiv6)

//row 8
$rowDiv7 = $("<div>").addClass("row py-1")
$TimeText7 = $("<h5>").addClass("time-block").text("4:00PM")
$TimeDiv7 = $("<div>").addClass("col-2 py-3 hour").append($TimeText7)
$TextDiv7 = $("<textarea>").attr('id', 'description').addClass("col-8 py-3 textarea description").text('')

$saveBtnIcon7 = $("<img>").attr('src','./assets/images/Save-Icon.png').attr('id','saveBtnIcon').addClass("saveBtnIcon")
$saveBtnDiv7 = $("<btn>").addClass("col-1 py-3 saveBtn").attr('id','saveBtn').append($saveBtnIcon7)

$rowDiv.append($TimeDiv7, $TextDiv7, $saveBtnDiv7)

$("#container").append($rowDiv7)

//row 9
$rowDiv8 = $("<div>").addClass("row py-1")
$TimeText8 = $("<h5>").addClass("time-block").text("5:00PM")
$TimeDiv8 = $("<div>").addClass("col-2 py-3 hour").append($TimeText8)
$TextDiv8 = $("<textarea>").attr('id', 'description').addClass("col-8 py-3 textarea description").text('')

$saveBtnIcon8 = $("<img>").attr('src','./assets/images/Save-Icon.png').attr('id','saveBtnIcon').addClass("saveBtnIcon")
$saveBtnDiv8 = $("<btn>").addClass("col-1 py-3 saveBtn").attr('id','saveBtn').append($saveBtnIcon8)

$rowDiv8.append($TimeDiv8, $TextDiv8, $saveBtnDiv8)

$("#container").append($rowDiv8)
