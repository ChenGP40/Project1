<?php

function createUser($conn, $fName, $lName, $email) {
        $sql = "INSERT INTO users (usersfName, userslName, usersEmail) VALUES (?, ?, ?);";
        $stmt = mysqli_stmt_init($conn);
        if (!mysqli_stmt_prepare($stmt, $sql)) {
            header("location: ../pca-pam50.html#downloadPage?error=stmtFailed");
            exit();
        }
    
        mysqli_stmt_bind_param($stmt, "sss", $fName, $lName, $email);
        mysqli_stmt_execute($stmt);
        mysqli_stmt_close($stmt);
        header("location: download.php");
        exit();
    }