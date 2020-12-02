//Current Date
let date = moment().format(`dddd, MMMM Do YYYY`);
$("#currentDay").text(date);

//Create and format 9 rows of hour blocks
for (let i = 0; i < 9; i++) {
    $(".container").append(`<row class="time-block row" id="${i}">`);
    $(`#${i}`).append(`<div class="hour col-md-2">`);
    $(`#${i}`).append(`<textarea class="col-md-auto">`);
    $(`#${i}`).append(`<div class="saveBtn col-md-2">`);
}
