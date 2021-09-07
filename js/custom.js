// banner part js;
$('.image-slider').slick({
    arrows: true,
    prevArrow: '<i class="fa fa-chevron-left prev-btn" ></i>',
    nextArrow: '<i class="fa fa-chevron-right next-btn"></i>',
});

// service section;

$('.services-slider-main').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    centerMode: true,
    centerPadding: '0px',
    prevArrow: '<i class="fa fa-chevron-left prev-btn" ></i>',
    nextArrow: '<i class="fa fa-chevron-right next-btn"></i>',
});

// feedback part js;

$('.feedback-text-slider').slick({
    arrows: false,
    slidesToShow: 1,
    asNavFor: '.feedback-image-slider',
});

$('.feedback-image-slider').slick({
    slidesToShow: 3,
    vertical: true,
    centerMode:true,
    centerPadding: '0',
    asNavFor: '.feedback-text-slider',
    prevArrow: '<i class="fa fa-chevron-left prev-btn"></i>',
    nextArrow: '<i class="fa fa-chevron-right next-btn"></i>',
});

// funfact js here;

$('.counter').counterUp({
    delay: 10,
    time: 1000,
});

// team part js here;

$('.team-image-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
});

// brand part js here;
$('.brand-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: '0px',
    autoplay: true,
});


// back-to-top button js;

$(document).ready(function(){
    
    // window scroll function;

    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();

        // to show or hide back-to-top button;

        if(scrolling > 350){
            $('.back-to-top').fadeIn();
        }
        else{
            $('.back-to-top').fadeOut();
        }

        // nav-fix ;
        if(scrolling > 50){
            $('nav').addClass('nav-fix');
        }
        else{
            $('nav').removeClass('nav-fix');
        }
    });

    // back-to-top button ;
    $('.back-to-top').click(function(){
        $('html,body').animate({
            scrollTop: 0,
        },1500);
    });

     //animation scroll js
     var html_body = $('html, body');
     $('nav a').on('click', function () {
         if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
             var target = $(this.hash);
             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
             if (target.length) {
                 html_body.animate({
                     scrollTop: target.offset().top - 0
                 }, 1500);
                 return false;
             }
         }
     });





});


