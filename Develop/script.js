// adds the current day to be displayed on the calendar

var date = moment().format('dddd, MMMM Do YYYY');
$("#currentDay").text(date);

// loops through each hour of the work day and determines if its past, present, or future
let textblocks = $(".text-block");
let timeBlocks = $(".time-block");
for (let i = 0; i < timeBlocks.length; i++) {
    let currentHour = parseInt(moment().format("H"));
    let blockHour = parseInt($(timeBlocks[i]).attr("data-number"));

    if (blockHour < currentHour) {
        $(textblocks[i]).addClass("past");
    } else if (blockHour === currentHour) {
        $(textblocks[i]).addClass("present");
    } else {
        $(textblocks[i]).addClass("future");
    }
    // store the text to local storage
    let key = moment().format("MMMM Do YYYY ") + blockHour;
    let possibleStorage = localStorage.getItem(key);

    $(textblocks[i]).text(possibleStorage);

}

// saves the text for the selected textarea

function saveButton() {
    let buttonHourNumber = $(this).parent().attr("data-number");
    let textAreaForHour = $(this).siblings(".text-block").val();
    let key = moment().format("MMMM Do YYYY ") + buttonHourNumber;
    localStorage.setItem(key, textAreaForHour);
}

// click event for saving the text 
$("button").on("click", saveButton);