const containerElementsLTR = document.querySelectorAll(".animation-hide-ltr");
const containerElementsRTL = document.querySelectorAll(".animation-hide-rtl");

const containerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle("animation-show", entry.isIntersecting);
    });
});

containerElementsLTR.forEach((el) => containerObserver.observe(el));
containerElementsRTL.forEach((el) => containerObserver.observe(el));

