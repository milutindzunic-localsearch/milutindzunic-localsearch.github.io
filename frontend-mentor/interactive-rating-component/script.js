// set up rating selection
function getRatingButtons() {
  return document.querySelectorAll(".card__ratings > *");
}

var selectedRating;

getRatingButtons().forEach(function (ratingButton, idx) {
  const theRating = idx + 1; // rating based on the index of the button

  ratingButton.addEventListener("click", function () {
    if (ratingButton.classList.contains("selected")) {
      // deselect
      selectedRating = undefined;
      ratingButton.classList.remove("selected");
    } else {
      // select (first remove the previous selection)
      getRatingButtons().forEach(function (b) {
        b.classList.remove("selected");
      });

      selectedRating = theRating;
      ratingButton.classList.add("selected");
    }
  });
});

// set up submit onClick listener
document.getElementById("submit-button").addEventListener("click", function () {
  if (!selectedRating) {
    return; // user needs to select the rating first
  }

  // first, insert the correct rating
  document.getElementById("selected-rating").textContent = selectedRating;

  // then, show the thank you page
  document.getElementById("rating-card").classList.add("hidden");
  document.getElementById("thank-you-card").classList.remove("hidden");
});
