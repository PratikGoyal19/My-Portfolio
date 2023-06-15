$(document).ready(function(){

    $(window).scroll(function(){
        if(this.scrollY > 200){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky")
        }

        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    


    var typed = new Typed (".typing-1",{
        strings:["Developer", "Designer"],
        typeSpeed: 80,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed (".typing-2",{
        strings:["Developer", "Designer"],
        typeSpeed: 80,
        backSpeed: 60,
        loop: true
    });
    
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0});
    });



});

