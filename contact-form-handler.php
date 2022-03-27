<?php
    $name = $_POST["name"];
    $visitor_email = $_POST["email"];
    $message = $_POST["message"];

    $email_from = "eb_miner05@gmail.com";

    $email_subject = "New Form Submission"

    $email_body = "You have a new form submission from $name.\n".
    "Email: $visitor_email.\n".
    "Message: $message.\n";

    $to = "";
    $headers = "From: $email_from \r\n";
    $headers .= "Replay-To $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);
    header("Location: index.html");

?>