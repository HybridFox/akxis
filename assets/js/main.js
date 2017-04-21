document.addEventListener('DOMContentLoaded', ready);
var background;
var pageX = 0;
var pageY = 0;
var menuOpend = false;
var onLanding = true;
var currentWork = 0;
var totalWork = content.length;

function ready() {
    $(".landing").css({"height": window.innerHeight - (window.innerWidth * 0.12) + "px"});
    document.onmousemove = handleMouseMove;
    background = document.getElementById("logo-bg");


    $(".content-name").append("<p></p>");
    $(".content-subname").append("<p></p>");
    $(".content-description").append("<p></p>");

    for (i = 0; i < content.length; i++) {
        $(".content-name").append("<p>" + content[i].name + "</p>");
        $(".content-subname").append("<p>" + content[i].subname + "</p>");
        $(".content-description").append("<p>" + content[i].description + "</p>");
    }

    setInterval(function() {
        background.style.top = parseFloat(background.style.top) - ((parseFloat(background.style.top) - (50 + pageY * 4)) / 15) + "%";
        background.style.left = parseFloat(background.style.left) - ((parseFloat(background.style.left) - (50 + pageX * 4)) / 15) + "%";
    }, 1000 / 60);

    $(".content-counter a:nth-child(1)").on("click", function() {
        currentWork--;
        updateScreen();
    });

    function updateScreen() {
        if (currentWork == 0) {
            $(".content-bg").css({
                "height": "0%"
            });
        } else {
            $(".content-bg").css({
                "height": "100%"
            });
        }

        $(".content-name p").css({
            "top": "-" + currentWork * 33 + "px"
        });

        $(".content-description p").css({
            "top": "-" + currentWork * 130 + "px"
        });

        $(".content-subname p").css({
            "top": "-" + currentWork * 17 + "px"
        });

        $(".content-counter-insideline").css({
            "height": currentWork * 25 + "%"
        });
    }

    $(".content-counter a:nth-child(3)").on("click", function() {
        currentWork++;
        updateScreen();
    });

    $(".menu").on("mouseover", function() {
        if (!menuOpend) {
            $(".menu-peek").css({
                "width": "14%"
            });
        }
    }).on("mouseleave", function() {
        if (!menuOpend) {
            $(".menu-peek").css({
                "width": "6%"
            });
        }
    }).on("click", function() {
        if(menuOpend) {
            menuOpend = false;
            $(".menu-peek").css({
                "width": "10%"
            });
            $(".menu-overlay").css({
                "left": "-100%"
            });
            $("body").removeClass("opend");
        } else {
            menuOpend = true;
            $(".menu-peek").css({
                "width": "100%"
            });
            $(".menu-overlay").css({
                "left": "0%"
            });
            $("body").addClass("opend");
        }
    });

    $(".menu-overlay ul li a").on("click", function() {
        if (onLanding) {

            $(".menu-peek").css({
                "width": "10%"
            });
            $(".menu-overlay").css({
                "left": "-100%"
            });
            $("body").removeClass("opend");
        }
    })
}

function handleMouseMove(event) {
    var dot, eventDoc, doc, body;

    event = event || window.event;

    if (event.pageX == null && event.clientX != null) {
        eventDoc = (event.target && event.target.ownerDocument) || document;
        doc = eventDoc.documentElement;
        body = eventDoc.body;

        event.pageX = event.clientX +
            (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
            (doc && doc.clientLeft || body && body.clientLeft || 0);
        event.pageY = event.clientY +
            (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
            (doc && doc.clientTop  || body && body.clientTop  || 0 );

    }

    pageX = event.pageX / window.innerWidth;
    pageY = event.pageY / window.innerHeight;

    // background.style.top = 50 + pageY * 2 + "%";
    // background.style.left = 50 + pageX * 2 + "%";


}