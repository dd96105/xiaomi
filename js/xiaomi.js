$(function(){
	var width=$("body").width();
	var sUl=$(".section").children("ul");
	var sOl=$(".section").children("ol");
	var sLi=$(sUl).children("li");
	sUl.width(width*(sLi.length+1));
	sLi.width(width);
	var index =0;
	for (var i = 0; i < sLi.length; i++) {
		var olLi=$("<li></li>");
		sOl.append(olLi);
	}
	sUl.children("li:eq(0)").clone().appendTo(sUl);
	sUl.children("li:eq(3)").clone().prependTo(sUl);
	sUl.css("transform","translateX("+(-width)+"px)");
	var sTime = setInterval(function() {
		index++;
		sUl.css("transition-duration", "1s");
		sUl.css("transform","translateX("+(-index*width)+"px)");
		sOl.children("li").eq(index-1).css("background-color","white").siblings("li").css("background-color","rgba(255,255,255,0.3)")
	}, 3000);
	
	sUl[0].addEventListener('webkitTransitionEnd', function() {
		if (index > sLi.length-1) {
			sUl.css("transition-duration", "0s");
			
			index = 0;
		}
		sUl.css("transform","translateX("+(-index*width)+"px)");
	});
	var startX = 0;
    var moveX = 0;
    var endX = 0;
    var n=0;
	sUl.on("touchstart",function(event){
		clearInterval(sTime);
		sUl.css("transition-duration", "0s");
		var touch = event.originalEvent.changedTouches[0];
        startX = touch.clientX;
	})
	sUl.on("touchmove",function(event){
        endX = event.originalEvent.changedTouches[0].clientX;
		moveX =endX - startX;
		sUl.css("transform","translateX("+(-index*width+moveX)+"px)");
		sOl.children("li").eq(index-1).css("background-color","white").siblings("li").css("background-color","rgba(255,255,255,0.3)")
	})
	sUl.on("touchend",function(){
		if(Math.abs(moveX)>width/3){
			if (moveX>0) {
				index--;
			} else{
				index++;
			}
			sUl.css("transition-duration", "1s");
			sUl.css("transform","translateX("+(-index*width)+"px)");
			sOl.children("li").eq(index-1).css("background-color","white").siblings("li").css("background-color","rgba(255,255,255,0.3)")
		}else{
			sUl.css("transition-duration", "1s");
			sUl.css("transform","translateX("+(-index*width)+"px)");
			sOl.children("li").eq(index-1).css("background-color","white").siblings("li").css("background-color","rgba(255,255,255,0.3)")
		}
		
		sTime = setInterval(function() {
			index++;
			sUl.css("transition-duration", "1s");
			sUl.css("transform","translateX("+(-index*width)+"px)");
			sOl.children("li").eq(index-1).css("background-color","white").siblings("li").css("background-color","rgba(255,255,255,0.3)")
		}, 3000);
	});
	
	$(".nav").children("li").on("click",function(){
		$(this).addClass("bdr").siblings("li").removeClass("bdr");
	})
	$("footer").children("div").on("click",function(){
		$(this).addClass("color").siblings("div").removeClass("color");
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})