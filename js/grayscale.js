(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 100
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
      // 
      if ($(window).width() > 992) {
        if ($("#ops_logo").hasClass("ops-logo-w")) {//&& $("#mainNav").hasClass("navbar-shrink")) {
          $("#ops_logo").removeClass("ops-logo-w");
          $("#ops_logo").addClass("ops-logo-b");
        } //else {
      }
    } else {
      $("#mainNav").removeClass("navbar-shrink");

      if ($(window).width() > 992) {
        if ($("#ops_logo").hasClass("ops-logo-b")) {//&& $("#mainNav").hasClass("navbar-shrink")) {
          $("#ops_logo").removeClass("ops-logo-b");
          $("#ops_logo").addClass("ops-logo-w");
        } //else {
      }
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict
