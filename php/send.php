<?php
$fio = $_POST['fio'];
$email = $_POST['email'];
$text = $_POST['message']
$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);
$text =  htmlspecialchars($text);
$fio = urldecode($fio);
$email = urldecode($email);
$text = urldecode($text);
$fio = trim($fio);
$text = trim($text);
$email = trim($email);
if (mail("nikkazakov909@gmail.com", "Заявка с сайта", "От: ".$fio.". E-mail/телефон: ".$email., "Сообщение: ".$text."From: info@balansavto.ru \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>

