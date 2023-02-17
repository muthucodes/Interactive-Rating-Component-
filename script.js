"use strict";

const submit = document.querySelector(".btn-submit");
const ratings = document.querySelectorAll(".btn-rating");
const chosenRating = document.querySelector(".chosen-rating");
var selectedRating = 0;

ratings.forEach((rating) =>
  rating.addEventListener("click", function () {
    selectedRating = rating.innerHTML;
    console.log(selectedRating);
    chosenRating.textContent = selectedRating;
  })
);

submit.addEventListener("click", function () {
  if (selectedRating !== 0) {
    console.log("submitted");

    document.querySelector(".rating-state").classList.toggle("off");
    document.querySelector(".thank-you-state").classList.toggle("off");
  } else {
    alert("Please select a rating of your choice");
  }
});
