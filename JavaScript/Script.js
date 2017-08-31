// ************************ Variables

var images = [

    '/Proyecto1/Data/imgs/bg.jpg',
    '/Proyecto1/Data/imgs/bg2.jpg',
    '/Proyecto1/Data/imgs/bg3.jpg',

];

var index = 0;

// ************************ Funciones de carga

$(document).ready(function(){

    (function($) {

        $('#headIcon').click(function(e){
            e.preventDefault();
            $('body').toggleClass('wSidebar');
        });

        $('#cache').click(function(e){
            $('body').removeClass('wSidebar');
        });

        // Add smooth scrolling to all links
        $("a").on('click', function(event) {

            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function(){

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            } // End if
        });

    })(jQuery);


});

// ************************ Funciones de Scroll


$(document).on("scroll", function() {

    if($(document).scrollTop()>100) {
        $("header").removeClass("large").addClass("small");
        $(".item").removeClass("lgbtn").addClass("smbtn");
    } else {
        $("header").removeClass("small").addClass("large");
        $(".item").removeClass("smbtn").addClass("lgbtn");
    }

});


// ************************ Juguetico de slider

// function change_up(){
//
//     index = (index + 1 < images.length) ? index + 1 : 0;
//
//     $('#home').fadeOut(1000, function(){
//
//         $(this).css('background', 'black');
//
//         $(this).css('background', 'radial-gradient(transparent, rgba(0,0,0,0.9)), url('+ images[index]+')');
//         $(this).css('background-size', 'cover');
//         $(this).css('background-position', 'center');
//
//
//         $(this).fadeIn(1000);
//
//     });
// }

// setInterval(change_up, 4000);

