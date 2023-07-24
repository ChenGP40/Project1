<?php

$serverName = "sql312.infinityfree.com";
$dBUsername = "if0_34678558";
$dBPassword = "Intern2023";
$dBName = "if0_34678558_downloads";

$conn = mysqli_connect($serverName, $dBUsername, $dBPassword, $dBName);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}