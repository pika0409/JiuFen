document.querySelectorAll(".tab").forEach(function (tab, index) {
  tab.addEventListener("click", function (e) {
    e.preventDefault(); 

    document.querySelector(".tab.active").classList.remove("active");
    tab.classList.add("active");


    document.querySelector(".intro.active").classList.remove("active");
    document.querySelectorAll(".intro")[index].classList.add("active");
  });
});