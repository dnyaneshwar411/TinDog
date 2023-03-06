var faBars = document.querySelector("header nav .fa-bars");

faBars.addEventListener("click", function () {
    document.querySelector("header nav ul").classList.toggle("navToggle");
    faBars.classList.toggle("navToggle, center");
});