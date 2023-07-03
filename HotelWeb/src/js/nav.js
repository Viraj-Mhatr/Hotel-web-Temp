var MenuLi = document.getElementById("MenuLi");
MenuLi.style.maxHeight = "0px";
function ToggleMenu(){
    if(MenuLi.style.maxHeight=="0px")
        {
          MenuLi.style.display = "flex";
          MenuLi.style.maxHeight = "220px";
        }
    else{
      MenuLi.style.maxHeight = "0px";
    }
}

const burger = document.querySelector('.burger');
burger.addEventListener('click', () => {
  burger.classList.toggle('toggle');
  ToggleMenu();
});


function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);