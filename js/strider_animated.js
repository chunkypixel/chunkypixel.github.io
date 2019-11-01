$(document).ready(function(){
    "use strict";
    
    // NAVBAR RESIZE FUNCTION
    $(window).scroll( function() {
      var value = $(this).scrollTop();
      if ( value > $(window).height() * 1 )
          $(".navbar-dark").addClass("scrolled");
      else
          $(".navbar-dark").removeClass("scrolled");
    });
    
    //HAMBURGER MENU ANIMATION
    $('#hamburger').click(function(){
		  $(this).toggleClass('open');
    });
    
    // HERO TEXT ANIMATION
    $("#moving-text").Morphext({
        animation: "fadeInDown",
        separator: ",",
        speed: 4000,
        complete: function () {
            $("#hero-slider").carousel("next")
        }
    });
    
    // SMOOTH SCROLLING TO ANCHORS
    $('a[href*=\\#]:not([href=\\#]):not(.control-right, .control-left, .carousel-control-prev, .carousel-control-next)').on('click', function() {
            if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset().top - 100
                }, 1000);
            return false;
          }
        }
    });
    
    // LAZY LOADING IMAGES
    var bLazy = new Blazy();
    
    // ANIMATIONS
    var $animation_elements = $('.animation-element');
    var $window = $(window);

    function check_if_in_view() {
      var window_height = $window.height();
      var window_top_position = $window.scrollTop();
      var window_bottom_position = (window_top_position + window_height);

      $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top + 150;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
          $element.addClass('in-view');
        }
      });
    }
    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
    
    //STOP VIDEO FROM PLAYING AFTER CLOSING A MODAL
    $("body").on('hidden.bs.modal', function (e) {
        var $iframes = $(e.target).find("iframe");
        $iframes.each(function(index, iframe){
            $(iframe).attr("src", $(iframe).attr("src"));
         });
     });
    
    // LIGHTBOX OPTIONS
     lightbox.option({
      'resizeDuration': 500,
      'imageFadeDuration': 500,
      'wrapAround': true
    });
    
    // VIDEO LIGHTBOX
    $(".js-video-button").modalVideo();
    
    //COPYRIGHT YEAR
    var date = new Date().getFullYear();
    document.getElementById("year").innerHTML = date;
            
});

window.onload = function() {
    //INITIALIZE ISOTIPE
    // cache container
    var $container = $('.games-portfolio');
    // initialize isotope
    $container.isotope({
    // options...
    });
    // filter items when filter link is clicked
    $('.game-tags li a').on('click', function(){
        var selector = $(this).attr('data-filter');
        $container.isotope({ filter: selector });
        return false;
    });
    
    // HIDE LOADING SCREEN WHEN PAGE IS LOADED
    $('#progress').animate({ width:'100%'}, 300, function() {
        $('#loader-wrapper').addClass('loaded');
    });
    
}