
//logo animation
function animateLogo() {
	TweenMax.fromTo("#react-logo",3, {
		css: { y: "-15px" }
	},{
		css: { y: "15px" } ,
		repeat: -1,
		yoyo: true,
		ease: Power1.easeInOut,
	});
}

//robot animation
function animateRobot() {
	var t = new TimelineMax({
		repeat: -1
	});
	t.to( "#robot" , 0.2, { rotation: "-55deg" } )
	.to("#robot" , 0.2, { rotation:"-35deg" } )
	.to( "#robot" , 0.2, { rotation:"-45deg" } )
    .to( "#robot" , 1, { rotation:"-45deg" } ) ;
}


//page slide
function updateSliderControl() {
  // 获得所有的 slider 链接
  var links = document.querySelectorAll("#slider-control a")

  for(var i = 0; i < links.length; i++) {
    var link = links[i];

    // 获取被链接指向的部分
    var section = document.querySelectorAll(".section") [ i ];
    var sectiontTop = section.offsetTop ;
	var sectionBottom = section.offsetTop + window.innerHeight ;


    // 检查 window.scrollY 是否在这部分中
    if(window.scrollY >= sectiontTop && window.scrollY < sectionBottom) {
      link.className = "active";
    } else {
      link.className = "";
    }
  }
}

// 使用 onscroll 回调函数来更新 slider
window.onscroll = function() {
  
  updateSliderControl();
}

// 当页面加载完毕时开始动画
window.onload = function() {
  animateLogo();
  animateRobot();
  updateSliderControl();
};
