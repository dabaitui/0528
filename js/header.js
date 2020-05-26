
 var navOffset=$(".head").height();
            $(window).scroll(function(){
                var scrollPos=$(window).scrollTop();
                if(scrollPos >=1){
                    $(".head").addClass("headerfixed");
                }else{
                    $(".head").removeClass("headerfixed");
                }
            });
$(function(){
    var header_height = $(".header_wap").offset().top;

    $(window).scroll(function(){
        var this_scrollTop = $(this).scrollTop();
        if(this_scrollTop>header_height ){
            $(".header_wap").css('position','fixed');
            $(".header_wap").css('background','#fff');
            $(".header_wap").css('box-shadow','0 2px 10px #999');
        }
		else{
			$(".header_wap").css('position','inherit');
            $(".header_wap").css('box-shadow','0 0 0px #333');
            $(".header_wap").css('background','none');
			}
    });
});