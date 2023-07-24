<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PCA-PAM50</title>
    <meta name="description" content="">
    <meta name="author" content="">
    <meta name="keywords" content="">
    <!-- <link rel="icon" type="image/x-icon" href="images/logo.png"> -->
    <link rel="stylesheet" href="css/main.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap" rel="stylesheet">
</head>

<body>

<header>
<nav>
    <div class="container">
        <a href="index.html" class="navbarHeader" title="Home">Tools Portal</a>
        <ul class="navigation">
            <li>Available Tools:</li>
            <li class="selected">PCA-PAM50</li>
        </ul>  
	</div>
</nav>
</header>

<main>
<h1>PCA-PAM50</h1>
<section class="toolInfo">
    <div class="sideContainer">
        <ul class="sideNav">
            <li id="descriptionTrigger" class="sideNavLinks">What is PCA-PAM50?</li>
            <li id="instructionsTrigger" class="sideNavLinks">Instructions</li>
            <li id="faqTrigger" class="sideNavLinks">Frequently Asked Questions</li>
            <li id="downloadTrigger" class="sideNavLinks">Download</li>
            <li id="newsTrigger" class="sideNavLinks">News and Updates</li>
        </ul>
    </div>
    <div class="info">
        <div id="download">
            <h2>Download</h2>
            <?php

            if (isset($_POST["firstName"], $_POST["lastName"], $_POST["email"])) {

                echo "<p class='center'> Thank you for downloading PCA-PAM50! </p>";
                echo "<a href='PCA-PAM50.zip' class='button' download>"

            }

            else {
                header("location: ../pca-pam50.html#downloadPage");
                exit();
            }
            ?>
        </div>
    </div>
</section>
</main>

<footer>
</footer>

<script src="js/javascript.js"></script>
</body>
</html>