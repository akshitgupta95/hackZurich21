/* =========================================
                Preloader
============================================ */
$(window).on('load', function () { // makes sure that whole site is loaded
    /*$('#status').fadeOut();*/
    $('#preloader').delay(650).fadeOut('slow');
});