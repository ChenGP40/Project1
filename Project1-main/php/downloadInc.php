<?php

if (isset($_POST["submitInfo"])) {

    $fName = $_POST["firstName"];
    $lName = $_POST["lastName"];
    $email = $_POST["email"];

    require_once 'dbhInc.php';
    require_once 'functionsInc.php';

    createUser($conn, $fName, $lName, $email);
    
    require_once 'download.php';
}

else {
    header("location: ../pca-pam50.html#downloadPage");
    exit();
}