/**
 * Created by 97974 on 2016/6/1.
 */
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