/**
 * Created by hxsd on 2017/1/2.
 */

$(function(){
    // @ 给窗口加滚动条事件
    $(window).scroll(function(){
        // 获得窗口滚动上去的距离
        var ling = $(document).scrollTop();
        // 在标题栏显示滚动的距离
        document.title = ling;
        // 如果滚动距离大于1534的时候让滚动框出来
        if(ling>1534){
            $('#box').show();
        }
        if(1534<ling && ling<2300){
            // 让第一层的数字隐藏，文字显示，让其他兄弟元素的li数字显示，文字隐藏
            $('#box ul li').eq(0).find('.num').hide().siblings('.word').css('display','block');
            $('#box ul li').eq(0).siblings('li').find('.num').css('display','block').siblings('.word').hide();
        }else if(ling<3020){
            $('#box ul li').eq(1).find('.num').hide().siblings('.word').css('display','block');
            $('#box ul li').eq(1).siblings('li').find('.num').css('display','block').siblings('.word').hide();
        }else if(ling<3595){
            $('#box ul li').eq(2).find('.num').hide().siblings('.word').css('display','block');
            $('#box ul li').eq(2).siblings('li').find('.num').css('display','block').siblings('.word').hide();
        }else if(ling<4170){
            $('#box ul li').eq(3).find('.num').hide().siblings('.word').css('display','block');
            $('#box ul li').eq(3).siblings('li').find('.num').css('display','block').siblings('.word').hide();
        }else if(ling<4885){
            $('#box ul li').eq(4).find('.num').hide().siblings('.word').css('display','block');
            $('#box ul li').eq(4).siblings('li').find('.num').css('display','block').siblings('.word').hide();
        }else if(ling<5460){
            $('#box ul li').eq(5).find('.num').hide().siblings('.word').css('display','block');
            $('#box ul li').eq(5).siblings('li').find('.num').css('display','block').siblings('.word').hide();
        }else if(ling<6035){
            $('#box ul li').eq(6).find('.num').hide().siblings('.word').css('display','block');
            $('#box ul li').eq(6).siblings('li').find('.num').css('display','block').siblings('.word').hide();
        }else if(ling<6645){
            $('#box ul li').eq(7).find('.num').hide().siblings('.word').css('display','block');
            $('#box ul li').eq(7).siblings('li').find('.num').css('display','block').siblings('.word').hide();
        }else if(ling<7360){
            $('#box ul li').eq(8).find('.num').hide().siblings('.word').css('display','block');
            $('#box ul li').eq(8).siblings('li').find('.num').css('display','block').siblings('.word').hide();
        }else if(ling<7905){
            $('#box ul li').eq(9).find('.num').hide().siblings('.word').css('display','block');
            $('#box ul li').eq(9).siblings('li').find('.num').css('display','block').siblings('.word').hide();
        }else if(ling<8790){
            $('#box ul li').eq(10).find('.num').hide().siblings('.word').css('display','block');
            $('#box ul li').eq(10).siblings('li').find('.num').css('display','block').siblings('.word').hide();
        }
        if(ling>8800 || ling<1534){
            // $('#box').css('display','none');  // @ 这一句和下一句效果一样。
            $('#box').hide();
        }
    })
})
$(function(){
    $('#box ul li').hover(function(){
        $(this).find('.num').hide().siblings('.word').css({'display':'block','background':'#CB1C39','color':'white'});
    },function(){
        $(this).find('.num').css({'display':'block','background':'white','color':'#666'}).siblings('.word').hide().css({'display':'none','background':'','color':''});
    })
})

