
// Toggle elements

var coll = document.getElementsByClassName("collapsible");
                var i;

                for (i = 0; i < coll.length; i++) {
                coll[i].addEventListener("click", function() {
                    this.classList.toggle("active");
                    var content = this.nextElementSibling;
                    var arrow = this.querySelector(".arrow");
                    if (content.style.display === "block") {
                    content.style.display = "none";
                    arrow.classList.remove("down");
                    arrow.classList.add("right");
                    } else {
                    content.style.display = "block";
                    arrow.classList.remove("right");
                    arrow.classList.add("down");
                    }
                });
                }




// Translate texts on click

const texts = document.querySelectorAll(".text");
const toggleButton = document.getElementById("toggleButton");
let active = true;

toggleButton.addEventListener("click", function() {
  active = !active;
  if (active) {
    toggleButton.innerHTML = "Toggle Language Switcher (ON)";
  } else {
    toggleButton.innerHTML = "Toggle Language Switcher (OFF)";
  }
});

texts.forEach(text => {
  text.addEventListener("click", function() {
    if (active) {
      if (text.innerHTML === this.dataset.german) {
        text.innerHTML = this.dataset.ukrainian;
      } else {
        text.innerHTML = this.dataset.german;
      }
    }
  });
});