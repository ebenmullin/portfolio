<?php
    $name = $_POST["name"];
    $visitor_email = $_POST["email"];
    $message = $_POST["message"];

    $email_from = "eb_miner05@gmail.com";

    $subject = "New Form Submission"

    $email_body = "You have a new form submission from $name.\n".
    "Email: $visitor_email.\n".
    "Message: $message.\n";

    $to = "ebminer05@gmail.com";
    $headers = "From: $email_from \r\n";
    $headers .= "Replay-To $visitor_email \r\n";

    mail($to, $subject, $email_body, $headers);
    header("Location: index.html");

?>