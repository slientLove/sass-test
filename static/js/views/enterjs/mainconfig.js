// 配置js文件
require.config({
	paths:{
		jquery:"../../libs/jquery",
        swiper:"../../plugs/swiper.min",
        loadImg: "../js/load"
	}
})

// 引入js文件
require(['jquery','swiper','loadImg'],function(){
	var topSlider=new Swiper('#topSlider', {
        slidesPerView: 1,
        centeredSlides: true,
        autoplay: 3000,
        loop: true,
        autoplayDisableOnInteraction: true
    });
    // 实现图片懒加载 
    let load = loadImg.load;
    load();
    let getDatas = loadImg.getData;
    // getDatas();
});