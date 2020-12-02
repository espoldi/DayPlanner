//Current Date
let date = moment().format(`dddd, MMMM Do YYYY`);
$("#currentDay").text(date);

//Create 9 rows of hour blocks
for (let i = 0; i < 9; i++) {
    $(".container").append(`<row id="${i}">`);
    $(`#${i}`).append(`<div class="col-md-2">`);
    $(`#${i}`).append(`<div class="col-md-auto">`);
    $(`#${i}`).append(`<div class="col-md-2">`);
}