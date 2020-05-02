var btn = document.querySelectorAll(".tab-button");
var tabs = document.querySelectorAll(".tabs");

for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function (e) {
    for (var j = 0; j < tabs.length; j++) {
      if (e.target.getAttribute("data-id") === tabs[j].id) {
        tabs[j].classList.add("active");
        btn[j].classList.add("active");
      } else {
        tabs[j].classList.remove("active");
        btn[j].classList.remove("active");
      }
    }
  });
}
