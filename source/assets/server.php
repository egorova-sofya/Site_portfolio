<?php
$email = $_POST['email'];
$message = $_POST['message'];
$error = '';
$subject = "=?utf-8?B?".base64_encode('Тестовое сообщение')."?=";
$headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html;charset=utf-8\r\n";
mail('sofya1212@vk.com', $subject, $message, $headers);

// переадресация
header('Location: /');

?>
