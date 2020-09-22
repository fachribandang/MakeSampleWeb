;(function($,window,undefined){


    if (!String.prototype.padStart) {
        String.prototype.padStart = function padStart(targetLength,padString) {
            targetLength = targetLength>>0; //truncate if number or convert non-number to 0;
            padString = String((typeof padString !== 'undefined' ? padString : ' '));
            if (this.length > targetLength) {
                return String(this);
            }
            else {
                targetLength = targetLength-this.length;
                if (targetLength > padString.length) {
                    padString += padString.repeat(targetLength/padString.length); //append to original to ensure we are longer than needed
                }
                return padString.slice(0,targetLength) + String(this);
            }
        };
    }

    var topSliderArgs = {
        mode: 'fade',
        pager: true,
        controls: false,
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        speed: 1000,
        pause: 4000,
        useCSS: false,
        preloadImages : 'all'
    };
    var topSlider = $(".top-slider").bxSlider(topSliderArgs);


    $(window).on('load resize scroll',function(){	
		wpos = $(window).scrollTop();
		wh = $(window).height();
		mvp = (wpos + wh);
		bo = $('body').offset().top;
        
        var scrollWindow = $(window).scrollTop();
        var windowHeight = $(window).height();
	
        $('.fade-box').each(function(){
            targetPosition = $(this).offset().top;

            if($(window).width() > 768){
                if(scrollWindow > targetPosition - windowHeight + 300){
                    $(this).addClass("fade");
                }
            } else {
                if(scrollWindow > targetPosition - windowHeight + 100){
                    $(this).addClass("fade");
                }
            }
        });
    
    });    
    

	$(".btn-scroll").on("click", function (e) {
        e.preventDefault();
         $([document.documentElement, document.body]).animate({
            scrollTop: $("#maps").offset().top - 140
        }, 2000);
	});

    $(".btn-gotop").on("click", function(e){
        e.preventDefault();
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });

})(jQuery,window);