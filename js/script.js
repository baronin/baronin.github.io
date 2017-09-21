var link = document.querySelector(".login");
var popup = document.querySelector(".modal_content");
var close = document.querySelector(".modal_content_close");

var form = popup.querySelector("form");/* ищем форму в попапе*/
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");

var storage = localStorage.getItem("login");



 /* LOG IN */
link.addEventListener("click", function(event){
  event.preventDefault();/* функция евент - отменить действие по умалчанию */
  popup.classList.add("modal_content_show"); /* использывать через свойство classList которая добавит класс.
  Без точки класс, это только название класса*/
  if (storage) {
    login.value = storage;
    password.focus();
  }
  else {
    login.focus();
  }
});

close.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.remove("modal_content_show");/* использывать через свойство classList которая удалит класс.*/
  popup.classList.remove("modal_error");
});

/* END LOG IN */

/* FORM */
form.addEventListener("submit",function(event){
  if (!login.value || !password.value){
  event.preventDefault();
  popup.classList.add("modal_error");
  /*console.log("Нужно ввести логин и пароль");
  console.log(password.value); получмить знаение поля в консоле */
  }
  else {
    localStorage.getItem("login", login.value);
  }
});
/* END FORM */

/* Esc */
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27){
    if (popup.classList.contains("modal_content_show")) {
      popup.classList.remove("modal_content_show");/*Даже если поп ап не откртыт мы удаляем этот класс*/
      }
  }
});
/* END Esc */
