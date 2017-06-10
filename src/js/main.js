//===================
//  BXSLIDER
//  do not touch
//===================

$(document).ready(function(){
    $('.b-four-section__carousel').bxSlider({
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 3,
        slideMargin: 10,
        auto: true,
        controls: true
    });
});

//===================
//  LIST
//  do not touch
//===================

$(document).ready(function(){
    $(".b-sixth-section__ul").hide();
    $(".b-sixth-section__expand").click(function(){
        $(this).parent().next().slideToggle();

    });
});