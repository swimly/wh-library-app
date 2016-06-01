/**
 * Created by 97974 on 2016/6/1.
 */
init();
function init(){
    var hd=$(".tabBox .hd").find("ul");
    console.log(hd.children().length)
    var wid=0;
    for(var i=0;i<hd.children().length;i++){
        wid+=hd.children().eq(i).width();
    }
    console.log(wid)
    hd.width(wid);
}
TouchSlide({ slideCell:"#leftTabBox",endFun:function(){
    console.log(0)
}});