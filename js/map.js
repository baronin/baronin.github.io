var mapOpen = document.querySelector(".js_open_map");
var mapPopup = document.querySelector(".modal_content_map");
var mapClose = document.querySelector(".modal_content_close");

/* MAP */
mapOpen.addEventListener("click", function(event){
  event.preventDefault();
  mapPopup.classList.add("modal_content_show"); /* Без точки класс, это только название класса*/
});

mapPopup.addEventListener("click", function(event){
  event.preventDefault();
  mapPopup.classList.remove("modal_content_show");/* использывать через свойство classList которая удалит класс.*/
  mapPopup.classList.remove("modal_error");
  console.log("close");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27){
    if (mapPopup.classList.contains("modal_content_show")) {
      mapPopup.classList.remove("modal_content_show");/*Даже если поп ап не откртыт мы удаляем этот класс*/
      }
  }
});
