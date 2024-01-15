// ? ELEMENTS SELECTION -

const navContainer = document.querySelector(".nav_container");
const menuBtn = document.querySelector(".nav_mobile-btn");
const headerContainer = document.querySelector("header");

// ? FUNCTIONS -

const navObserver = new IntersectionObserver(
	([e]) => {
		if (!e.isIntersecting) {
			navContainer.classList.add("nav--sticky");
		} else {
			navContainer.classList.remove("nav--sticky");
		}
	},
	{
		root: null,
		threshold: 0.2,
	}
);

navObserver.observe(headerContainer);

// ? EVENT HANDLERS -

menuBtn.addEventListener("click", function () {
	navContainer.classList.toggle("nav--open");
});
