/**
 * Created by hxsd on 2016/12/30.
 */
//-----------页面轮播图---------------------------------------------------------------------
$(function(){
    var timer=null; //定时器返回值，用于关闭定时器
    var iNow=0;  //iNow为正在展示的图片索引值，当用户打开网页时首先显示第一张图，即索引值为0
    //鼠标移入按钮a变红色，更换图片
    $(".banner_c .btn a").hover(
        function(){
            $(this).css("background","red").siblings().css("background","");
            var index=$(this).index();
            $(".banner_c").find("img").eq(index).fadeIn().siblings().fadeOut();
            clearInterval(timer); //清空定时器
            iNow=index+1;
        },
        function(){
            $(this).css("background","")
            run()//启动定时器
        }
    );
//鼠标移入图片定时器清除，移除启动
    $(".banner_c").find("img").hover(
        function(){
            clearInterval(timer);
            $(".banner_c .tb").css("opacity","0.5")
        },
        function(){
            run()
            $(".banner_c .tb").css("opacity","0").delay()
        }
    );
//侧边按钮点击
    $(".banner_c .tb_left ").on("click",function(){
        iNow--;
        if(iNow<0) iNow=$(".banner_c").find("img").length-1;

        $(".banner_c .btn a").eq(iNow).css("background","red").siblings().css("background","");
        $(".banner_c").find("img").eq(iNow).fadeIn().siblings().fadeOut();
        console.log(iNow)
    })

    $(".banner_c .tb_right ").on("click",function(){
        iNow++;
        if(iNow>=$(".banner_c").find("img").length) iNow=0;
        console.log(iNow);
        $(".banner_c .btn a").eq(iNow).css("background","red").siblings().css("background","");
        $(".banner_c").find("img").eq(iNow).fadeIn().siblings().fadeOut();
    })
//侧边按钮移入移除
    $(".banner_c .tb ").hover(
        function(){clearInterval(timer);
            $(".banner_c .tb").css("opacity","0.5")
        },
        function(){run()
            $(".banner_c .tb").css("opacity","0")
        }
    )
    //定时器
    function run(){
        clearInterval(timer)
        timer=setInterval(function(){  //打开定时器
            if(iNow>$(".banner_c").find("img").length-1) iNow=0;
            //console.log(iNow)
            $(".banner_c").find("img").eq(iNow).fadeIn().siblings().fadeOut();
            $(".banner_c .btn a").eq(iNow).css("background","red").siblings().css("background","");
            iNow++;
        },2000);
    };
    run()
    //-----------侧边导航菜单显示---------------------------------------------------------------------
    $(".banner_l ul li").each(function(index){
        $(this).on("mouseenter",function(){

            $(".popup").eq(index).css("display","block").siblings(".popup").css("display","none");
        })
    });
    $(".wrap ").on("mouseleave",function(){
        $(".popup").css("display","none");

    })
//-----------首页导航登陆条--------------------------------------------------------------------------
    function run1(obj){
        obj.hover(
            function(){
                obj.find(".block1").css("display","block")

            },
            function(){
                obj.find(".block1").css("display","none")

            }
        )
    }
 var myjd=$(".myjd")
 var sjjd=$(".sjjd")
 var gzjd=$(".gzjd")
 var khfw=$(".khfw")
 run1(myjd);run1(sjjd);run1(gzjd);run1(khfw);
    //--------------楼层选项卡--------------
   $(" .one .title_nav ul li").each(function(index){
       $(this).on("mouseover",function(){
           $(" .one .title_nav ul li").eq(index).addClass("active").siblings().removeClass("active");
           $(".w_right").eq(index).css("display","block").siblings(".w_right").css("display","none");
       })
   });
//-----------天气-------------------

    var weatherIcon={
        "大雪":"day_daxue.png",
        "大雨":"day_dayu.png",
        "多云":"day_duoyun.png",
        "晴":"day_qing.png",
        "小雪":"day_xiaoxue.png",
        "小雨":"day_xiaoyu.png",
        "阴":"day_yin.png",
        "中雪":"day_zhongxue.png",
        "中雨":"day_zhongyu.png",
        "大雨":"day_dayu.png"

    }
    function getIcon(weather){
        return weatherIcon[weather];
    }
    run3()
    function run3(){
        var city= $("#mySelect").val();
        var url = "http://wthrcdn.etouch.cn/weather_mini?city="+city;
        $.getJSON(url,function(data){
            var content = "  天气类型：" + data.data.forecast[0].type;
            $(".diqu span ").html(content);
            $(".diqu span ").append("<img>")
            var icon=getIcon(data.data.forecast[0].type)
            $(".diqu span ").find("img").attr("src","images/"+icon);
        });
    }
        $("#mySelect").on("change",function(){
            run3()
        })

    $("div.popup").find("a").attr("href","che.html");

    $("div.banner_l").find("a").attr("href","che.html");


});








