<?php

if (isset($_POST["submit"])) {

    $fName = $_POST["firstName"];
    $lName = $_POST["lastName"];
    $email = $_POST["email"];

    require_once 'dbhInc.php';
    require_once 'functionsInc.php';

    createUser($conn, $fName, $lName, $email);
}

else {
    header("location: ../pca-pam50.html#downloadPage");
    exit();
}