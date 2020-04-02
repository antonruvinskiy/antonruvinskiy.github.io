<?php
session_start();
    require './PHPMailer-master/src/Exception.php';
    require './PHPMailer-master/src/PHPMailer.php';
    require './PHPMailer-master/src/SMTP.php';
    
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    if(count($_POST) > 0) {
        $mail = new PHPMailer(true);  
        $name = $_POST['name'];
        $phone = $_POST['phone'];
        /* $email = $_POST['email'];
        $subject = $_POST['subject'];
        $content = $_POST['content']; */
    }
    try {
        //Server settings
        $mail->isSMTP(); 
        $mail->CharSet = 'UTF-8';                                // Set mailer to use SMTP
        $mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
        $mail->SMTPAuth = true;                               // Enable SMTP authentication
        $mail->Username = 'a.ruvinskiy@juniorcode.ru';                 // SMTP username
        $mail->Password = 'jc1234567';                           // SMTP password
        $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 465;                                    // TCP port to connect to
    
        //Recipients
        $mail->setFrom('a.ruvinskiy@juniorcode.ru', 'Заявка с сайта');
        $mail->addAddress('a.ruvinskiy@juniorcode.ru', 'Заявка с сайта');     // Add a recipient
/*         $mail->addCC('cc@example.com');
        $mail->addBCC('bcc@example.com'); */
    
        //Content
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = 'Заявка на обратную связь';
        $mail->Body    = "<b>Имя клиента</b> $name <br> <b>Телефон клиента</b> $phone" ;
        /* <br> <b>Тема</b> $subject  <br> <b>Сообщение</b> $content"; */
        /* $mail->AltBody = 'This is the body in plain text for non-HTML mail clients'; */
    if($mail->send()) {
        $_SESSION['msg'] = 'Сообщение отправлено';
        header("Location: ../../../index.html");
    }
       /*  echo 'Message has been sent'; */
    } catch (Exception $e) {
       /*  echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo; */
    }
?>