//Current Date
let date = moment().format(`dddd, MMMM Do YYYY`);
$("#currentDay").text(date);

//Data needed for checking current time and coloring blocks
var currentTime = moment().format(`ha`);
let time = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

//Find the present hour block
for (let i = 0; i < 9; i++) {
    if (currentTime === time[i]) {
        var current = i;
    }
}

//Create and format 9 rows of hour blocks
for (let i = 0; i < 9; i++) {
    $(".container").append(`<row class="time-block row" id="${i}">`);
    $(`#${i}`).append(`<div class="hour col-sm-1">${time[i]}`);
    $(`#${i}`).append(`<textarea class="col-md-auto">`);
    $(`#${i}`).append(`<div class="saveBtn col-sm-1">`);

    //Set proper CSS for each time block textarea
    if (i === current) {
        $(`#${i} textarea`).attr("class", "present");
    }
    if (i < current) {
        $(`#${i} textarea`).attr("class", "past");
    }
    if (i > current) {
        $(`#${i} textarea`).attr("class", "future");
    }
}
