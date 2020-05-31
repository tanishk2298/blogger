const resp = {
    0:{
        items :1
    },
    320:{
        items:1
    },
    560:{
        items:2
    },
    960:{
        items:3
    }
}
$(document).ready(function(){
    $nav = $('.nav')
    $toggle = $('.toggle-collapse')
    $toggle.click(function(){
        $nav.toggleClass('collapse')
    })
    $('.owl-carousel').owlCarousel({
        loop:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:2500,
        nav:true,
        navText:[$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: resp
    });

    $('.move-up span').click(function(){
        $('html, body').animate({
            scrollTop:0
        },1000)
    })

    AOS.init();
})