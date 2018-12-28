function byId(id) {
	return typeof(id) === "string"?document.getElementById(id):id;
}

var index = 0,
	timer = null,
	pics = byId("banner").getElementsByTagName('div'),
	dots = byId("dots").getElementsByTagName('li'),
	prev = byId("prev"),
	next = byId("next"),
	len = pics.length;
function slideImg(){
	var main = byId("main");
	main.onmouseover = function(){
		/*鼠标经过，清除定时器*/
		if(timer) clearInterval(timer);
	}
	
	/*鼠标在原来的地方离开后，触发一个事件*/
	main.onmouseout = function(){
		/*鼠标离开，定时器自动轮播图片*/
		timer = setInterval(function(){
			index++;
			if(index >=len){
				index = 0;
			}
			changeImg();
		},1500);
	}
	/*自动调用鼠标离开的方法，不用鼠标离开进入网页就能自动轮播*/
	main.onmouseout();
	/*点击切换图片*/
	for (var  d= 0;  d< len; d++) {
		/*给所有的li添加一个id的属性，值为d，作为当前li的索引*/
		dots[d].id = d;  //这里d就可以给每个id索引了
		dots[d].onclick = function(){  //产生闭包，只对最后一个值产生效果，所以需要上一个步骤
			index = this.id ;
			changeImg();
	} 
	}
	//下一张
	next.onclick = function(){
		index++;
		if (index >= len) index=0;
		/*console.log(index);*/
		changeImg();
	}
	//上一张
	prev.onclick = function(){
		index--;
		if (index < 0) index = len-1;
		console.log(index);
		changeImg();
	}

}


/*改变图片*/
function changeImg(){
	//遍历banner下的多个div 将其隐藏 ；遍历dots下所有的li，将ul其隐藏，将li清除
	for (var i = 0; i < len; i++) {
			pics[i].style.display = "none";
			dots[i].className = "";
}
	//根据index索引，找到当前div，将其显示；
		pics[index].style.display = "block";
		dots[index].className = "active";
}
slideImg();

