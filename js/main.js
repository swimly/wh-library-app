/**
 * Created by 97974 on 2016/6/1.
 */
init();
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