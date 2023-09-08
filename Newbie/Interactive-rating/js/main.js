const submitState = document.getElementById("card__submit__state");
const thankState = document.getElementById("card__thank__state");
const btnSubmit = document.querySelector(".submit");

btnSubmit.addEventListener("click", function () {
  const rating = document.querySelector('input[name="star"]:checked').value;
  if (rating) {
    submitState.classList.toggle("hidden");
    thankState.classList.toggle("hidden");
    document.querySelector(".rating").textContent = rating;
  }
});
