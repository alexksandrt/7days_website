<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);

	//От кого письмо
	$mail->setFrom('info@sevendaystudio.com', 'New Application from Sevendaystudio.com');
	//Кому отправить
	$mail->addAddress('7days.studio.nz@gmail.com');
	//Тема письма
	$mail->Subject = 'New Application from Sevendaystudio.com';

	//Тело письма
	
	if(trim(!empty($_POST['name']))){
		$body.='Name: '.$_POST['name'].;
	}
	if(trim(!empty($_POST['tel']))){
		$body.='Phone Number: '.$_POST['tel'].;
	}
	

	$mail->Body = $body;

	//Отправляем
	if (!$mail->send()) {
		$message = 'Error';
	} else {
		$message = 'Sent!';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>