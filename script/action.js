$(document).ready(function(){
    

    $('.btn_box span').eq(0).addClass('on');

    $('.img_box').each(function(){
        let imgLength = $(this).find('img').length;
        if(imgLength < 3){
            $(this).siblings('.btn_box').find('.right2').hide();;
        }
        if(imgLength < 2){
            $(this).siblings('.btn_box').hide();
        }
    })
    
    $('.web_box .mockup_box .img_box img').mouseenter(function(){
        let imgH = $(this).height();
        let monitorH = $('.img_box').height();
        let speed = imgH/0.5

        $(this).stop().animate({top:-imgH+monitorH}, speed)
    }).mouseleave(function(){
        $(this).stop().animate({top:0})
    })


    $('.btn_box .left').click(function(){
        $(this).parent('.btn_box').siblings('.img_box').find('.imgs').animate({left:0})
        $(this).addClass('on').siblings().removeClass('on')
    })
    $('.btn_box .right').click(function(){
        let monitorW = $('.img_box').width();
        $(this).parent('.btn_box').siblings('.img_box').find('.imgs').animate({left:-monitorW})
        $(this).addClass('on').siblings().removeClass('on')
    })
    $('.btn_box .right2').click(function(){
        let monitorW = $('.img_box').width();
        $(this).parent('.btn_box').siblings('.img_box').find('.imgs').animate({left:-monitorW*2});
        $(this).addClass('on').siblings().removeClass('on')
    })




});
