const menusArrows = document.querySelectorAll(".menus");
const allPTags = Array.from(document.querySelectorAll(".menu-section li p"));
const allLiTags = Array.from(document.querySelectorAll(".menu-section li"));
menusArrows.forEach(arrow => {
      arrow.addEventListener("click", (e) => {
            menusArrows.forEach(menuArrow => {
                  menuArrow.classList.remove("up");
                  menuArrow.classList.add("down");
            })
            for (let k = 0; k < allLiTags.length; k++) {
                  allLiTags[k].classList.remove("clicked")
            }
            for (let k = 0; k < allPTags.length; k++) {
                  allPTags[k].classList.remove("show")
            }
            (e.target.parentElement.parentElement).classList.add("clicked");
            document.querySelector(".clicked > p ").classList.add("show");
            if ((arrow.classList.contains("down")) && (e.target.parentElement.parentElement).classList.contains("clicked")) {
                  arrow.classList.remove("down");
                  arrow.classList.add("up");
            }
      });
})


const testimonials = document.querySelector('.test1 .parent');
const testimonialsLength = (testimonials.children).length;
const arrowNext = document.getElementById('next');
const arrowPrev = document.getElementById('prev');
let index = 0;
arrowNext.addEventListener("click", (e) => {
      if (index < testimonialsLength) {
            testimonials.children[index].classList.remove("show");
            index++;
            if (index == 3) {
                  index = 0
            }
            testimonials.children[index].classList.add("show")
      }
})
arrowPrev.addEventListener("click", (e) => {
      testimonials.children[index].classList.remove("show");
      index--;
      if (index < 0) {
            index = testimonialsLength - 1;
      };
      testimonials.children[index].classList.add("show");
});

const testimonials2 = document.querySelector('.test2 .parent2');
const testimonialsLength2 = (testimonials2.children).length;
const arrowNext2 = document.getElementById('next2');
const arrowPrev2 = document.getElementById('prev2');
let index2 = 0;
arrowNext2.addEventListener("click", (e) => {
      if (index2 < testimonialsLength2) {
            testimonials2.children[index2].classList.remove("show2");
            index2++;
            if (index2 == 3) {
                  index2 = 0
            }
            testimonials2.children[index2].classList.add("show2")
      }
})
arrowPrev2.addEventListener("click", (e) => {
      testimonials2.children[index2].classList.remove("show2");
      index2--;
      if (index2 < 0) {
            index2 = testimonialsLength2 - 1;
      };
      testimonials2.children[index2].classList.add("show2");
});

function hideMenu() {
      var x = document.getElementById("dropdown-content");
      if (x.className === "dropdown-content") {
        x.className += " responsive";
      } else {
        x.className = "dropdown-content";
      }
    }