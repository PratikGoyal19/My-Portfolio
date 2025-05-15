// Updated app.js file with mobile menu functionality

$(document).ready(function(){
    // Existing code
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
    
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });
    
    // Add mobile menu button if it doesn't exist in HTML
    if ($('.menu-btn').length === 0) {
        $('.navbar').append('<div class="menu-btn"><i class="fas fa-bars"></i></div>');
    }
    
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
});
