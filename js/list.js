/**
 * Created by Administrator on 2017/1/1 0001.
 */
$(function(){

//产品选择-------------------------------
    function run4(obj){
        obj.each(function(index){
            $(this).on("click",function(){
                obj.eq(index).addClass("ac1").siblings().removeClass()
            })
        });
    }
var d1=$("#dd1 a")
    var d2=$("#dd2 a")
    var d3=$("#dd3 a")
    var d4=$("#dd4 a")
    var d5=$("#dd5 a")
    var d6=$("#dd6 a")
    var d7=$("#dd7 a")
    run4(d1);run4(d2);run4(d3);run4(d4);run4(d5);run4(d6);run4(d7);
//产品计数---------------------------
function run5(){
    var i=1;
    $(".math").find(".btn1").on("click",function(){
        i++
        $("#num").html(i)
    })
    $(".math").find(".btn2").on("click",function(){
        i--
        if(i<=0) i=0;
        $("#num").html(i)
    })
}
 run5()
    //放大镜
    $(".jqzoom").imagezoom();

    $("#thumblist li a").click(function(){
        $(this).parents("li").addClass("tb-selected").siblings().removeClass("tb-selected");
        $(".jqzoom").attr('src',$(this).find("img").attr("mid"));
        $(".jqzoom").attr('rel',$(this).find("img").attr("big"));
    });
});

