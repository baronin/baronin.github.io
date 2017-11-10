var  js2slideshow = {};
js2slideshow = document.getElementById("js2slideshow");

js2slideshow.init = function(timeSpeed,timeWait){

 var curImg, curImgLeft, nextImgLeft, flag, i;

//запоминаем скорость (время каждого тика)
this.timeSpeed = timeSpeed;
//запоминаем время задержки между сменой слайда
this.timeWait = timeWait;

//запоминаем сами картинки
this.images = this.getElementsByTagName("img");

//смотрим высоту по размерам первой картинки
this.width = this.images[0].width;
this.height = this.images[0].height;

//задаем размер нашему слайдеру по высоте первой картинки
this.style.width = this.width+"px";
this.style.height = this.height +"px";

//запоминаем количество картинок
this.length = this.images.length;

//начальные координаты картинок
for(i = 0; i < this.images.length; i++){
 this.images[i].style.left = this.width * i + "px";
}

//метод для таймера
this.timer = function (){


 count = 0;
 
 //запускаем функцию анимации
 animation()
 

 
 //анимируем наши картинки как большую ленту
 //при это каждую картинку, у которой CSS-свойство
 //left стало меньше -ширины картинки, помещаем в правый край ленты
function animation(){
 count--;
 flag = false;
 
 for(i = 0; i < js2slideshow.images.length; i++){
   curImg =  js2slideshow.images[i];
   curImgLeft = parseInt(js2slideshow.images[i].style.left);
   nextImgLeft = curImgLeft - 1 ;
   
   //Если зашли за границу, сразу перекидываем картинку
   //на правый край ленты и обнуляем счетчик
    if(nextImgLeft <= -js2slideshow.width){
	  count = 0;
	  curImg.style.left = (js2slideshow.images.length-1)*js2slideshow.width + "px";
	  //alert(curImg.style.left);
	  timeSpeed = js2slideshow.timeWait ;
	  flag = true;
  }
   else {
   //Иначе продолжаем двигаться. 
   curImg.style.left = nextImgLeft + "px";
   
   //Если перескока картинки вправо не было, то без задержки
   if (!flag) timeSpeed = js2slideshow.timeSpeed;
   }
 }

 
 if (count > -js2slideshow.width) setTimeout(arguments.callee,timeSpeed)
}
}

setTimeout(this.timer, 0)}


//время на один пиксель движения, задержка между остановками картинок в кадре
js2slideshow.init(2,2000);

