let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

$(function (){
    $('.bags__first').slick({
        dots: true,
        dotsClass: 'bags__info--dots',
        prevArrow: '.bags__info--arrow-left',
        nextArrow: '.bags__info--arrow-right',
    });

    $('.bags__right-up--slider').slick({
        dots: true,
        dotsClass: 'bags__right-up--slider-dots',
        arrows: false,
    });

    $('.bags__right-down--slider').slick({
        dots: true,
        dotsClass: 'bags__right-down--slider-dots',
        arrows: false,
    });

    $('.card__img').slick({
        dots: true,
        dotsClass: 'card__dots',
        arrows: false,
    });

    $('.card__img--big').slick({
        dots: true,
        dotsClass: 'card__dots--big',
        arrows: false,
    });

    $('.card__img--big2').slick({
        dots: true,
        dotsClass: 'card__dots--big2',
        arrows: false,
    });

    $(".header__nav-menu--language").change(function(){
        let selectedLang = $(this).children("option:selected").val();
        if (selectedLang === "spa") {
            $(".lang-esp").css({"display": "block"});
            $(".lang-eng").css({"display": "none"});
        } else if (selectedLang === "eng") {
            $(".lang-esp").css({"display": "none"});
            $(".lang-eng").css({"display": "block"});
        }
      });
});

function responsiveMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }