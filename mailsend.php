<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["your-name"];
    $email = $_POST["email"];
    $business = $_POST["your-business"];
    $message = $_POST["your-business"];

    $to = "atmiyapatelleo9@gmail.com";  
    $subject = "Harmony Production test email";
    $headers = "From: $email";

    $mailBody = "Full Name: $name\n";
    $mailBody .= "Email: $email\n";
    $mailBody .= "Business: $business\n";
    $mailBody .= "Message $message\n";

    if (mail($to, $subject, $mailBody, $headers)) {
		echo "Email sent successfully!";
	} else {
		echo "Error sending email.";
	}
}
?>