//header
$(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            $(".header").addClass("not-transparent");
        }
        else {
            $(".header").removeClass("not-transparent");
        }
    });
});

//slider 
// slider-series
$(document).ready(function () {
    $('.hotSeries__mains').slick({
        slidesToShow: 6,
        slidesToScroll: 5,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });
});
// slider-film
$(document).ready(function () {
    $('.hotFilm__mains').slick({
        slidesToShow: 6,
        slidesToScroll: 5,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });
});
// slider-comic
$(document).ready(function () {
    $('.hotComic__mains').slick({
        slidesToShow: 6,
        slidesToScroll: 5,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });
});
// slider-suggest
$(document).ready(function () {
    $('.suggest__mains').slick({
        slidesToShow: 6,
        slidesToScroll: 5,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });
});

//slider-movie
$(document).ready(function () {
    $('.film__mains').slick({
        slidesToShow: 4,
        slidesToScroll: 5,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });
});

//input 
function functionSuggest(){
    document.getElementById("suggests").style.display = "block";
}

//account
function showAccount() {
    document.getElementById("account__down").style.display = "block";
}
