// ? ELEMENTS SELECTION -

const navContainer = document.querySelector(".nav_container");
const menuBtn = document.querySelector(".nav_mobile-btn");

// ? FUNCTIONS -

// ? EVENT HANDLERS -

menuBtn.addEventListener("click", function () {
	navContainer.classList.toggle("nav--open");
});
