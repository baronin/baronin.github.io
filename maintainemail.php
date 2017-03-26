<?php
$to = "info@evakuator911.com";
$subject = "EVAKUATOR911.com форма с сайта";
$message = "Ф.И.О.: ".$_POST["name"]."<br><br>Email: ".$_POST["email"]."<br><br>Телефон: ".$_POST["phone"]."<br><br>Сообщение:<br>".$_POST["msg"];
$from = $_POST["email"];
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=utf8" . "\r\n";
$headers .= 'From: <'.$_POST["email"].'>' . "\r\n";
mail($to,$subject,$message,$headers);
echo "Спасибо. Ваше сообщение отправлено!";
?>
