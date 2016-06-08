$(function(){
	var col=$("#seat").children().length;
	var colWidth=$("#seat").children().eq(0).width();
	var colHeight=$("#seat").children().eq(0).height();
	var wid=col*colWidth
	$("#seat").width(wid);
	var thumb=$("#seat").children().clone().appendTo("#thumb");
	var viewBl=$(".seat-content").height()/$(".seat-content").width();
	var thumbBl=$(".seat-content").height()/$(".seat-wrap").height();
	var view=$('<div class="seat-view" id="viewHandle"></div>').appendTo("#thumb");
	view.height($("#thumb").children().eq(0).height()*thumbBl)
	.width(view.height()*viewBl)
	console.log(thumbBl)
	
	touch.on('#seat', 'touchstart', function(ev){
		ev.preventDefault();
	});

	var target = document.getElementById("seat");
	var dx, dy;

	/*touch.on('#seat', 'drag', function(ev){
		dx = dx || 0;
		dy = dy || 0;
		var offx = dx + ev.x + "px";
		var offy = dy + ev.y + "px";
		target.style.webkitTransform = "translate3d(" + offx + "," + offy + ",0)";
		var moveXbli=parseInt(offx)/wid;
		var moveYbli=parseInt(offy)/colHeight;
		var thumbWid=$("#thumb").width();
		var thumbHt=$("#thumb").height();
		var viewHandle=document.getElementById("viewHandle");
		view.css({left:-moveXbli*thumbWid,top:-moveYbli*thumbHt})
		console.log(moveXbli)
	});

	touch.on('#seat', 'dragend', function(ev){
		dx += ev.x;
		dy += ev.y;
	});*/
	
	var initialScale = 1;
	var currentScale;

	touch.on('#seat', 'pinchend', function(ev){
		currentScale = ev.scale - 1;
		currentScale = initialScale + currentScale;
		currentScale = currentScale > 2 ? 2 : currentScale;
		currentScale = currentScale < 0.6 ? 0.6 : currentScale;
		target.style.webkitTransform = 'scale(' + currentScale + ')';
		log("当前缩放比例为:" + currentScale + ".");
	});

	touch.on('#seat', 'pinchend', function(ev){
		initialScale = currentScale;
	});
})
