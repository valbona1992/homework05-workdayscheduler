/* User Story
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
Acceptance Criteria
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist */





var date = moment().format('dddd, MMMM Do YYYY');
$("#currentDay").text(date);


let textblocks = $(".text-block");
let timeBlocks = $(".time-block");
for (let i = 0; i< timeBlocks.length; i++) {
    let currentHour = parseInt(moment().format("H"));
    let blockHour =  parseInt($(timeBlocks[i]).attr("data-number"));

    if (blockHour < currentHour){
        $(textblocks[i]).addClass("past");
    } else if (blockHour === currentHour) {
        $(textblocks[i]).addClass("present");
    } else {
        $(textblocks[i]).addClass("future");
    }

    let key = moment().format("MMMM Do YYYY ") + blockHour;
    let possibleStorage = localStorage.getItem(key);
    
    $(textblocks[i]).text(possibleStorage);

}



function saveButton(){
    let buttonHourNumber = $(this).parent().attr("data-number");
    let textAreaForHour = $(this).siblings(".text-block").val();
    let key = moment().format("MMMM Do YYYY ") + buttonHourNumber;
    localStorage.setItem(key, textAreaForHour);
}

$("button").on("click", saveButton);