// import mobileNav from './modules/mobile-nav.js';
// mobileNav();

document.addEventListener("DOMContentLoaded", function () {
  const filterSelect = document.getElementById("durationFilter");
  const subscriptionCards = document.querySelectorAll(".subscription-card");

  const filterCards = function () {
    const selectedDuration = filterSelect.value;

    subscriptionCards.forEach((card) => {
      const cardDuration = card.getAttribute("data-duration");
      if (selectedDuration === "all" || selectedDuration === cardDuration) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  };
  filterCards();

  filterSelect.addEventListener("change", filterCards);
});
