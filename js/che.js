/**
 * Created by hxsd on 2017/1/2.
 */
$(function(){
    var url="data/tsconfig.json";
    $.getJSON(url,function(data){
        $("ul.ul1").each(function(index){
            for(var i=0;i<data[index].ge.length;i++ ){
                var $li=$("<li>");
                $li.append("<img>");
                $li.append("</p>");
                $li.append("<span></span>");
                $li.find("img").attr("src",data[index].ge[i].imagsrc)
                $li.find("p").html(data[index].ge[i].title)
                $li.find("span").html(data[index].ge[i].price)
                $(this).append($li);
            }
       })
    })
})

