window.onload = function(){
	$(window).on('resize',setImg).trigger('resize');
	tooltips();
	carsouelMove();
}

/*轮播图片响应式，动态获取轮播图片*/
function setImg(){
  var windowWidth = $(window).width();
  var isSmallSreen = windowWidth < 768;
  $('#main-ad .carousel-inner .item').each(function(i,item){
  	var $item = $(item);
  	// console.log($item.data('image-xs'));
  	// console.log($item.data('image-lg'));
  	var imgSrc = isSmallSreen ? $item.data('image-xs') : $item.data('image-lg');
  	$item.css('backgroundImage','url("'+imgSrc+'")');
  	if(isSmallSreen){
  	  $item.html('<img src="'+imgSrc+'">');
  	}else{
  		$item.empty();
  	}
  });
}

/*初始化tooltips工具提示*/
function tooltips(){
	$('[data-toggle="tooltip"]').tooltip();
}

/*手指在轮播滑动，轮播左右显示*/
function carsouelMove(){
	var $carousel = $('#main-ad');
	var startX;
	var endX;
	$carousel.on('touchstart',function(e){
		startX = e.originalEvent.changedTouches[0].clientX;
		// console.log(startX);
	});
	$carousel.on('touchmove',function(e){
		endX = e.originalEvent.changedTouches[0].clientX;
		// console.log(endX);
	});
	$carousel.on('touchend',function(e){
		var distance = Math.abs(startX-endX);
		if(distance>50){
			$carousel.carousel(startX>endX ? 'next' : 'prev');
		}
	});
}