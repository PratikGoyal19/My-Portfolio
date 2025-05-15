// Updated app.js file with improved mobile menu functionality
$(document).ready(function(){
    // Sticky navbar on scroll
    $(window).scroll(function(){
        if(this.scrollY > 200){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    
    // Typing animation
    var typed = new Typed(".typing-1", {
        strings: ["Developer", "Designer", "AI & ML Enthusiast", "Data Enthusiast"],
        typeSpeed: 80,
        backSpeed: 60,
        loop: true
    });
    
    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Designer", "AI & ML Enthusiast", "Data Enthusiast"],
        typeSpeed: 80,
        backSpeed: 60,
        loop: true
    });
    
    // Scroll up button functionality
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });
    
    // Mobile menu toggle functionality
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    
    // Close mobile menu when a menu item is clicked
    $('.navbar .menu li a').click(function(){
        $('.navbar .menu').removeClass("active");
        $('.menu-btn i').removeClass("active");
    });

    // Fix project heights on mobile
    function adjustProjectHeights() {
        if(window.innerWidth <= 768) {
            $('.projects .project-content .main').each(function() {
                var projectHeight = $(this).find('.project').outerHeight();
                $(this).css('min-height', (projectHeight + 100) + 'px');
            });
        } else {
            $('.projects .project-content .main').css('min-height', '450px');
        }
    }
    
    // Run on page load and window resize
    adjustProjectHeights();
    $(window).resize(function() {
        adjustProjectHeights();
    });
});
