function byId(id){
	return typeof(id) ==="string"?document.getElementById(id):id;
}
var index = 0;
var pics = byId("banner").getElementsByTagName('div');
var len = pics.length;
var timer = null;
var dots = byId("dots").getElementsByTagName("li");
var next = byId("next");
var prev = byId("prev");
function slideImg(){
	var main = byId("main");
	//鼠标经过事件，清除定时器
	main.onmouseover = function(){
		if(timer) clearInterval(timer);
		
	}
	//鼠标离开事件,定时器自动轮播图片
	main.onmouseout = function(){

		timer = setInterval(function(){
			index++;
			if (index >= len) index = 0;
			changeImg();
		},2000);
	}
	main.onmouseout();
	//点击切换图片
	for (var  d= 0;  d< len; d++) {
		/*给所有的li添加一个id的属性，值为d，作为当前li的索引*/
		dots[d].setAttribute("id","d");  //这里d就可以给每个id索引了
		dots[d].onclick = function(){  //产生闭包，只对最后一个值产生效果，所以需要上一个步骤
			index = this.id ;
			changeImg();
	} 
	}
	//下一张
	next.onclick = function(){
		index++;
		if(index >= len) index = 0;
		console.log(index);
		changeImg();
	}
	prev.onclick = function(){
		index--;
		if(index < 0)  index = len-1;
		console.log(index);
		changeImg();
	}
}
	
	

//自动切换图片
function changeImg(){
	for (var i = 0; i <len; i++) {
		//遍历banner下的所有的div，将其隐藏，索引到index就显示
		pics[i].style.display = "none";
		//遍历dot下的所有的li 将其隐藏，索引到的显示
		dots[i].className = "";
	};
	pics[index].style.display = "block";
	dots[index].className = "active";
}
slideImg();