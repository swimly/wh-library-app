/**
 * Created by 97974 on 2016/6/1.
 */
$(function(){
	/*控制音乐播放*/
	var obj=document.getElementById("music")
	if(obj){
	    $(".musicBtn").click(function(e){
	        e.stopPropagation();
	        if(obj.paused){
	            obj.play();
	            $(this).addClass("active")
	        }else{
	            obj.pause();
	            $(this).removeClass("active");
	        }
	    })
	    var musicTimer=setInterval(function(){
	        if(obj.ended){
	            $(".musicBtn").removeClass("active");
	        }
	    },10)
	}
    init();
    TouchSlide({
        slideCell:"#focus",
        titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
        mainCell:".bd ul",
        effect:"left",
        autoPlay:true,//自动播放
        autoPage:true, //自动分页
        switchLoad:"_src" //切换加载，真实图片路径为"_src"
    });
    TouchSlide({
        slideCell:"#wel",
        titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
        mainCell:".bd ul",
        effect:"left",
        autoPlay:false,//自动播放
        autoPage:true, //自动分页
        switchLoad:"_src" //切换加载，真实图片路径为"_src"
    });
    TouchSlide({
        slideCell:"#index",
        titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
        mainCell:".bd ul",
        effect:"left",
        autoPlay:false,//自动播放
        autoPage:true, //自动分页
        switchLoad:"_src" //切换加载，真实图片路径为"_src"
    });
    function init(){
        var hd=$(".tabBox .hd").find("ul");
        var wid=0;
        var wArr=[];
        for(var i=0;i<hd.children().length;i++){
            wid+=hd.children().eq(i).width();
        }
        hd.width(wid);
        TouchSlide({
            slideCell:"#leftTabBox",
            startFun:function(idx,total){
                var left=parseInt(hd.children().eq(idx).offset().left);
                var wid=parseInt(hd.children().eq(idx).width())
                var view=$(window).width();
                var ol=parseInt(hd.css("margin-left"));
                if(left+wid>view){
                    var move=ol-left+view-wid;
                    hd.css({marginLeft:move});
                }else if(left<0){
                    var cl=ol-left;
                    hd.css({marginLeft:cl});
                }
            }
        });
    }
    var target = document.getElementById("page");
    var width=$(window).width();
    /*touch.on('.page-content', 'touchstart', function(ev){
        ev.preventDefault();
    });

    var target = document.getElementById("page");
    var btn=$("#page").find(".menu")
    var dx, dy,sx,sy;
    var width=$(window).width();
    touch.on('#page', 'drag', function(ev){
        dx = dx || 0;
        dy = dy || 0;
        sx = ev.x;
        sy = ev.y;
        var offx = dx + ev.x + "px";
        var offy = dy + ev.y + "px";
        if(parseInt(offx)<width*0.7 && parseInt(offx)>=0){
            target.style.webkitTransform = "translate3d(" + offx + ",0,0)";
        }
    });

    touch.on('#page', 'dragend', function(ev){
        dx = ev.distanceX;
        if(parseInt(dx)<width*0.35){
            target.style.webkitTransform = "translate3d(0,0,0)";
            btn.removeClass("on")
        }else{
            target.style.webkitTransform = "translate3d("+(width*0.7)+"px"+",0,0)";
            btn.addClass("on")
        }
    });*/
    $(".menu").bind("click",function(){
        if($(this).hasClass("on")){
            target.style.webkitTransform = "translate3d(0,0,0)";
            $(this).removeClass("on");
        }else{
            target.style.webkitTransform = "translate3d("+(width*0.7)+"px"+",0,0)";
            $(this).addClass("on");
        }
    })
    $(".home-grid").find("td").click(function(){
        var link=$(this).attr("link");
        if(link){
            location.href=$(this).attr("link")
        }else{
            /*alert("模块正在开发中……")*/
        }
    })
})