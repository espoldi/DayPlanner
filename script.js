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
         $(`#${i}`).append(`<div class="hour col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">${time[i]}`);
         $(`#${i}`).append(`<textarea class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">`);
         $(`#${i}`).append(`<button class="saveBtn fas fa-save col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1" id="button${i}">`);

    //Set proper CSS for each time block textarea
    if (i === current) {
        $(`#${i} textarea`).attr("class", "present col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10");
    }
    if (i > current) {
        $(`#${i} textarea`).attr("class", "future col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10");
    }
    else {
        $(`#${i} textarea`).attr("class", "past col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10");
    }
}


pullLocal();

//Save button event listeners
for (let i = 0; i < 9; i++) {
    $(`#button${i}`).on("click", function() {
        updateLocal(i);
    });
}

//Setting data to Local Storage
function updateLocal(index) {
    var val = $(`#${index} textarea`)[0].value;
    localStorage.setItem(`textarea${index}`,val);
}

//Recall data from Local Storage
function pullLocal() {
    for (let i = 0; i < 9; i++) {
        var memory = localStorage.getItem(`textarea${i}`);
        $(`#${i} textarea`)[0].value = memory;
    } 
}