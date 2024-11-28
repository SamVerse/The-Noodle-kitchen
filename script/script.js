const hamburger = document.querySelector(".hamburger");
const findTableBtn = document.getElementById("find-table-btn");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

findTableBtn.addEventListener("click", () => {
  const dateInput = document.getElementById("date").value;
  const timeInput = document.getElementById("time").value;

  if (dateInput && timeInput) {
    alert(
      `Your table is now confirmed at ${timeInput} on ${dateInput}. Enjoy your meal!`
    );
  } else {
    alert("Please select both a date and time to confirm your reservation.");
  }
});
