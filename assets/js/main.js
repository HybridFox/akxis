$(function(){
    // setTimeout(boxRollovers, 5000)
    boxRollovers();

    var menuOpened = false;
    var screenHeight = window.innerHeight;

    $('.menu__btn').on('click', function(e) {
        if (menuOpened) {
            // Menu is open, close it
            menuOpened = false;
            $('.menu__background').removeClass('menu__background-opened');
            $('.menu__container').removeClass('menu__container-opened');
        } else {
            // Menu is closed, open it
            menuOpened = true;
            $('.menu__background').addClass('menu__background-opened');
            $('.menu__container').addClass('menu__container-opened');
        }
    });

    $(document).on('scroll', function(e) {
        if (window.location.pathname === "/" || window.location.pathname === "/index.php" || window.location.pathname === "/index") {
            if ($(document).scrollTop() > screenHeight) {
                $('.menu__btn.menu__btn-needsscrolling').addClass('menu__btn-scrolled');
            } else {
                $('.menu__btn.menu__btn-needsscrolling').removeClass('menu__btn-scrolled');
            }
        } else {
            if ($(document).scrollTop() > 282) {
                $('.menu__btn.menu__btn-needsscrolling').addClass('menu__btn-scrolled');
            } else {
                $('.menu__btn.menu__btn-needsscrolling').removeClass('menu__btn-scrolled');
            }
        }
    });

    $('.owl-carousel').owlCarousel({
        items: 4,
        center: true,
        loop: true,
        margin:20,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:4,
                nav:false
            }
        },
        autoplay:true,
        autoplayTimeout: 3000,
    });
});

var layers = [
    [
        0,
        0
    ],
    [
        0,
        0
    ],
    [
        0,
        0
    ]
];

var YAngle = 0;
var XAngle = 0;
Z = 10;

function boxRollovers()
{
    $selector = $(".loader__matrix");

    $("body").on("mousemove",function(e){
        var $this = $(this);
        var XRel = e.pageX;
        var YRel = e.pageY;
        var width = $this.width();

        YAngle = -(0.5 - (XRel / width)) * 8;
        XAngle = (0.5 - (YRel / width)) * 16 - 3.5;
    });
}

setInterval(function() {
    layers[0][0] = layers[0][0] - ((layers[0][0] - XAngle * 2) / 10);
    layers[0][1] = layers[0][1] - ((layers[0][1] - YAngle * 2) / 10);

    layers[1][0] = layers[1][0] - ((layers[1][0] - XAngle * 1.5) / 10);
    layers[1][1] = layers[1][1] - ((layers[1][1] - YAngle * 1.5) / 10);

    layers[2][0] = layers[2][0] - ((layers[2][0] - XAngle * .3) / 20);
    layers[2][1] = layers[2][1] - ((layers[2][1] - YAngle * .3) / 20);

    $(".loader__matrix .loader__logo-1").css({"transform":"perspective(525px) translateZ(" + Z + "px) rotateX(" + layers[0][0] * 1.1 + "deg) rotateY(" + layers[0][1] * 2 + "deg)"});
    $(".loader__matrix .loader__logo-2").css({"transform":"perspective(525px) translateZ(" + Z + "px) rotateX(" + layers[0][0] + "deg) rotateY(" + layers[0][1] + "deg)"});
    $(".loader__matrix .loader__logo-3").css({"transform":"perspective(525px) translateZ(" + Z + "px) rotateX(" + layers[0][0] + "deg) rotateY(" + layers[0][1] + "deg)"});
    $(".loader__logo-background").css({"transform":"perspective(525px) translateZ(" + Z + "px) rotateX(" + layers[1][0] + "deg) rotateY(" + layers[1][1] + "deg)"});
    $(".loader__extra-background").css({"transform":"perspective(525px) translateZ(" + Z + "px) rotateX(" + layers[2][0] + "deg) rotateY(" + layers[2][1] + "deg)"});
}, 1000 / 60);