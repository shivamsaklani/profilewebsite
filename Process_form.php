<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $message = $_POST["message"];
    $to = "shivasaklani1@gmail.com";
    $subject = "Contact Form Submission";
    $headers = "From: " . $name . "\r\n";
    
    mail($to, $subject, $message, $headers);
}
?>
