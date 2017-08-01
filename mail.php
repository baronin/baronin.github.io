<?php
/**
 * Created by PhpStorm.
 * User: JavaRush
 * Date: 25.03.2017
 * Time: 20:00
 */
$recepient = "baronin.yaroslav@gmail.com";
$sitename = "Yaroslav Baronin";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$text = trim($_POST["text"]);
$message = "Имя: $name \nemail: $email \nТекст: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
